import PubSub from 'pubsub-js';
import React, { useState } from 'react';
import { Image, Text, View } from 'react-native';
import { HeaderBar } from '../../../components/header/header';
import { DeleteSqrOutlineIcon } from '../../../icons/delete';
import DataService from '../../../services/data-service';
import { AppConstants } from '../../../utils/app-constants';
import { SafeAreaContainer } from '../../../utils/app-container';
import { DEFAULT_ERROR_CALLBACK, SHOW_INFO_NOTIFICATION } from '../../../utils/app-util';
import DeletePermissionModal from './delete-modal';
import FastImage from 'react-native-fast-image';
import { styles } from './style';
import ThemeButton from '../../../components/buttons/theme-button';
import { Mixins } from '../../../theme';
import { RefreshItemSubject } from '../../../services/auth';


export const DeleteCategory = ({ route, navigation }) => {

    const { imgSrc, brandLabel, id, isClient } = route.params;
    const [isVisible, setIsVisible] = useState(false);

    const onSuccess = () => {
        onDeleteItem();
        setIsVisible(false);
    }

    const onCancel = () => {
        setIsVisible(false);
    }

    const onOpenModal = () => {
        setIsVisible(true);
    }

    const onDeleteItem = () => {
        DataService.deleteItem([id]).subscribe(
            resp => {
                SHOW_INFO_NOTIFICATION('Item deleted Successfully');
                navigation.goBack();
            },
            error => {
                DEFAULT_ERROR_CALLBACK(error);
            });
    }

    return (
        <SafeAreaContainer style={styles.container}>
            <HeaderBar
                backButton
                leftClick={() => {
                    navigation.goBack();
                }}
                rightClick={isClient ? () => { } : onOpenModal}
                // rightBtnStyle={styles.rightIconStyle}
                rightIcon={isClient ? <></> : <DeleteSqrOutlineIcon />}
            />
            <View style={styles.imgContainer}>
                <FastImage
                    style={styles.imgStyle}
                    source={{
                        uri: imgSrc,
                        priority: FastImage.priority.normal,
                    }}
                    resizeMode={FastImage.resizeMode.contain}
                />
            </View>

            <View style={styles.brandContainer}>
                <View style={{ width: '100%' }}>
                    <Text style={styles.labelStyle}>{'Brand'}</Text>
                </View>
                <View style={styles.categoryContainer}>
                    <Text style={styles.selectedTxtStyle}>{brandLabel.charAt(0).toUpperCase() + brandLabel.slice(1)}</Text>
                </View>
            </View>
            <View style={styles.bottomBtnContainer}>
                {!isClient && <ThemeButton
                    label={'Show Outfits'}
                    onSubmit={() => { navigation.navigate('Outfits') }}
                    labelStyle={styles.continueTxtStyle}
                    buttonStyle={[styles.continueBtnContainer, Mixins.SHADOW_STYLE]} />
                }
            </View>
            <DeletePermissionModal
                isVisible={isVisible}
                onSuccess={onSuccess}
                onCancel={onCancel}
            />

        </SafeAreaContainer >
    );
}

export default DeleteCategory;
