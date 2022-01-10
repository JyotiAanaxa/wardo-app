import { Formik } from 'formik';
import { Input } from 'native-base';
import React, { useState, useEffect, useRef } from 'react';
import { ScrollView, StyleSheet, Text, View, KeyboardAvoidingView } from 'react-native';
import { heightPercentageToDP } from 'react-native-responsive-screen';
import ThemeButton from '../../components/buttons/theme-button';
import ErrorContainer from '../../components/form/error-container';
import { BottomHalfModal } from '../../components/modals/bottom-half-modal/bottomhalf-modal';
import { WhatTextValidation } from '../../services/validations';
import { Colors, Typography } from "../../theme";
import { Fonts } from "../../theme/fonts";
import { heightIntoDP } from '../../utils/app-util';
import PackageService from './package-service';
import { styles } from './style';
import TemplateView from './template-view';
import { RemoveBadgeItemIcon } from '../../icons/remove-item-badge-icon';
import IconButton from '../../components/buttons/icon-button';
import Modal, { ModalContent } from 'react-native-modals';

export const WhatTheyGetModal = ({ isVisible, onSwipeHide, pckgTemplate, pckgObj, updatePckgSubmit }) => {
    const [templateList, setTemplateList] = useState(pckgTemplate);
    const childRef = useRef();
    let period = 'HOURS';

    const applyPeriod = (val) => {
        period = val;
    }

    const BodyComponent = () => {
        return (
            <View style={[styles.modalContainer, { flex: 1 }]}
                showsVerticalScrollIndicator={false}>
                <View style={styles.lineContainer}>
                    <View style={styles.line}></View>
                </View>
                <View style={[styles.modalHeading, { marginBottom: 30 }]}>
                    <Text style={styles.heading}>What they get?</Text>
                </View>
                <Formik
                    initialValues={{
                        unit: pckgObj.duration && pckgObj.duration.value ? pckgObj.duration.value.toString() : '',
                        deliverables: pckgObj.deliverables ? pckgObj.deliverables : ['']
                    }}
                    validationSchema={WhatTextValidation}
                    onSubmit={values => {
                        pckgObj.duration = { unit: period, value: parseInt(values.unit) };
                        pckgObj.deliverables = values.deliverables;
                        updatePckgSubmit(pckgObj);
                        onSwipeHide();
                    }}>
                    {formikProps => (
                        <>
                            <ScrollView style={{ width: '85%', alignSelf: 'center' }}
                                showsVerticalScrollIndicator={false}>
                                <View style={{ width: '100%', alignSelf: 'center' }}>
                                    <Text style={styles.modalTitleStyle}>
                                        How long will your service take to get delivered?
                        </Text>

                                    <View style={{ width: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: heightIntoDP(22), marginBottom: 8 }}>
                                        <View style={{ height: heightIntoDP(50), width: '49%', borderRadius: 12, borderWidth: 1.5, borderColor: '#F0EFFF', paddingHorizontal: 10 }}>
                                            <Input
                                                style={localStyles.txtStyle}
                                                placeholder={'Enter a number...'}
                                                placeholderTextColor={Colors.SECONDARY_TEXT}
                                                keyboardType={'number-pad'}
                                                autoCapitalize="none"
                                                autoCompleteType="off"
                                                autoFocus={false}
                                                autoCorrect={false}
                                                onChangeText={formikProps.handleChange('unit')}
                                                onBlur={formikProps.handleBlur('unit')}
                                                value={formikProps.values['unit']}
                                            />
                                        </View>
                                        <PackageService
                                            formikProps={formikProps}
                                            applyPeriod={applyPeriod}
                                        />

                                    </View>

                                    {
                                        formikProps.errors['unit'] && formikProps.touched['unit'] && (
                                            <ErrorContainer formikProps={formikProps} value={'unit'} />
                                        )
                                    }

                                    <Text style={[styles.modalTitleStyle, { marginTop: 30, marginBottom: 18 }]}>
                                        What deliverables will your clients receive?
                        </Text>

                                    <Text style={localStyles.descStyle}>
                                        You can use our template or add your own
                        </Text>
                                    {formikProps.values.deliverables.map(({ text }, index) => (
                                        <>
                                            <View key={index} style={{ alignItems: 'center', borderRadius: 12, borderWidth: 1.5, borderColor: '#F0EFFF', paddingHorizontal: 10, marginTop: 10, marginBottom: 8, justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center' }}>
                                                <Input
                                                    style={localStyles.txtStyle}
                                                    placeholder={'Add Deliverable...'}
                                                    placeholderTextColor={Colors.SECONDARY_TEXT}
                                                    keyboardType={'default'}
                                                    autoCapitalize="none"
                                                    autoCompleteType="off"
                                                    multiline={true}
                                                    autoFocus={false}
                                                    autoCorrect={false}
                                                    onChangeText={formikProps.handleChange(`deliverables[${index}]`)}
                                                    onBlur={formikProps.handleBlur(`deliverables[${index}]`)}
                                                    value={formikProps.values.deliverables[index]}
                                                />

                                                {formikProps.values.deliverables[index] ? <IconButton
                                                    iconComponent={<RemoveBadgeItemIcon height={18} width={18} />}
                                                    buttonStyle={{ alignSelf: 'flex-start' }}
                                                    onSubmit={() => {
                                                        let temp = [...formikProps.values.deliverables];
                                                        if (pckgTemplate.includes(formikProps.values.deliverables[index])) {
                                                            childRef.current.onAddTemplate(formikProps.values.deliverables[index]);
                                                            let newTemp = temp.filter(item => item !== formikProps.values.deliverables[index]);
                                                            formikProps.setFieldValue(`deliverables`, newTemp);
                                                        }
                                                        else {
                                                            formikProps.setFieldValue(`deliverables[${index}]`, '');
                                                        }
                                                    }}
                                                /> : <></>}
                                            </View>
                                            {
                                                formikProps.errors['deliverables'] && formikProps.touched['deliverables'] && (
                                                    <ErrorContainer formikProps={formikProps} value={'deliverables'} />
                                                )}
                                        </>
                                    ))}

                                    {templateList.length > 0 ? <TemplateView
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
            </View >
        );
    }

    useEffect(() => {
        setTemplateList(pckgTemplate);
    });

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
        //     avoidKeyboard={false}
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
        marginTop: 25,
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
        height: heightIntoDP(50),
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
        marginBottom: 6
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


export default WhatTheyGetModal;
