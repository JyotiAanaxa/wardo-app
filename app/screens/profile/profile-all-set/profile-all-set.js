import React, { useEffect, useState } from 'react';
import { Text, StyleSheet, View, Platform } from 'react-native';
import { FlexContainer } from '../../../utils/app-container';
import { Colors, Typography } from '../../../theme';
import { ProfileAllSetBg } from '../../../icons/profile-all-set-bg';
import { heightPercentageToDP } from 'react-native-responsive-screen';
import { Fonts } from '../../../theme/fonts';
import AuthService, { userRoleSubject } from '../../../services/auth';
import { getFirstAndLastCharacterInString, heightIntoDP, DEFAULT_ERROR_CALLBACK } from '../../../utils/app-util';
import ThemeButton from '../../../components/buttons/theme-button';
import { HeaderBar } from '../../../components/header/header';
import { AppConstants } from '../../../utils/app-constants';


export const ProfileAllSet = ({ navigation }) => {
    const [userName, setUserName] = useState('');

    const getUserName = async () => {
        const userData = await AuthService.getUser();
        setUserName(getFirstAndLastCharacterInString(userData.name));
    }

    const handleGetStartedBtn = () => {
        AuthService.switchAccount(AppConstants.ROLE.STYLIST).subscribe(
            () => userRoleSubject.next(true),
            error => DEFAULT_ERROR_CALLBACK(error)
        );
        //navigation.navigate('StylistProfile')
    }

    useEffect(() => { getUserName() }, [userName]);

    return <FlexContainer style={{ backgroundColor: Colors.WHITE }}>
        <HeaderBar
            backButton
            leftClick={() => { navigation.goBack() }}
        />
        <View style={{ marginTop: -30, width: '100%', justifyContent: 'center', alignItems: 'center' }}>
            <ProfileAllSetBg />
            <View style={styles.nameCardContainer}>
                <Text style={styles.nameTxtStyle}>{userName}</Text>
            </View>
            <Text style={styles.primaryTxtStyle}>You're all set!</Text>
            <Text style={styles.labelTxtStyle}>{` You can setup the rest of your\nprofile through your dashboard`}</Text>
        </View>
        <ThemeButton
            buttonStyle={styles.btnContainer}
            label={'Get Started'}
            labelStyle={styles.labelStyle}
            onSubmit={handleGetStartedBtn} />
    </FlexContainer>
}

const styles = StyleSheet.create({
    nameCardContainer: {
        height: 100,
        width: 100,
        backgroundColor: Colors.WHITE,
        borderRadius: 18,
        borderWidth: 1,
        borderColor: '#F1F0EE',
        marginTop: -130,
        justifyContent: 'center',
        alignItems: 'center'
    },
    nameTxtStyle: {
        color: '#EF709D',
        fontSize: Typography._24,
        textTransform: 'uppercase',
        fontFamily: Fonts.HEAVY
    },
    primaryTxtStyle: {
        fontFamily: Fonts.HEAVY,
        color: Colors.PRIMARY,
        fontSize: Typography._18,
        marginTop: 24
    },
    labelTxtStyle: {
        fontFamily: Fonts.MEDIUM,
        color: '#979797',
        fontSize: Typography._14,
        lineHeight: heightPercentageToDP('2.2%'),
        marginTop: 10
    },
    btnContainer: {
        width: '65%',
        position: 'absolute',
        bottom: Platform.OS === 'android' ? 30 : 50,
        borderRadius: 18,
        height: heightIntoDP(55),
        justifyContent: 'center',
        backgroundColor: Colors.PRIMARY,
        shadowColor: '#382D7C',
        shadowOffset: { width: 0, height: 0 },
        shadowRadius: 10,
        shadowOpacity: 0.16,
        elevation: 8,
    },
    labelStyle: {
        fontFamily: Fonts.MEDIUM,
        color: Colors.WHITE,
        fontSize: Typography._16,
    }
});

export default ProfileAllSet;
