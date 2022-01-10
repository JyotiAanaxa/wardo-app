import { Text, View, Label } from 'native-base';
import React from 'react';
import { StyleSheet } from 'react-native';
import LeafIcon from '../../../icons/leaf';
import { Typography, Colors, Fonts } from '../../../theme';
import { Toggle } from '../../../components/form/formInput/switch';

const SwitchContainer = ({
    formikProps,
    value,
    icon,
    primaryText,
    secondaryText
}) => {
    return (
        <View style={styles.container}>
            <View style={{ width: '70%' }}
            >
                <Label style={{ fontSize: Typography._12, color: Colors.SECONDARY_TEXT, fontFamily: Fonts.MEDIUM, marginBottom: 8 }}>Fashion Preferences</Label>
                <Label style={{
                    width: '100%',
                    fontSize: Typography._16,
                    fontFamily: Fonts.MEDIUM,
                    color: Colors.LABEL, marginBottom: 8
                }}>Eco-Friendly Mode</Label>
                <View style={{ flexDirection: 'row', marginBottom: 4, justifyContent: 'flex-start', alignItems: 'center' }}>
                    {icon && <View style={{ marginRight: 5, marginLeft: -5 }}>
                        <LeafIcon />
                    </View>}
                    <Text style={styles.txtStyle}>{primaryText}</Text>
                </View>

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
        width: '84%',
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    txtStyle: {
        fontSize: Typography._12,
        color: Colors.SECONDARY_TEXT,
        fontFamily: Fonts.MEDIUM,
        lineHeight: Typography._16
    }
});

export default SwitchContainer;
