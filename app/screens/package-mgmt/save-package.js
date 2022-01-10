import { Formik } from 'formik';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import FastImage from 'react-native-fast-image';
import IconButton from '../../components/buttons/icon-button';
import ThemeButton from '../../components/buttons/theme-button';
import { Toggle } from '../../components/form/formInput/switch';
import { HeaderBar } from '../../components/header/header';
import { NextIcon } from '../../icons/next';
import DataService from '../../services/data-service';
import { Colors, Typography } from "../../theme";
import { Fonts } from "../../theme/fonts";
import { SafeAreaContainer } from '../../utils/app-container';
import { DEFAULT_ERROR_CALLBACK, heightIntoDP, widthIntoDP, SHOW_INFO_NOTIFICATION } from '../../utils/app-util';
import { styles } from './style';


export const SavePackage = ({ route, navigation }) => {
    const { pckgObj, pckgIconUrl, pckgColor } = route.params;
    console.log(pckgObj, 'pckgOBj');

    const onSubmit = (values) => {
        pckgObj.isCurrentlyAvailable = values.isCurrentlyAvailable;
        pckgObj.isVirtual = values.isVirtual;
        DataService.savePackage(pckgObj).subscribe(
            resp => {
                navigation.navigate('Expert');
                SHOW_INFO_NOTIFICATION('Package created successfully')
            },
            error => DEFAULT_ERROR_CALLBACK(error)
        );
    }

    return (
        <SafeAreaContainer>
            <HeaderBar
                containerStyle={{ top: 0, position: 'relative' }}
                backButton
                title={'Save Package'}
                txtStyle={localStyles.titleStyle}
                leftClick={() => {
                    navigation.goBack();
                }}
            />

            <View style={localStyles.pckgContainer}>
                <View style={{ width: '35%', padding: 16, justifyContent: 'center' }}>
                    <FastImage
                        style={{ width: '100%', height: '100%', borderRadius: 18, aspectRatio: 1 }}
                        source={{
                            uri: pckgIconUrl,
                            priority: FastImage.priority.normal,
                        }}
                        resizeMode={FastImage.resizeMode.contain}
                    />

                </View>
                <View style={{ width: '65%', justifyContent: 'center', paddingLeft: 20 }}>
                    <View>
                        <Text style={localStyles.pckgTitleStyle}>{pckgObj.selectedPackage}</Text>
                        <Text style={[localStyles.amountStyle, { color: pckgColor }]}>{`Rs. ${pckgObj.cost}`}</Text>
                    </View>
                </View>
            </View>

            <Formik
                initialValues={{
                    isCurrentlyAvailable: pckgObj.isCurrentlyAvailable ? pckgObj.isCurrentlyAvailable : false,
                    isVirtual: pckgObj.isVirtual ? pckgObj.isVirtual : false
                }}
                onSubmit={values => {
                    onSubmit(values);
                }}>
                {formikProps => (
                    <>
                        <View style={{ width: '85%', alignSelf: 'center' }}>
                            <Text style={[localStyles.titleStyle, { marginBottom: 5 }]}>{'Delivery Information'}</Text>

                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10, borderBottomWidth: 1, borderColor: '#F0EFFF', paddingVertical: 20 }}>
                                <View>
                                    <Text style={localStyles.switchTitle}>Is this a virtual session</Text>
                                    <Text style={localStyles.switchSubTitle}>Will be listed on package details</Text>
                                </View>
                                <Toggle
                                    formikProps={formikProps}
                                    value={'isVirtual'}
                                    backgoundActiveColor={Colors.PRIMARY}
                                />
                            </View>

                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginVertical: 10 }}>
                                <View>
                                    <Text style={localStyles.switchTitle}>Availability</Text>
                                    <Text style={localStyles.switchSubTitle}>You can always change this later</Text>
                                </View>
                                <Toggle
                                    formikProps={formikProps}
                                    value={'isCurrentlyAvailable'}
                                    backgoundActiveColor={Colors.PRIMARY}
                                />
                            </View>
                        </View>

                        <>
                            <View style={localStyles.saveContainer} />
                            <ThemeButton
                                buttonStyle={localStyles.saveBtnContainer}
                                label='Create Package'
                                labelStyle={styles.labelStyle}
                                onSubmit={formikProps.handleSubmit}
                            />
                        </>
                    </>
                )}
            </Formik>
        </SafeAreaContainer>
    );
}

export const localStyles = StyleSheet.create({
    titleStyle: {
        fontSize: Typography._16,
        fontFamily: Fonts.HEAVY,
        color: Colors.LABEL
    },
    saveBtnContainer: {
        marginTop: 20,
        width: widthIntoDP(270),
        position: 'absolute',
        bottom: 0, marginBottom: 20,
        height: heightIntoDP(60),
        borderRadius: 18,
        backgroundColor: Colors.PRIMARY,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 0 },
        shadowRadius: 6,
        shadowOpacity: 0.12
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
    },
    pckgContainer: {
        width: '85%',
        alignSelf: 'center',
        height: heightIntoDP(136),
        borderRadius: 18,
        backgroundColor: '#FAFAFA',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: heightIntoDP(40),
        marginBottom: heightIntoDP(40)
    },
    pckgTitleStyle: {
        fontSize: Typography._17,
        fontFamily: Fonts.HEAVY,
        color: Colors.LABEL
    },
    amountStyle: {
        fontSize: Typography._12,
        fontFamily: Fonts.HEAVY,
        marginVertical: Typography._14
    },
    availableStyle: {
        fontSize: Typography._12,
        fontFamily: Fonts.MEDIUM,
        color: '#979797'
    },
    switchTitle: {
        fontSize: Typography._16,
        fontFamily: Fonts.MEDIUM,
        color: Colors.LABEL
    },
    switchSubTitle: {
        fontSize: Typography._12,
        fontFamily: Fonts.MEDIUM,
        color: Colors.SECONDARY_TEXT,
        marginTop: 6
    }
});

export default SavePackage;