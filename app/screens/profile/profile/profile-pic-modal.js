import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Loader } from '../../../components/loader/loader';
import { DefModal } from '../../../components/modals/default-modal/default-modal';
import { Colors, Fonts, Typography } from '../../../theme';
import { heightIntoDP, widthIntoDP } from '../../../utils/app-util';

export const ProfilePicModal = ({ isVisible }) => {

    const BodyComponent = () => {
        return (
            <View style={styles.modalContainer}>
                <Loader size={30} color={Colors.PRIMARY} />
                <Text style={styles.txtStyle}>Please wait while image is uploading...</Text>
            </View>
        );
    }
    return (
        <DefModal
            isVisible={isVisible}
            body={<BodyComponent />}
            style={{ borderRadius: 18 }}
        />
    );
}

export const styles = StyleSheet.create({
    modalContainer: {
        width: '100%',
        height: heightIntoDP(150),
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 18
    },

    txtStyle: {
        fontSize: Typography._14,
        lineHeight: 20,
        color: Colors.SECONDARY_TEXT,
        fontFamily: Fonts.MEDIUM,
        textAlign: 'center',
        marginTop: 20
    },
});

export default ProfilePicModal;
