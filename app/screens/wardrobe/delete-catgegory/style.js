import { StyleSheet, Platform } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Colors, Fonts, Typography } from '../../../theme';

export const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        padding: 20
    },

    rightIconStyle: {
        padding: 5,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: Colors.GREY,
        marginRight: 10
    },

    imgContainer: {
        height: hp('42%'),
        width: hp('32%'),
        marginTop: Platform.OS==='android' ?  hp('6%') : hp('8%'),
        marginBottom: hp('1%')
    },

    imgStyle: {
        height: '100%',
        width: '100%',
        alignItems: 'center'
    },

    bottomBtnContainer: {
        position: 'absolute',
        bottom: Platform.OS==='android' ? hp('12%') : hp('13.5%'),
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },

    continueBtnContainer: {
        width: '60%',
        height: 60,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 8,
        borderRadius: 18,
        backgroundColor: Colors.PRIMARY
    },

    continueTxtStyle: {
        color: Colors.WHITE,
        fontSize: Typography._16,
        fontFamily: Fonts.MEDIUM,
        textTransform: 'capitalize',
    },

    brandContainer: {
        width: Platform.OS==='android' ?'95%' : '84%',
        marginTop: 15,
        alignItems: 'center'
    },

    categoryContainer: {
        width: '100%',
        justifyContent: 'space-between',

    },

    categoryInnerContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 8
    },

    labelStyle: {
        fontSize: 14,
        color: Colors.SECONDARY_TEXT,
        fontFamily: Fonts.ROMAN,
        marginVertical: 10,
        lineHeight: 17
    },

    selectedTxtStyle: {
        fontSize: 22,
        color: Colors.LABEL,
        fontFamily: Fonts.HEAVY,
        lineHeight: 27,
        marginTop: 5
    },

    modalContainer: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 15
    },

    modalTitleStyle: {
        fontSize: hp('2.3%'),
        color: Colors.LABEL,
        fontFamily: Fonts.BOLD,
        marginTop: 30,
        textAlign: 'center'
    },

    modalTxtStyle: {
        fontSize: Typography.SMALL,
        color: Colors.SECONDARY_TEXT,
        fontFamily: Fonts.BOLD,
        fontWeight: '900',
        marginTop: 10,
        textAlign: 'center'
    },

    btnRowContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 25
    },

    activeBtnContainer: {
        width: hp('16%'),
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
        color: Colors.PRIMARY,
        marginTop : Platform.OS==='android'? 0 : 4,
        marginLeft : Platform.OS==='android'? 0 : 4,
        fontFamily: Fonts.BLACK,
        fontWeight: '900'
    },

    inactiveBtnContainer: {
        width: hp('16%'),
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
        marginTop : Platform.OS==='android'? 0 : 4,
        marginLeft : Platform.OS==='android'? 0 : 4,
        color: Colors.WHITE,
        fontFamily: Fonts.HEAVY,
        fontWeight: '900'
    },


});
