import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import {Text, View, Image} from 'react-native';

import FindExpertIllustration from '../../icons/find-expert-illustration';

import {Colors, Typography, Fonts} from '../../theme';
import {dpToHeightPercent} from '../../utils/app-util';

const FindExpert = () => (
  <View
    justifyContent="center"
    alignItems="center"
    style={{marginTop: dpToHeightPercent(40)}}>
    <Image
      source={require('../../../assets/img/search-expert.png')}
      style={{width: '100%', height: undefined, aspectRatio: 1.45}}
      resizeMode="contain"
    />

    {/* <FindExpertIllustration width="100%" /> */}
    <Text style={styles.noResultTitle}>Find an expert</Text>
    <Text style={styles.noResultSubTitle}>
      Search by an expert's first name, last name to view their profile
    </Text>
  </View>
);

export default FindExpert;

const styles = EStyleSheet.create({
  noResultTitle: {
    color: Colors.LABEL,
    fontSize: Typography._20,
    fontFamily: Fonts.HEAVY,
    marginTop: dpToHeightPercent(30),
    marginBottom: dpToHeightPercent(10),
  },

  noResultSubTitle: {
    maxWidth: 250,
    color: '#979797',
    fontSize: Typography._12,
    lineHeight: Typography._16,
    fontFamily: Fonts.ROMAN,
    textAlign: 'center',
  },
});
