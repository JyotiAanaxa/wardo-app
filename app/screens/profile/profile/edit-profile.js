import { Formik } from 'formik';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import FastImage from 'react-native-fast-image';
import ThemeButton from '../../../components/buttons/theme-button';
import RegularInputField from '../../../components/form/formInput/regular-input-field';
import { HeaderBar } from '../../../components/header/header';
import { Loader } from '../../../components/loader/loader';
import { CloseIcon } from '../../../icons/close';
import AuthService from '../../../services/auth';
import { ProfileValidation } from '../../../services/validations';
import { Colors, Fonts, Mixins, Typography } from '../../../theme';
import { AppConstants } from '../../../utils/app-constants';
import { FlexContainer, KeyboardViewContainer, SafeAreaContainer } from '../../../utils/app-container';
import { DEFAULT_ERROR_CALLBACK, getFirstAndLastCharacterInString, SHOW_INFO_NOTIFICATION, widthIntoDP, heightIntoDP } from '../../../utils/app-util';
import { styles } from './style';
import SwitchContainer from './switch-container';
import { useFocusEffect } from '@react-navigation/native';
import DocumentPicker from 'react-native-document-picker';
import DataService from '../../../services/data-service';
import ProfilePicModal from './profile-pic-modal';
import RNGalleryPicker from '../../../components/gallery-picker/gallery-picker';
import { setStyleAttributePreprocessor } from 'react-native-extended-stylesheet';


export const EditProfile = ({ route, navigation }) => {
    const { userData } = route.params;
    const [userObj, setUserObj] = useState(userData);
    const [isLoading, setIsLoading] = useState(false);
    const [isProfilePicUploaded, setIsProfilePicUploaded] = useState(false);
    const [imgUrl, setImgUrl] = useState(null);

    const itemsArr = [
        { value: 'Male', key: 'MALE' },
        { value: 'Female', key: 'FEMALE' },
        { value: 'Others', key: 'OTHERS' }
    ];

    const onGallerySubmit = (img, formikProps) => {
        setIsProfilePicUploaded(true);
        const imageUrl = img;
        if (imageUrl) {
            setImgUrl(img);
            formikProps.setFieldValue('profilePicUrl', imageUrl);
            SHOW_INFO_NOTIFICATION('Click on save to update profile pic');
        }
        setIsProfilePicUploaded(false);
    }

    const onSubmit = (values) => {
        setIsLoading(true);
        let tempObj = userData;
        tempObj.name = values.name;
        tempObj.gender = values.gender;
        tempObj.ecoFriendlyOpted = values.ecoFriendlyOpted;
        tempObj.stylistInfo.profilePicUrl = values.profilePicUrl ? values.profilePicUrl : null;
        AuthService.consumerUpdate(tempObj).subscribe(
            async data => {
                setUserObj(data);
                SHOW_INFO_NOTIFICATION('Profile Data is updated successfully');
                setIsLoading(false);
            },
            error => {
                DEFAULT_ERROR_CALLBACK(error);
                setIsLoading(false);
            }
        );
    }

    const updateData = async () => {
        const userObj = await AuthService.getUser();
        setUserObj(userObj);
    }

    useFocusEffect(
        React.useCallback(() => {
            updateData();
        }, []),
    );

    return (
        <SafeAreaContainer>
            <FlexContainer style={{ backgroundColor: Colors.WHITE }}>
                {isLoading ?
                    <Loader size={30} color={Colors.PRIMARY} /> :
                    <Formik
                        initialValues={{
                            profilePicUrl: userObj.stylistInfo.profilePicUrl,
                            name: userObj.name,
                            mobileNumber: userObj.mobileNumber,
                            gender: userObj.gender,
                            ecoFriendlyOpted: userObj.ecoFriendlyOpted
                        }}
                        validationSchema={ProfileValidation}
                        onSubmit={values => {
                            onSubmit(values);
                        }}>
                        {formikProps => (
                            <>
                                <HeaderBar
                                    leftIcon={<CloseIcon />}
                                    leftClick={() => { navigation.goBack(); }}
                                    rightText={'Save'}
                                    rightClick={() => { onSubmit(formikProps.values); }}
                                    rightTxtStyle={localStyles.saveStyle} />
                                <View style={{ width: '100%' }}>
                                    <View style={styles.editTitleContainer}>
                                        <View style={[styles.profileCardContainer, Mixins.SHADOW_STYLE__COLOR]}>
                                            {userObj.stylistInfo.profilePicUrl || imgUrl ?
                                                <FastImage
                                                    style={{
                                                        width: widthIntoDP(105),
                                                        height: heightIntoDP(105),
                                                        borderRadius: 22,
                                                        aspectRatio: widthIntoDP(105) / heightIntoDP(105),
                                                    }}
                                                    source={{
                                                        uri: imgUrl || userObj.stylistInfo.profilePicUrl,
                                                        priority: FastImage.priority.high,
                                                    }}
                                                    resizeMode={FastImage.resizeMode.cover}
                                                /> :
                                                <Text style={[styles.title, styles.profileUserName]}>
                                                    {getFirstAndLastCharacterInString(userObj.name)}
                                                </Text>}
                                        </View>
                                        <RNGalleryPicker
                                            iconText={'Change Profile Photo'}
                                            btnStyle={styles.profileIconStyle}
                                            txtStyle={localStyles.txtStyle}
                                            onSubmit={({ image }) => onGallerySubmit(image, formikProps)}
                                            noBg
                                            noIcon
                                        />
                                    </View>
                                </View>
                                <View style={{ flex: 1, width: '100%', marginTop: 12 }}>

                                    <KeyboardViewContainer style={{ justifyContent: 'flex-start' }}>
                                        <RegularInputField
                                            formikProps={formikProps}
                                            label='Name'
                                            value="name"
                                            inputType={AppConstants.FORM.TEXT}
                                            keyboardType={'default'} />

                                        <RegularInputField
                                            formikProps={formikProps}
                                            label='Mobile Number (Not Editable)'
                                            value="mobileNumber"
                                            disabled={true}
                                            inputType={AppConstants.FORM.TEXT}
                                            keyboardType={'number-pad'} />

                                        <RegularInputField
                                            formikProps={formikProps}
                                            label='Gender'
                                            value="gender"
                                            inputType={AppConstants.FORM.PICKER}
                                            items={itemsArr}
                                        />
                                        <SwitchContainer
                                            icon
                                            formikProps={formikProps}
                                            label='Fashion Preferences'
                                            value="ecoFriendlyOpted"
                                            primaryText={`I only want eco-friendly\n preferences to help the planet`}
                                            inputType={AppConstants.FORM.SWITCH}
                                        />
                                    </KeyboardViewContainer>

                                </View>
                            </>
                        )}
                    </Formik>}
            </FlexContainer>

            <ProfilePicModal
                isVisible={isProfilePicUploaded}
            />

        </SafeAreaContainer>
    );
}

const localStyles = StyleSheet.create({
    txtStyle: {
        fontSize: Typography._12,
        color: Colors.PRIMARY,
        fontFamily: Fonts.HEAVY,
        textAlign: 'center'
    },
    saveStyle: {
        fontSize: Typography._16,
        color: Colors.PRIMARY,
        fontFamily: Fonts.HEAVY
    }
});

export default EditProfile;