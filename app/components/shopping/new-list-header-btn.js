import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import {Text, TouchableOpacity} from 'react-native';

import {Colors, Fonts, Typography} from '../../theme';

const NewListHeaderBtn = ({onPress}) => (
  <TouchableOpacity onPress={onPress} style={styles.newListBtnStyle}>
    <Text style={styles.newListBtnText}>
      <Text style={styles.addURLBtnText__plusIcon}>+</Text> New List
    </Text>
  </TouchableOpacity>
);

export default NewListHeaderBtn;

const styles = EStyleSheet.create({
  newListBtnStyle: {
    borderWidth: 1,
    borderColor: '#D0D0D0',
    borderRadius: 11,
    paddingVertical: 7,
    paddingHorizontal: 8,
    marginRight: -18
  },

  newListBtnText: {
    color: Colors.LABEL,
    fontSize: Typography._12,
    lineHeight: Typography._16,
    fontFamily: Fonts.MEDIUM,
  },

  addURLBtnText__plusIcon: {
    fontSize: Typography._15,
  },
});
