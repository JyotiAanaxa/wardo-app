import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import {Image, Text, View} from 'react-native';

import {Colors, Fonts, Mixins, Typography} from '../../theme';

import {dpToHeightPercent, pluralizer, validateComponent} from '../../utils/app-util';

const ShopListCard = ({shopList = {}, caption, actionBtn}) => (
  <>
    <View style={styles.shopCard}>
      <View style={styles.shopCard__Grid}>
        {(shopList.imageUrls || []).map((url, index) => {
          return (
            <View key={index} style={styles.shopCard__gridItem}>
              <View style={styles.shopCard__thumbnail}>
                <Image
                  source={{uri: url || undefined}}
                  resizeMode="cover"
                  style={{flex: 1, width: '100%'}}
                />
              </View>
            </View>
          );
        })}
      </View>
      <View style={styles.shopCard__footer}>
        <View style={styles.shopCard__itemCountWrapper}>
          <Text style={styles.shopCard__itemCount}>
            {shopList.count} Item{pluralizer(shopList.count)} Added
          </Text>
        </View>

        {actionBtn && validateComponent(actionBtn)}
      </View>
    </View>
    {caption && (
      <Text numberOfLines={1} style={styles.shopCard__caption}>
        {caption}
      </Text>
    )}
  </>
);

export default ShopListCard;

const styles = EStyleSheet.create({
  shopCard: {
    aspectRatio: 0.78,
    padding: '9.59%',
    borderRadius: 18,
    backgroundColor: '#F2F2F2',
  },

  shopCard__caption: {
    fontSize: Typography._14,
    lineHeight: Typography._16,
    fontFamily: Fonts.MEDIUM,
    color: Colors.LABEL,
    textAlign: 'center',
    marginTop: dpToHeightPercent(10),
  },

  shopCard__Grid: {
    flexGrow: 1,
    ...Mixins.FLEX_GRID,
  },

  shopCard__gridItem: {
    width: '50%',
    aspectRatio: 1,
    paddingRight: '11.86%',
    paddingBottom: '11.86%',
  },

  shopCard__thumbnail: {
    backgroundColor: '#FFF',
    width: '100%',
    aspectRatio: 1,
    borderRadius: 10,
    overflow: 'hidden',
  },

  shopCard__footer: {
    flexShrink: 0,
    marginTop: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  shopCard__itemCountWrapper: {
    maxWidth: 50,
  },

  shopCard__itemCount: {
    color: '#A3A3A3',
    fontSize: Typography._12,
    lineHeight: Typography._16,
    fontFamily: Fonts.MEDIUM,
  },
});
