import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { BottomHalfModal } from '../../components/modals/bottom-half-modal/bottomhalf-modal';
import { styles } from './style';
import { widthPercentageToDP, heightPercentageToDP } from 'react-native-responsive-screen';
import ThemeButton from '../../components/buttons/theme-button';
import { heightIntoDP, widthIntoDP } from '../../utils/app-util';
import { Colors, Typography } from "../../theme";
import { Fonts } from "../../theme/fonts";
import { Input } from 'native-base';
import { TagIcon } from '../../icons/tag';
import { Formik } from 'formik';
import ErrorContainer from '../../components/form/error-container';
import Bro from 'brototype';
import { CostValidation } from '../../services/validations';
import IconButton from '../../components/buttons/icon-button';
import { RemoveBadgeItemIcon } from '../../icons/remove-item-badge-icon';
import Modal, { ModalContent } from 'react-native-modals';

export const EnterCostModal = ({ isVisible, onSwipeHide, pckgTemplate, pckgObj, updatePckgSubmit }) => {
    const packageCosts = Bro(pckgTemplate).iCanHaz('costs');
    const [cost, setCost] = useState('');

    const BodyComponent = () => {
        return (
            <View style={[styles.modalContainer, { flex: 1 }]}>
                <View style={styles.lineContainer}>
                    <View style={styles.line}></View>
                </View>
                <View style={[styles.modalHeading, { marginBottom: 30 }]}>
                    <Text style={styles.heading}>Enter a Cost</Text>
                </View>

                <Formik
                    initialValues={{ costs: pckgObj.cost ? pckgObj.cost === 0 ? '' : pckgObj.cost.toString() : '' }}
                    validationSchema={CostValidation}
                    onSubmit={values => {
                        pckgObj.cost = parseInt(values.costs);
                        updatePckgSubmit(pckgObj);
                        onSwipeHide();
                    }}>
                    {formikProps => (
                        <>

                            <ScrollView style={{ width: '85%', alignSelf: 'center' }}
                                showsVerticalScrollIndicator={false}>
                                <View style={{ width: '100%' }}>
                                    <Text style={styles.modalTitleStyle}>
                                        How much would you like to charge for this service?
                        </Text>

                                    <View style={localStyles.amountContainer}>
                                        {formikProps.values['costs'] ? <Text style={localStyles.currencyStyle}>{'₹'}</Text> : <></>}
                                        <Input
                                            style={localStyles.txtStyle}
                                            placeholder={'Enter The Amount...'}
                                            placeholderTextColor={Colors.SECONDARY_TEXT}
                                            keyboardType={'number-pad'}
                                            autoCapitalize="none"
                                            autoCompleteType="off"
                                            autoFocus={false}
                                            autoCorrect={false}
                                            onChangeText={formikProps.handleChange('costs')}
                                            onBlur={formikProps.handleBlur('costs')}
                                            value={formikProps.values['costs']}
                                        />

                                        {formikProps.values['costs'] ? <IconButton
                                            iconComponent={<RemoveBadgeItemIcon height={18} width={18} />}
                                            buttonStyle={styles.cancelBtnStyle}
                                            onSubmit={() => {
                                                formikProps.setFieldValue('costs', '');
                                                pckgObj.cost = 0;
                                            }}
                                        /> : <></>}

                                    </View>

                                    {
                                        formikProps.errors['costs'] && formikProps.touched['costs'] && (
                                            <ErrorContainer formikProps={formikProps} value={'costs'} />
                                        )}


                                    <Text style={localStyles.descStyle}>
                                        Suggested Cost (Based on market rates)
                        </Text>

                                    {packageCosts.length > 0 && packageCosts.map((item, index) => (
                                        <TouchableOpacity onPress={() => {
                                            formikProps.setFieldValue('costs', (item.cost).toString());
                                            pckgObj.cost = (item.cost);
                                        }}
                                            style={{ width: '100%' }} key={index}>
                                            <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row', backgroundColor: '#F0EFFF', borderRadius: 12, marginBottom: 8, flexWrap: 'wrap', padding: 16 }}>
                                                <View style={{ justifyContent: 'center', alignItems: 'center', marginLeft: -18 }}>
                                                    <TagIcon />
                                                </View>
                                                <View style={{ width: '90%' }}>
                                                    <Text style={localStyles.templateTxtStyle}>{`${item.label}`}</Text>
                                                </View>
                                            </View>
                                        </TouchableOpacity>
                                    ))}




                                    <View style={{ height: 100 }} />
                                </View>
                            </ScrollView>

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
            </View >
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
        fontSize: Typography._13,
        fontFamily: Fonts.ROMAN,
        marginTop: 2,
        color: Colors.SECONDARY_TEXT,
        textAlignVertical: 'center',
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
        marginTop: 25
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
        zIndex: 1
    },
    currencyStyle: {
        fontSize: Typography._16,
        fontFamily: Fonts.ROMAN,
        color: Colors.PRIMARY,
        marginRight: 10
    },
    amountContainer: {
        height: heightIntoDP(50),
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 22,
        marginBottom: 8,
        alignItems: 'center',
        borderRadius: 12,
        borderWidth: 1.5,
        borderColor: '#F0EFFF',
        paddingLeft: 18,
        paddingRight: 8
    },
    cancelBtnStyle: {
        justifyContent: 'flex-end',
        alignItems: 'center',
        height: heightIntoDP(30),
        width: widthIntoDP(30)
    }
});

export default EnterCostModal;
