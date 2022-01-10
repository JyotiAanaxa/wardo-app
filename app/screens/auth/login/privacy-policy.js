import React from 'react';
import { Text, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaContainer } from '../../../utils/app-container';
import { Colors, Fonts, Typography } from '../../../theme';
import ToggleButton from '../../../components/buttons/toggle-button';
import Autolink from 'react-native-autolink';
import { heightPercentageToDP } from 'react-native-responsive-screen';

export const PrivacyPolicy = ({ navigation }) => {
    return (
        <SafeAreaContainer style={{ backgroundColor: Colors.WHITE, justifyContent: 'flex-start', paddingTop: 40 }}>
            <ToggleButton
                txt={'Privacy Policy'}
                txtStyle={styles.titleStyle}
                onSubmit={() => { navigation.goBack() }}
                container={styles.container}
                innerContainer={styles.innerContainer}
                isVisible
                iconStyle={styles.iconStyle}
            />

            <ScrollView style={{ paddingHorizontal: 20 }}>
                <Autolink
                    url
                    text={`Wardo ("us", "we", or "our") operates the Wardo mobile application (the "Service").

This page informs you of our policies regarding the collection, use and disclosure of Personal Information when you use our Service.

We will not use or share your information with anyone except as described in this Privacy Policy.

We use your Personal Information for providing and improving the Service. By using the Service, you agree to the collection and use of information in accordance with this policy. Unless otherwise defined in this Privacy Policy, terms used in this Privacy Policy have the same meanings as in our Terms and Conditions.
                    `}
                    style={styles.txtStyle}
                    linkStyle={styles.linkStyle} />

                <Text style={styles.headingStyle}>Information Collection And Use</Text>
                <Autolink
                    text={`While using our Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you. Personally identifiable information may include, but is not limited to, your email address, name, phone number, postal address, other information ("Personal Information"). We collect this information for the purpose of providing the Service, identifying and communicating with you, responding to your requests/inquiries, servicing your purchase orders, and improving our services.`}
                    style={styles.txtStyle}
                    linkStyle={styles.linkStyle} />

                <Text style={styles.headingStyle}>Log Data</Text>
                <Autolink
                    text={`When you access the Service by or through a mobile device, we may collect certain information automatically, including, but not limited to, the type of mobile device you use, your mobile device unique ID, the IP address of your mobile device, your mobile operating system, the type of mobile Internet browser you use and other statistics ("Log Data").

Please see the section regarding Location Information below regarding the use of your location information and your options.`}
                    style={styles.txtStyle}
                    linkStyle={styles.linkStyle} />

                <Text style={styles.headingStyle}>Location Information</Text>
                <Autolink
                    text={`We may use and store information about your location depending on the permissions you have set on your device. We use this information to provide features of our Service, to improve and customize our Service. You can enable or disable location services when you use our Service at anytime, through your mobile device settings.`}
                    style={styles.txtStyle}
                    linkStyle={styles.linkStyle} />

                <Text style={styles.headingStyle}>Cookies</Text>
                <Autolink
                    text={`Cookies are files with a small amount of data, which may include an anonymous unique identifier. Cookies are sent to your browser from a web site and transferred to your device. We use cookies to collect information in order to improve our services for you.

You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. The Help feature on most browsers provide information on how to accept cookies, disable cookies or to notify you when receiving a new cookie.

If you do not accept cookies, you may not be able to use some features of our Service and we recommend that you leave them turned on.`}
                    style={styles.txtStyle}
                    linkStyle={styles.linkStyle} />

                <Text style={styles.headingStyle}>Do Not Track Disclosure</Text>
                <Autolink
                    text={`We do not support Do Not Track ("DNT"). Do Not Track is a preference you can set in your web browser to inform websites that you do not want to be tracked.

You can enable or disable Do Not Track by visiting the Preferences or Settings page of your web browser.`}
                    style={styles.txtStyle}
                    linkStyle={styles.linkStyle} />

                <Text style={styles.headingStyle}>Service Providers</Text>
                <Autolink
                    text={`We may employ third party companies and individuals to facilitate our Service, to provide the Service on our behalf, to perform Service-related services and/or to assist us in analyzing how our Service is used.

These third parties have access to your Personal Information only to perform specific tasks on our behalf and are obligated not to disclose or use your information for any other purpose.`}
                    style={styles.txtStyle}
                    linkStyle={styles.linkStyle} />

                <Text style={styles.headingStyle}>Compliance With Laws</Text>
                <Autolink
                    text={`We will disclose your Personal Information where required to do so by law or subpoena or if we believe that such action is necessary to comply with the law and the reasonable requests of law enforcement or to protect the security or integrity of our Service.`}
                    style={styles.txtStyle}
                    linkStyle={styles.linkStyle} />


                <Text style={styles.headingStyle}>Business Transaction</Text>
                <Autolink
                    text={`If Wardo is involved in a merger, acquisition or asset sale, your Personal Information may be transferred as a business asset. In such cases, we will provide notice before your Personal Information is transferred and/or becomes subject to a different Privacy Policy.`}
                    style={styles.txtStyle}
                    linkStyle={styles.linkStyle} />

                <Text style={styles.headingStyle}>Security</Text>
                <Autolink
                    text={`The security of your Personal Information is important to us, and we strive to implement and maintain reasonable, commercially acceptable security procedures and practices appropriate to the nature of the information we store, in order to protect it from unauthorized access, destruction, use, modification, or disclosure.

However, please be aware that no method of transmission over the internet, or method of electronic storage is 100% secure and we are unable to guarantee the absolute security of the Personal Information we have collected from you.`}
                    style={styles.txtStyle}
                    linkStyle={styles.linkStyle} />

                <Text style={styles.headingStyle}>Links To Other Sites</Text>
                <Autolink
                    text={`Our Service may contain links to other sites that are not operated by us. If you click on a third party link, you will be directed to that third party's site. We strongly advise you to review the Privacy Policy of every site you visit.

We have no control over, and assume no responsibility for the content, privacy policies or practices of any third party sites or services.`}
                    style={styles.txtStyle}
                    linkStyle={styles.linkStyle} />

                <Text style={styles.headingStyle}>Children's Privacy</Text>
                <Autolink
                    text={`Only persons age 18 or older have permission to access our Service. Our Service does not address anyone under the age of 13 ("Children").

We do not knowingly collect personally identifiable information from children under 13. If you are a parent or guardian and you learn that your Children have provided us with Personal Information, please contact us. If we become aware that we have collected Personal Information from a children under age 13 without verification of parental consent, we take steps to remove that information from our servers.`}
                    style={styles.txtStyle}
                    linkStyle={styles.linkStyle} />

                <Text style={styles.headingStyle}>Changes To This Privacy Policy</Text>
                <Autolink
                    text={`This Privacy Policy is effective as of March 15, 2017 and will remain in effect except with respect to any changes in its provisions in the future, which will be in effect immediately after being posted on this page.

We reserve the right to update or change our Privacy Policy at any time and you should check this Privacy Policy periodically. Your continued use of the Service after we post any modifications to the Privacy Policy on this page will constitute your acknowledgment of the modifications and your consent to abide and be bound by the modified Privacy Policy.

If we make any material changes to this Privacy Policy, we will notify you either through the email address you have provided us, or by placing a prominent notice on our website.`}
                    style={styles.txtStyle}
                    linkStyle={styles.linkStyle} />


                <Text style={styles.headingStyle}>Contact Us</Text>
                <Autolink
                    text={`If you have any questions about this Privacy Policy, please contact us at Support@wardo.co`}
                    style={[styles.txtStyle, { marginBottom: 30 }]}
                    linkStyle={styles.linkStyle}
                />
            </ScrollView>
        </SafeAreaContainer>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        marginBottom: 20
    },
    innerContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    titleStyle: {
        fontSize: Typography.H2,
        fontFamily: Fonts.BOLD,
        color: Colors.LABEL,
        marginRight: 5
    },

    headingStyle: {
        fontSize: Typography.MEDIUM,
        fontFamily: Fonts.BOLD,
        lineHeight: heightPercentageToDP('2.1%'),
        color: Colors.LABEL,
        marginVertical: 10
    },
    txtStyle: {
        fontSize: Typography.SMALL,
        fontFamily: Fonts.REGULAR,
        lineHeight: heightPercentageToDP('2.1%'),
        color: Colors.LABEL
    },

    linkStyle: {
        fontSize: Typography.SMALL,
        fontFamily: Fonts.HEAVY,
        lineHeight: heightPercentageToDP('2.1%'),
        color: Colors.PRIMARY
    },
    iconStyle: {
        height: 25,
        width: 25,
        marginTop: 2
    }
});

export default PrivacyPolicy;
