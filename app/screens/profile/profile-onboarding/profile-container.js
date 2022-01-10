import { Text, View } from 'native-base';
import React from 'react';
import { StyleSheet, KeyboardAvoidingView } from 'react-native';
import { Colors } from '../../../theme';
import FormButton from '../../../components/buttons/form-button';
import InputField from '../../../components/form/formInput/input-field';
import ForwardArrow from '../../../icons/forwardArrow.js';
import { FormSteps } from '../../../components/form/form-progress';
import { AppConstants } from '../../../utils/app-constants';
import { Fonts } from '../../../theme/fonts';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import ExperienceCardField from '../../../components/form/experience-card-field';
import CheckListField from '../../../components/form/check-list-field';
import LinearGradient from 'react-native-linear-gradient';


const ProfileContainer = ({
    labelLine1,
    labelLine2,
    formikProps,
    placeholder,
    keyboardType,
    inputType,
    items,
    itemStyle,
    titleStyle,
    numColumns,
    checkboxStyle,
    touchContainer,
    value,
    props
}) => {
    const inputProp = (inputType) => {
        switch (inputType) {
            case AppConstants.PROFILE_FORM.CHECK_LIST:
                return (
                    <CheckListField
                        formikProps={formikProps}
                        value={value}
                        touchContainer={touchContainer}
                        itemList={items}
                        itemStyle={itemStyle}
                        titleStyle={titleStyle}
                        userObj={props.userObj}
                        props={props}
                        numColumns={numColumns}
                        checkboxStyle={checkboxStyle}
                    />
                );
            case AppConstants.PROFILE_FORM.EXPERIENCE:
                return (
                    <ExperienceCardField
                        formikProps={formikProps}
                        value={value}
                        userObj={props.userObj}
                        placeholder={placeholder}
                        keyboardType={keyboardType}
                        items={items}
                    />
                );
            case AppConstants.PROFILE_FORM.TEXT:
                return (
                    <InputField
                        formikProps={formikProps}
                        value={value}
                        userObj={props.userObj}
                        placeholder={placeholder}
                        keyboardType={keyboardType}
                        cardContainer
                        textStyle={styles.placeholderStyle}
                    />
                );
        }
    }

    return (
        <KeyboardAvoidingView style={[styles.cont]}>
            <View style={styles.mainContainer}>
                <>
                    <Text style={styles.labelPrimary}>{labelLine1}</Text>
                    <Text style={styles.labelSecondary}>{labelLine2}</Text>
                </>
                <View style={styles.container}>
                    {inputProp(inputType)}
                </View>
                <FormButton
                    icon={<ForwardArrow />}
                    btnStyle={styles.btnContainer}
                    onSubmit={formikProps.handleSubmit}
                    isLoading={props.isLoading}
                    btnText={false}
                    formSteps={props.formSteps && <FormSteps progress={props.progress} step={props.currentStep} totalStep={props.totalStep} />}
                />
            </View>
        </KeyboardAvoidingView >
    );
};

const styles = StyleSheet.create({
    cont: {
        flex: 1,
        alignItems: 'center',
        width: wp('100%'),
        paddingTop: hp('9%'),
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
    }
});

export default ProfileContainer;
