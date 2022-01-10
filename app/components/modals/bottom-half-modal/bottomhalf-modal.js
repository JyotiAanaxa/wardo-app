import React, { useRef } from 'react';
import { View, Button, Text, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import Modal from 'react-native-modal';
import { styles } from './style';

export const BottomHalfModal = ({
    isVisible = false,
    handleOutsideEvent,
    bodyContainer,
    onSwipeHide,
    header,
    footer,
    body,
    modalStyle,
    handleSubmit,
    ...rest
}) => {
    let scrollViewRef = React.createRef();

    const handleScrollTo = p => {
        if (scrollViewRef.current) {
            scrollViewRef.current.scrollTo(p);
        }
    };

    return (
        <Modal
            isVisible={isVisible}
            propagateSwipe style={styles.view}
            hideModalContentWhileAnimating={true}
            onSwipeComplete={onSwipeHide}
            scrollTo={handleScrollTo}
            swipeDirection="down"
            avoidKeyboard={false}
            onBackButtonPress={onSwipeHide}
            {...rest}>
            <View style={[styles.container, bodyContainer]}>
                {body}
            </View>
        </Modal>
    );
};
