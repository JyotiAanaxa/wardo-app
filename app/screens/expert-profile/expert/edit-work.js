import { Formik } from 'formik';
import { Text, View } from 'native-base';
import React, { useEffect, useState } from 'react';
import { KeyboardAvoidingView, StyleSheet } from 'react-native';
import { heightPercentageToDP, heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import ThemeButton from '../../../components/buttons/theme-button';
import CheckListField from '../../../components/form/check-list-field';
import { HeaderBar } from '../../../components/header/header';
import { Loader } from '../../../components/loader/loader';
import AuthService from '../../../services/auth';
import { WorkValidation } from '../../../services/validations';
import { Colors, Typography } from '../../../theme';
import { Fonts } from '../../../theme/fonts';
import { convertIntoFlatListObj, DEFAULT_ERROR_CALLBACK, heightIntoDP, widthIntoDP } from '../../../utils/app-util';
import WorkListField from '../../../components/form/work-list-field';


const EditWork = ({ route, navigation }) => {
    const { userObj } = route.params;
    const [config, setConfig] = useState(null);
    const [isConfigLoading, setIsConfigLoading] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = (values) => {
        setIsLoading(true);
        userObj.stylistInfo.typesOfworkDone = values.typesOfworkDone;
        AuthService.patchUpdate('stylistInfo.typesOfworkDone', userObj).subscribe(
            async (data) => {
                setIsLoading(false);
                navigation.goBack();
            },
            error => {
                DEFAULT_ERROR_CALLBACK(error);
                setIsLoading(false);
            });
    }

    const updateConfig = async () => {
        setIsConfigLoading(true);
        const userConfig = await AuthService.getConfig();
        setConfig(userConfig);
        setIsConfigLoading(false);
    }

    useEffect(() => {
        updateConfig();
    }, []);

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
                initialValues={{ typesOfworkDone: '' }}
                validationSchema={WorkValidation}
                onSubmit={values => {
                    handleSubmit(values);
                }}>
                {formikProps => (
                    <>
                        <KeyboardAvoidingView style={[styles.cont]}>
                            <View style={styles.mainContainer}>
                                <>
                                    <Text style={styles.labelPrimary}>{'What type of work'}</Text>
                                    <Text style={styles.labelSecondary}>{'Have You Done?'}</Text>
                                </>
                                <View style={styles.container}>
                                    {isConfigLoading ?
                                        <Loader size={30} color={Colors.PRIMARY} /> :
                                        config ? <WorkListField
                                            formikProps={formikProps}
                                            value={'typesOfworkDone'}
                                            itemList={convertIntoFlatListObj(config.typesOfWork)}
                                            itemStyle={styles.workItem}
                                            titleStyle={styles.workTitle}
                                            touchContainer={styles.workTouchContainer}
                                            numColumns={1}
                                            checkboxStyle={styles.workCheckboxStyle}
                                            userObj={userObj.stylistInfo}
                                            editWork
                                        /> : <></>
                                    }
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
    workCheckboxStyle: {
        marginRight: 5
    },
    workTouchContainer: {
        backgroundColor: Colors.WHITE,
        width: '100%',
        marginLeft: -5
    },
    workItem: {
        marginBottom: 15,
        paddingBottom: 10,
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    workTitle: {
        color: 'black',
        fontSize: Typography._18,
        color: '#B0B0B0',
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

export default EditWork;
