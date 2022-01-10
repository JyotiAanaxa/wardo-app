import React, {useEffect, useState} from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import {useFocusEffect} from '@react-navigation/native';
import {
  FlatList,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  Platform,
  BackHandler,
} from 'react-native';
import Clipboard from '@react-native-community/clipboard';

import {SafeAreaContainer} from '../../utils/app-container';
import {Loader} from '../../components/loader/loader';
import {HeaderBar} from '../../components/header/header';
import {Heading} from '../../components/heading/heading';
import NewListHeaderBtn from '../../components/shopping/new-list-header-btn';
import ShopListCard from '../../components/shopping/shop-list-card';
import RightArrwSqrBtn from '../../components/shopping/right-arrow-sqr-btn';
import NewListCard from '../../components/shopping/new-list-card';
import ThemeButton from '../../components/buttons/theme-button';

import {RightArrowIcon} from '../../icons/right-arrow';
import {Colors, Fonts, Mixins, Typography} from '../../theme';
import {
  SHOW_INFO_NOTIFICATION,
  dpToHeightPercent,
  DEFAULT_ERROR_CALLBACK,
  getFirstAndLastCharacterInString,
} from '../../utils/app-util';

import InviteClientModal from './invite-client-modal';
import AuthService from '../../services/auth';
import DataService from '../../services/data-service';
import InviteClientIcon from '../../icons/invite-client-icon';

const InviteClientBtn = ({onPress}) => {
  const styles = EStyleSheet.create({
    btnStyle: {
      width: '100%',
      maxWidth: 125,
      justifyContent: 'center',
      borderRadius: 10,
      backgroundColor: Colors.PRIMARY,
      marginTop: dpToHeightPercent(24),
    },

    textStyle: {
      color: '#FFF',
      fontSize: Typography._14,
      lineHeight: Typography._16,
      fontFamily: Fonts.ROMAN,
    },
  });

  return (
    <ThemeButton
      onSubmit={onPress}
      buttonStyle={styles.btnStyle}
      label="Invite Clients"
      labelStyle={styles.textStyle}
    />
  );
};

const InviteClientIconBtn = ({
  icon,
  iconStyles,
  client = {},
  onPress,
  caption,
  captionStyle,
}) => (
  <TouchableOpacity
    onPress={onPress}
    style={styles.clientSection__clientWrapper}>
    <View
      style={[
        styles.clientSection__Icon,
        {
          backgroundColor:
            client.gender === 'MALE'
              ? '#79BEFF'
              : client.gender === 'FEMALE'
              ? '#EF709D'
              : '#BCB2F1',
        },
        iconStyles,
      ]}>
      {icon ? (
        icon
      ) : client.profilePicUrl ? (
        <Image
          source={{
            uri: client.profilePicUrl || undefined,
          }}
          style={{
            width: '100%',
            aspectRatio: 1,
          }}
        />
      ) : (
        <Text
          style={[
            {
              fontSize: Typography._14,
              fontFamily: Fonts.BOLD,
              letterSpacing: 4,
            },
          ]}>
          {getFirstAndLastCharacterInString(client.name || '')}
        </Text>
      )}
    </View>
    <Text style={[styles.clientCaptionStyle, captionStyle]} numberOfLines={2}>
      {caption || client.name}
    </Text>
  </TouchableOpacity>
);

const LoaderSpinner = () => (
  <View style={[Mixins.FLEX]}>
    <Loader size={40} color={Colors.PRIMARY} />
  </View>
);

const MyStore = ({navigation}) => {
  const [isLoading, setIsLoading] = useState(false);

  const [user, setUser] = useState();

  const [items, setItems] = useState([]);
  const [clientList, setClientList] = useState([]);

  const [showClientRightArrow, setShowClientRightArrow] = useState(false);
  const [showClientLeftArrow, setShowClientLeftArrow] = useState(false);

  const [isInviteModapOpen, setIsInviteModalOpen] = useState(false);
  const [inviteCode, setInviteCode] = useState('');

  const [viewableItems, setViewableItems] = useState([]);

  const fetchClients = () => {
    setIsLoading(true);

    DataService.getMyClients().subscribe(
      async data => {
        setIsLoading(false);

        const {status, data: respData = {}} = data || {};

        if (status) {
          const {content = []} = respData || {};
          setClientList(content);
        }
      },
      error => {
        DEFAULT_ERROR_CALLBACK(error);
        setIsLoading(false);
      },
    );
  };

  const fetchLists = () => {
    setIsLoading(true);

    DataService.getMyShoppingLists().subscribe(
      async data => {
        setIsLoading(false);

        const {status, data: respData = {}} = data || {};

        if (status) {
          const {content = []} = respData || {};

          setItems(content);
        }
      },
      error => {
        DEFAULT_ERROR_CALLBACK(error);
        setIsLoading(false);
      },
    );
  };

  useEffect(() => {
    if (user) {
      const {stylistInfo = {}} = user || {};
      setInviteCode(stylistInfo.inviteCode || '');
      fetchClients();
      fetchLists();
    }
  }, [user]);

  const getLoggedInUserSlug = async () => {
    const user = await AuthService.getUser();
    setUser(user);
  };

  useFocusEffect(
    React.useCallback(() => {
      getLoggedInUserSlug();
    }, []),
  );

  const copyInviteCodeToClipboard = () => {
    Clipboard.setString(inviteCode);
    setIsInviteModalOpen(false);
    SHOW_INFO_NOTIFICATION('Copied to clipboard!');
  };

  const onClientPress = client =>
    navigation.navigate('ClientShoppingList', {client});

  const onNewListBtnPress = () => navigation.navigate('NewMyStoreListName');

  const onInviteClientBtnPress = () => setIsInviteModalOpen(true);

  const onMyCatalogCardPress = myCatalog =>
    navigation.navigate('MyStoreItems', {list: myCatalog});

  const onListCardPress = list => navigation.navigate('MyStoreItems', {list});

  const viewConfigRef = React.useRef({
    waitForInteraction: false,
    itemVisiblePercentThreshold: 50,
  });

  useEffect(() => {
    const firstViewableItem = viewableItems.find(({index}) => index === 0);
    const lastViewableItem = viewableItems.find(
      ({index}) => index === clientList.length - 1,
    );

    setShowClientLeftArrow(!!!firstViewableItem);
    setShowClientRightArrow(!!!lastViewableItem);
  }, [viewableItems]);

  const onViewRef = React.useRef(({viewableItems}) =>
    setViewableItems(viewableItems),
  );

  if (isLoading) {
    return <LoaderSpinner />;
  }

  return (
    <SafeAreaContainer
      style={{
        paddingTop: dpToHeightPercent(70), // 70 header height
        paddingBottom: dpToHeightPercent(75), // 75 bottom navigation height
        paddingHorizontal:
          Platform.OS === 'android'
            ? dpToHeightPercent(35)
            : dpToHeightPercent(25),
      }}>
      <HeaderBar
        backButton
        leftClick={() => {
          let canGoBack = navigation.canGoBack();
          // handle what we do it we can/cannot go back
          if (canGoBack) {
            navigation.goBack();
          } else {
            BackHandler.exitApp();
          }
        }}
        rightIcon={<NewListHeaderBtn onPress={onNewListBtnPress} />}
        containerStyle={{
          alignSelf: 'center',
          position: Platform.OS === 'android' ? 'absolute' : 'relative',
          paddingRight:
            Platform.OS === 'android'
              ? dpToHeightPercent(35)
              : dpToHeightPercent(25),
        }}
      />

      <Heading
        title={'My Store'}
        style={styles.pageHeading}
        containerStyle={{
          marginBottom: 0,
          marginTop:
            Platform.OS === 'android'
              ? dpToHeightPercent(20)
              : dpToHeightPercent(70),
        }}
      />

      {items.length === 0 && (
        <Text style={styles.noProductsText}>0 Products Added</Text>
      )}

      <View style={styles.clientSection}>
        <Text style={styles.clientSection__title}>Client Shopping Lists</Text>
        {clientList.length > 0 ? (
          <View style={styles.clientSection__listContainer}>
            <InviteClientIconBtn
              icon={<InviteClientIcon />}
              caption="Invite Clients"
              iconStyles={{backgroundColor: Colors.PRIMARY}}
              captionStyle={{color: Colors.PRIMARY, fontFamily: Fonts.HEAVY}}
              onPress={onInviteClientBtnPress}
            />

            <View flex={1}>
              <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                viewabilityConfig={viewConfigRef.current}
                onViewableItemsChanged={onViewRef.current}
                data={clientList}
                renderItem={({item}) => (
                  <InviteClientIconBtn
                    client={item}
                    onPress={() => onClientPress(item)}
                  />
                )}
                keyExtractor={(item, index) => index}
              />

              {showClientLeftArrow && (
                <View style={[styles.clientSectionArrowIndicator, {left: 0}]}>
                  <RightArrowIcon
                    color="#979797"
                    style={{transform: [{rotateY: '180deg'}]}}
                  />
                </View>
              )}

              {showClientRightArrow && (
                <View
                  style={[styles.clientSectionArrowIndicator, {right: -15}]}>
                  <RightArrowIcon color="#979797" />
                </View>
              )}
            </View>
          </View>
        ) : (
          <>
            <Text style={styles.clientSection__subTitle}>
              You currently don't have any clients
            </Text>
            <InviteClientBtn onPress={onInviteClientBtnPress} />
          </>
        )}
      </View>

      <ScrollView showsVerticalScrollIndicator={false} style={styles.storeList}>
        <View style={styles.itemGrid}>
          {items.map((item, index) => {
            return (
              <View key={index} style={styles.itemRow}>
                <ShopListCard
                  shopList={item}
                  caption={item.name}
                  actionBtn={
                    <RightArrwSqrBtn
                      style={styles.shopCard__ctaBtn}
                      onPress={() => onListCardPress(item)}
                    />
                  }
                />
              </View>
            );
          })}
          <View style={styles.itemRow}>
            <NewListCard onPress={onNewListBtnPress} />
          </View>
        </View>
      </ScrollView>

      <InviteClientModal
        isVisible={isInviteModapOpen}
        onSwipeHide={() => setIsInviteModalOpen(false)}
        inviteCode={inviteCode}
        onCopy={copyInviteCodeToClipboard}
      />
    </SafeAreaContainer>
  );
};

export default MyStore;

const styles = EStyleSheet.create({
  pageHeading: {
    fontSize: Typography._28,
    lineHeight: Typography._34,
  },

  noProductsText: {
    color: Colors.SECONDARY_TEXT,
    fontSize: Typography._12,
    fontFamily: Fonts.MEDIUM,
    marginTop: dpToHeightPercent(6.5),
  },

  clientSection: {
    marginTop: dpToHeightPercent(40),
  },

  clientSectionArrowIndicator: {
    position: 'absolute',
    width: 15,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255,255,255,0.8)',
  },
  clientSection__title: {
    color: Colors.LABEL,
    fontSize: Typography._18,
    lineHeight: Typography._22,
    fontFamily: Fonts.HEAVY,
  },

  clientSection__subTitle: {
    color: Colors.SECONDARY_TEXT,
    fontSize: Typography._12,
    lineHeight: Typography._18,
    fontFamily: Fonts.MEDIUM,
    marginTop: dpToHeightPercent(12),
  },
  $screenWidth: '100%',

  clientSection__listContainer: {
    flexDirection: 'row',
    marginTop: dpToHeightPercent(14),
  },

  clientSection__clientWrapper: {
    paddingRight: '0.06 * $screenWidth',
    maxWidth: '0.21 * $screenWidth',
  },

  clientSection__Icon: {
    width: '0.15 * $screenWidth',
    aspectRatio: 1,
    borderRadius: 100,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: dpToHeightPercent(8),
  },

  clientCaptionStyle: {
    color: Colors.LABEL,
    fontSize: Typography._12,
    lineHeight: Typography._16,
    fontFamily: Fonts.MEDIUM,
    textAlign: 'center',
  },

  storeList: {
    marginTop: dpToHeightPercent(40),
  },

  itemGrid: {
    paddingTop: dpToHeightPercent(4),
    paddingBottom: dpToHeightPercent(20),
    ...Mixins.FLEX_GRID,
    marginRight: -15,
  },

  $colWidth: '50%',

  itemRow: {
    width: '50%',
    paddingRight: 15,
    marginBottom: 25,
  },

  $cardWidth: '50% - 15' /* col width minus paddingRight */,

  shopCard__ctaBtn: {
    width: '0.2 * $cardWidth',
  },
});
