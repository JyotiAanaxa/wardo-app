import React from 'react';
import Modal from 'react-native-modal';
import { styles } from './style';
import { FlexContainer } from '../../../utils/app-container';

export const FullScreenModal = ({
    isVisible = false,
    handleOutsideEvent,
    header,
    footer,
    body,
    modalStyle,
    ...rest
}) => {
    return (
        <Modal isVisible={isVisible} style={styles.modal} {...rest}>
            <FlexContainer>
                {body}
            </FlexContainer>
        </Modal>
    );
};

