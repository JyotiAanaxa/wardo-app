import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Colors, Fonts, Typography } from '../../../theme';

export const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        padding: 20
    },
    imgContainer: {
        width: '95%',
        padding: hp('5%'),
        marginTop: hp('6%'),
        height: hp('60%'),
        backgroundColor: Colors.GREY_CARD,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imgStyle: {
        width: '100%',
        height: '100%',
        borderRadius: 15,
        backgroundColor: Colors.TRANSPARENT
    },
    bottomBtnContainer: {
        position: 'absolute',
        bottom: hp('14%'),
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    retakeBtnContainer: {
        backgroundColor: 'red',
        width: '44%',
        height: hp('7%'),
        flexDirection: 'row',
        paddingVertical: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.WHITE,
        borderWidth: 1,
        borderColor: Colors.PRIMARY,
        borderRadius: 18,
        margin: 8
    },
    retakeTxtStyle: {
        color: Colors.PRIMARY,
        fontSize: Typography.INPUT_TEXT,
        fontWeight: '900',
        fontFamily: Fonts.BOLD,
        textTransform: 'capitalize'
    },
    continueBtnContainer: {
        width: '44%',
        height: hp('7%'),
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 8,
        borderRadius: 18,
        backgroundColor: Colors.PRIMARY
    },
    continueTxtStyle: {
        color: Colors.WHITE,
        fontSize: Typography.INPUT_TEXT,
        fontWeight: '900',
        fontFamily: Fonts.BOLD,
        textTransform: 'capitalize',
    }
});