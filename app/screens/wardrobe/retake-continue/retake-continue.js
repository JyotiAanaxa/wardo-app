import React, { useState } from 'react';
import { Text, View, Image } from 'react-native';
import IconButton from '../../../components/buttons/icon-button';
import { HeaderBar } from '../../../components/header/header';
import { ContinueIcon } from '../../../icons/continue';
import { RetakeIcon } from '../../../icons/retake';
import { Mixins, Colors } from '../../../theme';
import { SafeAreaContainer } from '../../../utils/app-container';
import { styles } from './style';
import RNImagePicker from '../../../components/image-picker/image-picker';
import FastImage from 'react-native-fast-image';

export const RetakeContinue = ({ route, navigation }) => {
    const { imgSrc, category } = route.params;
    const [imageVar, setImageVar] = useState(imgSrc || null);

    const onSubmit = (img) => {
        setImageVar(img);
    }

    return (
        <SafeAreaContainer style={styles.container}>
            <HeaderBar backButton leftClick={() => navigation.goBack()} />
            <View style={styles.imgContainer}>
                <FastImage
                    style={styles.imgStyle}
                    source={{
                        uri: imageVar,
                        priority: FastImage.priority.normal,
                    }}
                    resizeMode={FastImage.resizeMode.contain}
                />
            </View>

            <View style={styles.bottomBtnContainer}>
                <RNImagePicker
                    image={imageVar}
                    onImageSuccess={({ image }) => setImageVar(image)}
                    iconComponent={<RetakeIcon />}
                    iconText={'Retake'}
                    txtStyle={styles.retakeTxtStyle}
                    btnStyle={[styles.retakeBtnContainer, Mixins.SHADOW_STYLE]}
                    onSubmit={({ image }) => onSubmit(image)}
                />

                <IconButton
                    iconComponent={<ContinueIcon />}
                    iconText={'Continue'}
                    onSubmit={() => {
                        navigation.navigate('CategoryBrand', {
                            imgSrc: imageVar,
                            category: category
                        });
                    }}
                    txtStyle={styles.continueTxtStyle}
                    buttonStyle={[styles.continueBtnContainer, Mixins.SHADOW_STYLE]} />
            </View>

        </SafeAreaContainer >
    );
}

export default RetakeContinue;