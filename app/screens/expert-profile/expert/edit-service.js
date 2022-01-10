import { Text, View } from 'native-base';
import React, { useState } from 'react';
import { StyleSheet, KeyboardAvoidingView } from 'react-native';
import { Colors, Typography } from '../../../theme';
import { Fonts } from '../../../theme/fonts';
import { heightPercentageToDP as hp, widthPercentageToDP as wp, heightPercentageToDP } from 'react-native-responsive-screen';
import CheckListField from '../../../components/form/check-list-field';
import { HeaderBar } from '../../../components/header/header';
import { Formik } from 'formik';
import { ServiceValidation } from '../../../services/validations';
import { convertIntoFlatListObj, widthIntoDP, heightIntoDP } from '../../../utils/app-util';
import ThemeButton from '../../../components/buttons/theme-button';
import AuthService from '../../../services/auth';


const EditService = ({ route, navigation }) => {
    const { userObj, config } = route.params;
    const [isLoading, setIsLoading] = useState(false);
    const handleSubmit = (values) => {
        setIsLoading(true);
        userObj.stylistInfo.specialities = values.specialities;
        AuthService.patchUpdate('stylistInfo.specialities', userObj).subscribe(
            async (data) => {
                console.log(data, "USER DATA");
                setIsLoading(false);
                navigation.goBack();
            },
            error => {
                DEFAULT_ERROR_CALLBACK(error);
                setIsLoading(false);
            });
    }

    return (
        <>
            <HeaderBar
                containerStyle={{ top: 0 }}
                backButton
                leftClick={() => {
                    navigation.goBack();
                }}
            />
            <Formik
                initialValues={{ specialities: '' }}
                validationSchema={ServiceValidation}
                onSubmit={values => {
                    handleSubmit(values);
                }}>
                {formikProps => (
                    <>
                        <KeyboardAvoidingView style={[styles.cont]}>
                            <View style={styles.mainContainer}>
                                <>
                                    <Text style={styles.labelPrimary}>{'What Services Do'}</Text>
                                    <Text style={styles.labelSecondary}>{'You Specialize In?'}</Text>
                                </>
                                <View style={styles.container}>
                                    <CheckListField
                                        formikProps={formikProps}
                                        value={'specialities'}
                                        itemList={convertIntoFlatListObj(config.stylistSpecialies)}
                                        itemStyle={styles.serviceItem}
                                        titleStyle={styles.serviceTitle}
                                        touchContainer={styles.serviceTouchContainer}
                                        numColumns={2}
                                        checkboxStyle={styles.serviceCheckboxStyle}
                                        userObj={userObj.stylistInfo}
                                    />
                                </View>
                            </View>
                        </KeyboardAvoidingView >
                        <ThemeButton
                            buttonStyle={styles.btnStyle}
                            label={'Save'}
                            labelStyle={styles.labelStyle}
                            onSubmit={formikProps.handleSubmit}
                            isLoading={isLoading}
                        />
                    </>
                )}
            </Formik>
        </>
    );
};

const styles = StyleSheet.create({
    cont: {
        flex: 1,
        alignItems: 'center',
        width: wp('100%'),
        paddingTop: hp('9%'),
        backgroundColor: Colors.WHITE
    },
    mainContainer: {
        flex: 1,
        width: '85%',
        alignItems: 'flex-start'
    },
    container: {
        marginTop: 40,
        flex: 1,
        width: '100%'
    },
    labelPrimary: {
        fontSize: hp('3.3'),
        opacity: 0.8,
        color: Colors.LABEL,
        fontFamily: Fonts.MEDIUM,
    },
    labelSecondary: {
        fontSize: hp('3.3'),
        color: Colors.LABEL,
        lineHeight: hp('5.2%'),
        fontFamily: Fonts.BOLD,
    },
    btnContainer: {
        width: '100%',
        position: 'absolute',
        bottom: 30
    },
    placeholderStyle: {
        fontWeight: '900',
        fontFamily: Fonts.HEAVY
    },
    serviceCheckboxStyle: {
        position: 'absolute',
        right: 8,
        top: 8
    },
    serviceTouchContainer: {
        backgroundColor: Colors.WHITE,
        width: '50%'
    },
    serviceItem: {
        backgroundColor: Colors.WHITE,
        marginTop: 10,
        marginBottom: 15,
        width: '89%',
        alignItems: 'center',
        borderColor: '#D0D0D0',
        borderWidth: 1,
        borderRadius: 18,
        height: hp('22%'),
        position: 'relative',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 0 },
        shadowRadius: 6,
        shadowOpacity: 0.12,
        elevation: 8,
    },
    serviceTitle: {
        position: 'absolute',
        bottom: 12,
        color: 'black',
        fontSize: Typography._14,
        color: '#80838C',
        fontFamily: Fonts.MEDIUM
    },
    btnStyle: {
        width: widthIntoDP(190),
        height: heightIntoDP(60),
        borderRadius: 18,
        backgroundColor: Colors.PRIMARY,
        elevation: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 0 },
        shadowRadius: 6,
        shadowOpacity: 0.12,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        position: 'absolute',
        bottom: heightPercentageToDP('4%')
    },
    labelStyle: {
        fontSize: Typography._16,
        color: Colors.WHITE,
        fontFamily: Fonts.MEDIUM,
    }
});

export default EditService;
