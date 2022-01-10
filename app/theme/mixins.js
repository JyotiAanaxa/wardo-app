import { StyleSheet } from 'react-native';
import { Colors } from './colors';
import { Fonts } from './fonts';
import { Typography } from './typography';
import { widthPercentageToDP as wp, heightPercentageToDP as hp, heightPercentageToDP } from 'react-native-responsive-screen';


export const Mixins = StyleSheet.create({

    SCREEN: {
        flex: 1,
        width: '100%',
        backgroundColor: Colors.WHITE,
    },

    FULL_SCREEN: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.WHITE,
    },

    FLEX: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },

    FLEX_GRID: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        overflow: 'hidden',
    },

    HEADER: {
        fontSize: Typography.REGULAR,
        fontFamily: Fonts.BOLD,
        color: Colors.PRIMARY
    },

    SHADOW_STYLE__COLOR: {
        backgroundColor: Colors.WHITE,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 0 },
        shadowRadius: 10,
        shadowOpacity: 0.16,
        elevation: 8,
    },

    SHADOW_STYLE: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 0 },
        shadowRadius: 10,
        shadowOpacity: 0.16,
        elevation: 8,
    },

    boxStyle: {
        width: '100%',
        borderRadius: 10,
        justifyContent: 'space-between',
    },
    cardStyle: {
        alignSelf: 'center',
        borderRadius: 25,
        width: '100%',
        backgroundColor: Colors.WHITE,
        shadowColor: Colors.BLACK,
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.51,
        padding: 25,
        // height: hp('33%'),
        shadowRadius: 13.16,
        elevation: 20,
        justifyContent: 'space-between',
    },
    cont: {
        flex: 1,
        alignItems: 'center',
        width: wp('100%'),
        paddingTop: hp('11%'),
    },

    labelBoxPrimary: {
        width: wp('80%'),
        fontSize: Typography.H1,
        fontFamily: Fonts.BOLD,
        color: Colors.LABEL
    },

    labelBoxSecondary: {
        width: wp('65%'),
        marginTop: 8,
        lineHeight: heightPercentageToDP('2.3%'),
        fontSize: Typography.SMALL,
        color: Colors.SECONDARY_TEXT,
        fontFamily: Fonts.MEDIUM,
    },

    labelCardPrimary: {
        fontSize: Typography.H1,
        color: Colors.LABEL,
        opacity: 0.9,
        fontFamily: Fonts.HEAVY,
    },
    labelCardSecondary: {
        fontSize: Typography.H1,
        color: Colors.LABEL,
        fontFamily: Fonts.BOLD,
    },
    txtStyle: {
        marginBottom: 8,
        marginLeft: 4,
        opacity: 0.5,
        lineHeight: heightPercentageToDP('2.1%'),
        fontSize: Typography.SMALL,
        fontFamily: Fonts.MEDIUM,
    },
    bottomLabelTxtStyle: {
        fontSize: Typography.SMALL,
        color: '#B0B0B0',
        lineHeight: heightPercentageToDP('2.1%'),
        fontFamily: Fonts.MEDIUM,
        marginTop: 5
    },
    bottomTxtStyle: {
        fontSize: Typography.SMALL,
        color: Colors.SECONDARY_TEXT,
        textAlign: 'center',
        lineHeight: 22,
        fontFamily: Fonts.MEDIUM,
    }
});
