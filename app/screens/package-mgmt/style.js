import { StyleSheet } from "react-native";
import { heightPercentageToDP as hp, widthPercentageToDP } from "react-native-responsive-screen";
import { Colors, Typography } from "../../theme";
import { Fonts } from "../../theme/fonts";
import { heightIntoDP, widthIntoDP } from "../../utils/app-util";

export const styles = StyleSheet.create({
    scrollContainer: {
        width: '100%'
    },
    container: {
        width: '85%',
        alignSelf: 'center'
    },
    pckgContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    packageTitle: {
        fontFamily: Fonts.ROMAN,
        fontSize: Typography._20,
        color: Colors.LABEL
    },
    packageSubTitle: {
        fontFamily: Fonts.BOLD,
        fontSize: Typography._20,
        color: Colors.LABEL,
        lineHeight: Typography._28
    },
    packageColorStyle: {
        borderRadius: 16,
        height: heightIntoDP(60),
        width: widthIntoDP(60)
    },
    chngTypeStyle: {
        height: heightIntoDP(30),
        width: widthIntoDP(106),
        flexDirection: 'row',
        borderRadius: 8,
        backgroundColor: '#F0EFFF',
        marginTop: heightIntoDP(14),
        marginBottom: heightIntoDP(30),
        justifyContent: 'center',
        alignItems: 'center'
    },
    changeTypeTxtStyle: {
        fontFamily: Fonts.ROMAN,
        fontSize: Typography._12,
        marginLeft: 3,
        color: Colors.PRIMARY,
    },
    inputContainer: {
        padding: 20,
        paddingHorizontal: 14,
        height: heightIntoDP(74),
        borderStyle: 'dashed',
        borderRadius: 1,
        borderWidth: 1,
        borderColor: '#B0B0B0',
        borderRadius: 14,
        justifyContent: 'center'
    },
    questTitleStyle: {
        fontFamily: Fonts.HEAVY,
        fontSize: Typography._16,
        color: Colors.LABEL,
    },
    quesDescStyle: {
        fontFamily: Fonts.MEDIUM,
        fontSize: Typography._12,
        marginTop: 7,
        color: '#B0B0B0',
    },
    answerStyle: {
        fontFamily: Fonts.MEDIUM,
        fontSize: Typography._13,
        color: Colors.LABEL,
        marginRight: '18%',
        lineHeight: 18
    },
    btnContainer: {
        marginTop: 30,
        marginBottom: 20,
        width: widthIntoDP(270),
        height: heightIntoDP(60),
        borderRadius: 18,
        position: 'absolute',
        bottom: 0,
        backgroundColor: Colors.PRIMARY,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 0 },
        shadowRadius: 6,
        shadowOpacity: 0.12,
        elevation: 4
    },
    labelStyle: {
        fontFamily: Fonts.MEDIUM,
        fontSize: Typography._16,
        color: Colors.WHITE
    },
    modalContainer: {
        width: '100%',
        paddingTop: 10,
        paddingBottom: 0,
        margin: 0
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
        marginTop: 20,
        marginBottom: 26
    },

    heading: {
        fontSize: Typography._16,
        lineHeight: 20,
        fontFamily: Fonts.ROMAN,
        textAlign: 'center',
        color: Colors.SECONDARY_TEXT
    },
    pckgCardContainer: {
        position: 'absolute',
        top: heightIntoDP(35),
        bottom: heightIntoDP(35),
        left: widthPercentageToDP('42%'),
        justifyContent: 'space-between',
        alignItems: 'flex-start'
    },
    pckgBtnContainer: {
        flexDirection: 'row-reverse',
        backgroundColor: 'yellow',
        backgroundColor: 'white',
        borderRadius: 6,
        justifyContent: 'center',
        paddingHorizontal: 15,
        alignItems: 'center',
        height: 33
    },
    amtStyle: {
        fontSize: Typography._10,
        fontFamily: Fonts.MEDIUM,
        textTransform: 'capitalize'
    },
    pckgBtnTxtStyle: {
        fontSize: Typography._14,
        fontFamily: Fonts.MEDIUM,
        textTransform: 'capitalize'
    },
    pckgTitleStyle: {
        fontSize: Typography._18,
        fontFamily: Fonts.MEDIUM,
        color: Colors.LABEL
    },

    saveContainer: {
        position: 'absolute',
        width: '100%',
        opacity: 1,
        height: heightIntoDP(140),
        bottom: 0,
        zIndex: -1
    },
    saveBtnContainer: {
        marginTop: 20,
        width: widthIntoDP(190),
        position: 'absolute',
        bottom: 0,
        marginBottom: 20,
        height: heightIntoDP(60),
        borderRadius: 18,
        backgroundColor: Colors.PRIMARY,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 0 },
        shadowRadius: 6,
        shadowOpacity: 0.12,
        elevation: 4
    },
    iconContainer: {
        width: widthIntoDP(40),
        height: heightIntoDP(40),
        backgroundColor: '#F0EFFF',
        padding: 8,
        borderRadius: 14,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10
    },
    editTxtStyle: {
        fontSize: Typography._14,
        fontFamily: Fonts.ROMAN,
        color: '#B0B0B0'
    },
    modalTitleStyle: {
        fontSize: Typography._18,
        fontFamily: Fonts.HEAVY,
        color: Colors.LABEL,
        lineHeight: Typography._24
    },
    quesPackageRow: {
        flexDirection: 'row',
        alignItems: 'center',
        position: 'absolute',
        bottom: heightIntoDP(110),
        alignSelf: 'center'
    },
    quesPckgTxtStyle: {
        fontSize: Typography._14,
        fontFamily: Fonts.ROMAN,
        color: Colors.PRIMARY,
        marginLeft: 10
    },
    serviceRowContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: '100%',
        flexWrap: 'wrap'
    },
    serviceContainer: {
        width: widthIntoDP(80),
        height: heightIntoDP(80),
        // backgroundColor: '#F2F2F2',
        borderRadius: 18,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        alignSelf: 'center'
    },
    serviceTxtStyle: {
        fontSize: Typography._12,
        fontFamily: Fonts.ROMAN,
        color: Colors.LABEL,
        textAlign: 'center',
        marginTop: 10,
        marginBottom: 5
    }

});