import OTPInputView from '@twotalltotems/react-native-otp-input';
import { Text, View } from 'native-base';
import React, { useState } from 'react';
import { StyleSheet, TouchableWithoutFeedback } from 'react-native';
import ErrorContainer from '../error-container';
import { Fonts, Typography, Colors } from '../../../theme';
import TimerCountdown from 'react-native-timer-countdown-lucas';

const InputOtp = ({
    formikProps,
    value,
    resendOTP,
    placeholder
}) => {
    const [isTimer, setIsTimer] = useState(false);
    const [isInitialTiming, setIsInitialTiming] = useState(1000 * 30);

    return (
        <>
            <OTPInputView
                style={styles.otpContainerStyle}
                placeholder={placeholder}
                pinCount={4}
                codeInputFieldStyle={styles.inputFieldStyle}
                codeInputHighlightStyle={styles.inputHighlightStyle}
                onCodeFilled={code => {
                    formikProps.setFieldValue('otp', code);
                }}
            />
            {formikProps.errors[value] && formikProps.touched[value] && (
                <ErrorContainer formikProps={formikProps} value={value} />
            )}
            {isTimer ?
                <TimerCountdown
                    initialSecondsRemaining={isInitialTiming}
                    onTimeElapsed={() => {
                        setIsTimer(false);
                        setIsInitialTiming(1000 * 30);
                    }}
                    onTick={(value) => { setIsInitialTiming(value) }}
                    formatSecondsRemaining={(secondsRemaining) => {
                        const remainingSec = Math.round(secondsRemaining / 1000);
                        const seconds = parseInt((remainingSec % 60).toString(), 10);
                        const minutes = parseInt(((remainingSec / 60) % 60).toString(), 10);
                        const hours = parseInt((remainingSec / 3600).toString(), 10);
                        const s = seconds < 10 ? '0' + seconds : seconds;
                        const m = minutes < 10 ? '0' + minutes : minutes;
                        let h = hours < 10 ? '0' + hours : hours;
                        h = h === '00' ? '' : h + ':';
                        return h + m + ' : ' + s;
                    }}
                    allowFontScaling={true}
                    style={styles.txtStyle}
                />
                :
                <TouchableWithoutFeedback onPress={() => {
                    setIsTimer(true);
                    resendOTP();
                }}>
                    <View>
                        <Text style={styles.txtStyle}>{'Resend Code'}</Text>
                    </View>
                </TouchableWithoutFeedback>}
        </>
    );
};

const styles = StyleSheet.create({
    otpContainerStyle: {
        height: 100,
        marginBottom: 10,
        width: '100%'
    },
    inputFieldStyle: {
        width: 60,
        height: 60,
        borderRadius: 15,
        color: Colors.BLACK,
        fontWeight: '900',
        fontFamily: Fonts.BOLD,
        fontSize: Typography.INPUT_TEXT,
        borderColor: Colors.INPUT_BORDER_COLOR
    },
    inputHighlightStyle: {
        width: 60,
        height: 60,
        borderRadius: 15
    },
    txtStyle: {
        fontSize: Typography.INPUT_TEXT,
        fontFamily: Fonts.HEAVY,
        alignSelf: 'center',
        color: Colors.LABEL
    }
});

export default InputOtp;
