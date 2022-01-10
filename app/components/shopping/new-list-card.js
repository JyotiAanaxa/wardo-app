import React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import NewListPlusIcon from '../../icons/new-list-plus-icon';
import {Colors, Fonts, Typography} from '../../theme';

const NewListCard = ({onPress}) => {
  return (
    <TouchableOpacity style={styles.newListCard} onPress={onPress}>
      <View style={styles.newListCard__body}>
        <NewListPlusIcon />
      </View>
      <View style={styles.newListCard__footer}>
        <Text style={styles.newListCard__footerText}>New List</Text>
      </View>
    </TouchableOpacity>
  );
};

export default NewListCard;

const styles = EStyleSheet.create({
  newListCard: {
    backgroundColor: '#F2F2F2',
    borderRadius: 18,
    padding: 20,
    aspectRatio: 0.78,
  },

  newListCard__body: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  newListCard__footer: {
    alignItems: 'center',
  },

  newListCard__footerText: {
    color: Colors.SECONDARY_TEXT,
    fontSize: Typography._13,
    fontFamily: Fonts.HEAVY,
  },
});
