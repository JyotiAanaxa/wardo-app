import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Colors, Typography, Fonts } from '../../../theme';

export const styles = StyleSheet.create({

    serviceCheckboxStyle: {
        position: 'absolute',
        right: 8,
        top: 8
    },
    serviceTouchContainer: {
        backgroundColor: Colors.WHITE,
        width: '50%'
    },
    serviceItem: {
        backgroundColor: Colors.WHITE,
        marginTop: 10,
        marginBottom: 15,
        width: '89%',
        alignItems: 'center',
        borderColor: '#D0D0D0',
        borderWidth: 1,
        borderRadius: 18,
        height: hp('22%'),
        position: 'relative',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 0 },
        shadowRadius: 6,
        shadowOpacity: 0.12,
        elevation: 8,
    },
    serviceTitle: {
        position: 'absolute',
        bottom: 12,
        color: 'black',
        fontSize: Typography._14,
        color: '#80838C',
        fontFamily: Fonts.MEDIUM
    },
    workCheckboxStyle: {
        marginRight: 5
    },
    workTouchContainer: {
        backgroundColor: Colors.WHITE,
        width: '100%',
        marginLeft: -5
    },
    workItem: {
        marginBottom: 15,
        paddingBottom: 10,
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    workTitle: {
        color: 'black',
        fontSize: Typography._18,
        color: '#B0B0B0',
        fontFamily: Fonts.MEDIUM
    },
});