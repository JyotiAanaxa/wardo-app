import { Input } from 'native-base';
import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import ErrorContainer from '../../components/form/error-container';
import { Colors, Typography } from "../../theme";
import { Fonts } from "../../theme/fonts";
import { heightIntoDP } from '../../utils/app-util';

export const PackageService = ({ formikProps, applyPeriod }) => {
    const intervalOptions = [{ label: 'Hours', value: 'HOURS' }, { label: 'Days', value: 'DAYS' }];
    const [activeIndex, setActiveIndex] = useState(0);

    const BodyComponent = () => {
        return (
            <>
                <View style={{ width: '48%', height: heightIntoDP(50), flexDirection: 'row', justifyContent: 'space-between' }}>
                    {intervalOptions.map((item, index) => (
                        <TouchableOpacity onPress={() => {
                            setActiveIndex(index);
                            applyPeriod(item.value);
                        }} style={{ width: '47%' }}>
                            <View style={[localStyles.intervalStyle, { backgroundColor: index === activeIndex ? Colors.PRIMARY : '#F0EFFF' }]}>
                                <Text style={[localStyles.intervalTxtStyle, { color: activeIndex === index ? Colors.WHITE : Colors.LABEL }]}>{item.label}</Text>
                            </View>
                        </TouchableOpacity>
                    ))}
                </View>
            </>
        );
    }
    return (
        <BodyComponent />
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


export default PackageService;
