import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import {Image, Text, View} from 'react-native';

import {Colors, Fonts, Typography} from '../../theme';
import {validateComponent} from '../../utils/app-util';

const ShoppingItemCard = ({
  item,
  deleteBtn,
  footerContainerStyle,
  actionbtn,
}) => {
  const {imageUrl, title = ''} = item || {};

  return (
    <View style={styles.itemCard}>
      <View style={styles.itemCard__img}>
        <Image
          source={{uri: imageUrl}}
          resizeMode="cover"
          style={{flex: 1, width: '100%'}}
        />

        {deleteBtn &&
          validateComponent(deleteBtn, {
            style: {...deleteBtn.props.style, ...styles.deleteBtnStyle},
          })}
      </View>

      <View style={[styles.itemCard__footer, footerContainerStyle]}>
        <View style={styles.itemMeta}>
          <Text style={styles.itemMeta__name} numberOfLines={1}>
            {title}
          </Text>
          {/* <Text style={styles.itemMeta__price} numberOfLines={1}>
            {`Rs ${price}`}
          </Text> */}
        </View>

        {actionbtn && validateComponent(actionbtn)}
      </View>
    </View>
  );
};

export default ShoppingItemCard;

const styles = EStyleSheet.create({
  itemCard: {
    aspectRatio: 0.77,
    borderRadius: 18,
    overflow: 'hidden',
    backgroundColor: '#FFF',

    shadowColor: '#1A1A1A12',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 50,
    elevation: 4,
  },

  itemCard__img: {
    flexGrow: 1,
    // padding: 15,
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  },

  deleteBtnStyle: {
    position: 'absolute',
    top: 8,
    right: 8,
  },

  itemCard__footer: {
    padding: 15,
    flexShrink: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#F2F2F2',
  },

  itemMeta: {
    justifyContent: 'space-between',
    flex: 1,
    maxWidth: 100,
    marginRight: 4,
  },

  itemMeta__name: {
    color: Colors.LABEL,
    fontSize: Typography._12,
    lineHeight: Typography._16,
    fontFamily: Fonts.MEDIUM,
    // marginBottom: dpToHeightPercent(10),
  },

  // itemMeta__price: {
  //   color: Colors.LABEL,
  //   fontSize: Typography._12,
  //   lineHeight: Typography._16,
  //   fontFamily: Fonts.MEDIUM,
  // },
});
