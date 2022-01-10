import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import {Text, TouchableOpacity, View} from 'react-native';

import {dpToHeightPercent} from '../../../utils/app-util';
import {Colors, Fonts, Typography} from '../../../theme';

import MyStylistBadge from './my-stylist-badge';
import ProfilePic from '../../../components/profile-pic';

const ChatHistoryItem = ({style, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View flexDirection="row" alignItems="center" style={style}>
        <ProfilePic style={styles.avatarContainer} />

        <View flex={1}>
          <View
            flexDirection="row"
            style={{marginBottom: dpToHeightPercent(6)}}>
            <Text style={styles.userName} numberOfLines={1}>
              Mandy Simpson
            </Text>

            <MyStylistBadge />
          </View>

          <View flexDirection="row">
            <Text style={styles.msgOverview} numberOfLines={1}>
              When should we start the...
            </Text>

            <Text style={styles.time} numberOfLines={1}>
              12:28 pm
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ChatHistoryItem;

const styles = EStyleSheet.create({
  screenWidth: '100%',

  avatarContainer: {
    width: '16%',
    aspectRatio: 1,
    backgroundColor: 'pink',
    borderRadius: 100,
    overflow: 'hidden',
    marginRight: dpToHeightPercent(14),
  },

  userName: {
    color: Colors.LABEL,
    fontSize: Typography._14,
    lineHeight: Typography._17,
    fontFamily: Fonts.HEAVY,
    maxWidth: 120,
    marginRight: dpToHeightPercent(10),
  },

  msgOverview: {
    color: '#979797',
    fontSize: Typography._12,
    lineHeight: Typography._14,
    fontFamily: Fonts.MEDIUM,
    maxWidth: 150,
  },

  time: {
    color: '#979797',
    fontSize: Typography._12,
    lineHeight: Typography._14,
    fontFamily: Fonts.MEDIUM,
    maxWidth: 60,
    marginLeft: 'auto',
  },
});
