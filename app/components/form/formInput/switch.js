import React from 'react';
import { StyleSheet } from 'react-native';
import { Switch } from 'react-native-switch';
import ErrorContainer from '../error-container';
import { Colors } from '../../../theme';


export const Toggle = ({ formikProps, value, backgoundActiveColor = Colors.Switch.BACKGROUND_ACTIVE }) => {
    return (
        <>
            <Switch
                value={formikProps.values[value]}
                onValueChange={(val) => formikProps.setFieldValue(value, val)}
                disabled={false}
                circleSize={30}
                barHeight={30}
                backgroundActive={backgoundActiveColor}
                backgroundInactive={Colors.Switch.BACKGROUND_INACTIVE}
                circleActiveColor={Colors.Switch.CIRCLE_ACTIVE}
                circleInActiveColor={Colors.Switch.CIRCLE_INACTIVE}
                innerCircleStyle={[styles.innerCircleStyle, { borderColor: formikProps.values[value] ? backgoundActiveColor : Colors.Switch.BACKGROUND_INACTIVE }]} // style for inner animated circle for what you (may) be rendering inside the circle
                outerCircleStyle={{}} // style for outer animated circle
                renderActiveText={false}
                renderInActiveText={false}
                switchLeftPx={2} // denominator for logic when sliding to TRUE position. Higher number = more space from RIGHT of the circle to END of the slider
                switchRightPx={2} // denominator for logic when sliding to FALSE position. Higher number = more space from LEFT of the circle to BEGINNING of the slider
                switchWidthMultiplier={2} // multipled by the `circleSize` prop to calculate total width of the Switch
                switchBorderRadius={30} // Sets the border Radius of the switch slider. If unset, it remains the circleSize.
            />
            {formikProps.errors[value] && formikProps.touched[value] && (
                <ErrorContainer formikProps={formikProps} />
            )}
        </>
    );
};

const styles = StyleSheet.create({
    innerCircleStyle: {
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 1
    }
})

