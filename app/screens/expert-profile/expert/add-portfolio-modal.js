import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { BottomHalfModal } from '../../../components/modals/bottom-half-modal/bottomhalf-modal';
import { CameraIcon } from '../../../icons/camera';
import { GalleryIcon } from '../../../icons/gallery';
import RNImagePicker from '../../../components/image-picker/image-picker';
import RNGalleryPicker from '../../../components/gallery-picker/gallery-picker';
import { widthPercentageToDP, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Fonts, Colors } from '../../../theme';

export const AddPortfolioModalOption = ({ isVisible, onSwipeHide, onCameraClick, onGallerySubmit }) => {

    const BodyComponent = () => {
        return (
            <View style={styles.modalContainer}>
                <View style={styles.lineContainer}>
                    <View style={styles.line}></View>
                </View>
                <View style={styles.modalHeading}>
                    <Text style={styles.heading}>Add Portfolio Image</Text>
                    <Text style={[styles.subHeading, { marginTop: 8 }]}>Select an option to add item</Text>
                </View>
                <View style={styles.optionContainer}>
                    <RNImagePicker
                        iconComponent={<CameraIcon />}
                        iconText={'Take A Photo'}
                        btnStyle={{ width: '100%', justifyContent: 'flex-start', alignItems: 'center', marginTop: 20, marginBottom: 5 }}
                        txtStyle={styles.imageOptionLabel}
                        onSubmit={onCameraClick}
                        noBg
                    />
                    <RNGalleryPicker
                        iconComponent={<GalleryIcon />}
                        iconText={'Add From Gallery'}
                        btnStyle={{ width: '100%', justifyContent: 'flex-start', alignItems: 'center', marginLeft: -3 }}
                        txtStyle={styles.galleryOptionLabel}
                        onSubmit={onGallerySubmit}
                        noBg
                    />
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

export const styles = StyleSheet.create({
    modalContainer: {
        width: '100%',
        paddingTop: 10
    },

    lineContainer: {
        width: '100%',
        alignItems: 'center'
    },

    line: {
        height: 3.5,
        borderRadius: 10,
        width: hp('6%'),
        alignItems: 'center',
        marginTop: 2,
        backgroundColor: '#D0D0D0'
    },

    modalHeading: {
        marginTop: 30,
        paddingBottom: 27,
        borderBottomWidth: 1,
        borderBottomColor: "#D0D0D0",
        paddingHorizontal: 36
    },

    heading: {
        fontSize: hp('2.1%'),
        lineHeight: 20,
        fontFamily: Fonts.HEAVY
    },

    subHeading: {
        fontSize: 12,
        lineHeight: 19,
        color: '#979797',
        fontFamily: Fonts.LIGHT
    },

    optionContainer: {
        width: '100%',
        paddingHorizontal: 40
    },

    itemFirstRowContainer: {
        flexDirection: 'row',
        marginTop: 35,
        marginBottom: hp('2.8%'),
        alignItems: 'center'
    },

    itemSecondRowContainer: {
        flexDirection: 'row',
        marginTop: 9,
        marginLeft: -3,
        alignItems: 'center'
    },

    optionLabel: {
        fontSize: hp('2%'),
        lineHeight: 20,
        marginLeft: 13,
        textTransform: 'capitalize',
        color: Colors.LABEL,
        fontFamily: Fonts.HEAVY
    },

    imageOptionLabel: {
        fontSize: hp('2%'),
        lineHeight: 28,
        fontFamily: Fonts.HEAVY,
        textTransform: 'capitalize',
        color: Colors.LABEL
    },

    galleryOptionLabel: {
        fontSize: hp('2%'),
        lineHeight: 28,
        marginLeft: -widthPercentageToDP('1.4%'),
        fontFamily: Fonts.HEAVY,
        textTransform: 'capitalize',
        color: Colors.LABEL
    }
});

export default AddPortfolioModalOption;
