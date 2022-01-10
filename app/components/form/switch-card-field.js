import { Text, View } from 'native-base';
import React, { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { Colors, Typography, Fonts } from '../../theme';
import { Toggle } from './formInput/switch';
import { heightPercentageToDP } from 'react-native-responsive-screen';

const SwitchCardField = ({
    formikProps,
    value,
    icon,
    userObj,
    primaryText,
    secondaryText
}) => {

    const switchValue = () => {
        if (userObj.ecoFriendlyOpted) {
            formikProps.setFieldValue('ecoFriendlyOpted', userObj.ecoFriendlyOpted);
        }
    }

    useEffect(switchValue, []);

    return (
        <View style={styles.container}>
            <View style={{ width: '70%', marginBottom: 10 }}
            >
                <View style={{ flexDirection: 'row', marginBottom: 4, alignItems: 'center' }}>
                    {icon && <View style={{ marginRight: 5, marginLeft: -5 }}>
                        {icon}
                    </View>}
                    <Text style={styles.primaryStyle}>{primaryText}</Text>
                </View>
                <Text style={styles.secondaryStyle}>{secondaryText}</Text>
            </View>
            <Toggle
                formikProps={formikProps}
                value={value}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between'
    },
    secondaryStyle: {
        lineHeight: heightPercentageToDP('2.1%'),
        fontSize: Typography.SMALL,
        color: '#B0B0B0',
        fontFamily: Fonts.MEDIUM,
        marginTop: 3
    },
    primaryStyle: {
        textAlign: 'center',
        fontSize: heightPercentageToDP('2%'),
        color: Colors.LABEL,
        opacity: 0.8,
        fontWeight: '900',
        fontFamily: Fonts.HEAVY
    }
});

export default SwitchCardField;
