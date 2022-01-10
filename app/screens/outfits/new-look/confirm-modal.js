import React from 'react';
import { View, Text, Platform } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Button } from 'native-base';
import { DefModal } from '../../../components/modals/default-modal/default-modal';
import { SaveOutfitIcon } from '../../../icons/save-outfit';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Colors, Fonts, Typography } from '../../../theme';

const ConfirmModal = ({ isVisible, onSuccess, onCancel }) => {
    const BodyComponent = () => {
        return (
            <View style={styles.modalContainer}>
                <SaveOutfitIcon />
                <Text style={styles.modalTitleStyle}>Save Outfit</Text>
                <Text style={styles.modalTxtStyle}>
                    Do you want to save this item
        </Text>

                <View style={styles.btnRowContainer}>
                    <Button onPress={onCancel} style={styles.activeBtnContainer}>
                        <Text style={styles.activebtnTxtStyle}>Cancel</Text>
                    </Button>

                    <Button onPress={onSuccess} style={styles.inactiveBtnContainer}>
                        <Text style={styles.inactivebtnTxtStyle}>Save</Text>
                    </Button>
                </View>
            </View>
        );
    };
    return (
        <DefModal
            style={{ borderRadius: 30 }}
            isVisible={isVisible}
            onCancel={onCancel}
            body={<BodyComponent />}
        />
    );
};

export default ConfirmModal;

const styles = EStyleSheet.create({
    modalContainer: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 10,
        paddingBottom: 8
    },

    modalTitleStyle: {
        fontSize: hp('2.3%'),
        color: Colors.LABEL,
        fontFamily: Fonts.BOLD,
        marginTop: 30,
        textAlign: 'center',
    },

    modalTxtStyle: {
        fontSize: Typography._11,
        color: Colors.SECONDARY_TEXT,
        fontFamily: Fonts.MEDIUM,
        marginTop: 10,
        textAlign: 'center',
    },

    btnRowContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 35,
    },

    activeBtnContainer: {
        width: hp('14%'),
        height: hp('6.2%'),
        marginRight: 10,
        borderRadius: 15,
        backgroundColor: Colors.WHITE,
        borderWidth: 1,
        borderColor: Colors.PRIMARY,
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 0 },
        shadowRadius: 10,
        shadowOpacity: 0.16,
        elevation: 8,
    },

    activebtnTxtStyle: {
        fontSize: hp('1.9%'),
        marginTop: Platform.OS === 'android' ? 0 : 4,
        marginLeft: Platform.OS === 'android' ? 0 : 4,
        color: Colors.PRIMARY,
        fontFamily: Fonts.HEAVY,
        fontWeight: '900',
    },

    inactiveBtnContainer: {
        width: hp('14%'),
        height: hp('6.3%'),
        marginLeft: 10,
        borderRadius: 15,
        backgroundColor: Colors.PRIMARY,
        borderWidth: 1,
        borderColor: Colors.PRIMARY,
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 0 },
        shadowRadius: 10,
        shadowOpacity: 0.16,
        elevation: 8,
    },

    inactivebtnTxtStyle: {
        fontSize: hp('1.9%'),
        marginTop: Platform.OS === 'android' ? 0 : 4,
        marginLeft: Platform.OS === 'android' ? 0 : 4,
        color: Colors.WHITE,
        fontFamily: Fonts.HEAVY,
        fontWeight: '900',
    },
});
