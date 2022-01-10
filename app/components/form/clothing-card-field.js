import { Text, View } from 'native-base';
import React, { useEffect, useState } from 'react';
import { StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { ActiveMenClothingIcon, InactiveMenClothingIcon } from '../../icons/mens-clothes';
import { ActiveWomenClothingIcon, InactiveWomenClothingIcon } from '../../icons/women-clothes';
import { Colors, Typography, Fonts } from '../../theme';
import ErrorContainer from './error-container';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';

const ClothingCardField = ({
    formikProps,
    userObj,
    value,
    items
}) => {

    const inactiveClothingArr = [<InactiveMenClothingIcon />, <InactiveWomenClothingIcon />];
    const activeClothingArr = [<ActiveMenClothingIcon />, <ActiveWomenClothingIcon />];
    const clothingArr = items;
    const [activeIndex, setActiveIndex] = useState(null);

    const clothingValue = () => {
        if (userObj.gender) {
            if (userObj.gender === 'MALE') {
                setActiveIndex(0);
                formikProps.setFieldValue('clothingPreference', 'MENS_CLOTHING');
            }
            if (userObj.gender === 'FEMALE') {
                formikProps.setFieldValue('clothingPreference', 'WOMENS_CLOTHING');
                setActiveIndex(1);
            }
        } else {
            setActiveIndex(clothingArr.findIndex(checkClothing));
        }

        function checkClothing(item) {
            return item.key === formikProps.values[value];
        }
    }

    useEffect(clothingValue, []);

    return (
        <>
            <View style={styles.container}>
                {clothingArr.map((item, index) =>
                    <TouchableWithoutFeedback
                        key={index}
                        onPress={() => { setActiveIndex(index); formikProps.setFieldValue('clothingPreference', clothingArr[index]['key']) }}><View>
                            <View style={[styles.clothContainer, activeIndex === index ? styles.activeStyle : styles.inactiveStyle, index % 2 == 0 ? { marginRight: 3 } : { marginLeft: 3 }]}>
                                {activeIndex === index ? activeClothingArr[index] : inactiveClothingArr[index]}
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
    },

    clothContainer: {
        width: '100%',
        maxWidth: widthPercentageToDP('35%'),
        paddingVertical: 12,
        paddingHorizontal: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },

    activeStyle: {
        backgroundColor: Colors.PRIMARY,
        borderWidth: 0,
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
        fontSize: heightPercentageToDP('1.4%'),
        fontFamily: Fonts.HEAVY,
        color: Colors.WHITE,
        margin: 5,
        opacity: 0.8,
    },
    inactiveLabelStyle: {
        fontSize: heightPercentageToDP('1.4%'),
        color: Colors.LABEL,
        fontFamily: Fonts.HEAVY,
        margin: 5,
        opacity: 0.8,
    }
});

export default ClothingCardField;
