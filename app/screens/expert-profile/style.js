import { StyleSheet } from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
    heightPercentageToDP,
} from 'react-native-responsive-screen';
import { Colors, Typography, Fonts } from '../../theme';
import { heightIntoDP, widthIntoDP, dpToHeightPercent } from '../../utils/app-util';

export const styles = StyleSheet.create({
    profileContainer: {
        top: hp('10%'),
        position: 'absolute',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },

    titleContainer: {
        marginTop: hp('8%'),
        backgroundColor: Colors.TRANSPARENT,
        paddingBottom: hp('4%'),
        width: '100%',
        alignItems: 'center',
    },
    editTitleContainer: {
        marginTop: hp('8%'),
        backgroundColor: Colors.TRANSPARENT,
        width: '100%',
        alignItems: 'center',
    },
    profileCardContainer: {
        width: widthIntoDP(105),
        height: heightIntoDP(105),
        marginTop: 18,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 22,
        backgroundColor: Colors.WHITE,
        elevation: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 0 },
        shadowRadius: 8,
        shadowOpacity: 0.10
    },
    title: {
        fontSize: Typography.H2,
        fontFamily: Fonts.BOLD,
        marginTop: hp('2.5%'),
        marginBottom: hp('1.5%'),
    },
    editIconStyle: {
        backgroundColor: '#E6E6E6',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
        paddingLeft: 12,
    },
    profileIconStyle: {
        marginTop: 8,
    },
    txtStyle: {
        color: Colors.LABEL,
        fontSize: Typography.SMALL,
        fontWeight: 'bold',
        textTransform: 'capitalize',
        marginLeft: -10,
    },
    curveCardContainer: {
        flex: 1,
        width: '100%',
        elevation: 16,
        backgroundColor: Colors.WHITE,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        alignItems: 'center',
        paddingTop: 30,
        paddingBottom: hp('10%'),
        overflow: 'hidden',
    },
    curveInnerContainer: {
        marginBottom: 10,
    },
    rowContainer: {
        width: '100%',
        marginBottom: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    columnLeftContainer: {
        flexDirection: 'row',
        paddingLeft: 8,
        alignItems: 'center',
    },
    columnRightContainer: {
        marginLeft: 30,
        color: Colors.LABEL,
        fontSize: Typography._14,
        fontFamily: Fonts.ROMAN,
        textTransform: 'capitalize',
    },
    iconBtnStyle: {
        height: 35,
        width: 35,
        borderRadius: 8,
        justifyContent: 'center',
    },
    btnContainer: {
        marginBottom: 5,
    },
    switchbtnContainer: {
        position: 'absolute',
        bottom: heightPercentageToDP('12%')
    },
    switchLabelStyle: {
        color: Colors.PRIMARY,
        fontSize: Typography._14,
        fontFamily: Fonts.ROMAN
    },
    profileUserName: {
        position: 'absolute',
        textAlignVertical: 'center',
        zIndex: 999,
        color: Colors.PRIMARY,
        textTransform: 'uppercase',
        margin: 0,
    },
});
