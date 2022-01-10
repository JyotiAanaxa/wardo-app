import React, {useState} from 'react';
import {useFocusEffect} from '@react-navigation/native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {Text, ScrollView, View} from 'react-native';
import {heightPercentageToDP} from 'react-native-responsive-screen';
import {SafeAreaContainer} from '../../utils/app-container';

import {Loader} from '../../components/loader/loader';
import {HeaderBar} from '../../components/header/header';
import {Heading} from '../../components/heading/heading';
import NewListHeaderBtn from '../../components/shopping/new-list-header-btn';
import NewListCard from '../../components/shopping/new-list-card';
import ShopListCard from '../../components/shopping/shop-list-card';

import {Colors, Fonts, Mixins, Typography} from '../../theme';
import RightArrwSqrBtn from '../../components/shopping/right-arrow-sqr-btn';
import DataService from '../../services/data-service';
import {DEFAULT_ERROR_CALLBACK, dpToHeightPercent} from '../../utils/app-util';

const GridColumn = props => (
  <View style={styles.gridColumn} {...props}>
    {props.children}
  </View>
);

const NoListJSX = ({onPress}) => (
  <GridColumn>
    <NewListCard onPress={onPress} />
  </GridColumn>
);

const LoaderSpinner = () => (
  <View style={[Mixins.FLEX]}>
    <Loader size={40} color={Colors.PRIMARY} />
  </View>
);

const ClientShoppingList = ({navigation, route}) => {
  const {client = {}, isReadOnly = false} = route.params || {};

  const [isLoading, setIsLoading] = useState(false);
  const [shoppingList, setShoppingList] = useState([]);

  const fetchShoppingList = () => {
    setIsLoading(true);

    DataService.getMyShoppingLists(client.slug).subscribe(
      async data => {
        setIsLoading(false);

        const {status, data: respData = {}} = data || {};

        if (status) {
          const {content = []} = respData || {};
          setShoppingList(content);
        }
      },
      error => {
        DEFAULT_ERROR_CALLBACK(error);
        setIsLoading(false);
      },
    );
  };

  useFocusEffect(
    React.useCallback(() => {
      fetchShoppingList();
    }, []),
  );

  const onNewListBtnPress = () =>
    navigation.navigate('NewMyStoreListName', {client});

  const onCardArrowBtnPress = list =>
    navigation.navigate('ClientListItems', {list, isReadOnly});

  const getPageTitle = `${
    client && client.name
      ? `${client.name.split(' ')[0]}'s \nShopping List`
      : 'Shopping List'
  }`;

  if (isLoading) {
    return <LoaderSpinner />;
  }

  return (
    <SafeAreaContainer style={{paddingBottom: heightPercentageToDP('9%')}}>
      <HeaderBar
        backButton
        leftClick={() => navigation.goBack()}
        {...!isReadOnly && {
          rightIcon: <NewListHeaderBtn onPress={onNewListBtnPress} />,
        }}
        containerStyle={styles.pageHeader}
      />

      <Heading
        title={getPageTitle}
        style={styles.pageHeading}
        containerStyle={{marginBottom: 0}}
      />
      {shoppingList.length === 0 && (
        <Text style={styles.noProductsText}>0 Products Added</Text>
      )}

      <ScrollView showsVerticalScrollIndicator={false} style={styles.content}>
        <View style={styles.grid}>
          {shoppingList.length > 0 ? (
            shoppingList.map((shopList, index) => {
              return (
                <GridColumn key={index}>
                  <ShopListCard
                    {...{shopList}}
                    caption={shopList.name}
                    actionBtn={
                      <RightArrwSqrBtn
                        style={styles.shopCard__ctaBtn}
                        onPress={() => onCardArrowBtnPress(shopList)}
                      />
                    }
                  />
                </GridColumn>
              );
            })
          ) : (
            <NoListJSX onPress={onNewListBtnPress} />
          )}
        </View>
      </ScrollView>
    </SafeAreaContainer>
  );
};

export default ClientShoppingList;

const styles = EStyleSheet.create({
  $screenWidth: '100%',

  $screenPadding:
    '0.09333 * $screenWidth' /* 35dp is 9.33% of 375 mobile width */,

  pageHeader: {
    width: '1 * $screenWidth',
    paddingLeft: '$screenPadding - 26',
    paddingRight: '$screenPadding',
  },

  content: {
    paddingHorizontal: '$screenPadding',
    marginTop: heightPercentageToDP('3.69%'),
  },

  pageHeading: {
    fontSize: Typography._28,
    lineHeight: Typography._36,
    paddingTop: heightPercentageToDP('5%'),
    paddingHorizontal: '$screenPadding',
  },

  noProductsText: {
    color: Colors.SECONDARY_TEXT,
    fontSize: Typography._12,
    fontFamily: Fonts.MEDIUM,
    paddingHorizontal: '$screenPadding',
    marginTop: 5,
  },

  $totalScreenPadding: '$screenPadding * 2',

  $contentArea: '$screenWidth - $totalScreenPadding',

  $gutterWidth:
    '0.0267 * $screenWidth' /* 2.67% = 10dp according to 375 mobile width  */,

  grid: {
    paddingBottom: heightPercentageToDP('2.5%'),
    ...Mixins.FLEX_GRID,
    marginRight: '$gutterWidth * -1' /* to remove gutter from last column */,
  },

  $gridCol: '$contentArea / 2',

  gridColumn: {
    width: '50%',
    paddingRight: '$gutterWidth',
    marginBottom: dpToHeightPercent(20),
  },

  $cardWidth: '$gridCol - $gutterWidth' /* col width minus paddingRight */,

  shopCard__ctaBtn: {
    width: '0.2466 * $cardWidth',
  },
});
