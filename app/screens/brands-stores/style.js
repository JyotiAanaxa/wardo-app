import { StyleSheet } from 'react-native';
import { Colors, Fonts, Spacing, Typography } from '../../theme';

export const styles = StyleSheet.create({
    container: {
        padding: Spacing.AUTO_PADDING,
        justifyContent: 'flex-start',
        backgroundColor: Colors.WHITE,
    },

    rowContainer: {
        flexDirection: 'row',
        width: '100%',
        marginBottom: 15,
        marginTop: 15
    },

    columnContainer: {
        width: '50%',
    },

    headerTxtStyle: {
        fontSize: Typography.MEDIUM,
        fontWeight: 'bold',
        fontFamily: Fonts.BOLD
    },

    txtContainer: {
        flex: 1,
        marginLeft: 8,
        width: '100%'
    },

    titleStyle: {
        fontSize: Typography.MEDIUM,
        color: Colors.LABEL,
        fontWeight: 'bold',
        fontFamily: Fonts.BOLD,
        lineHeight: 22
    },
    subtitleStyle: {
        fontSize: Typography.SMALL,
        fontFamily: Fonts.REGULAR,
        color: Colors.SECONDARY_TEXT,
        lineHeight: 22
    },

    btmContainer: {
        position: 'absolute',
        bottom: 15,
        width: '100%',
        alignItems: 'center'
    },

    btnContainer: {
        width: '100%',
        justifyContent: 'center',
        backgroundColor: Colors.PRIMARY,
        height: 10,
        borderRadius: 20
    },

    labelStyle: {
        color: Colors.WHITE,
        fontSize: Typography.BUTTON_DEF_TEXT,
        fontWeight: 'bold'
    },
    checkboxStyle: {
        marginTop: 12
    }
});