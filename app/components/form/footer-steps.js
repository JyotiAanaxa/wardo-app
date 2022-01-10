import * as Progress from 'react-native-progress';
import { View, StyleSheet } from 'react-native';
import React from 'react';
import { Colors, Typography, Fonts } from '../../theme';
import { widthPercentageToDP as wp, heightPercentageToDP } from 'react-native-responsive-screen';
import ThemeButton from '../buttons/theme-button';


export const FooterSteps = ({ progress, step, totalStep, leftBtnClick, rightBtnClick }) => {
    return <View style={styles.container}>
        <Progress.Bar progress={0.3} width={wp('100%')} size={1} height={2.5} unfilledColor={Colors.INPUT_BORDER_COLOR} borderWidth={0} color={Colors.PRIMARY} />
        <View style={styles.rowContainer}>
            <ThemeButton label={'Back'} onSubmit={leftBtnClick} transparent buttonStyle={{}} labelStyle={styles.leftBtnStyle} />
            <ThemeButton label={'Next'} onSubmit={rightBtnClick} buttonStyle={styles.rightBtnStyle} labelStyle={styles.txtStyle} />
        </View>
    </View>
}

const styles = StyleSheet.create({
    container: {
        width: wp('100%'),
        position: 'absolute',
        bottom: 0
    },
    rowContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 30,
        paddingVertical: 6
    },
    leftBtnStyle: {
        fontSize: Typography.BUTTON_DEF_TEXT,
        fontFamily: Fonts.REGULAR,
        color: Colors.SECONDARY_TEXT,
    },
    rightBtnStyle: {
        width: '25%',
        borderRadius: 10,
        justifyContent: 'center',
        backgroundColor: Colors.PRIMARY,
        height: heightPercentageToDP('4.8%')
    },
    txtStyle: {
        fontSize: Typography.BUTTON_DEF_TEXT,
        fontFamily: Fonts.BOLD,
        color: Colors.WHITE
    }
})