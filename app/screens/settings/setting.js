import React from 'react';
import { View, Text, Platform } from 'react-native';
import { FlexContainer } from '../../utils/app-container';
import { GreyCard } from '../../components/cards/grey-card';
import { Spacing } from '../../theme';
import { styles } from './style';
import { AccountIcon } from '../../icons/account';
import { TermsIcon } from '../../icons/terms';
import { LogoutIcon } from '../../icons/logout';
import { HelpCenterIcon } from '../../icons/help-center';
import { ReportProblemIcon } from '../../icons/report-problem';
import { PolicyIcon } from '../../icons/policy';
import { Heading } from '../../components/heading/heading';
import { HeaderBar } from '../../components/header/header';
import AuthService, { Subject } from '../../services/auth';
import { heightPercentageToDP } from 'react-native-responsive-screen';

export const Setting = ({ navigation }) => {
    return (
        <FlexContainer style={styles.container}>
            <HeaderBar
                backButton
                leftClick={() => navigation.goBack()} />

            <View style={styles.mainContainer}>
                <Heading
                headingStyle={{marginTop : Platform.OS==='android' ? heightPercentageToDP('4%') : heightPercentageToDP('10%')}}
                    title='Settings'
                />
                <View style={styles.rowContainer}>
                    <View style={[styles.columnContainer, { alignItems: 'flex-start' }]}>
                        <GreyCard
                            title={`Manage my\nAccount`}
                            icon={<AccountIcon />}
                            height={Spacing.Card_dimen.LARGE} />

                        <GreyCard
                            title={`Terms of\nUse`}
                            icon={<TermsIcon />}
                            height={Spacing.Card_dimen.LARGE}
                            handleSubmit={() => {
                                navigation.navigate('TermsOfUse');
                            }}
                        />

                        <GreyCard
                            title={`Logout`}
                            icon={<LogoutIcon />}
                            height={Spacing.Card_dimen.MEDIUM}
                            handleSubmit={() => {
                                AuthService.logout().subscribe(
                                    data => { },
                                    error => { });
                                Subject.next(true);
                            }} />
                    </View>
                    <View style={[styles.columnContainer, { alignItems: 'flex-end' }]}>
                        <GreyCard
                            title={`Help Center`}
                            icon={<HelpCenterIcon />}
                            height={Spacing.Card_dimen.MEDIUM} />

                        <GreyCard
                            title={`Report a\nProblem`}
                            icon={<ReportProblemIcon />}
                            height={Spacing.Card_dimen.LARGE} />

                        <GreyCard
                            title={`Privacy Policy`}
                            icon={<PolicyIcon />}
                            height={Spacing.Card_dimen.LARGE}
                            handleSubmit={() => {
                                navigation.navigate('PrivacyPolicy');
                            }} />
                    </View>
                </View>
            </View>
        </FlexContainer>
    );

}

export default Setting;