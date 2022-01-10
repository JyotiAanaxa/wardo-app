import { StyleSheet } from "react-native";
import { heightPercentageToDP as hp, widthPercentageToDP, heightPercentageToDP } from "react-native-responsive-screen";
import { Colors, Typography } from "../../../theme";
import { Fonts } from "../../../theme/fonts";
import { heightIntoDP, widthIntoDP, dpToHeightPercent, dpToWidthPercent } from "../../../utils/app-util";

export const styles = StyleSheet.create({
    scrollContainer: {
        width: '100%',
        marginBottom: hp('10%')
    },
    profileBgContainer: {
        width: '100%',
        position: 'absolute',
        top: hp('6.2%'),
        alignItems: 'center',
        justifyContent: 'center'
    },
    profileContainer: {
        backgroundColor: Colors.TRANSPARENT,
        marginTop: hp('2.5%'),
        width: '100%',
        alignItems: 'center'
    },
    starBgContainer: {
        backgroundColor: '#E5E0FF',
        padding: 5,
        marginTop: 12,
        height: heightIntoDP(28),
        borderRadius: 8,
        marginLeft: 6
    },
    starTxtStyle: {
        color: Colors.PRIMARY,
        marginRight: 1
    },
    editTitleContainer: {
        marginTop: hp('8%'),
        backgroundColor: Colors.TRANSPARENT,
        width: '100%',
        alignItems: 'center'
    },
    profileCardContainer: {
        width: heightIntoDP(100),
        justifyContent: 'center',
        alignItems: 'center',
        height: heightIntoDP(100),
        borderRadius: 22,
        backgroundColor: Colors.WHITE,
        elevation: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 0 },
        shadowRadius: 8,
        shadowOpacity: 0.10
    },
    userTitle: {
        fontSize: Typography._20,
        fontFamily: Fonts.HEAVY,
    },
    title: {
        fontSize: Typography._20,
        fontFamily: Fonts.HEAVY,
        marginTop: 18
    },
    flex_row_container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    genericContainer: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },

    iconTxtStyle: {
        fontSize: Typography._12,
        fontFamily: Fonts.MEDIUM,
        color: Colors.LABEL,
        marginHorizontal: 5
    },
    msgBtnStyle: {
        height: 46,
        width: '30%',
        paddingLeft: '4%',
        backgroundColor: Colors.PRIMARY,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 16
    },

    msgTxtStyle: {
        marginLeft: -6,
        fontSize: Typography._14,
        fontFamily: Fonts.ROMAN,
        color: Colors.WHITE,
        textTransform: 'capitalize'
    },
    sectionContainer: {
        alignItems: 'center',
        marginTop: 30,
        marginBottom: 32,
        width: '85%',
        backgroundColor: Colors.WHITE,
        elevation: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 0 },
        shadowRadius: 10,
        shadowOpacity: 0.16,
        padding: 2,
        borderRadius: 16
    },
    sectionTitleContainer: {
        backgroundColor: Colors.WHITE,
        paddingHorizontal: 8,
        paddingVertical: 8,
        borderRadius: 10,
    },
    sectionTxtStyle: {
        fontSize: Typography._14,
        fontFamily: Fonts.HEAVY
    },
    // listContainer: {
    //     height: 220,
    //     width: 150,
    //     backgroundColor: '#F2F2F2',
    //     marginRight: 10,
    //     marginTop: 22,
    //     borderRadius: 10
    // },
    listTxtStyle: {
        fontSize: Typography._15,
        fontFamily: Fonts.ROMAN,
        color: Colors.LABEL,
        lineHeight: 22,
        marginRight: 10
    },
    pckgContainer: {
        position: 'absolute',
        top: heightIntoDP(32),
        bottom: heightIntoDP(30),
        left: widthPercentageToDP('35.5%'),
        justifyContent: 'space-between',
        alignItems: 'flex-start'
    },
    pckgBtnContainer: {
        flexDirection: 'row-reverse',
        backgroundColor: 'white',
        borderRadius: 6,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        height: 33,
        paddingLeft: 12
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
    listdescStyle: {
        fontSize: Typography._12,
        fontFamily: Fonts.ROMAN,
        lineHeight: 16,
        color: '#80838C'
    },
    aboutMeSection: {
        width: '50%',
        justifyContent: 'flex-start',
        marginBottom: 10
    },
    aboutMeSectionTitleStyle: {
        fontSize: Typography._12,
        fontFamily: Fonts.ROMAN,
        color: '#80838C'
    },
    iconBgStyle: {
        backgroundColor: '#F0EFFF',
        padding: 3,
        borderRadius: 50,
        marginRight: 5
    },
    iconContainer: {
        flexDirection: 'row',
        width: '100%',
        flexWrap: 'wrap'
    },
    leftTxtStyle: {
        fontSize: Typography._14,
        fontFamily: Fonts.HEAVY,
        color: Colors.LABEL
    },
    rightTxtStyle: {
        fontSize: Typography._10,
        fontFamily: Fonts.ROMAN,
        color: Colors.PRIMARY
    },
    btmTxtStyle: {
        fontSize: Typography._12,
        fontFamily: Fonts.ROMAN,
        color: Colors.SECONDARY_TEXT,
        marginTop: 5,
        marginBottom: 8
    },
    resumeBtnContainer: {
        width: '100%',
        marginLeft: 10,
        alignSelf: 'center',
        aspectRatio: 1
    },
    dwnldTxtStyle: {
        fontSize: Typography._14,
        fontFamily: Fonts.HEAVY,
        color: Colors.PRIMARY,
        marginLeft: 18
    },
    profileUserName: {
        position: 'absolute',
        zIndex: 999,
        color: Colors.PRIMARY,
        textTransform: 'uppercase'
    },
    editContainer: {
        flexDirection: 'row',
        width: '85%',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        alignSelf: 'center',
        marginBottom: dpToHeightPercent(26)
    },
    editHeading: {
        fontSize: Typography._14,
        fontFamily: Fonts.BOLD,
        color: Colors.LABEL,
    },
    editSubheading: {
        fontSize: Typography._12,
        fontFamily: Fonts.MEDIUM,
        color: Colors.SECONDARY_TEXT,
        marginTop: dpToHeightPercent(6)
    },
    editBtnContainer: {
        borderRadius: 8,
        width: dpToHeightPercent(56),
        height: heightIntoDP(28),
        backgroundColor: Colors.PRIMARY,
        justifyContent: 'center',
        alignItems: 'center'
    },
    editLabelStyle: {
        fontSize: Typography._12,
        fontFamily: Fonts.ROMAN,
        color: Colors.WHITE,
    },
    expTxtStyle: {
        fontSize: Typography._14,
        fontFamily: Fonts.ROMAN,
        color: Colors.PRIMARY,
    },
    aboutTxtStyle: {
        fontSize: Typography._12,
        fontFamily: Fonts.ROMAN,
        color: Colors.SECONDARY_TEXT,
        lineHeight: Typography._18,
        textAlignVertical: 'center',
        padding: 4,
        width: '100%'
    },

    socialMediaContainer: {
        width: '100%',
        justifyContent: 'flex-start',
        alignItems: 'flex-start'
    },
    editMediaContainer: {
        borderRadius: 15,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 45,
        borderWidth: 1.5,
        borderColor: '#F0EFFF',
        marginBottom: 8,
        padding: 4,
        paddingLeft: 10
    }
});
