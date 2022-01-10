import React from 'react';
import { View, Button, Text } from 'react-native';
import Modal from 'react-native-modal';
import { styles } from './style';
import { FlexContainer } from '../../../utils/app-container';

export const DefModal = ({
    isVisible = true,
    handleOutsideEvent,
    style,
    header,
    footer,
    body,
    modalStyle,
    handleSubmit,
    onCancel,
    ...rest
}) => {
    return (
        <Modal isVisible={isVisible} {...rest} onBackButtonPress={onCancel}>
            <FlexContainer>
                <View style={[styles.container, style]}>
                    {body}
                </View>
            </FlexContainer>
        </Modal>
    );
};