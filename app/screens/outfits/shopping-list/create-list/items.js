import React, {useEffect, useState} from 'react';
import {useFocusEffect} from '@react-navigation/native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {Linking, ScrollView, Text, TouchableOpacity, View} from 'react-native';

import {Loader} from '../../../../components/loader/loader';
import {SafeAreaContainer} from '../../../../utils/app-container';
import {HeaderBar} from '../../../../components/header/header';
import ShoppingItemCard from '../../../../components/shopping/item-card';
import RightArrwSqrBtn from '../../../../components/shopping/right-arrow-sqr-btn';

import {ProfileIcon} from '../../../../icons/profile-icon';
import DeleteBgRoundedIcon from '../../../../icons/delete-bg-rounded-icon';

import {Colors, Fonts, Mixins, Typography} from '../../../../theme';

import DataService from '../../../../services/data-service';
import {
  DEFAULT_ERROR_CALLBACK,
  DEFAULT_MSG_CALLBACK,
  dpToHeightPercent,
} from '../../../../utils/app-util';

const LoaderSpinner = () => (
  <View style={[Mixins.FLEX]}>
    <Loader size={40} color={Colors.PRIMARY} />
  </View>
);

const AddURLBtn = ({onPress}) => (
  <TouchableOpacity onPress={onPress} style={styles.addURLBtnStyle}>
    <Text style={styles.addURLBtnText}>
      <Text style={styles.addURLBtnText__plusIcon}>+</Text> Add URL
    </Text>
  </TouchableOpacity>
);

const ListMetaCard = ({list = {}}) => (
  <View style={styles.listMetaCard}>
    <View style={styles.listMetaCard__profileIcon}>
      <ProfileIcon rectagleStroke="#6A60DA" width="100%" height="100%" />
    </View>

    <View flex={1} flexDirection="row" justifyContent="space-between">
      <View flex={1} justifyContent="space-between">
        <Text style={styles.listMetaCard__Title}>Created By</Text>
        <Text style={styles.listMetaCard__AuthorName}>{list.createdByName}</Text>
      </View>
      <Text style={styles.listMetaCard__ItemCount}>
        {list.count} Item{list.count !== 1 ? 's' : ''}
      </Text>
    </View>
  </View>
);

const ShoppingListItems = ({navigation, route}) => {
  const {list: initialListDetails = {}} = route.params || {};

  const [list, setList] = useState(initialListDetails);

  const [isLoading, setIsLoading] = useState(true);

  const [items, setItems] = useState([]);

  const onAddURLBtnPress = () =>
    navigation.navigate('ShoppingListAddItems', {shoppingListSlug: list.slug});

  const fetchItems = () => {
    if (list.slug) {
      setIsLoading(true);

      DataService.getShoppingListItemsByListSlug(list.slug).subscribe(
        async data => {
          setIsLoading(false);

          const {status, data: respData} = data || {};

          if (status) {
            const {content, totalElements} = respData || {};
            setItems(content);
            setList(prev => ({...prev, count: totalElements}));
          }
        },
        error => {
          DEFAULT_ERROR_CALLBACK(error);
          setIsLoading(false);
        },
      );
    }
  };

  const onDeleteItemPress = id => {
    if (id) {
      setIsLoading(true);

      DataService.deleteShoppingListItem(id).subscribe(
        async data => {
          setIsLoading(false);

          const {status} = data || {};

          if (status) {
            DEFAULT_MSG_CALLBACK('Item deleted');
            fetchItems();
          }
        },
        error => {
          DEFAULT_ERROR_CALLBACK(error);
          setIsLoading(false);
        },
      );
    }
  };

  const onItemPress = item => Linking.openURL(item.url);

  useFocusEffect(
    React.useCallback(() => {
      fetchItems();
    }, []),
  );

  if (isLoading) {
    return <LoaderSpinner />;
  }

  return (
    <SafeAreaContainer
      style={{
        paddingTop: dpToHeightPercent(70), // 70 header height
        paddingBottom: dpToHeightPercent(75), // 75 bottom navigation height
      }}>
      <HeaderBar
        backButton
        leftClick={() => navigation.goBack()}
        rightIcon={<AddURLBtn onPress={onAddURLBtnPress} />}
        containerStyle={styles.pageHeader}
      />

      <View style={styles.screenPadding}>
        <ListMetaCard {...{list}} />
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.screenPadding}>
        <View style={styles.itemGrid}>
          {/* {items.length > 0 ? ( */}
          {items.map((item, index) => {
            return (
              <View key={index} style={styles.gridColumn}>
                <ShoppingItemCard
                  item={item}
                  deleteBtn={
                    <TouchableOpacity
                      style={styles.delIconStyle}
                      onPress={() => onDeleteItemPress(item.id)}>
                      <DeleteBgRoundedIcon />
                    </TouchableOpacity>
                  }
                  actionbtn={
                    <RightArrwSqrBtn
                      style={styles.shopCard__ctaBtn}
                      onPress={() => onItemPress(item)}
                    />
                  }
                />
              </View>
            );
          })}
        </View>
        {/* ) : (
              <NoListJSX onPress={onNewListBtnPress} />
            )} */}
      </ScrollView>
    </SafeAreaContainer>
  );
};

export default ShoppingListItems;

const styles = EStyleSheet.create({
  $screenWidth: '100%',

  $screenPadding: '0.04 * $screenWidth' /* 15dp is 4% of 375 mobile width */,

  screenPadding: {
    paddingHorizontal: '$screenPadding',
  },

  pageHeader: {
    width: '1 * $screenWidth',
    // paddingLeft: '$screenPadding - 18',
    marginLeft: -8,
    paddingRight: '$screenPadding',
  },

  addURLBtnStyle: {
    borderWidth: 1,
    borderColor: '#D0D0D0',
    borderRadius: 10,
    paddingVertical: 7,
    paddingHorizontal: 8,
    marginRight: -26
  },

  addURLBtnText: {
    color: Colors.LABEL,
    fontFamily: Fonts.MEDIUM,
    fontSize: Typography._12,
    lineHeight: Typography._16,
  },

  addURLBtnText__plusIcon: {
    fontSize: Typography._15,
  },

  listMetaCard: {
    width: '100%',
    aspectRatio: 4.64,
    marginTop: dpToHeightPercent(15),
    marginBottom: dpToHeightPercent(30),
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 18,
    padding: '4%',
    backgroundColor: '#FAFAFA',
    shadowColor: '#00000012',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 20,
    elevation: 4,
  },

  listMetaCard__profileIcon: {
    width: '13%',
    maxWidth: 46,
    maxHeight: 46,
    marginRight: 14,
  },

  listMetaCard__Title: {
    color: '#80838C',
    fontSize: Typography._13,
    lineHeight: Typography._16,
    fontFamily: Fonts.MEDIUM,
    marginBottom: dpToHeightPercent(6),
  },

  listMetaCard__AuthorName: {
    color: Colors.LABEL,
    fontSize: Typography._16,
    lineHeight: Typography._19,
    fontFamily: Fonts.HEAVY,
  },

  listMetaCard__ItemCount: {
    color: Colors.LABEL,
    fontSize: Typography._12,
    lineHeight: Typography._14,
    fontFamily: Fonts.MEDIUM,
  },

  $gutterWidth:
    '0.04 * $screenWidth' /* 0.04 = 4% = 15dp according to 375 mobile width  */,

  itemGrid: {
    paddingTop: dpToHeightPercent(4),
    paddingBottom: dpToHeightPercent(20),
    ...Mixins.FLEX_GRID,
    overflow: 'visible',
    marginRight: '$gutterWidth * -1' /* to remove gutter from last column */,
  },

  $totalScreenPadding: '$screenPadding * 2',

  $contentArea: '$screenWidth - $totalScreenPadding',

  $gridCol: '$contentArea / 2',

  gridColumn: {
    width: '50%',
    paddingRight: '$gutterWidth',
    marginBottom: dpToHeightPercent(25),
  },

  $cardWidth: '$gridCol - $gutterWidth' /* col width minus paddingRight */,

  delIconStyle: {
    width: '0.1576 * $cardWidth' /* 15% of card width */,
    aspectRatio: 1,
  },

  shopCard__ctaBtn: {
    width: '0.2182 * $cardWidth',
  },
});
