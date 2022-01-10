import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import {TouchableOpacity} from 'react-native';

import {RightArrowIcon} from '../../icons/right-arrow';

const RightArrwSqrBtn = ({style, onPress}) => (
  <TouchableOpacity style={[styles.btn, style]} onPress={onPress}>
    <RightArrowIcon color="#9b9ea2" />
  </TouchableOpacity>
);

export default RightArrwSqrBtn;

const styles = EStyleSheet.create({
  btn: {
    alignItems: 'center',
    justifyContent: 'center',
    aspectRatio: 1,
    borderRadius: 10,
    backgroundColor: '#fff',
  },
});
