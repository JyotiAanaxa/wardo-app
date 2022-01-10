import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { BottomHalfModal } from '../../../components/modals/bottom-half-modal/bottomhalf-modal';
import { Colors, Typography, Fonts } from '../../../theme';
import { heightPercentageToDP } from 'react-native-responsive-screen';
import FAQ from '../../../components/faq/faq';

export const ModalFAQ = ({ faqItems, isVisible, onSwipeHide }) => {

    const BodyComponent = () => {
        return (
            <View style={styles.modalContainer}>
                <View style={styles.lineContainer}>
                    <View style={styles.line}></View>
                </View>
                <View style={styles.contentContainer}>
                    <Text style={styles.titleStyle}>Frequently Asked Questions</Text>
                </View>
                <FAQ faqItems={faqItems} />
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

const styles = StyleSheet.create({
    modalContainer: {
        width: '100%',
        paddingTop: 10,
        marginBottom: -15,
        height: heightPercentageToDP('86%')
    },
    contentContainer: {
        paddingHorizontal: 30,
        marginTop: 25,
        alignItems: 'center',
    },
    lineContainer: {
        width: '100%',
        alignItems: 'center'
    },

    line: {
        height: 3.5,
        borderRadius: 10,
        width: heightPercentageToDP('5.2%'),
        alignItems: 'center',
        marginTop: 2,
        backgroundColor: '#D0D0D0'
    },
    toggleInnerContainer: {
        flexDirection: 'row',
        marginTop: 15,
        justifyContent: 'center',
        alignItems: 'center'
    },
    bottomTxtStyle: {
        fontSize: Typography._14,
        marginRight: 3,
        fontFamily: Fonts.MEDIUM,
        color: Colors.SECONDARY_TEXT
    },
    accordionContainer: {
        backgroundColor: Colors.WHITE,
        borderRadius: 18,
        marginBottom: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 0 },
        shadowRadius: 10,
        shadowOpacity: 0.16,
        elevation: 16,
        padding: 15
    },
    titleContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    titleStyle: {
        fontSize: Typography._14,
        fontFamily: Fonts.MEDIUM,
        color: '#80838C',
        lineHeight: 24
    },
    touchableContainer: {
        width: 40,
        height: 40
    },
    toggleIconContainer: {
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center'
    },
    bodyTxtStyle: {
        fontSize: Typography._14,
        fontFamily: Fonts.ROMAN,
        color: '#B0B0B0',
        lineHeight: 24
    }

})

export default ModalFAQ;
