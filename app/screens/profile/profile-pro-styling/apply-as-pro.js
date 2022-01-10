import { Formik, Form, Field } from 'formik';
import React, { useState, useEffect } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { heightPercentageToDP } from "react-native-responsive-screen";
import ThemeButton from "../../../components/buttons/theme-button";
import ToggleButton from "../../../components/buttons/toggle-button";
import CustomInputField from "../../../components/form/formInput/custom-input-field";
import { HeaderBar } from "../../../components/header/header";
import { Heading } from "../../../components/heading/heading";
import { ApplyProIcon } from "../../../icons/apply-pro-icon";
import { FaqDownIcon } from "../../../icons/faq-down-arrow";
import { FaqUpIcon } from "../../../icons/faq-up-arrow";
import { Colors, Fonts, Typography } from "../../../theme";
import { KeyboardViewContainer, SafeAreaContainer } from "../../../utils/app-container";
import ModalFAQ from "./modal-faq";
import { ApplyProValidation } from '../../../services/validations';
import ModalSubmission from './modal-submission';
import { heightIntoDP, DEFAULT_ERROR_CALLBACK } from '../../../utils/app-util';
import AuthService from '../../../services/auth';

const faqItems = [
    {
        title: 'What does it take to be a Pro?',
        body: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. '
    },
    {
        title: 'How long is the vetting process?',
        body: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. '
    },
    {
        title: 'Can I apply again if I got rejected?',
        body: 'Is this a one time or renewing fee Is this a one time or renewing fee Is this a one time or renewing fee Is this a one time or renewing fee'
    }
];

const ApplyAsPro = ({ navigation }) => {
    const [isVisible, setIsVisible] = useState(false);
    const [isSubmissionModalOpen, setIsSubmissionModalOpen] = useState(false);
    const [userObj, setUserObj] = useState({});


    const getUserInfo = async () => {
        const userInfo = await AuthService.getUser();
        setUserObj(userInfo);
    }


    const toggleModalInfo = () => {
        setIsVisible(!isVisible);
    }

    const toggleSubmissionModal = () => {
        setIsSubmissionModalOpen(!isSubmissionModalOpen);
    }

    const handleBtn = () => {
        setIsSubmissionModalOpen(false);
        navigation.navigate('LetStarted', { index: 1 });
    }

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
                    title={`Apply As A Pro`}
                    iconComponent={<ApplyProIcon />}
                    subTitle={`If you're a professional stylist or have\nfashion experience, apply below`}
                    style={styles.headingStyle}
                />

                <ScrollView style={{ width: '100%' }}>
                    <Formik
                        initialValues={{ url: '', name: '', email: '' }}
                        validationSchema={ApplyProValidation}
                        onSubmit={values => {
                            let proInfo = {
                                blogWebsiteUrl: values.url,
                                email: values.email,
                                instagramUsername: values.name
                            };
                            userObj.stylistInfo.proInfo = proInfo;
                            AuthService.applyAsPro(userObj).subscribe(
                                () => {
                                    toggleSubmissionModal();
                                },
                                error => {
                                    DEFAULT_ERROR_CALLBACK(error);
                                });
                        }}>
                        {formikProps => (
                            <KeyboardViewContainer style={{ alignItems: 'flex-start', marginTop: 20, height: heightPercentageToDP('77%'), justifyContent: 'flex-start' }}>
                                <CustomInputField
                                    formikProps={formikProps}
                                    value={'url'}
                                    placeholder={'Eg. www.thejohndoe.com'}
                                    placeholderTextColor={'#D0D0D0'}
                                    keyboardType={'url'}
                                    show
                                    inputContainer={styles.inputContainer}
                                    label={'Enter URL to your blog/website'}
                                    labelStyle={styles.labelStyle}
                                />

                                <CustomInputField
                                    formikProps={formikProps}
                                    value={'name'}
                                    placeholder={'Eg. johndoe27'}
                                    placeholderTextColor={'#D0D0D0'}
                                    keyboardType={'default'}
                                    show={formikProps.values['name'].length > 0}
                                    inputContainer={styles.inputContainer}
                                    label={'Enter your Instagram username'}
                                    labelStyle={styles.labelStyle}
                                />

                                <Text style={styles.middleTxtStyle}>Please share at least one or both <Text style={{ color: '#EF709D' }}>*</Text></Text>
                                <View style={styles.middleLine}></View>

                                <CustomInputField
                                    formikProps={formikProps}
                                    value={'email'}
                                    placeholder={'Eg. john.doe@gmail.com'}
                                    placeholderTextColor={'#D0D0D0'}
                                    keyboardType={'email-address'}
                                    inputContainer={styles.inputContainer}
                                    label={'Enter your Email'}
                                    requiredLabel={'*'}
                                    show
                                    labelStyle={styles.labelStyle}
                                />

                                <Text style={styles.middleTxtStyle}>Your email will be used for application updates</Text>

                                <View style={styles.btmContainer}>
                                    <ThemeButton onSubmit={formikProps.handleSubmit}
                                        disabled={
                                            !(formikProps.values['name'].length > 0 ||
                                                formikProps.values['url'].length > 0) || !(formikProps.isValid && formikProps.dirty)}
                                        buttonStyle={[styles.btnStyle, formikProps.isValid && formikProps.dirty ? { backgroundColor: Colors.PRIMARY } : { backgroundColor: '#979797' }]}
                                        labelStyle={styles.txtStyle}
                                        label={'Apply Now'}
                                    />
                                    <ToggleButton
                                        innerContainer={styles.toggleInnerContainer}
                                        txt={'Frequently Asked Questions'}
                                        txtStyle={styles.bottomTxtStyle}
                                        upComponent={<FaqUpIcon />}
                                        downComponent={<FaqDownIcon />}
                                        isVisible={true}
                                        onSubmit={toggleModalInfo}
                                    />
                                </View>
                            </KeyboardViewContainer>
                        )}
                    </Formik>
                </ScrollView>
            </View>


            <ModalSubmission
                isVisible={isSubmissionModalOpen}
                onCancel={() => { setIsSubmissionModalOpen(false) }}
                handleClick={handleBtn}
            />

            <ModalFAQ
                faqItems={faqItems}
                isVisible={isVisible}
                onSwipeHide={toggleModalInfo}
            />

        </SafeAreaContainer>
    );
};

export default ApplyAsPro;

const styles = StyleSheet.create({
    container: {
        paddingTop: '9%',
        backgroundColor: Colors.TRANSPARENT,
    },
    innerContainer: {
        marginTop: 10,
        marginLeft: '7%',
        marginRight: '7%',
        width: '86%',
        marginBottom: heightPercentageToDP('14%')
    },

    toggleInnerContainer: {
        flexDirection: 'row',
        marginTop: 15,
        justifyContent: 'center',
        alignItems: 'center'
    },
    btnStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '88%',
        height: heightIntoDP(55),
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 0 },
        shadowRadius: 10,
        shadowOpacity: 0.16,
        elevation: 8,
        borderRadius: 18
    },
    headingStyle: {
        color: Colors.PRIMARY
    },
    btmContainer: {
        width: '100%',
        position: 'absolute',
        bottom: 25,
        alignItems: 'center'
    },
    bottomTxtStyle: {
        fontSize: Typography._14,
        marginRight: 3,
        fontFamily: Fonts.MEDIUM,
        color: Colors.SECONDARY_TEXT
    },
    txtStyle: {
        fontSize: Typography._16,
        fontFamily: Fonts.MEDIUM,
        color: Colors.WHITE
    },
    labelStyle: {
        fontSize: Typography._14,
        fontFamily: Fonts.MEDIUM,
        color: Colors.PRIMARY,
        marginBottom: 10
    },
    middleTxtStyle: {
        fontSize: Typography._14,
        fontFamily: Fonts.MEDIUM,
        color: '#B0B0B0',
    },
    middleLine: {
        width: '100%',
        backgroundColor: '#B0B0B0',
        height: 0.3,
        marginVertical: 25
    },
    inputContainer: {
        width: '100%',
        borderColor: '#F0EFFF',
        fontSize: Typography._14,
        fontFamily: Fonts.MEDIUM,
        color: Colors.LABEL,
        borderWidth: 1,
        borderRadius: 14,
        backgroundColor: Colors.WHITE,
        paddingVertical: 14,
        paddingLeft: 15
    }
});
