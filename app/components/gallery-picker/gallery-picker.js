import React from 'react';
import { Alert, Image, Text, StyleSheet, Platform } from 'react-native';
import ImagePicker from 'react-native-image-picker';
import { Colors, Typography, Fonts } from '../../theme';
import { requestStoragePermission, DEFAULT_ERROR_CALLBACK, SHOW_INFO_NOTIFICATION } from '../../utils/app-util';
import IconButton from '../buttons/icon-button';
import ThemeButton from '../buttons/theme-button';
import { FullScreenModal } from '../modals/full-screen-modal/full-screen-modal';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import AuthService from '../../services/auth';
import axios from 'axios';
import { AppConstants } from '../../utils/app-constants';
import { Loader } from '../loader/loader';

export default class RNGalleryPicker extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isVisible: false
        }
    }

    async chooseFile(noBg) {
        var options = {
            title: 'Select Image',
            storageOptions: {
                skipBackup: true,
                path: 'images',
            },
        };

        let permission = await requestStoragePermission();

        if (permission) {
            ImagePicker.launchImageLibrary(options, (response) => {
                console.log('Response = ', response);
                if (response.didCancel) {
                    console.log('User cancelled image picker');
                } else if (response.error) {
                    console.log('ImagePicker Error: ', response.error);
                } else if (response.customButton) {
                    console.log('User tapped custom button: ', response.customButton);
                    alert(response.customButton);
                } else {
                    this.uploadImageFile(response, noBg);
                }
            });
        } else {
            Alert.alert(
                "Storage permission Denied.",
                'If you have denied permanently then Go "App Permissions" and Turn on "Storage" Permission for Wardo.'
            );
        }
    };

    uploadImageFile = async (response, noBg) => {
        this.setState({ isVisible: true });
        let path = response.uri;
        if (!response.fileName) response.fileName = path.split("/").pop();

        const form = new FormData();
        form.append('file', {
            uri: Platform.OS === 'android' ? response.uri : ('data:image/jpeg;base64,' + response.data),
            type: `${response.type}`,
            name: `${response.fileName}`,
        });
        axios({
            url: noBg ? AppConstants.baseURL + '/file/upload' : AppConstants.baseURL + '/file/upload/no-bg',
            method: 'POST',
            data: form,
            headers: {
                'Content-Type': 'multipart/form-data',
                'X-AUTH-TOKEN': await AuthService.getToken(),
            }
        })
            .then((response) => {
                this.setState({ isVisible: false });
                this.props.onSubmit({ image: response.data.data });
            })
            .catch((error) => {
                this.setState({ isVisible: false });
                DEFAULT_ERROR_CALLBACK(error);
            })
    }

    render() {
        const {
            noIcon,
            image,
            iconComponent,
            iconText,
            txtStyle,
            btnStyle,
            noBg = false
        } = this.props;
        let imageNode = (
            <Image
                source={this.state.avatarSource}
                style={{ width: '100%', height: '100%', borderRadius: 15, backgroundColor: Colors.TRANSPARENT }}
                resizeMode='cover'
            />
        );
        if (!image) {
            imageNode = [];
        }

        let LoaderComponent = () => (
            <>
                <Image
                    source={require('../../../assets/img/loader.gif')}
                    style={styles.imgStyle}
                    resizeMode='cover'
                />
                <Text style={styles.txtStyle}>Removing background From Image</Text>
            </>
        );

        let NoBgLoaderComponent = () => (
            <>
                <Loader size={40} color={Colors.PRIMARY} />
                <Text style={[styles.txtStyle, { marginTop: 20 }]}>Please wait while image is uploading...</Text>
            </>
        );

        return (
            <>
                {noIcon ?
                    <ThemeButton
                        onSubmit={!this.props.enable ? () => this.chooseFile(noBg) : () => { }}
                        labelStyle={txtStyle}
                        label={iconText}
                        buttonStyle={btnStyle}
                    />
                    : <IconButton iconComponent={iconComponent}
                        iconText={iconText}
                        onSubmit={!this.props.enable ? () => this.chooseFile(noBg) : () => { }}
                        txtStyle={txtStyle}
                        buttonStyle={btnStyle}
                    />}
                {noBg ?
                    <FullScreenModal
                        isVisible={this.state.isVisible}
                        body={<NoBgLoaderComponent />} /> :
                    <FullScreenModal
                        isVisible={this.state.isVisible}
                        body={<LoaderComponent />} />}
            </>
        );
    }
}

const styles = StyleSheet.create({
    txtStyle: {
        fontSize: Typography.TINY,
        fontFamily: Fonts.BOLD,
        color: Colors.PRIMARY,
        textTransform: 'uppercase',
        lineHeight: 22
    },

    imgStyle: {
        height: hp('18%'),
        width: hp('18%')
    }
});

