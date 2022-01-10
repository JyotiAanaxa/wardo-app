import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { HELPERS } from '../theme/helper';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const Logo = () => {
    return (
        <View style={HELPERS.FULL_SCREEN}>
            <Image
                style={styles.logo}
                resizeMode='contain'
                source={require('../../assets/img/logo.png')}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    logo: {
        width: wp('45%'),
        height: hp('45%')
    }
});

export default Logo;
