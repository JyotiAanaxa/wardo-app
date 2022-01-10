import { Formik } from 'formik';
import { Input } from 'native-base';
import React, { useEffect, useState, useRef } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { heightPercentageToDP } from 'react-native-responsive-screen';
import IconButton from '../../components/buttons/icon-button';
import ThemeButton from '../../components/buttons/theme-button';
import { BottomHalfModal } from '../../components/modals/bottom-half-modal/bottomhalf-modal';
import { RemoveBadgeItemIcon } from '../../icons/remove-item-badge-icon';
import { CustomQuestValidation } from '../../services/validations';
import { Colors, Typography } from "../../theme";
import { Fonts } from "../../theme/fonts";
import { heightIntoDP } from '../../utils/app-util';
import CustomTemplateView from './custom-ques-template-view';
import Modal, { ModalContent } from 'react-native-modals';
import { styles } from './style';

export const CustomerQuestionModal = ({ isVisible, onSwipeHide, pckgTemplate, pckgObj, updatePckgSubmit }) => {
    const [templateList, setTemplateList] = useState(pckgTemplate);
    const childRef = useRef();

    const BodyComponent = () => {
        return (
            <View style={[styles.modalContainer, { flex: 1 }]}>
                <View style={styles.lineContainer}>
                    <View style={styles.line}></View>
                </View>
                <View style={[styles.modalHeading, { marginBottom: 30 }]}>
                    <Text style={styles.heading}>Customer Questions</Text>
                </View>

                <Formik
                    initialValues={{ customerQuestions: pckgObj.customerQuestions ? pckgObj.customerQuestions : [''] }}
                    validationSchema={CustomQuestValidation}
                    onSubmit={values => {
                        pckgObj.customerQuestions = values.customerQuestions;
                        updatePckgSubmit(pckgObj);
                        onSwipeHide();
                    }}>
                    {formikProps => (
                        <>

                            <ScrollView style={{ width: '85%', alignSelf: 'center' }}
                                keyboardDismissMode='on-drag'
                                keyboardShouldPersistTaps='always'
                                showsVerticalScrollIndicator={false}>
                                <View style={{ width: '100%' }}>
                                    <Text style={styles.modalTitleStyle}>
                                        Any specific questions you have for your customers?
                        </Text>

                                    <Text style={[localStyles.descStyle, { marginTop: 18, marginBottom: 14 }]}>
                                        You will have access to their favorite brands, style, budget, size, fit & style icons
                        </Text>

                                    {formikProps.values.customerQuestions.map(({ text }, index) => (
                                        <>
                                            <View key={index} style={{ alignItems: 'center', borderRadius: 12, borderWidth: 1.5, borderColor: '#F0EFFF', paddingHorizontal: 10, marginTop: 10, marginBottom: 8, justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center' }}>
                                                <Input
                                                    style={localStyles.txtStyle}
                                                    placeholder={'Eg.What are your goals from this service?'}
                                                    placeholderTextColor={Colors.SECONDARY_TEXT}
                                                    keyboardType={'default'}
                                                    autoCapitalize="none"
                                                    autoCompleteType="off"
                                                    multiline={true}
                                                    autoFocus={false}
                                                    autoCorrect={false}
                                                    onChangeText={formikProps.handleChange(`customerQuestions[${index}]`)}
                                                    onBlur={formikProps.handleBlur(`customerQuestions[${index}]`)}
                                                    value={formikProps.values.customerQuestions[index]}
                                                />

                                                {formikProps.values.customerQuestions[index] ? <IconButton
                                                    iconComponent={<RemoveBadgeItemIcon height={18} width={18} />}
                                                    buttonStyle={{ alignSelf: 'flex-start' }}
                                                    onSubmit={() => {
                                                        let temp = [...formikProps.values.customerQuestions];
                                                        if (pckgTemplate.includes(formikProps.values.customerQuestions[index])) {
                                                            childRef.current.onAddTemplate(formikProps.values.customerQuestions[index]);
                                                            let newTemp = temp.filter(item => item !== formikProps.values.customerQuestions[index]);
                                                            formikProps.setFieldValue(`customerQuestions`, newTemp);
                                                        }
                                                        else {
                                                            formikProps.setFieldValue(`customerQuestions[${index}]`, '');
                                                        }
                                                    }}
                                                /> : <></>}
                                                {
                                                    formikProps.errors['customerQuestions'] && formikProps.touched['customerQuestions'] && (
                                                        <ErrorContainer formikProps={formikProps} value={'customerQuestions'} />
                                                    )}
                                            </View>
                                        </>
                                    ))}

                                    {templateList.length > 0 ? <CustomTemplateView
                                        formikProps={formikProps}
                                        template={templateList}
                                        packageTemplate={pckgTemplate}
                                        ref={childRef}
                                    /> : <></>}

                                    <View style={{ height: 100 }} />
                                </View>
                            </ScrollView>

                            <>
                                <View style={localStyles.saveContainer} />
                                <ThemeButton
                                    buttonStyle={styles.saveBtnContainer}
                                    label='Save'
                                    labelStyle={styles.labelStyle}
                                    onSubmit={formikProps.handleSubmit}
                                />
                            </>
                        </>
                    )}
                </Formik>
            </View>
        );
    }

    useEffect(() => {
        setTemplateList(pckgTemplate);
    })

    return (
        <Modal.BottomModal
        visible={isVisible}
        modalStyle={{ borderTopLeftRadius: 40, borderTopRightRadius: 40 }}
        width={1}
        height={0.93}
        onSwipeOut={onSwipeHide}
        style={{ padding: 0 }}
    >
        <BodyComponent />
    </Modal.BottomModal>
    );
}

export const localStyles = StyleSheet.create({
    label2: {
        fontFamily: Fonts.ROMAN,
        fontSize: Typography._14,
        color: Colors.SECONDARY_TEXT,
        marginTop: 18,
        marginBottom: 14
    },
    txtStyle: {
        fontSize: Typography._13,
        fontFamily: Fonts.ROMAN,
        color: Colors.SECONDARY_TEXT,
        textAlignVertical: 'center',
        lineHeight: Typography._20,
        width: '100%'
    },
    charLengthStyle: {
        fontSize: Typography._12,
        fontFamily: Fonts.ROMAN,
        color: Colors.SECONDARY_TEXT,
        textAlign: 'right',
        marginRight: 10
    },
    useTmpContainer: {
        alignSelf: 'center',
        marginTop: 18,
        marginBottom: 25
    },
    tempTextStyle: {
        fontSize: Typography._14,
        fontFamily: Fonts.ROMAN,
        color: Colors.SECONDARY_TEXT,
        lineHeight: Typography._20
    },
    intervalStyle: {
        borderRadius: 12,
        height: heightIntoDP(60),
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    intervalTxtStyle: {
        fontSize: Typography._13,
        fontFamily: Fonts.ROMAN
    },
    descStyle: {
        fontSize: Typography._14,
        fontFamily: Fonts.ROMAN,
        color: Colors.SECONDARY_TEXT,
        marginBottom: 14,
        lineHeight: Typography._20
    },
    closetTxtStyle: {
        fontSize: Typography._13,
        fontFamily: Fonts.ROMAN,
        color: Colors.SECONDARY_TEXT,
        marginLeft: 14
    },
    templateTxtStyle: {
        fontSize: Typography._12,
        fontFamily: Fonts.ROMAN,
        color: Colors.SECONDARY_TEXT,
        lineHeight: Typography._16,
        marginLeft: 14
    },
    saveContainer: {
        position: 'absolute',
        width: '100%',
        opacity: 1,
        height: heightIntoDP(100),
        backgroundColor: Colors.WHITE,
        opacity: 0.6,
        bottom: 0,
        zIndex: 0
    }
});

export default CustomerQuestionModal;
