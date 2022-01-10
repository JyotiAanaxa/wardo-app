import React from 'react';
import { Text, View, StyleSheet,Platform } from 'react-native';
import { Colors, Typography, Fonts } from '../../theme';
import { heightPercentageToDP } from 'react-native-responsive-screen';

export const Heading = ({ title, subTitle, align = 'left', style, iconComponent, containerStyle }) => {
    return (
        <View style={[styles.container, containerStyle]}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text style={[styles.heading, style, { textAlign: align }]}>{title}</Text>
                {iconComponent ? iconComponent : <></>}
            </View>
            {subTitle && <Text style={[styles.subheading, { textAlign: align }]}>{subTitle}</Text>}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        marginTop: heightPercentageToDP('4%'),
        marginBottom: heightPercentageToDP('2%') 
    },

    heading: {
        color: Colors.HEADING,
        fontSize: Typography.H1,
        fontFamily: Fonts.BOLD,
        fontWeight: '900',
        marginRight: 10
    },
    subheading: {
        color: Colors.SECONDARY_TEXT,
        lineHeight: heightPercentageToDP('2%'),
        fontSize: Typography._12,
        fontFamily: Fonts.MEDIUM,
        marginTop: 5,
        fontWeight: '900',
    }
})
