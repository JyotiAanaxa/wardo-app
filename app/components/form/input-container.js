import { Text, View } from 'native-base';
import React from 'react';
import { StyleSheet, KeyboardAvoidingView } from 'react-native';
import { Mixins, Spacing } from '../../theme';
import FormButton from '../buttons/form-button';
import GenderCardField from './gender-card-field';
import InputField from '../form/formInput/input-field';
import InputOtp from '../form/formInput/input-otp';
import SwitchCardField from './switch-card-field';
import ForwardArrow from '../../icons/forwardArrow.js';
import { FormSteps } from './form-progress';
import { AppConstants } from '../../utils/app-constants';
import SelectPicker from './formInput/select-picker';
import ClothingCardField from './clothing-card-field';


const InputContainer = ({
    labelLine1,
    labelLine2,
    formikProps,
    placeholder,
    keyboardType,
    btnText,
    countryCode,
    inputType,
    primaryText,
    secondaryText,
    label,
    icon,
    bottomText,
    bottomLabel,
    bottomComponent,
    pickerBottomText,
    progressLabel,
    items,
    value,
    props
}) => {

    const inputProp = (inputType) => {
        switch (inputType) {
            case AppConstants.FORM.TEXT:
                return (
                    <InputField
                        formikProps={formikProps}
                        value={value}
                        placeholder={placeholder}
                        keyboardType={keyboardType}
                        countryCode={countryCode}
                        cardContainer={props.cardContainer}
                        userObj={props.userData}
                    />
                );
            case AppConstants.FORM.GENDER:
                return (
                    <GenderCardField
                        formikProps={formikProps}
                        value={value}
                        items={items}
                        userObj={props.userData}
                    />
                );
            case AppConstants.FORM.SWITCH:
                return (
                    <SwitchCardField
                        formikProps={formikProps}
                        value={value}
                        icon={icon}
                        primaryText={primaryText}
                        secondaryText={secondaryText}
                        userObj={props.userData}
                    />
                );
            case AppConstants.FORM.OTP:
                return (
                    <InputOtp
                        formikProps={formikProps}
                        value={value}
                        placeholder={placeholder}
                        resendOTP={props.resendOTP}
                    />
                );
            case AppConstants.FORM.PICKER:
                return (
                    <SelectPicker
                        formikProps={formikProps}
                        value={value}
                        placeholder={placeholder}
                        pickerBottomText={pickerBottomText}
                        items={items}
                        userObj={props.userData}
                    />
                );
            case AppConstants.FORM.CLOTHING_PREFERENCES:
                return (
                    <ClothingCardField
                        formikProps={formikProps}
                        value={value}
                        items={items}
                        userObj={props.userData}
                    />
                );
        }
    }

    return (
        <KeyboardAvoidingView style={[Mixins.cont]}>
            <View style={{ width: Spacing.CARD_PADDING }}>
                <View style={{ marginTop: 35, marginBottom: 40 }}>
                    <Text style={props.cardContainer ? Mixins.labelCardPrimary : Mixins.labelBoxPrimary}>{labelLine1}</Text>
                    <Text style={props.cardContainer ? Mixins.labelCardSecondary : Mixins.labelBoxSecondary}>{labelLine2}</Text>
                </View>
                <View style={props.cardContainer ? Mixins.cardStyle : Mixins.boxStyle}>
                    <View style={{ marginTop: 20, marginBottom: 28 }}>
                        {label && <Text style={Mixins.txtStyle}>
                            {label}
                        </Text>}
                        {inputProp(inputType)}
                        {bottomLabel && <Text style={Mixins.bottomLabelTxtStyle}>
                            {bottomLabel}
                        </Text>}
                    </View>
                    <FormButton
                        icon={<ForwardArrow />}
                        onSubmit={formikProps.handleSubmit}
                        isLoading={props.isLoading}
                        btnText={btnText || false}
                        formSteps={props.formSteps && <FormSteps progress={props.progress} step={props.currentStep} totalStep={props.totalStep} label={progressLabel} />}
                    />
                </View>
                {bottomComponent ? bottomComponent : bottomText && <View style={{ marginTop: 30 }}>
                    <Text style={Mixins.bottomTxtStyle}>{bottomText}</Text>
                </View>}
            </View>
        </KeyboardAvoidingView >
    );
};

const styles = StyleSheet.create({});

export default InputContainer;