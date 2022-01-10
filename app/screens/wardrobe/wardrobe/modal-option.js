import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { BottomHalfModal } from '../../../components/modals/bottom-half-modal/bottomhalf-modal';
import { styles } from './style';
import { CameraIcon } from '../../../icons/camera';
import { GalleryIcon } from '../../../icons/gallery';
import RNImagePicker from '../../../components/image-picker/image-picker';
import RNGalleryPicker from '../../../components/gallery-picker/gallery-picker';

export const ModalOption = ({ isVisible, onSwipeHide, isShow, onCameraClick, onSubmit, onGallerySubmit }) => {

    const BodyComponent = () => {
        return (
            <View style={styles.modalContainer}>
                <View style={styles.lineContainer}>
                    <View style={styles.line}></View>
                </View>
                <View style={styles.modalHeading}>
                    <Text style={styles.heading}>Add Item</Text>
                    <Text style={[styles.subHeading, { marginTop: 8 }]}>Select an option to add item</Text>
                </View>
                <View style={styles.optionContainer}>
                    {isShow ? <RNImagePicker
                        iconComponent={<CameraIcon />}
                        iconText={'Take A Photo'}
                        btnStyle={{ width: '100%', justifyContent: 'flex-start', alignItems: 'center', marginTop: 20, marginBottom: 5 }}
                        txtStyle={styles.imageOptionLabel}
                        onSubmit={onSubmit}
                    />
                        : <TouchableOpacity onPress={onCameraClick}>
                            <View style={styles.itemFirstRowContainer}>
                                <CameraIcon />
                                <Text style={styles.optionLabel}>Take A Photo</Text>
                            </View>
                        </TouchableOpacity>}
                    <RNGalleryPicker
                        iconComponent={<GalleryIcon />}
                        iconText={'Add From Gallery'}
                        btnStyle={{ width: '100%', justifyContent: 'flex-start', alignItems: 'center', marginLeft: -3 }}
                        txtStyle={styles.galleryOptionLabel}
                        onSubmit={onGallerySubmit}
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

export default ModalOption;
