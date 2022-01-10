import { StyleSheet } from 'react-native';
import { Colors } from '../../../theme';

export const styles = StyleSheet.create({
    view: {
        justifyContent: 'flex-end',
        margin: 0,
        zIndex: 0
    },
    container: {
        backgroundColor: Colors.WHITE,
        paddingBottom: 40,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30
    }
});