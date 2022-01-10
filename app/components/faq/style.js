import { StyleSheet, Platform } from 'react-native';
import { Colors, Typography, Fonts } from '../../theme';

export const styles = StyleSheet.create({
    contentContainer: {
        paddingHorizontal: 30,
        marginTop: 35
    },
    accordionContainer: {
        backgroundColor: Colors.WHITE,
        borderRadius: 18,
        marginBottom: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 0 },
        shadowRadius: 10,
        shadowOpacity: 0.16,
        elevation: 16,
        padding: 15
    },
    titleContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    titleStyle: {
        fontSize: Typography._14,
        marginTop:Platform.OS==='android' ?  0 : 6,
        fontFamily: Fonts.MEDIUM,
        color: '#80838C',
        lineHeight: 24
    },
    touchableContainer: {
        width: 40,
        height: 40
    },
    toggleIconContainer: {
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center'
    },
    bodyTxtStyle: {
        fontSize: Typography._14,
        marginTop:Platform.OS==='android' ?  0 : 6,
        fontFamily: Fonts.ROMAN,
        color: '#B0B0B0',
        lineHeight: 24
    }

})
