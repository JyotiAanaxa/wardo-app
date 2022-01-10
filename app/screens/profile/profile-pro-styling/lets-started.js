import React, { useState, useEffect } from "react";
import { StyleSheet, Text, TouchableOpacity, View, ScrollView } from "react-native";
import { heightPercentageToDP, widthPercentageToDP } from "react-native-responsive-screen";
import ThemeButton from "../../../components/buttons/theme-button";
import ToggleButton from "../../../components/buttons/toggle-button";
import { HeaderBar } from "../../../components/header/header";
import { Heading } from "../../../components/heading/heading";
import { ActiveCheckBoxIcon } from '../../../icons/active-checkbox';
import { FaqDownIcon } from "../../../icons/faq-down-arrow";
import { FaqUpIcon } from "../../../icons/faq-up-arrow";
import { InactiveCheckBoxIcon } from '../../../icons/inactive-checkbox';
import { Colors, Typography, Fonts } from "../../../theme";
import { SafeAreaContainer } from "../../../utils/app-container";
import ModalInfo from "./modal-info";
import { heightIntoDP, DEFAULT_ERROR_CALLBACK, SHOW_INFO_NOTIFICATION } from "../../../utils/app-util";
import AuthService from "../../../services/auth";

const Items = [
    {
        title: 'Free',
        subTitle: 'Up to 3 clients',
        amount: '0',
        subscript: '/m',
        checked: false
    },
    {
        title: 'Monthly',
        subTitle: 'Pay monthly, cancel anytime',
        amount: '999',
        subscript: '/m',
        checked: false
    },
    {
        title: 'Yearly',
        subTitle: 'Pay for a full year',
        amount: '6,999',
        subscript: '/y',
        checked: false,
        saveLabel: 'Save 30%'
    }
];

const LetStarted = ({ route, navigation }) => {
    const { fromExpert = false } = route.params || {};
    const [planItems, setPlanItems] = useState(fromExpert ? Items.filter(item => item.title !== 'Free') : Items);
    const [activeIndex, setActiveIndex] = useState(route.params && route.params.index || 0);
    const [isVisible, setIsVisible] = useState(false);
    const [plan, setPlan] = useState(fromExpert ? 'FREE' : 'FREE');
    const [userObj, setUserObj] = useState({});


    const getUserInfo = async () => {
        const userInfo = await AuthService.getUser();
        setUserObj(userInfo);
    }

    const handleClick = () => {
        if (!fromExpert) {
            let tempUserObj = userObj;
            tempUserObj.stylistInfo['onboardingPlan'] = plan;
            AuthService.patchUpdate('stylistInfo.onboardingPlan', tempUserObj).subscribe(
                () => {
                    const onBoardingStep = userObj.stylistInfo.onboardingStep;
                    onBoardingStep === 4 ? navigation.navigate('ProfileAllSet') : navigation.navigate('ProfileOnbarding', { stylistOnboardingStep: onBoardingStep || 0 });
                },
                error => {
                    console.log(error);
                    DEFAULT_ERROR_CALLBACK(error);
                });
        } else {
            SHOW_INFO_NOTIFICATION('Payment mode flow');
        }
    };



    const toggleModalInfo = () => {
        setIsVisible(!isVisible);
    }

    const navigateToTerms = () => {
        setIsVisible(false);
        navigation.navigate('TermsOfUse');
    }

    const navigateToPolicy = () => {
        setIsVisible(false);
        navigation.navigate('PrivacyPolicy');
    }

    useEffect(() => {
        getUserInfo();
    }, []);

    return (
        <SafeAreaContainer style={styles.container}>
            <HeaderBar
                headerStyle={{ paddingBottom: 10 }}
                backButton
                leftClick={() => { navigation.goBack() }}
            />

            <ScrollView style={{ width: '100%', backgroundColor: Colors.TRANSPARENT, marginBottom: heightPercentageToDP('20%'), marginTop: heightPercentageToDP('3%') }} showsVerticalScrollIndicator={false}>
                <View style={styles.innerContainer}>
                    <Heading
                        title={`Let's Get Started`}
                        subTitle={'Setup your account and start using\nWardo completely free'}
                        style={styles.headingStyle}
                    />

                    <View style={{ width: '100%', marginTop: heightPercentageToDP('5%') }}>
                        {planItems.map((item, index) =>
                            <TouchableOpacity
                                key={index + ''}
                                activeOpacity={1}
                                onPress={() => {
                                    switch (index) {
                                        case 0: setPlan('FREE');
                                            break;
                                        case 1: setPlan('FREE');
                                            break;
                                        case 2: setPlan('FREE');
                                            break;
                                    }
                                    setActiveIndex(index);
                                }}
                                style={styles.touchableContainer}>
                                <View style={[styles.planContainer, activeIndex === index ? styles.activeStyle : styles.inactiveStyle]}>
                                    <View style={styles.amountContainer}>
                                        <Text style={styles.supStyle}>Rs.</Text>
                                        <Text style={styles.mainStyle}>{item.amount}</Text>
                                        <Text style={styles.subStyle}>{item.subscript}</Text>
                                    </View>
                                    {item.saveLabel &&
                                        <View style={styles.saveContainer}>
                                            <Text style={styles.saveTxtStyle}>{item.saveLabel}</Text>
                                        </View>}
                                    <View style={styles.leftContainer}>
                                        {activeIndex === index ? <ActiveCheckBoxIcon /> : <InactiveCheckBoxIcon />}
                                        <View style={styles.titleContainer}>
                                            <Text style={styles.title}>{item.title}</Text>
                                            <Text style={styles.subTitle}>{item.subTitle}</Text>
                                        </View>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        )}
                    </View>

                </View>
            </ScrollView>

            <View style={styles.btmContainer}>
                <ThemeButton onSubmit={handleClick}
                    buttonStyle={styles.btnStyle}
                    labelStyle={styles.labelStyle}
                    label={fromExpert ? "Next" : 'Try Free For 30 Days'}
                />
                <ToggleButton
                    innerContainer={styles.toggleInnerContainer}
                    txt={'Cancel Anytime. No Payment Needed'}
                    txtStyle={styles.bottomTxtStyle}
                    upComponent={<FaqUpIcon />}
                    downComponent={<FaqDownIcon />}
                    isVisible={true}
                    onSubmit={toggleModalInfo}
                />
            </View>

            <ModalInfo
                isVisible={isVisible}
                onSwipeHide={toggleModalInfo}
                termsNavigation={navigateToTerms}
                policyNavigation={navigateToPolicy}
            />

        </SafeAreaContainer>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingTop: '6%',
        backgroundColor: Colors.TRANSPARENT
    },
    innerContainer: {
        marginLeft: '7%',
        marginRight: '7%',
        width: '86%',
        marginBottom: 20
    },
    touchableContainer: {
        width: '100%',
        marginBottom: 30,
        borderRadius: 18
    },
    leftContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    toggleInnerContainer: {
        flexDirection: 'row',
        marginTop: 15,
        justifyContent: 'center',
        alignItems: 'center'
    },
    planContainer: {
        flexDirection: 'row',
        height: heightIntoDP(100),
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 24,
        paddingHorizontal: 16,
        borderRadius: 18,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 0 },
        shadowRadius: 10,
        shadowOpacity: 0.16,
        elevation: 16,
    },
    activeStyle: {
        backgroundColor: '#F0EFFF',
        borderColor: Colors.PRIMARY,
        borderWidth: 1
    },
    inactiveStyle: {
        backgroundColor: Colors.WHITE,
    },
    itemContainer: {
        position: 'relative',
        alignItems: 'center',
        width: widthPercentageToDP('100%'),
        height: heightPercentageToDP('65%')
    },
    headingStyle: {
        color: Colors.PRIMARY
    },
    btmContainer: {
        width: '100%',
        position: 'absolute',
        bottom: Platform.OS === 'android' ? 100 : 45,
        alignItems: 'center'
    },
    bottomTxtStyle: {
        fontSize: Typography._14,
        marginRight: 3,
        fontFamily: Fonts.MEDIUM,
        color: Colors.SECONDARY_TEXT
    },
    contentContainer: {
        borderWidth: 2,
        borderColor: '#CCC',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    btnStyle: {
        backgroundColor: Colors.PRIMARY,
        justifyContent: 'center',
        alignItems: 'center',
        width: '88%',
        height: heightIntoDP(60),
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 0 },
        shadowRadius: 10,
        shadowOpacity: 0.16,
        elevation: 8,
        borderRadius: 18
    },
    labelStyle: {
        fontSize: Typography._16,
        fontFamily: Fonts.MEDIUM,
        color: Colors.WHITE
    },
    supStyle: {
        lineHeight: 16,
        marginTop: 2,
        fontSize: Typography._12,
        fontFamily: Fonts.MEDIUM,
        color: Colors.SECONDARY_TEXT
    },
    mainStyle: {
        fontSize: Typography._20,
        fontFamily: Fonts.MEDIUM,
        color: Colors.PRIMARY,
        marginTop: 2
    },

    subStyle: {
        lineHeight: 32,
        marginBottom: 10,
        fontSize: Typography._12,
        fontFamily: Fonts.MEDIUM,
        color: Colors.SECONDARY_TEXT
    },
    title: {
        fontSize: Typography._22,
        fontFamily: Fonts.HEAVY,
        color: Colors.LABEL
    },
    subTitle: {
        fontSize: Typography._12,
        fontFamily: Fonts.MEDIUM,
        marginTop: 12,
        color: Colors.SECONDARY_TEXT
    },
    saveTxtStyle: {
        fontSize: Typography._12,
        fontFamily: Fonts.MEDIUM,
        color: Colors.WHITE,
        textAlign: 'center'
    },
    saveContainer: {
        backgroundColor: '#EF709D',
        paddingVertical: 5,
        width: '22%',
        borderRadius: 8,
        position: 'absolute',
        bottom: 16,
        right: 18
    },
    amountContainer: {
        flexDirection: 'row',
        position: 'absolute',
        top: 15,
        right: 15
    },
    titleContainer: {
        marginLeft: 18,
        height: 48,
        justifyContent: 'space-between'
    }
});

export default LetStarted;
