import { View } from 'native-base';
import React from 'react';
import FastImage from 'react-native-fast-image';
import { HeaderBar } from '../../../components/header/header';
import { CancelIcon } from '../../../icons/cancel';
import { SafeAreaContainer, FlexContainer } from '../../../utils/app-container';
import { Colors } from '../../../theme';



const ViewItem = ({ route, navigation }) => {
    let { imageUrl } = route.params;

    return (
        <FlexContainer style={{ backgroundColor: 'black' }}>
            <HeaderBar
                containerStyle={{ top: 0 }}
                leftIcon={<CancelIcon color={Colors.WHITE} height={45} width={45} />}
                leftClick={() => {
                    navigation.goBack();
                }}
            />
            <View style={{ width: '100%', alignSelf: 'center', justifyContent: 'center', alignItems: 'center', paddingVertical: 80 }}>
                <FastImage
                    style={{ width: '100%', height: '100%' }}
                    source={{
                        uri: imageUrl,
                        priority: FastImage.priority.normal,
                    }}
                    resizeMode={FastImage.resizeMode.contain}
                />
            </View>
        </FlexContainer>
    );
};

export default ViewItem;
