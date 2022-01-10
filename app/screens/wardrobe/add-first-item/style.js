import { StyleSheet,Platform } from 'react-native';
import { Colors, Fonts, Spacing, Typography } from '../../../theme';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { heightIntoDP } from '../../../utils/app-util';

export const styles = StyleSheet.create({
    container: {
        justifyContent: 'flex-start',
        backgroundColor: Colors.WHITE,
        paddingHorizontal: Platform.OS==='android'  ?'8%' : '6.5%',
        marginBottom: 16
    },

    rowContainer: {
        flexDirection: 'row',
        width: '100%',
        marginBottom: hp('2.8%'),
        marginTop: hp('2.8%')
    },

    imgStyle: {
        height: hp('18%'),
        width: hp('18%')
    },

    mainContainer: {
        marginTop: Platform.OS==='android' ? hp('7%') : hp('12%')
    },

    columnContainer: {
        width: '50%',
    },

    txtContainer: {
        flex: 1,
        marginLeft: 8,
        width: '100%'
    },

    txtStyle: {
        fontSize: Typography.TINY,
        fontFamily: Fonts.BOLD,
        color: Colors.PRIMARY,
        textTransform: 'uppercase',
        marginTop: 2,
        lineHeight: 24
    },

    titleStyle: {
        fontSize: hp('2%'),
        color: Colors.LABEL,
        fontFamily: Fonts.BLACK,
    },
    subtitleStyle: {
        fontSize: Typography.SMALL,
        fontFamily: Fonts.MEDIUM,
        color: Colors.SECONDARY_TEXT,
        marginTop: 5,
        lineHeight: hp('2.5%')
    },

    btmContainer: {
        position: 'absolute',
        bottom: hp('9%'),
        width: '100%',
        paddingHorizontal: 20,
        alignItems: 'center'
    },

    btnContainer: {
        width: '68%',
        height: heightIntoDP(60),
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.PRIMARY,
        borderRadius: 18,
        shadowColor: '#382D7C',
        shadowOffset: { width: 0, height: 0 },
        shadowRadius: 10,
        shadowOpacity: 0.16,
        elevation: 8,
    },

    labelStyle: {
        color: Colors.WHITE,
        fontSize: Typography.BUTTON_DEF_TEXT,
        fontFamily: Fonts.BOLD,
    },
    checkboxStyle: {
        marginBottom: hp('0%')
        // marginTop: hp('0.3%')
    }
});
