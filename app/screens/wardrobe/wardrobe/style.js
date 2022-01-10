import { StyleSheet,Platform } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp, heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import { Colors, Fonts, Typography } from '../../../theme';

export const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    containerStyle: {
        justifyContent: 'center'
    },
    flatContainer: {
        width: '100%',
        marginTop: 16
    },
    item: {
        backgroundColor: Colors.WHITE,
        borderRadius: 16,
        marginTop: 8,
        marginBottom: 8,
        width: wp('43.5%'),
        height: hp('30%'),
        paddingTop: 25,
        position: 'relative',
        alignItems: 'center',
    },
    itemContainer: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    itemBottomContainer: {
        width: '100%',
        backgroundColor: Colors.GREY_CARD,
        position: 'absolute',
        bottom: 0,
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 12
    },
    itemBottomTitle: {
        fontSize: Typography.SMALL,
        lineHeight: 24,
        color: Colors.LABEL,
        opacity: 0.8
    },
    itemBottomPrice: {
        fontSize: Typography.SMALL,
        fontWeight: 'bold',
        color: Colors.LABEL,
        opacity: 0.8
    },
    itemBottomBtn: {
        backgroundColor: 'white',
        padding: 6,
        borderRadius: 8
    },
    itemTopBtnStyle: {
        backgroundColor: Colors.GREY_CARD,
        padding: 5,
        borderRadius: 50,
        position: 'absolute',
        top: 8,
        right: 8,
    },
    rightBtnStyle: {
        borderRadius: 8,
        borderWidth: 0.6,
        padding: 8
    },
    userCardStyle: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 15,
        borderRadius: 12,
        backgroundColor: Colors.GREY_CARD,
        elevation: 8,
        marginTop: 15
    },

    leftColumnStyle: {
        alignItems: 'center',
        flexDirection: 'row'
    },

    accountIconContainer: {
        borderRadius: 12,
        borderWidth: 1,
        borderColor: Colors.PRIMARY,
        padding: 10
    },

    userCardTitle: {
        fontSize: Typography.SMALL,
        lineHeight: 26,
        color: Colors.SECONDARY_TEXT
    },

    userCardSubTitle: {
        fontSize: Typography.INPUT_TEXT,
        fontWeight: 'bold',
        color: Colors.LABEL,
        opacity: 0.8
    },

    modalContainer: {
        width: '100%',
        paddingTop: 10
    },

    lineContainer: {
        width: '100%',
        alignItems: 'center'
    },

    line: {
        height: 3.5,
        borderRadius: 10,
        width: hp('6%'),
        alignItems: 'center',
        marginTop: 2,
        backgroundColor: '#D0D0D0'
    },

    modalHeading: {
        marginTop: 30,
        paddingBottom: 27,
        borderBottomWidth: 1,
        borderBottomColor: "#D0D0D0",
        paddingHorizontal: 36
    },

    heading: {
        fontSize: hp('2.1%'),
        lineHeight: 20,
        fontFamily: Fonts.HEAVY
    },

    subHeading: {
        fontSize: 12,
        lineHeight: 19,
        color: '#979797',
        fontFamily: Fonts.LIGHT
    },

    optionContainer: {
        width: '100%',
        paddingHorizontal: 40
    },

    itemFirstRowContainer: {
        flexDirection: 'row',
        marginTop: 35,
        marginBottom: hp('2.8%'),
        alignItems: 'center'
    },

    itemSecondRowContainer: {
        flexDirection: 'row',
        marginTop: 9,
        marginLeft: -3,
        alignItems: 'center'
    },

    optionLabel: {
        fontSize: hp('2%'),
        lineHeight: 20,
        marginLeft: 13,
        textTransform: 'capitalize',
        color: Colors.LABEL,
        fontFamily: Fonts.HEAVY
    },

    imageOptionLabel: {
        fontSize: hp('2%'),
        lineHeight: 28,
        fontFamily: Fonts.HEAVY,
        textTransform: 'capitalize',
        color: Colors.LABEL
    },

    galleryOptionLabel: {
        fontSize: hp('2%'),
        lineHeight: 28,
        marginLeft: -widthPercentageToDP('1.4%'),
        fontFamily: Fonts.HEAVY,
        textTransform: 'capitalize',
        color: Colors.LABEL
    },

    categoryListContainer: {
        width: '100%',
        marginLeft: Platform.OS==='android' ? '1%' : 0
    },

    categoryTitleStyle: {
        fontSize: heightPercentageToDP('2.6%'),
        marginTop: 12,
        color: Colors.LABEL,
        fontFamily: Fonts.HEAVY,
    },
    yellowContainer: {
        position: 'absolute',
        top: Platform.OS==='android' ? hp('5.8%') : hp('5.5%'),
        height: 20,
        width: Platform.OS==='android' ?'36%' : '43%',
        left: hp('8.5%')
    },
    editModalContainer: {
        margin: 0,
        height: hp('88%'),
        paddingHorizontal: 20,
        paddingTop: 10
    }
});
