import React, { useEffect, useState } from 'react';
import { ScrollView, Text, View, TouchableOpacity } from 'react-native';
import IconButton from '../../components/buttons/icon-button';
import ThemeButton from '../../components/buttons/theme-button';
import { HeaderBar } from '../../components/header/header';
import { FullScreenModal } from '../../components/modals/full-screen-modal/full-screen-modal';
import { EditIcon } from '../../icons/edit';
import { OrderIcon } from '../../icons/order';
import { ProfileBg } from '../../icons/profile-bg';
import { RightArrowIcon } from '../../icons/right-arrow';
import { SettingIcon } from '../../icons/setting';
import { StylePreferIcon } from '../../icons/style-prefer';
import { StylistIcon } from '../../icons/stylist';
import AuthService, { userRoleSubject } from '../../services/auth';
import { Colors } from '../../theme';
import { AppConstants } from '../../utils/app-constants';
import { FlexContainer, SafeAreaContainer } from '../../utils/app-container';
import { DEFAULT_ERROR_CALLBACK, getFirstAndLastCharacterInString, SHOW_INFO_NOTIFICATION, widthIntoDP, heightIntoDP } from '../../utils/app-util';
import { styles } from './style';
import { FeedbackIcon } from '../../icons/feedback';
import { MySubscriptionIcon } from '../../icons/mysubscription';
import { InvoiceIcon } from '../../icons/invoices';
import FastImage from 'react-native-fast-image';
import { Loader } from '../../components/loader/loader';

export const ExpertProfile = ({ navigation }) => {
    const [isToggle, setIsToggle] = useState(false);
    const [isUserStylist, setUserStylist] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [userName, setUserName] = useState('');
    const [userData, setUserData] = useState(null);

    const onSubscriptionClick = () => {
        SHOW_INFO_NOTIFICATION('Subscription');
    };

    const onInvoicesClick = () => {
        SHOW_INFO_NOTIFICATION('Invoices');
    };

    const onFeedbackClick = () => {
        SHOW_INFO_NOTIFICATION('Feedback');
    };

    const options = [
        {
            label: 'My Subscription',
            icon: <MySubscriptionIcon />,
            onPress: onSubscriptionClick,
        },
        {
            label: 'Invoices',
            icon: <InvoiceIcon />,
            onPress: onInvoicesClick,
        },
        {
            label: 'Feedback',
            icon: <FeedbackIcon />,
            onPress: onFeedbackClick,
        }
    ];


    const switchToCustomerAccount = () => {
        AuthService.switchAccount(AppConstants.ROLE.CONSUMER).subscribe(
            () => userRoleSubject.next(true),
            error => DEFAULT_ERROR_CALLBACK(error)
        );
    }

    useEffect(() => {
        const fetchData = async () => {
            const userData = await AuthService.getUser();
            setUserData(userData);
            setUserStylist(userData.isAlsoAStylist);
            setIsLoading(false);
            setUserName(userData.name);
        };
        fetchData();
    }, [userData, userName]);

    return (
        <SafeAreaContainer>
            <FlexContainer style={{ backgroundColor: Colors.BACKGROUND_GREY }}>
                <HeaderBar
                    containerStyle={{ top: 0 }}
                    backButton
                    leftClick={() => {
                        navigation.goBack();
                    }}
                    rightIcon={<SettingIcon />}
                    rightClick={() => {
                        navigation.navigate('Setting');
                    }}
                />
                <View style={styles.profileContainer}>
                    <ProfileBg />
                </View>
                <View style={styles.titleContainer}>
                    <View style={styles.profileCardContainer}>
                        {isLoading ?
                            <Loader size={20} color={Colors.PRIMARY} /> :
                            userData.stylistInfo && userData.stylistInfo.profilePicUrl ?
                                <FastImage
                                    style={{
                                        width: widthIntoDP(105),
                                        height: heightIntoDP(105),
                                        borderRadius: 22,
                                        aspectRatio: widthIntoDP(105) / heightIntoDP(105),
                                    }}
                                    source={{
                                        uri: userData.stylistInfo.profilePicUrl,
                                        priority: FastImage.priority.high,
                                    }}
                                    resizeMode={FastImage.resizeMode.cover}
                                /> :
                                <Text style={[styles.title, styles.profileUserName]}>
                                    {getFirstAndLastCharacterInString(userName)}
                                </Text>}
                    </View>
                    <Text style={styles.title}>{userName}</Text>
                    {/* <IconButton
                        iconLeft
                        buttonStyle={styles.editIconStyle}
                        iconComponent={<EditIcon />}
                        txtStyle={styles.txtStyle}
                        iconText={'Edit Profile'}
                        onSubmit={() => { }}
                    /> */}
                </View>
                <View style={styles.curveCardContainer}>
                    <>
                        <ScrollView style={{ flex: 1, width: '85%' }} showsVerticalScrollIndicator={false}>
                            <View style={styles.curveInnerContainer}>
                                {options.map((op, index) => (
                                    <TouchableOpacity onPress={() => { op.onPress(); }} key={index}>
                                        <View style={styles.rowContainer} key={index}>
                                            <View style={styles.columnLeftContainer}>
                                                <IconButton
                                                    iconComponent={op.icon}
                                                    buttonStyle={styles.iconBtnStyle}
                                                />
                                                <Text style={styles.columnRightContainer}>{op.label}</Text>
                                            </View>
                                            <View style={{ marginTop: 5 }}>
                                                <IconButton
                                                    iconComponent={<RightArrowIcon />}
                                                    onSubmit={() => {
                                                        op.onPress();
                                                    }}
                                                />
                                            </View>
                                        </View>
                                    </TouchableOpacity>
                                ))}
                            </View>
                        </ScrollView>
                        <View style={styles.switchbtnContainer}>
                            <ThemeButton
                                buttonStyle={{
                                    backgroundColor: Colors.TRANSPARENT,
                                    alignSelf: 'center',
                                }}
                                label={'Switch to customer account'}
                                labelStyle={styles.switchLabelStyle}
                                onSubmit={switchToCustomerAccount}
                                transparent
                            />
                        </View>
                    </>
                </View>
                <FullScreenModal isVisible={isToggle} />
            </FlexContainer>
        </SafeAreaContainer >
    );
};

export default ExpertProfile;
