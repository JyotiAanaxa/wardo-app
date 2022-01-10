import React from "react";
import { Image, ScrollView, StyleSheet, Text, View ,Platform} from "react-native";
import { widthPercentageToDP } from "react-native-responsive-screen";
import ThemeButton from "../../../components/buttons/theme-button";
import FAQ from '../../../components/faq/faq';
import { HeaderBar } from "../../../components/header/header";
import { BottomIcon } from '../../../icons/bottom';
import { StylistDownIcon } from '../../../icons/stylist-faq-down';
import { Colors, Fonts, Typography } from "../../../theme";
import { SafeAreaContainer } from "../../../utils/app-container";
import { heightIntoDP } from "../../../utils/app-util";

const TitleWithBottomIcon = ({ icon, title }) => {
    return (
        <View style={{ alignItems: 'center', marginBottom: 15 }}>
            <Text style={styles.titleStyle}>{title}</Text>
            <View style={styles.iconStyle}>
                {icon}
            </View>
        </View>
    );
}

const faqItems = [
    {
        title: 'What does it take to be a Pro?',
        body: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. '
    },
    {
        title: 'What kind of services can I sell?',
        body: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. '
    },
    {
        title: 'Is there a membership fee?',
        body: 'Is this a one time or renewing fee Is this a one time or renewing fee Is this a one time or renewing fee Is this a one time or renewing fee'
    },
    {
        title: 'Is this a one time or renewing fee?',
        body: 'Is this a one time or renewing fee Is this a one time or renewing fee Is this a one time or renewing fee Is this a one time or renewing fee'
    },
    {
        title: 'How can I cancel my subscription?',
        body: 'Is this a one time or renewing fee Is this a one time or renewing fee Is this a one time or renewing fee Is this a one time or renewing fee'
    }
];

const instructionList = [
    {
        id: 1,
        title: 'Get discovered\nby new clients',
        imageUri: require('../../../../assets/img/first.png'),
        style: { marginTop: -180, marginBottom: -150 }
    },
    {
        id: 2,
        title: 'Showcase your\ndigital portfolio',
        imageUri: require('../../../../assets/img/second.png'),
        style: { marginTop: -160, marginBottom: -130 }
    },
    {
        id: 3,
        title: 'Manage client\nrequests',
        imageUri: require('../../../../assets/img/sixth.png'),
        style: { marginTop: -150, marginBottom: -130 }
    },
    {
        id: 4,
        title: 'Accept payments\nhassle free',
        imageUri: require('../../../../assets/img/third.png'),
        style: { marginTop: -150, marginBottom: -130 }
    },
    {
        id: 5,
        title: 'Easily on-board\nclient details',
        imageUri: require('../../../../assets/img/fourth.png'),
        style: { marginTop: -150, marginBottom: -130 }
    },
    {
        id: 6,
        title: 'List your services\nhowever you want',
        imageUri: require('../../../../assets/img/seventh.png'),
        style: { marginTop: -120, marginBottom: -90 }
    },
    {
        id: 7,
        title: 'Style your clients\nwith our digital tools',
        imageUri: require('../../../../assets/img/fifth.png'),
        style: { marginTop: -150, marginBottom: -120 }
    }
];

const StylistInstructions = ({ navigation }) => {

    return (
        <SafeAreaContainer style={styles.container}>
            <ScrollView style={styles.scrollContainer}>
                <HeaderBar
                    containerStyle={{ position: 'relative' ,top:0}}
                    backButton
                    leftClick={() => { navigation.goBack() }}
                />

                <View style={styles.contentContainer}>
                    <TitleWithBottomIcon
                        icon={<BottomIcon />}
                        title={'8 Ways Wardo Can Help Stylists'}
                    />

                    {instructionList.map((item, index) =>
                        (
                            <View key={index} style={{ width: '100%', alignItems: 'center' }}>
                                <View style={styles.indexContainerStyle}>
                                <Text style={styles.indexStyle}>{item.id}</Text>
                                </View>
                               <Text style={styles.headingStyle}>{item.title}</Text>
                                <Image
                                    source={item.imageUri}
                                    resizeMode='contain'
                                    style={[styles.imageContainer, item.style]}
                                />
                            </View>
                        ))}

                    <TitleWithBottomIcon
                        icon={<StylistDownIcon />}
                        title={'Success Stories'}
                    />
                    <Image
                        source={require('../../../../assets/img/eighth.png')}
                        resizeMode='contain'
                        style={{ width: widthPercentageToDP('90%'), marginTop: -240, marginBottom: -200 }}
                    />

                    <TitleWithBottomIcon
                        icon={<StylistDownIcon />}
                        title={`Frequently Asked Question's`}
                    />

                    <FAQ faqItems={faqItems} style={{ marginTop: 0 }} />

                    <View style={{ height: 100 }} />
                </View>

            </ScrollView>

            <View style={styles.btmContainer} />

            <ThemeButton onSubmit={() => { navigation.navigate('StartStyling') }}
                buttonStyle={styles.btnStyle}
                labelStyle={styles.labelStyle}
                label={'Get Started'}
            />

        </SafeAreaContainer>
    );
};

export default StylistInstructions;

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.TRANSPARENT
    },
    scrollContainer: {
        width: '100%'
    },
    contentContainer: {
        alignSelf: 'center',
        alignItems: 'center',
        width: widthPercentageToDP('85%')
    },
    btmContainer: {
        width: '100%',
        position: 'absolute',
        bottom: 0,
        padding: 25,
        alignItems: 'center',
        backgroundColor: Colors.WHITE,
        opacity: 0.6,
        height: Platform.OS==='android' ? 100 : 120,
        zIndex: 0
    },
    indexContainerStyle :{
        backgroundColor: Colors.PRIMARY,
        height: 40,
        width: 40,
        borderRadius: 10,
        justifyContent:'center',
        alignItems:'center'
    },
    indexStyle: {
       fontSize: Typography._18,
       marginTop:Platform.OS==='android' ? 0:6,
       fontFamily: Fonts.BLACK,
       color: Colors.WHITE
    },
    headingStyle: {
        fontSize: Typography._20,
        fontFamily: Fonts.HEAVY,
        color: Colors.PRIMARY,
        textAlign: 'center',
        lineHeight: 26,
        marginVertical: 18
    },
    imageContainer: {
        width: widthPercentageToDP('85%')
    },

    btnStyle: {
        backgroundColor: Colors.PRIMARY,
        position: 'absolute',
        bottom: Platform.OS==='android' ? 25 : 45,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        width: '75%',
        height: heightIntoDP(55),
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 0 },
        shadowRadius: 10,
        shadowOpacity: 0.16,
        zIndex: 999,
        elevation: 8,
        borderRadius: 18
    },
    labelStyle: {
        fontSize: Typography._16,
        fontFamily: Fonts.MEDIUM,
        color: Colors.WHITE
    },
    titleStyle: {
        fontSize: Typography._16,
        fontFamily: Fonts.HEAVY,
        color: Colors.PRIMARY
    },
    iconStyle: {
        marginVertical: 18
    }
});
