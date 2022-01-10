import React from 'react';
import { Text, StyleSheet, ScrollView, View } from 'react-native';
import { SafeAreaContainer } from '../../../utils/app-container';
import { Colors, Fonts, Typography } from '../../../theme';
import ToggleButton from '../../../components/buttons/toggle-button';
import Autolink from 'react-native-autolink';
import { heightPercentageToDP } from 'react-native-responsive-screen';

export const TermsConditions = ({ navigation }) => {
    const DotComponent = () => {
        return (<View style={{ height: 5, width: 5, borderRadius: 50, marginRight: 8, marginTop: 7, backgroundColor: Colors.LABEL }} />)
    };
    return (
        <SafeAreaContainer style={{ backgroundColor: Colors.WHITE, justifyContent: 'flex-start', paddingTop: 40 }}>
            <ToggleButton
                txt={'Terms & Conditions'}
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
                    text={`Please read these Terms and Conditions ("Terms", "Terms and Conditions") carefully before using the Wardo mobile application (the "Service") operated by Wardo ("us", "we", or "our").\n
Your access to and use of the Service is conditioned upon your acceptance of and compliance with these Terms. These Terms apply to all visitors, users and others who wish to access or use the Service.\n
By accessing or using the Service you agree to be bound by these Terms. If you disagree with any part of the terms then you do not have permission to access the Service.`}
                    style={styles.txtStyle}
                    linkStyle={styles.linkStyle} />

                <Text style={styles.headingStyle}>Communications</Text>
                <Autolink
                    text={`By creating an Account on our service, you agree to subscribe to newsletters, marketing or promotional materials and other information we may send. However, you may opt out of receiving any, or all, of these communications from us by following the unsubscribe link or instructions provided in any email we send.`}
                    style={styles.txtStyle}
                    linkStyle={styles.linkStyle} />

                <Text style={styles.headingStyle}>Content</Text>
                <Autolink
                    text={`Our Service allows you to post, link, store, share and otherwise make available certain information, text, graphics, videos, or other material ("Content"). You are responsible for the Content that you post on or through the Service, including its legality, reliability, and appropriateness.

By posting Content on or through the Service, You represent and warrant that: (i) the Content is yours (you own it) and/or you have the right to use it and the right to grant us the rights and license as provided in these Terms, and (ii) that the posting of your Content on or through the Service does not violate the privacy rights, publicity rights, copyrights, contract rights or any other rights of any person or entity. We reserve the right to terminate the account of anyone found to be infringing on a copyright.

You retain any and all of your rights to any Content you submit, post or display on or through the Service and you are responsible for protecting those rights. We take no responsibility and assume no liability for Content you or any third party posts on or through the Service. However, by posting Content using the Service you grant us the right and license to use, modify, publicly perform, publicly display, reproduce, and distribute such Content on and through the Service. You agree that this license includes the right for us to make your Content available to other users of the Service, who may also use your Content subject to these Terms.

Wardo has the right but not the obligation to monitor and edit all Content provided by users.

In addition, Content found on or through this Service are the property of Wardo or used with permission. You may not distribute, modify, transmit, reuse, download, repost, copy, or use said Content, whether in whole or in part, for commercial purposes or for personal gain, without express advance written permission from us.`}
                    style={styles.txtStyle}
                    linkStyle={styles.linkStyle} />

                <Text style={styles.headingStyle}>Accounts</Text>
                <Autolink
                    text={`When you create an account with us, you guarantee that you are above the age of 18, and that the information you provide us is accurate, complete, and current at all times. Inaccurate, incomplete, or obsolete information may result in the immediate termination of your account on the Service.

You are responsible for maintaining the confidentiality of your account and password, including but not limited to the restriction of access to your computer and/or account. You agree to accept responsibility for any and all activities or actions that occur under your account and/or password, whether your password is with our Service or a third-party service. You must notify us immediately upon becoming aware of any breach of security or unauthorized use of your account.

You may not use as a username the name of another person or entity or that is not lawfully available for use, a name or trademark that is subject to any rights of another person or entity other than you, without appropriate authorization. You may not use as a username any name that is offensive, vulgar or obscene.`}
                    style={styles.txtStyle}
                    linkStyle={styles.linkStyle} />

                <Text style={styles.headingStyle}>Copyright Policy</Text>
                <Autolink
                    text={`We respect the intellectual property rights of others. It is our policy to respond to any claim that Content posted on the Service infringes on the copyright or other intellectual property rights ("Infringement") of any person or entity.

If you are a copyright owner, or authorized on behalf of one, and you believe that the copyrighted work has been copied in a way that constitutes copyright infringement, please submit your claim via email to support@wardo.co, with the subject line: "Copyright Infringement" and include in your claim a detailed description of the alleged Infringement as detailed below, under "DMCA Notice and Procedure for Copyright Infringement Claims"

You may be held accountable for damages (including costs and attorneys' fees) for misrepresentation or bad-faith claims on the infringement of any Content found on and/or through the Service on your copyright.`}
                    style={styles.txtStyle}
                    linkStyle={styles.linkStyle} />

                <Text style={styles.headingStyle}>DMCA Notice and Procedure for Copyright Infringement Claims</Text>
                <Autolink
                    text={`You may submit a notification pursuant to the Digital Millennium Copyright Act (DMCA) by providing our Copyright Agent with the following information in writing (see 17 U.S.C 512(c)(3) for further detail):`}
                    style={styles.txtStyle}
                    linkStyle={styles.linkStyle} />
                <View style={{ flexDirection: 'row', width: '96%' }}>
                    <DotComponent />
                    <Autolink
                        text={`an electronic or physical signature of the person authorized to act on behalf of the owner of the copyright's interest;`}
                        style={styles.txtStyle}
                        linkStyle={styles.linkStyle} />
                </View>
                <View style={{ flexDirection: 'row', width: '96%' }}>
                    <DotComponent />
                    <Autolink
                        text={`a description of the copyrighted work that you claim has been infringed, including the URL (i.e., web page address) of the location where the copyrighted work exists or a copy of the copyrighted work;`}
                        style={styles.txtStyle}
                        linkStyle={styles.linkStyle} />
                </View>
                <View style={{ flexDirection: 'row', width: '96%' }}>
                    <DotComponent />
                    <Autolink
                        text={`identification of the URL or other specific location on the Service where the material that you claim is infringing is located;`}
                        style={styles.txtStyle}
                        linkStyle={styles.linkStyle} />
                </View>
                <View style={{ flexDirection: 'row', width: '96%' }}>
                    <DotComponent />
                    <Autolink
                        text={`your address, telephone number, and email address;`}
                        style={styles.txtStyle}
                        linkStyle={styles.linkStyle} />
                </View>
                <View style={{ flexDirection: 'row', width: '96%' }}>
                    <DotComponent />
                    <Autolink
                        text={`a statement by you that you have a good faith belief that the disputed use is not authorized by the copyright owner, its agent, or the law;`}
                        style={styles.txtStyle}
                        linkStyle={styles.linkStyle} />
                </View>
                <View style={{ flexDirection: 'row', width: '96%' }}>
                    <DotComponent />
                    <Autolink
                        text={`a statement by you, made under penalty of perjury, that the above information in your notice is accurate and that you are the copyright owner or authorized to act on the copyright owner's behalf.`}
                        style={styles.txtStyle}
                        linkStyle={styles.linkStyle} />
                </View>
                {/* <View style={{ flexDirection: 'row', width: '96%' }}>
                    <DotComponent /> */}
                <Autolink
                    text={`You can contact our Copyright Agent via email at support@wardo.co`}
                    style={styles.txtStyle}
                    linkStyle={styles.linkStyle} />
                {/* </View> */}

                <Text style={styles.headingStyle}>Intellectual Property</Text>
                <Autolink
                    text={`The Service and its original content (excluding Content provided by users), features and functionality are and will remain the exclusive property of Wardo and its licensors. The Service is protected by copyright, trademark, and other laws of both the United States and foreign countries. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of Wardo.`}
                    style={styles.txtStyle}
                    linkStyle={styles.linkStyle} />

                <Text style={styles.headingStyle}>Links To Other Web Sites</Text>
                <Autolink
                    text={`Our Service may contain links to third party web sites or services that are not owned or controlled by Wardo

Wardo has no control over, and assumes no responsibility for the content, privacy policies, or practices of any third party web sites or services. We do not warrant the offerings of any of these entities/individuals or their websites.

You acknowledge and agree that Wardo shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with use of or reliance on any such content, goods or services available on or through any such third party web sites or services.

We strongly advise you to read the terms and conditions and privacy policies of any third party web sites or services that you visit.`}
                    style={styles.txtStyle}
                    linkStyle={styles.linkStyle} />

                <Text style={styles.headingStyle}>Termination</Text>
                <Autolink
                    text={`We may terminate or suspend your account and bar access to the Service immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever and without limitation, including but not limited to a breach of the Terms.

If you wish to terminate your account, you may simply discontinue using the Service.

All provisions of the Terms which by their nature should survive termination shall survive termination, including, without limitation, ownership provisions, warranty disclaimers, indemnity and limitations of liability.`}
                    style={styles.txtStyle}
                    linkStyle={styles.linkStyle} />

                <Text style={styles.headingStyle}>Indemnification</Text>
                <Autolink
                    text={`You agree to defend, indemnify and hold harmless Wardo and its licensee and licensors, and their employees, contractors, agents, officers and directors, from and against any and all claims, damages, obligations, losses, liabilities, costs or debt, and expenses (including but not limited to attorney's fees), resulting from or arising out of a) your use and access of the Service, by you or any person using your account and password; b) a breach of these Terms, or c) Content posted on the Service.`}
                    style={styles.txtStyle}
                    linkStyle={styles.linkStyle} />

                <Text style={styles.headingStyle}>Limitation Of Liability</Text>
                <Autolink
                    text={`In no event shall Wardo, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from (i) your access to or use of or inability to access or use the Service; (ii) any conduct or content of any third party on the Service; (iii) any content obtained from the Service; and (iv) unauthorized access, use or alteration of your transmissions or content, whether based on warranty, contract, tort (including negligence) or any other legal theory, whether or not we have been informed of the possibility of such damage, and even if a remedy set forth herein is found to have failed of its essential purpose.`}
                    style={styles.txtStyle}
                    linkStyle={styles.linkStyle} />

                <Text style={styles.headingStyle}>Disclaimer</Text>
                <Autolink
                    text={`Your use of the Service is at your sole risk. The Service is provided on an "AS IS" and "AS AVAILABLE" basis. The Service is provided without warranties of any kind, whether express or implied, including, but not limited to, implied warranties of merchantability, fitness for a particular purpose, non-infringement or course of performance.

Wardo its subsidiaries, affiliates, and its licensors do not warrant that a) the Service will function uninterrupted, secure or available at any particular time or location; b) any errors or defects will be corrected; c) the Service is free of viruses or other harmful components; or d) the results of using the Service will meet your requirements.`}
                    style={styles.txtStyle}
                    linkStyle={styles.linkStyle} />

                <Text style={styles.headingStyle}>Exclusions</Text>
                <Autolink
                    text={`Some jurisdictions do not allow the exclusion of certain warranties or the exclusion or limitation of liability for consequential or incidental damages, so the limitations above may not apply to you.`}
                    style={styles.txtStyle}
                    linkStyle={styles.linkStyle} />

                <Text style={styles.headingStyle}>Governing Law</Text>
                <Autolink
                    text={`These Terms shall be governed and construed in accordance with the laws of New Jersey, United States, without regard to its conflict of law provisions.

Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect. These Terms constitute the entire agreement between us regarding our Service, and supersede and replace any prior agreements we might have had between us regarding the Service.`}
                    style={styles.txtStyle}
                    linkStyle={styles.linkStyle} />

                <Text style={styles.headingStyle}>Changes</Text>
                <Autolink
                    text={`We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material we will provide at least 15 days notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.

By continuing to access or use our Service after any revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, you are no longer authorized to use the Service.`}
                    style={styles.txtStyle}
                    linkStyle={styles.linkStyle} />

                <Text style={styles.headingStyle}>Contact Us</Text>
                <Autolink
                    text={`If you have any questions about these Terms, please contact us at support@wardo.co`}
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
        lineHeight: heightPercentageToDP('2.2%'),
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

export default TermsConditions;
