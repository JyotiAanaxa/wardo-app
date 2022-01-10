import { Text, View, StyleSheet } from 'react-native';
import React from 'react';
import { Button } from 'native-base';
import IconButton from '../buttons/icon-button';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { Colors } from '../../theme';
import BackIcon from '../../icons/back';

export const FormHeader = ({
    step,
    nextIcon,
    nextText,
    backSubmit,
    nextSubmit,
    textStyles,
    isFirstNavigationShow
}) => {
    return (
        <View style={{ ...styles.container, justifyContent: nextIcon || nextText ? 'space-between' : 'flex-start' }}>
            <View>
                {isFirstNavigationShow ? <IconButton iconComponent={<BackIcon />} onSubmit={backSubmit} /> : step !== 0 && <IconButton icon={'chevron-left'} onSubmit={backSubmit} />}
            </View>
            <View style={{ marginRight: '6%' }}>
                {nextIcon && <IconButton icon={nextIcon} onSubmit={nextSubmit} />}
                {nextText && <Button transparent onPress={nextSubmit} ><Text style={{ ...textStyles }}>{nextText}</Text></Button>}
            </View>
        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        top: hp('1%'),
        position: 'absolute',
        zIndex: 1,
        flexDirection: 'row',
        width: hp('96%'),
        alignItems: 'center',
        alignSelf: 'center',
        left: 10
    }
});