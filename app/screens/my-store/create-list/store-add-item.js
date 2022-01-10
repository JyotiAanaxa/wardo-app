import React, {useState, useEffect, useRef} from 'react';
import {View, ScrollView, TouchableOpacity, Keyboard} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {heightPercentageToDP} from 'react-native-responsive-screen';

import {SafeAreaContainer} from '../../../utils/app-container';
import {HeaderBar} from '../../../components/header/header';
import {Loader} from '../../../components/loader/loader';

import {Mixins, Colors, Fonts, Typography} from '../../../theme';
import DataService from '../../../services/data-service';
import {
  DEFAULT_ERROR_CALLBACK,
  DEFAULT_MSG_CALLBACK,
  dpToHeightPercent,
} from '../../../utils/app-util';

import ItemBadge from '../../../components/shopping/item-badge';
import AddItemUrlInput from '../../../components/shopping/url-input';
import AddUrlBtn from '../../../components/shopping/add-url-btn';
import {productPageURL_Regex} from '../../../services/validations';

const LoaderSpinner = () => (
  <View style={[Mixins.FLEX]}>
    <Loader size={40} color={Colors.PRIMARY} />
  </View>
);

const MyStoreAddItems = ({navigation, route}) => {
  const {client = {}, shoppingListSlug, isNewList} = route.params || {};

  const scrollViewRef = useRef();
  const [urlInput, setUrlInput] = useState('');

  const [isLoading, setIsLoading] = useState(false);
  const [items, setItems] = useState([]);

  const [saveData, setSaveData] = useState(false);

  const saveItemsToShoppingList = () => {
    if (items.length > 0 && shoppingListSlug) {
      setIsLoading(true);

      DataService.addMultipleItemsToShoppingList(
        items,
        shoppingListSlug,
      ).subscribe(
        async data => {
          setIsLoading(false);

          const {status} = data || {};

          if (status) {
            isNewList
              ? client.slug
                ? navigation.navigate('ClientShoppingList', {client})
                : navigation.navigate('MyStore')
              : navigation.goBack();
            DEFAULT_MSG_CALLBACK('List created!');
          }
          setSaveData(false);
        },
        error => {
          DEFAULT_ERROR_CALLBACK(error);
          setIsLoading(false);
          setSaveData(false);
        },
      );
    }
  };

  useEffect(() => {
    if (saveData) {
      // setTimeout used to show the url badge ui being added to the list first
      setTimeout(() => {
        saveItemsToShoppingList();
      }, 500);
    }
  }, [saveData]);

  const onSavePress = () => {
    if (urlInput) {
      const makeApiCall = () => setSaveData(true);
      onAddItemPress(makeApiCall);
      return;
    }
    setSaveData(true);
  };

  const onAddItemPress = makeApiCall => {
    let isValid;

    if (urlInput) {
      const newURL = urlInput.trim();
      const isValidURL = newURL.match(productPageURL_Regex);

      if (isValidURL) {
        setItems(prev => {
          const alreadyExists = prev.find(({url}) => url === newURL);

          if (alreadyExists) {
            Keyboard.dismiss(); // required to show toast msg as it hides behind keyboard
            isValid = false;
            DEFAULT_MSG_CALLBACK('URL has beed already added.');
            return prev;
          } else {
            isValid = true;
            return [...prev, {url: newURL}];
          }
        });

        setUrlInput('');
      } else {
        isValid = false;
        DEFAULT_MSG_CALLBACK('URL is invalid.');
      }
    } else {
      isValid = false;
      DEFAULT_MSG_CALLBACK('Please enter URL.');
    }

    if (isValid && makeApiCall) {
      makeApiCall();
    }
  };

  const onBadgeRemove = index =>
    setItems(prev => prev.filter((itm, i) => index !== i));

  if (isLoading) {
    <LoaderSpinner />;
  }

  const isSaveBtnDisabled = !urlInput && items.length === 0;

  return (
    <SafeAreaContainer
      style={{
        paddingTop: heightPercentageToDP('7%'),
        paddingBottom: heightPercentageToDP('10%'),
        paddingHorizontal: 35,
      }}>
      <HeaderBar
        backButton
        leftClick={() => navigation.goBack()}
        title="Add Items"
        txtStyle={styles.pageTitle}
        rightBtnDisabled={isSaveBtnDisabled}
        rightText="Save"
        rightTxtStyle={[
          styles.saveBtnStyle,
          ...(isSaveBtnDisabled ? [styles.saveBtnDisabled] : []),
        ]}
        rightClick={onSavePress}
        containerStyle={{paddingRight: dpToHeightPercent(20)}}
      />

      <ScrollView
        style={styles.listContainer}
        ref={scrollViewRef}
        onContentSizeChange={() =>
          scrollViewRef.current.scrollToEnd({animated: true})
        }>
        {items.map((item, index) => (
          <View
            key={index}
            style={EStyleSheet.child(styles, 'listItem', index, items.length)}>
            <ItemBadge {...item} onRemovePress={onBadgeRemove} />
          </View>
        ))}
      </ScrollView>

      <AddItemUrlInput {...{urlInput, setUrlInput}} />

      <TouchableOpacity
        style={styles.addUrlBtnContainer}
        onPress={() => onAddItemPress()}>
        <AddUrlBtn />
      </TouchableOpacity>
    </SafeAreaContainer>
  );
};

export default MyStoreAddItems;

const styles = EStyleSheet.create({
  pageTitle: {
    color: Colors.LABEL,
    fontSize: Typography._18,
    fontFamily: Fonts.HEAVY,
  },

  saveBtnStyle: {
    color: Colors.PRIMARY,
    fontSize: Typography._16,
    fontFamily: Fonts.HEAVY,
  },

  saveBtnDisabled: {
    color: Colors.SECONDARY_TEXT,
  },

  listContainer: {
    flexGrow: 0,
    // maxHeight: 330,
    marginTop: heightPercentageToDP('3.6%'),
    marginBottom: heightPercentageToDP('2.46%'),
  },

  listItem: {
    marginBottom: heightPercentageToDP('2.46%'),
  },

  'listItem:last-child': {
    marginBottom: heightPercentageToDP('2%'),
  },

  addUrlBtnContainer: {
    alignSelf: 'center',
    marginVertical: dpToHeightPercent(30),
    marginBottom: dpToHeightPercent(20),
  },
});
