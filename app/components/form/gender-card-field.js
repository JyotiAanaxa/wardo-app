import { Text, View } from 'native-base';
import React, { useState, useEffect } from 'react';
import { StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { Colors, Typography, Fonts } from '../../theme';
import FemaleIcon from '../../icons/female';
import MaleIcon from '../../icons/male';
import TransGenderIcon from '../../icons/transgender';
import ActiveFemaleIcon from '../../icons/active-female';
import ActiveMaleIcon from '../../icons/active-male';
import ActiveTransGenderIcon from '../../icons/active-transgender';
import ErrorContainer from './error-container';

const GenderCardField = ({
    formikProps,
    value,
    items,
    userObj,
    ...rest
}) => {

    const inactiveGenderArr = [<FemaleIcon />, <MaleIcon />, <TransGenderIcon />];
    const activeGenderArr = [<ActiveFemaleIcon />, <ActiveMaleIcon />, <ActiveTransGenderIcon />];
    const genderArr = items;
    const [activeIndex, setActiveIndex] = useState(null);

    const genderValue = () => {

        if (userObj.gender) {
            formikProps.setFieldValue('gender', userObj.gender);
            if (userObj.gender === 'MALE') {
                setActiveIndex(0);
                formikProps.setFieldValue('clothingPreference', 'MENS_CLOTHING');
            }
            if (userObj.gender === 'FEMALE') {
                formikProps.setFieldValue('clothingPreference', 'WOMENS_CLOTHING');
                setActiveIndex(1);
            }
            if (userObj.gender === 'OTHER') {
                setActiveIndex(2);
            }
        }
    }

    useEffect(genderValue, []);

    return (
        <>
            <View style={styles.container}>
                {inactiveGenderArr.map((item, index) =>
                    <TouchableWithoutFeedback key={index} onPress={() => {
                        if (genderArr[index]['key'] === 'MALE') {
                            formikProps.setFieldValue('clothingPreference', 'MENS_CLOTHING');
                        }
                        if (genderArr[index]['key'] === 'FEMALE') {
                            formikProps.setFieldValue('clothingPreference', 'WOMENS_CLOTHING');
                        }
                        formikProps.setFieldValue('gender', genderArr[index]['key']);
                        setActiveIndex(index);
                    }}><View>
                            <View style={activeIndex === index ? styles.activeStyle : styles.inactiveStyle}>
                                {activeIndex === index ? activeGenderArr[index] : item}
                            </View>
                            <Text style={styles.labelStyle}>{genderArr[index]['value']}</Text>
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
        width: '100%'
    },

    activeStyle: {
        height: 60,
        width: 60,
        backgroundColor: Colors.PRIMARY,
        borderWidth: 0,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    inactiveStyle: {
        height: 60,
        width: 60,
        borderColor: Colors.GREY,
        borderWidth: 0.7,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    labelStyle: {
        textAlign: 'center',
        marginTop: 8,
        fontSize: Typography.SMALL,
        color: Colors.LABEL,
        opacity: 0.8,
        fontWeight: '900',
        fontFamily: Fonts.HEAVY
    }
});

export default GenderCardField;
