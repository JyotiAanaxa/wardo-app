import React from 'react';
import { StyleSheet } from 'react-native';
import { View } from 'native-base';
import ShoeIcon from '../icons/shoe.js';
import DressIcon from '../icons/dress.js';
import OpticsIcon from '../icons/optics.js';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export const DefBackground = () => {
    return (
        <>
            <View style={[styles.posAbs, styles.optics]}>
                <OpticsIcon />
            </View>
            <View style={[styles.posAbs, styles.shoe]}>
                <ShoeIcon />
            </View>
            <View style={[styles.posAbs, styles.dress]}>
                <DressIcon />
            </View>
        </>
    );
};

const styles = StyleSheet.create({

    posAbs: {
        position: 'absolute',
    },
    optics: {
        top: hp('8.5%'),
        left: wp('5%'),
    },
    shoe: {
        top: hp('5%'),
        right: wp('35%')
    },
    dress: {
        top: hp('15%'),
        right: wp('5%'),
    },
});

export default DefBackground;