import React, {useState} from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import {useFocusEffect} from '@react-navigation/native';
import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import Clipboard from '@react-native-community/clipboard';

import {SafeAreaContainer} from '../../../utils/app-container';
import {HeaderBar} from '../../../components/header/header';
import {Loader} from '../../../components/loader/loader';
import ShoppingItemCard from '../../../components/shopping/item-card';

import TrashCanIcon from '../../../icons/trash-can-icon';
import HyperLinkIcon from '../../../icons/hyperlink-icon';
import MyStoreIcon from '../../../icons/my-store-icon';
import DataService from '../../../services/data-service';

import {Colors, Fonts, Mixins, Typography} from '../../../theme';

import {
  DEFAULT_ERROR_CALLBACK,
  dpToHeightPercent,
  SHOW_INFO_NOTIFICATION,
} from '../../../utils/app-util';
import {startClock} from 'react-native-reanimated';

/* buttons start here*/
const HeaderDeleteIcon = ({onPress}) => (
  <TouchableOpacity onPress={onPress}>
    <TrashCanIcon />
  </TouchableOpacity>
);

const AddURLBtn = ({onPress}) => (
  <TouchableOpacity
    style={[styles.ctaBtn, styles.ctaBtn__URL]}
    onPress={onPress}>
    <Text style={styles.ctaBtn__URL__Text} numberOfLines={1}>
      Add URL
    </Text>

    <View style={{width: '16.5%', aspectRatio: 1}}>
      <HyperLinkIcon color="#FFF" width="100%" height="100%" />
    </View>
  </TouchableOpacity>
);

const AddFromStoreBtn = ({onPress}) => (
  <TouchableOpacity
    style={[styles.ctaBtn, styles.ctaBtn__Store]}
    onPress={onPress}>
    <Text style={styles.ctaBtn__Store__Text} numberOfLines={1}>
      Add From Store
    </Text>

    <View style={{width: '16.5%', aspectRatio: 1}}>
      <MyStoreIcon width="100%" height="100%" />
    </View>
  </TouchableOpacity>
);

const CopyItemURLBtn = ({onPress}) => (
  <TouchableOpacity style={styles.copyItemURLBtnStyle} onPress={onPress}>
    <Text style={styles.copyItemURLTextStyle}>Copy URL</Text>
  </TouchableOpacity>
);

/* buttons end here*/

const LoaderSpinner = () => (
  <View style={[Mixins.FLEX]}>
    <Loader size={40} color={Colors.PRIMARY} />
  </View>
);

const screenHorzPadding = dpToHeightPercent(15);

const MyStoreItems = ({navigation, route}) => {
  const {list: initialListDetails = {}} = route.params || {};

  const [list, setList] = useState(initialListDetails);

  const [isLoading, setIsLoading] = useState(true);
  const [items, setItems] = useState([]);

  const fetchItems = () => {
    if (list.slug) {
      !isLoading && setIsLoading(true);

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

  useFocusEffect(
    React.useCallback(() => {
      fetchItems();
    }, []),
  );

  const onHeaderDeleteIconPress = () => {
    if (list.id) {
      setIsLoading(true);

      DataService.deleteShoppingList(list.id).subscribe(
        async data => {
          setIsLoading(false);

          const {status} = data || {};

          if (status) {
            SHOW_INFO_NOTIFICATION('List deleted!');
            navigation.goBack();
          }
        },
        error => {
          DEFAULT_ERROR_CALLBACK(error);
          setIsLoading(false);
        },
      );
    }
  };

  const onAddURLBtnPress = () =>
    navigation.navigate('MyStoreAddItems', {shoppingListSlug: list.slug});

  const onAddFromStoreBtnPress = () => {
    console.log('onAddFromStoreBtnPress');
  };

  const onCopyURLBtnPress = itemTitle => {
    Clipboard.setString(itemTitle);
    SHOW_INFO_NOTIFICATION('Link copied to clipboard!');
  };

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
        {...(initialListDetails.name || '').toLowerCase() !== 'my catalog' && {
          rightIcon: <HeaderDeleteIcon onPress={onHeaderDeleteIconPress} />,
        }}
        containerStyle={{width: '100%'}}
      />

      <View style={styles.ctaSection}>
        <AddURLBtn onPress={onAddURLBtnPress} />
        {/* <AddFromStoreBtn onPress={onAddFromStoreBtnPress} /> */}
      </View>

      <ScrollView
        contentContainerStyle={{paddingHorizontal: screenHorzPadding}}>
        <View style={styles.itemGrid}>
          {/* {items.length > 0 ? ( */}
          {items.map((item, index) => {
            return (
              <View key={index} style={styles.itemRow}>
                <ShoppingItemCard
                  {...{item}}
                  footerContainerStyle={styles.shopCardFooterContainerStyle}
                  actionbtn={
                    <CopyItemURLBtn
                      onPress={() => onCopyURLBtnPress(item.title)}
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

export default MyStoreItems;

const styles = EStyleSheet.create({
  addURLBtnStyle: {
    borderWidth: 1,
    borderColor: '#D0D0D0',
    borderRadius: 10,
    paddingVertical: 7,
    paddingHorizontal: 8,
  },

  addURLBtnText: {
    color: Colors.LABEL,
    fontFamily: Fonts.MEDIUM,
    fontSize: dpToHeightPercent(12),
    lineHeight: dpToHeightPercent(16),
  },

  ctaSection: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingHorizontal: screenHorzPadding,
    marginTop: dpToHeightPercent(15),
    marginBottom: dpToHeightPercent(30),
  },

  ctaBtn: {
    flex: 1,
    aspectRatio: 2.8,
    padding: '3.6%',
    marginHorizontal: '3.49%',
    borderRadius: 14,
    flexDirection: 'row',
    alignItems: 'center',
  },

  shopCardFooterContainerStyle: {
    paddingHorizontal: 12,
    paddingVertical: 15,
  },

  ctaBtn__URL: {
    maxWidth: 146,
    // alignSelf: 'flex-start',
    marginRight: 'auto',
    backgroundColor: Colors.PRIMARY,
  },

  ctaBtn__URL__Text: {
    flex: 1,
    marginRight: 5,
    color: '#FFF',
    fontSize: Typography._12,
    lineHeight: Typography._16,
    fontFamily: Fonts.MEDIUM,
  },

  ctaBtn__Store: {
    borderWidth: 1,
    borderColor: Colors.PRIMARY,
  },

  ctaBtn__Store__Text: {
    flex: 1,
    marginRight: 5,
    color: Colors.PRIMARY,
    fontSize: Typography._12,
    lineHeight: Typography._16,
    fontFamily: Fonts.MEDIUM,
  },

  itemGrid: {
    paddingTop: dpToHeightPercent(4),
    paddingBottom: dpToHeightPercent(20),
    ...Mixins.FLEX_GRID,
    overflow: 'visible',
    marginRight: -15,
  },

  $colWidth: '50%',

  itemRow: {
    width: '$colWidth',
    paddingRight: 15,
    marginBottom: 25,
  },

  $cardWidth: '50% - 15' /* col width minus paddingRight */,

  copyItemURLBtnStyle: {
    // alignSelf: 'flex-end',
    padding: 8,
    borderRadius: 10,
    backgroundColor: '#fff',
  },

  copyItemURLTextStyle: {
    color: Colors.LABEL,
    fontSize: Typography._12,
    fontFamily: Fonts.MEDIUM,
  },
});
