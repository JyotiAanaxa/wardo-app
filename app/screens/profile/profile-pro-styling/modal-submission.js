import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import ThemeButton from '../../../components/buttons/theme-button';
import { DefModal } from '../../../components/modals/default-modal/default-modal';
import { ApplicationSubmitIcon } from '../../../icons/application-submit';
import { Colors, Fonts, Typography } from '../../../theme';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import { heightIntoDP } from '../../../utils/app-util';

export const ModalSubmission = ({ isVisible, onCancel, handleClick }) => {

    const BodyComponent = () => {
        return (
            <View style={{ alignItems: 'center', width: 260, borderRadius: 30, padding: 10 }}>
                <Image source={require('../../../../assets/img/checkWithtick.png')}
                    resizeMode='contain'
                    style={{ width: '100%', marginTop: -40 }}
                />
                {/* <ApplicationSubmitIcon /> */}
                <Text style={styles.titleStyle}>Application Submitted</Text>
                <Text style={styles.descStyle}>You will receive an email from our team within 2 business days</Text>
                <ThemeButton onSubmit={handleClick}
                    buttonStyle={styles.btnStyle}
                    labelStyle={styles.txtStyle}
                    label={'Continue'}
                />
            </View>
        );
    }
    return (
        <DefModal
            isVisible={isVisible}
            onCancel={onCancel}
            onBackdropPress={onCancel}
            body={<BodyComponent />}
            style={{ borderRadius: 30, padding: 22 }}
        />
    );
}

const styles = StyleSheet.create({
    titleStyle: {
        fontSize: Typography._20,
        fontFamily: Fonts.BOLD,
        color: Colors.LABEL,
        marginTop: -42
    },
    descStyle: {
        fontSize: heightPercentageToDP('1.38%'),
        fontFamily: Fonts.MEDIUM,
        color: Colors.SECONDARY_TEXT,
        marginTop: 8,
        marginBottom: 25,
        textAlign: 'center',
        marginHorizontal: 20,
        lineHeight: 16
    },
    btnStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '60%',
        height: heightIntoDP(50),
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 0 },
        shadowRadius: 10,
        shadowOpacity: 0.16,
        elevation: 8,
        backgroundColor: Colors.PRIMARY,
        borderRadius: 18
    },
    txtStyle: {
        fontSize: Typography._14,
        fontFamily: Fonts.MEDIUM,
        color: Colors.WHITE
    },

})

export default ModalSubmission;
