import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, View, KeyboardAvoidingView } from 'react-native';
import { heightPercentageToDP } from 'react-native-responsive-screen';
import ThemeButton from '../../components/buttons/theme-button';
import { BottomHalfModal } from '../../components/modals/bottom-half-modal/bottomhalf-modal';
import { Colors, Typography } from "../../theme";
import { Fonts } from "../../theme/fonts";
import { heightIntoDP } from '../../utils/app-util';
import { styles } from './style';
import { Input } from 'native-base';
import Bro from 'brototype';
import IconButton from '../../components/buttons/icon-button';
import { UseTemplateIcon } from '../../icons/use-template';
import { WhyTextValidation } from '../../services/validations';
import { Formik } from 'formik';
import ErrorContainer from '../../components/form/error-container';
import { RemoveBadgeItemIcon } from '../../icons/remove-item-badge-icon';
import Modal, { ModalContent } from 'react-native-modals';

export const WhyDoItModal = ({ isVisible, onSwipeHide, pckgTemplate, pckgObj, updatePckgSubmit }) => {
    const packageService = Bro(pckgTemplate).iCanHaz('packages.whyText');
    const [isShow, setIsShow] = useState(true);
    const [charLength, setCharLength] = useState(500);

    const BodyComponent = () => {
        return (
            <View style={[styles.modalContainer, { flex: 1 }]}>
                <View style={styles.lineContainer}>
                    <View style={styles.line}></View>
                </View>
                <View style={[styles.modalHeading, { marginBottom: 30 }]}>
                    <Text style={styles.heading}>Why Do It?</Text>
                </View>

                <Formik
                    initialValues={{ whyText: pckgObj.whyText || '' }}
                    validationSchema={WhyTextValidation}
                    onSubmit={values => {
                        pckgObj.whyText = values.whyText;
                        updatePckgSubmit(pckgObj);
                        onSwipeHide();
                    }}>
                    {formikProps => (
                        <>

                            <KeyboardAvoidingView>
                                <ScrollView style={{ width: '85%', alignSelf: 'center', marginBottom: heightIntoDP(50) }}
                                    showsVerticalScrollIndicator={false}>
                                    <View style={{ width: '100%' }}>
                                        <Text style={styles.modalTitleStyle}>
                                            What should your client expect from this services?
                                    </Text>

                                        <Text style={localStyles.label2}>You can use our template or add a description</Text>


                                        <View style={{ height: heightIntoDP(180), flexDirection: 'row', borderRadius: 20, borderWidth: 1.5, borderColor: '#F0EFFF', padding: 10, paddingLeft: 16, marginBottom: 6 }}>
                                            <Input
                                                style={localStyles.txtStyle}
                                                placeholder={'Type your custom description...'}
                                                placeholderTextColor={Colors.SECONDARY_TEXT}
                                                keyboardType={'default'}
                                                autoCapitalize="none"
                                                multiline={true}
                                                autoCompleteType="off"
                                                autoFocus={false}
                                                autoCorrect={false}
                                                onChangeText={(text) => {
                                                    if ((charLength - text.length) >= 0) {
                                                        formikProps.setFieldValue('whyText', text);
                                                        pckgObj.whyText = text;
                                                    }
                                                }}
                                                onBlur={formikProps.handleBlur('whyText')}
                                                value={formikProps.values['whyText']}
                                            />
                                            {formikProps.values.whyText ? <IconButton
                                                iconComponent={<RemoveBadgeItemIcon height={18} width={18} />}
                                                buttonStyle={{ alignSelf: 'flex-start' }}
                                                onSubmit={() => {
                                                    if (pckgTemplate.whyText === formikProps.values['whyText']) {
                                                        formikProps.setFieldValue(`whyText`, '');
                                                        pckgObj.whyText = '';
                                                        setIsShow(true);
                                                    } else {
                                                        formikProps.setFieldValue(`whyText`, '');
                                                        pckgObj.whyText = '';
                                                    }
                                                }}
                                            /> : <></>}
                                        </View>



                                        <Text style={localStyles.charLengthStyle}>{charLength - formikProps.values['whyText'].length}</Text>

                                        {
                                            formikProps.errors['whyText'] && formikProps.touched['whyText'] && (
                                                <ErrorContainer formikProps={formikProps} value={'whyText'} />
                                            )}

                                        {isShow ?
                                            <>
                                                <IconButton
                                                    buttonStyle={localStyles.useTmpContainer}
                                                    iconComponent={<UseTemplateIcon />}
                                                    onSubmit={() => {
                                                        let temp = pckgTemplate.whyText;
                                                        formikProps.setFieldValue('whyText', temp);
                                                        pckgObj.whyText = temp;
                                                        setIsShow(false);
                                                    }}
                                                />

                                                <Text style={localStyles.tempTextStyle}>
                                                    {pckgTemplate.whyText ? `''${pckgTemplate.whyText}''` : ''}
                                                </Text>
                                            </> : <></>}

                                    </View>
                                </ScrollView>
                            </KeyboardAvoidingView>
                            <>
                                <View style={styles.saveContainer} />
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
        // <BottomHalfModal
        //     isVisible={isVisible}
        //     onSwipeHide={onSwipeHide}
        //     body={<BodyComponent />}
        //     bodyContainer={{ paddingBottom: 0, height: heightPercentageToDP('93%') }}
        // />
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
        fontSize: Typography._14,
        fontFamily: Fonts.ROMAN,
        color: Colors.SECONDARY_TEXT,
        textAlignVertical: 'top',
        padding: 10,
        width: '100%',
        lineHeight: Typography._20
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
        lineHeight: Typography._22
    }
});

export default WhyDoItModal;

