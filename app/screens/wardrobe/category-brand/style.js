import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Colors, Typography, Fonts } from '../../../theme';

export const styles = StyleSheet.create({

    titleContainer: {
        width: '100%',
        alignItems: 'center'
    },

    rightTxtStyle: {
        color: Colors.PRIMARY,
        fontFamily: Fonts.BOLD,
        fontWeight: '900',
        fontSize: Typography.MEDIUM
    },

    imgStyle: {
        width: hp('20%'),
        height: hp('20%')
    },

    formContainer: {
        width: '100%',
        marginTop: 12
    },

    container: {
        width: '100%',
        alignItems: 'center',
        marginTop: 30
    },

    brandOuterContainer: {
        width: '100%',
        alignItems: 'center',
        marginTop: 12
    },

    scrollContainer: {
        marginTop: hp('8%'),
        width: '100%',
        // marginBottom: hp('10%'),
    },

    containerStyle: {
        flex: 1,
        width: '85%',
        justifyContent: 'center'
    },

    inputContainer: {
        width: '85%',
        borderBottomWidth: 0
    },

    leafContainer: {
        marginTop: 30,
        marginBottom: 30,
        marginRight: 16,
        width: '85%',
        alignItems: 'center',
        flexDirection: 'row'
    },

    leafStyle: {
        marginRight: 5
    },

    leafTxtStyle: {
        fontSize: Typography.SMALL,
        color: Colors.SECONDARY_TEXT,
        fontFamily: Fonts.MEDIUM,
        marginRight: hp('2.1%'),
        lineHeight: hp('2.1%')
    },

    categoryListContainer: {
        width: '100%',
        marginLeft: '15%',
        paddingRight: '10%'
    },

    categoryTitleStyle: {
        fontSize: hp('1.8%'),
        color: Colors.LABEL,
        fontFamily: Fonts.BOLD,
        lineHeight: 16
    },

    categoryContainer: {
        width: '85%',
        justifyContent: 'space-between',

    },

    categoryInnerContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 8
    },

    brandInnerContainer: {
        width: '100%',
        marginBottom: 8
    },


    labelStyle: {
        fontSize: Typography.SMALL,
        color: Colors.SECONDARY_TEXT,
        fontFamily: Fonts.HEAVY,
        marginVertical: 10,
    },

    selectedTxtStyle: {
        fontSize: Typography.H2,
        color: Colors.LABEL,
        fontFamily: Fonts.HEAVY,
    },

    toggleIconStyle: {
        height: 30,
        width: 30,
        opacity: 0.5
    },

    autocompleteContainer: {
        flex: 1,
        left: 0,
        position: 'absolute',
        right: 0,
        top: 0,
        zIndex: 1
    },
    item: {
        backgroundColor: 'white',
        paddingLeft: 10,
        paddingVertical: 5
    },
    title: {
        fontSize: Typography.SMALL,
        color: Colors.SECONDARY_TEXT,
        fontFamily: Fonts.HEAVY,
    },
    inputContainer: {
        fontSize: hp('1.8%'),
        color: Colors.SECONDARY_TEXT,
        opacity: 0.7,
        fontFamily: Fonts.HEAVY,

    },
    brandContainer: {
        marginLeft: -4,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
});
