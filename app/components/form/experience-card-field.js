import { Text, View } from 'native-base';
import React, { useEffect, useState } from 'react';
import { StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { Colors, Typography, Fonts } from '../../theme';
import ErrorContainer from './error-container';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';

const ExperienceCardField = ({
    formikProps,
    userObj,
    value,
    items
}) => {
    const experienceArr = items;
    const [activeIndex, setActiveIndex] = useState(null);

    const expValue = () => {
        if (userObj) {
            formikProps.setFieldValue(value, userObj[value]);
            setActiveIndex(experienceArr.findIndex(item => item.key === userObj[value]));
        }
    }

    useEffect(expValue, [userObj]);

    return (
        <>
            <View style={styles.container}>
                {experienceArr.map((item, index) =>
                    <TouchableWithoutFeedback
                        key={index}
                        onPress={() => { setActiveIndex(index); formikProps.setFieldValue('experienceRange', item.key) }}><View>
                            <View style={[styles.itemContainer, activeIndex === index ? styles.activeStyle : styles.inactiveStyle]}>
                                <Text style={activeIndex === index ? styles.activeLabelStyle : styles.inactiveLabelStyle}>{item.value}</Text>
                            </View>
                        </View>
                    </TouchableWithoutFeedback>)}
            </View>
            <View style={{ marginTop: 8 }}>
                {formikProps.errors[value] && formikProps.touched[value] && (
                    <ErrorContainer formikProps={formikProps} value={value} />
                )}
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        flexWrap: 'wrap'
    },

    itemContainer: {
        width: widthPercentageToDP('40%'),
        marginBottom: 20,
        paddingVertical: 20,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },

    activeStyle: {
        borderColor: Colors.PRIMARY,
        borderWidth: 1.2,
        borderRadius: 16,
        justifyContent: 'center',
        alignItems: 'center'
    },

    inactiveStyle: {
        borderColor: Colors.GREY,
        borderWidth: 1,
        borderRadius: 16,
        justifyContent: 'center',
        alignItems: 'center'
    },

    activeLabelStyle: {
        fontSize: Typography._14,
        fontFamily: Fonts.MEDIUM,
        color: Colors.PRIMARY,
        margin: 5
    },
    inactiveLabelStyle: {
        fontSize: Typography._14,
        color: '#B0B0B0',
        fontFamily: Fonts.MEDIUM,
        margin: 5
    }
});

export default ExperienceCardField;