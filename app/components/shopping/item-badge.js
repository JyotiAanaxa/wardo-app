import React, { useState } from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Text, View, TouchableOpacity } from 'react-native';

import HyperLinkIcon from '../../icons/hyperlink-icon';
import { RemoveBadgeItemIcon } from '../../icons/remove-item-badge-icon';

import { Colors, Typography, Fonts } from '../../theme';

const ItemBadge = ({ url = '', onRemovePress }) => {
  const [urlTextMaxWidth, setUrlTextMaxWidth] = useState(0);

  return (
    <View style={styles.badgeContainer}>
      <HyperLinkIcon />

      <View
        style={styles.urlContainerStyle}
        onLayout={event => {
          const { width } = event.nativeEvent.layout;
          setUrlTextMaxWidth(Math.round(width));
        }}>
        <Text
          style={[styles.urlStyle, { maxWidth: urlTextMaxWidth }]}
          numberOfLines={1}>
          {url}
        </Text>
      </View>

      <TouchableOpacity onPress={() => onRemovePress()}>
        <RemoveBadgeItemIcon />
      </TouchableOpacity>
    </View>
  );
};

export default ItemBadge;

const styles = EStyleSheet.create({
  badgeContainer: {
    padding: 14,
    borderRadius: 12,
    backgroundColor: '#F0EFFF',
    flexDirection: 'row',
    alignItems: 'center',
  },

  urlContainerStyle: {
    flexGrow: 1,
    marginHorizontal: 14,
  },

  urlStyle: {
    color: Colors.LABEL,
    fontSize: Typography._14,
    fontFamily: Fonts.ROMAN,
    lineHeight: Typography._16,
  },
});
