import { StyleSheet } from 'react-native';
import { Colors, Spacing } from '../../theme';
import { heightPercentageToDP } from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
    container: {
        padding: Spacing.AUTO_PADDING,
        justifyContent: 'flex-start',
        backgroundColor: Colors.WHITE
    },

    rowContainer: {
        width: '100%',
        flexDirection: 'row',
        flexWrap: 'wrap'
    },

    columnContainer: {
        width: '50%',
    },
    mainContainer: {
        marginTop: heightPercentageToDP('2%'),
        width: '95%'
    }
});