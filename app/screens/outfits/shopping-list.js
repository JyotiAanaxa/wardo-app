import React, { useState, useEffect } from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Text, ScrollView, View, TouchableOpacity, Image, Platform } from 'react-native';
import { heightPercentageToDP } from 'react-native-responsive-screen';
import { SafeAreaContainer } from '../../utils/app-container';

import { HeaderBar } from '../../components/header/header';
import { Heading } from '../../components/heading/heading';

import { Colors, Fonts, Mixins, Typography } from '../../theme';
import { map } from 'rxjs/operators';
import { RightArrowIcon } from '../../icons/right-arrow';

const NewListBtn = ({ onPress }) => (
  <TouchableOpacity
    onPress={onPress}
    style={{
      borderWidth: 1,
      borderColor: '#BEC2C1',
      borderRadius: 10,
      paddingVertical: 7,
      paddingHorizontal: 10,
      borderRadius: 10,
    }}>
    <Text
      style={{
        fontSize: Typography._12,
        color: Colors.LABEL,
        fontFamily: Fonts.MEDIUM,
      }}>
      + New List
    </Text>
  </TouchableOpacity>
);

const ShopCard = () => (
  <View style={styles.row}>
    <View style={styles.shopCard}>
      <View style={styles.shopCard__Grid}>
        {[1, 2, 3].map(item => (
          <View style={styles.shopCard__gridItem}>
            <View style={styles.shopCard__thumbnail} />
          </View>
        ))}
      </View>
      <View style={styles.shopCard__footer}>
        <View style={styles.shopCard__itemCountWrapper}>
          <Text style={styles.shopCard__itemCount}>6 Items Added</Text>
        </View>
        <TouchableOpacity style={styles.shopCard__btn}>
          <RightArrowIcon color="#9b9ea2" />
        </TouchableOpacity>
      </View>
    </View>
    <Text numberOfLines={1} style={styles.shopCard__caption}>
      Spain Trip
    </Text>
  </View>
);

export const ShoppingList = ({ navigation }) => {
  const onNewListBtnPress = () => {
    console.log('new list btn pressed');
  };

  useEffect(() => { }, []);

  return (
    <SafeAreaContainer style={{ paddingBottom: heightPercentageToDP('9%') }}>
      <HeaderBar
        backButton
        leftClick={() => navigation.goBack()}
        rightIcon={<NewListBtn onPress={onNewListBtnPress} />}
        containerStyle={{ alignSelf: 'center' }}
      />

      <Heading title="Shopping List" style={styles.pageHeading} />
      <ScrollView showsVerticalScrollIndicator={false} style={styles.content}>


        <View style={styles.grid}>
          {Array(6)
            .fill('')
            .map(item => {
              return <ShopCard />;
            })}
        </View>
      </ScrollView>
    </SafeAreaContainer>
  );
};

export default ShoppingList;

const styles = EStyleSheet.create({
  content: {
    paddingHorizontal:Platform.OS==='android' ? heightPercentageToDP('4.43%') :heightPercentageToDP('3.43%') 
  },

  pageHeading: {
    fontSize: Typography._28,
    lineHeight: Typography._34,
    paddingTop: heightPercentageToDP('5%'),
    paddingHorizontal: Platform.OS==='android' ? heightPercentageToDP('4.43%') :heightPercentageToDP('3.43%') 
  },

  grid: {
    paddingVertical: heightPercentageToDP('2.5%'),
    ...Mixins.FLEX_GRID,
    marginRight: -10
  },

  row: {
    width: '50%',
    paddingRight: 10,
    marginBottom: 20,
  },

  shopCard: {
    backgroundColor: '#F2F2F2',
    padding: 14,
    borderRadius: 18,
  },

  shopCard__caption: {
    fontSize: Typography._14,
    lineHeight: Typography._16,
    fontFamily: Fonts.MEDIUM,
    color: Colors.LABEL,
    textAlign: 'center',
    marginTop: 10,
  },

  shopCard__Grid: {
    ...Mixins.FLEX_GRID,
  },

  shopCard__gridItem: {
    width: '50%',
    paddingRight: 14,
    paddingBottom: 14,
  },

  shopCard__thumbnail: {
    backgroundColor: '#FFF',
    width: '100%',
    aspectRatio: 1,
    borderRadius: 10,
  },

  shopCard__footer: {
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

  shopCard__btn: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    width: 36,
    aspectRatio: 1,
    borderRadius: 10,
  },
});
