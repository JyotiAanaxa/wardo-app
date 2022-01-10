import { StyleSheet, Platform } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Colors, Typography, Fonts } from '../../../theme';

export const styles = StyleSheet.create({
    modalContainer: {
        width: '100%',
        paddingTop: 10,
        marginBottom: Platform.OS==='android' ? -15 : 0
    },

    lineContainer: {
        width: '100%',
        alignItems: 'center'
    },

    line: {
        height: 3.5,
        borderRadius: 10,
        width: hp('5.2%'),
        alignItems: 'center',
        marginTop: 2,
        backgroundColor: '#D0D0D0'
    },
    contentContainer: {
        paddingHorizontal: 30,
        marginTop: 20
    }
});