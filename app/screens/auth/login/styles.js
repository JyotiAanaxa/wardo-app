import { StyleSheet } from 'react-native';
import { Typography, Fonts, Colors } from '../../../theme';
import { heightPercentageToDP } from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
    bottomContainer: {
        textAlign: 'center',
        fontSize: heightPercentageToDP('1.6%'),
        fontFamily: Fonts.MEDIUM,
        color: Colors.SECONDARY_TEXT,
        lineHeight: heightPercentageToDP('2.3%')
    },
    linkTxtStyle: {
        color: Colors.PRIMARY
    }
});