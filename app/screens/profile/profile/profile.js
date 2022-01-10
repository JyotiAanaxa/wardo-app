import React, { useState, useEffect } from 'react';
import { Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { FlexContainer, SafeAreaContainer } from '../../../utils/app-container';
import { HeaderBar } from '../../../components/header/header';
import { SettingIcon } from '../../../icons/setting';
import { ProfileBg } from '../../../icons/profile-bg';
import { Colors, Mixins } from '../../../theme';
import IconButton from '../../../components/buttons/icon-button';
import { EditIcon } from '../../../icons/edit';
import ThemeButton from '../../../components/buttons/theme-button';
import { ExpertBtnIcon } from '../../../icons/expert-button';
import { StylistIcon } from '../../../icons/stylist';
import { RightArrowIcon } from '../../../icons/right-arrow';
import { StylePreferIcon } from '../../../icons/style-prefer';
import { OrderIcon } from '../../../icons/order';
import { FeedbackIcon } from '../../../icons/feedback';
import { styles } from './style';
import { FullScreenModal } from '../../../components/modals/full-screen-modal/full-screen-modal';
import AuthService, { userRoleSubject } from '../../../services/auth';
import {
    SHOW_INFO_NOTIFICATION,
    getFirstAndLastCharacterInString,
    DEFAULT_ERROR_CALLBACK,
    widthIntoDP,
    heightIntoDP,
} from '../../../utils/app-util';
import { AppConstants } from '../../../utils/app-constants';
import { Loader } from '../../../components/loader/loader';
import { useFocusEffect } from '@react-navigation/native';
import FastImage from 'react-native-fast-image';

export const Profile = ({ navigation }) => {
    const [isToggle, setIsToggle] = useState(false);
    const [isUserStylist, setUserStylist] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [userData, setUserData] = useState(null);
    const [userName, setUserName] = useState('');

    const onStylePreferenceClick = () => {
        SHOW_INFO_NOTIFICATION('Preferences');
    };

    const onStylistClick = () => {
        SHOW_INFO_NOTIFICATION('Stylist');
    };

    const onOrderClick = () => {
        SHOW_INFO_NOTIFICATION('Order');
    };

    const onFeedbackClick = () => {
        SHOW_INFO_NOTIFICATION('Feedback');
    };

    const options = [
        {
            label: 'Style Preferences',
            icon: <StylePreferIcon />,
            onPress: onStylePreferenceClick,
        },
        {
            label: 'My Stylists',
            icon: <StylistIcon />,
            onPress: onStylistClick,
        },
        {
            label: 'My Orders',
            icon: <OrderIcon />,
            onPress: onOrderClick,
        },
        {
            label: 'Feedback',
            icon: <FeedbackIcon />,
            onPress: onFeedbackClick,
        },
    ];


    const switchToStylistAccount = () => {
        AuthService.switchAccount(AppConstants.ROLE.STYLIST).subscribe(
            () => userRoleSubject.next(true),
            error => DEFAULT_ERROR_CALLBACK(error)
        );
    }

    useFocusEffect(
        React.useCallback(() => {
            const fetchData = async () => {
                const userData = await AuthService.getUser();
                setUserData(userData);
                setUserStylist(userData.isAlsoAStylist);
                setIsLoading(false);
                setUserName(userData.name);
            };
            fetchData();
        }, [userName]));

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
                    {isLoading ?
                        <Loader size={30} color={Colors.PRIMARY} /> :
                        <View style={styles.profileCardContainer}>
                            {userData.stylistInfo.profilePicUrl ?
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
                                    {getFirstAndLastCharacterInString(userData.name)}
                                </Text>}
                        </View>}
                    <Text style={styles.title}>{userName}</Text>
                    <IconButton
                        iconLeft
                        buttonStyle={styles.editIconStyle}
                        iconComponent={<EditIcon />}
                        txtStyle={styles.txtStyle}
                        iconText={'Edit Profile'}
                        onSubmit={() => { navigation.navigate('EditProfile', { userData: userData }); }}
                    />
                </View>
                <View style={styles.curveCardContainer}>
                    <ScrollView style={{ flex: 1, width: '85%' }} showsVerticalScrollIndicator={false}>
                        <View style={styles.curveInnerContainer}>
                            {options.map((op, index) => (
                                <TouchableOpacity onPress={() => { op.onPress(); }}>
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
                    {isLoading ?
                        <View style={styles.switchbtnContainer}>
                            <Loader color={Colors.PRIMARY} size={20} />
                        </View>
                        : isUserStylist ?
                            <View style={styles.switchbtnContainer}>
                                <ThemeButton
                                    buttonStyle={{
                                        backgroundColor: Colors.TRANSPARENT,
                                        alignSelf: 'center',
                                    }}
                                    label={'Switch to expert account'}
                                    labelStyle={styles.switchLabelStyle}
                                    onSubmit={switchToStylistAccount}
                                    transparent
                                />
                            </View> :
                            <View style={styles.btnContainer}>
                                <ThemeButton
                                    buttonStyle={{
                                        height: 120,
                                        marginTop: -20,
                                        backgroundColor: Colors.TRANSPARENT,
                                        alignSelf: 'center',
                                    }}
                                    icon={<ExpertBtnIcon />}
                                    onSubmit={() => {
                                        navigation.navigate('StylistInstructions');
                                    }}
                                    transparent
                                />
                            </View>}
                </View>
                <FullScreenModal isVisible={isToggle} />
            </FlexContainer>
        </SafeAreaContainer >
    );
};

export default Profile;
