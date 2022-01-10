import React, { useState, useRef } from "react";
import { StyleSheet, Text, View, ImageBackground, Platform } from "react-native";
import { SafeAreaContainer } from "../../../utils/app-container";
import { HeaderBar } from "../../../components/header/header";
import { Heading } from "../../../components/heading/heading";
import { Colors, Typography } from "../../../theme";
import { Fonts } from "../../../theme/fonts";
import Carousel, { Pagination } from "react-native-snap-carousel";
import { heightPercentageToDP, widthPercentageToDP } from "react-native-responsive-screen";
import ThemeButton from "../../../components/buttons/theme-button";
import AuthService from "../../../services/auth";
import { useEffect } from "react";
import { DEFAULT_ERROR_CALLBACK } from "../../../utils/app-util";

const Item = ({ item }) => (
    <View style={styles.itemContainer}>
        <ImageBackground
            resizeMode='contain'
            source={item.src}
            style={styles.imageContainer}>
            <ThemeButton onSubmit={item.onSubmit}
                buttonStyle={item.btnStyle}
                labelStyle={item.labelStyle}
                label={item.label}
            />
        </ImageBackground>
    </View>
);

const StartStyling = ({ navigation }) => {
    const [activeSlide, setActiveSlide] = useState(0);
    const carousel = useRef();
    const [userObj, setUserObj] = useState({});


    const getUserInfo = async () => {
        const userInfo = await AuthService.getUser();
        setUserObj(userInfo);
    }

    const updateUserObj = (useType, id) => {
        let tempUserObj = userObj;
        tempUserObj.stylistInfo['stylistUsage'] = useType;
        AuthService.patchUpdate('stylistInfo.stylistUsage', tempUserObj).subscribe(
            () => {
                if (id) {
                    navigation.navigate('ApplyAsPro')
                } else {
                    navigation.navigate('LetStarted')
                }
            },
            error => {
                DEFAULT_ERROR_CALLBACK(error);
            });
    };


    const slideItems = [
        {
            id: "0",
            onSubmit: () => { updateUserObj('PERSONAL_USE', 0) },
            src: require('../../../../assets/img/personal.png'),
            label: 'Get Started',
            labelStyle: styles.personalLabelStyle,
            btnStyle: styles.personalBtnStyle
        },
        {
            id: "1",
            onSubmit: () => { updateUserObj('PROFESSIONAL_USE', 1) },
            label: 'Apply Now',
            src: require('../../../../assets/img/professional.png'),
            labelStyle: styles.professionalLabelStyle,
            btnStyle: styles.professionalBtnStyle
        }
    ];

    const renderItem = ({ item }) => {
        return (
            <Item item={item} />
        );
    };

    useEffect(() => {
        getUserInfo();
    }, []);

    return (
        <SafeAreaContainer style={styles.container}>
            <HeaderBar
                backButton
                leftClick={() => { navigation.goBack() }}
            />
            <View style={styles.innerContainer}>
                <Heading
                    headingStyle={{ marginTop: Platform.OS === 'android' ? heightPercentageToDP('4%') : heightPercentageToDP('10%') }}
                    title={'Start Styling Today!'}
                    subTitle={'Select your reason for which you will be\nusing the app'}
                    style={styles.headingStyle}
                />
            </View>
            <Carousel
                ref={carousel}
                data={slideItems}
                renderItem={renderItem}
                onSnapToItem={index => setActiveSlide(index)}
                sliderWidth={widthPercentageToDP('100%')}
                itemWidth={widthPercentageToDP('78%')}
                activeSlideOffset={5}
                inactiveSlideOpacity={1}
                activeSlideAlignment={'start'}
                inactiveSlideScale={1}
            />
            <Pagination
                dotContainerStyle={styles.dotContainerStyle}
                dotsLength={2}
                activeDotIndex={activeSlide}
                dotStyle={styles.dotStyle}
                inactiveDotStyle={styles.inactiveDotStyle}
                inactiveDotOpacity={1}
                inactiveDotScale={1}
            />
            <View style={styles.btmContainer}>
                <Text style={styles.bottomTxtStyle}>You can change your plan later through the app</Text>
            </View>
        </SafeAreaContainer>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingTop: '9%',
        backgroundColor: Colors.TRANSPARENT
    },
    innerContainer: {
        marginLeft: '7%',
        width: '100%'
    },
    itemContainer: {
        position: 'relative',
        alignItems: 'center',
        width: widthPercentageToDP('100%'),
        // height: heightPercentageToDP('50%')
    },
    imageContainer: {
        width: '100%',
        height: '100%',
        alignItems: 'center'
    },
    title: {
        fontSize: 32,
    },
    headingStyle: {
        color: Colors.PRIMARY
    },
    btmContainer: {
        width: '100%',
        position: 'absolute',
        bottom: Platform.OS === 'android' ? 30 : 50,
        alignItems: 'center'
    },
    bottomTxtStyle: {
        fontSize: Typography._12,
        fontFamily: Fonts.REGULAR,
        color: '#979797'
    },
    contentContainer: {
        borderWidth: 2,
        borderColor: '#CCC',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    dotContainerStyle: {
        width: 0,
        marginBottom: heightPercentageToDP('8.2%')
    },
    dotStyle: {
        width: 15,
        height: 5,
        borderRadius: 5,
        backgroundColor: Colors.PRIMARY
    },
    inactiveDotStyle: {
        width: 5,
        height: 5,
        borderRadius: 5,
        backgroundColor: '#C1BCFF'
    },
    personalBtnStyle: {
        backgroundColor: '#F0EFFF',
        justifyContent: 'center',
        alignItems: 'center',
        height: heightPercentageToDP('6.5%%'),
        width: heightPercentageToDP('20.5%'),
        position: 'absolute',
        bottom: heightPercentageToDP('6%'),
        elevation: 0,
        borderRadius: 15
    },
    personalLabelStyle: {
        fontSize: Typography._14,
        fontFamily: Fonts.MEDIUM,
        color: Colors.PRIMARY
    },
    professionalBtnStyle: {
        backgroundColor: '#6A60DA',
        height: heightPercentageToDP('6.5%%'),
        width: heightPercentageToDP('20.5%'),
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: heightPercentageToDP('6%'),
        elevation: 0,
        borderRadius: 15
    },
    professionalLabelStyle: {
        fontSize: Typography._14,
        fontFamily: Fonts.MEDIUM,
        color: Colors.WHITE
    }
});

export default StartStyling;
