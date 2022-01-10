import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import {Text, View} from 'react-native';

import {Colors, Fonts, Typography} from '../../../theme';

const MyStylistBadge = () => (
  <View style={styles.myStylistBadge}>
    <Text style={styles.myStylistBadge__Text}>My Stylist</Text>
  </View>
);

export default MyStylistBadge;

const styles = EStyleSheet.create({
  myStylistBadge: {
    paddingVertical: 5,
    paddingHorizontal: 12,
    borderRadius: 6,
    backgroundColor: '#F0EFFF',
  },

  myStylistBadge__Text: {
    color: Colors.PRIMARY,
    fontSize: Typography._10,
    fontFamily: Fonts.ROMAN,
  },
});
