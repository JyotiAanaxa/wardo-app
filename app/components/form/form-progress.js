import * as Progress from 'react-native-progress';
import { Text, View, StyleSheet } from 'react-native';
import React from 'react';
import { Colors, Typography, Fonts } from '../../theme';


export const FormSteps = ({ progress, step, totalStep, label }) => {
    return <View>
        <Text style={styles.stepStyle}>{`0${step} / `}<Text style={[styles.stepStyle, { fontSize: Typography._12 }]}>{`0${totalStep}`}</Text></Text>
        <Progress.Bar progress={progress} width={100} size={1} height={2} unfilledColor={Colors.INPUT_BORDER_COLOR} borderWidth={0} color={'#382D7C'} />
        {/* {label && <Text style={styles.txtStyle}>{label}</Text>} */}
    </View>
}

const styles = StyleSheet.create({
    stepStyle: {
        marginBottom: 5,
        fontSize: Typography._14,
        color: '#382D7C',
        fontFamily: Fonts.HEAVY,
    },
    txtStyle: {
        marginTop: 5,
        fontSize: Typography.TINY,
        fontFamily: Fonts.REGULAR,
        color: Colors.SECONDARY_TEXT,
    }
})
