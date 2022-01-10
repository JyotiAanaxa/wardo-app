import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { BottomHalfModal } from '../../../components/modals/bottom-half-modal/bottomhalf-modal';
import { styles } from './style';
import { Colors, Typography, Fonts } from '../../../theme';

export const ModalInfo = ({ isVisible, onSwipeHide, termsNavigation, policyNavigation }) => {

    const BodyComponent = () => {
        return (
            <View style={styles.modalContainer}>
                <View style={styles.lineContainer}>
                    <View style={styles.line}></View>
                </View>
                <View style={styles.contentContainer}>
                    <Text style={modalStyle.label_1}>Cancel Anytime. No Payment Needed</Text>
                    <Text style={modalStyle.label_2}>We'll email you a reminder before the trial ends</Text>
                    <Text style={modalStyle.description}>
                        Your subscription will start upon the ending of your trial. Subscription will be auto-renewed. Your account will be charged at the end of every month/year. You can cancel this subscription through the setting screen.
                    </Text>
                    <Text style={modalStyle.description}>Read our
                        <Text style={modalStyle.modalOpenTxtStyle} onPress={policyNavigation}> Privacy Policy</Text>
                        <Text style={modalStyle.description}> & </Text>
                        <Text style={modalStyle.modalOpenTxtStyle} onPress={termsNavigation}>Terms Of Use</Text>
                    </Text>
                </View>
            </View>
        );
    }
    return (
        <BottomHalfModal
            isVisible={isVisible}
            onSwipeHide={onSwipeHide}
            body={<BodyComponent />}
        />
    );
}

const modalStyle = StyleSheet.create({
    label_1: {
        textAlign: 'center',
        fontSize: Typography._12,
        fontFamily: Fonts.HEAVY,
        color: Colors.PRIMARY
    },
    label_2: {
        textAlign: 'center',
        fontSize: Typography._12,
        fontFamily: Fonts.HEAVY,
        marginTop: 8,
        color: Colors.SECONDARY_TEXT
    },
    description: {
        fontSize: Typography._12,
        lineHeight: 16,
        fontFamily: Fonts.MEDIUM,
        marginTop: 15,
        color: '#B0B0B0'
    },
    modalOpenTxtStyle: {
        textAlign: 'center',
        fontSize: Typography._12,
        fontFamily: Fonts.MEDIUM,
        color: Colors.PRIMARY
    }
})

export default ModalInfo;
