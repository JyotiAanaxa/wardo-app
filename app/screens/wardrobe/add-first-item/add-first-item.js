import React, { useState } from 'react';
import { Text, View, Image } from 'react-native';
import RNImagePicker from '../../../components/image-picker/image-picker';
import CheckBoxContainer from '../../../components/form/formInput/checkbox';
import { HeaderBar } from '../../../components/header/header';
import { Heading } from '../../../components/heading/heading';
import { FlatSurfaceIcon } from '../../../icons/flat-surface';
import { NaturalLightIcon } from '../../../icons/natural-light';
import { WhiteBgIcon } from '../../../icons/white-bg';
import { FlexContainer } from '../../../utils/app-container';
import { styles } from './style';
import AuthService, { CameraInstruction } from '../../../services/auth';

export const AddFirstItem = ({ route, navigation }) => {
    const [isChecked, setIsChecked] = useState(false);
    const [imageVar, setImageVar] = useState(null);

    const toggleCheckbox = async () => {
        await AuthService.setFirstItemShowValue({ value: !isChecked });
        CameraInstruction.next(true);
        setIsChecked(!isChecked);
    }

    const onSubmit = (img) => {
        const { category } = route.params;
        navigation.navigate('RetakeContinue', {
            imgSrc: img,
            category: category ? category : null
        });
    }

    return (
        <FlexContainer style={styles.container}>
            <HeaderBar
                backButton
                leftClick={() => { navigation.goBack() }} />
            <View style={styles.mainContainer}>
                <Heading
                    title='Add Your First Item'
                    subTitle='How to take high quality photos'
                />
                <View style={styles.rowContainer}>
                    <WhiteBgIcon />
                    <View style={styles.txtContainer}>
                        <Text style={styles.titleStyle}>White background</Text>
                        <Text style={styles.subtitleStyle}>Use a solid white surface to match with the other items in your closet</Text>
                    </View>
                </View>
                <View style={styles.rowContainer}>
                    <FlatSurfaceIcon />
                    <View style={styles.txtContainer}>
                        <Text style={styles.titleStyle}>Flat Surface</Text>
                        <Text style={styles.subtitleStyle}>Lay or hang your items on a smooth surface in the center of the frame</Text>
                    </View>
                </View>
                <View style={styles.rowContainer}>
                    <NaturalLightIcon />
                    <View style={styles.txtContainer}>
                        <Text style={styles.titleStyle}>Natural Light</Text>
                        <Text style={styles.subtitleStyle}>Snap your clothing during the day natural light from windows is ideal</Text>
                    </View>
                </View>
            </View>

            <View style={styles.btmContainer}>
                <RNImagePicker
                    noIcon
                    image={imageVar}
                    iconText={'Get Started'}
                    txtStyle={styles.labelStyle}
                    btnStyle={styles.btnContainer}
                    onSubmit={({ image }) => onSubmit(image)}
                />
                <CheckBoxContainer
                    status={isChecked}
                    handleClick={toggleCheckbox}
                    label={`Don't show this to me again`}
                    style={styles.checkboxStyle} />
            </View>

        </FlexContainer>
    );

}

export default AddFirstItem;
