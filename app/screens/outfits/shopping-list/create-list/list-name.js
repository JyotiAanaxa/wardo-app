import React, {useState} from 'react';
import {View, TextInput} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {heightPercentageToDP} from 'react-native-responsive-screen';

import {Loader} from '../../../../components/loader/loader';
import {SafeAreaContainer} from '../../../../utils/app-container';
import {HeaderBar} from '../../../../components/header/header';
import {Heading} from '../../../../components/heading/heading';
import ThemeButton from '../../../../components/buttons/theme-button';

import {Mixins, Colors, Fonts, Typography} from '../../../../theme';
import DataService from '../../../../services/data-service';
import {DEFAULT_ERROR_CALLBACK, heightIntoDP} from '../../../../utils/app-util';
import {AppConstants} from '../../../../utils/app-constants';

const LoaderSpinner = () => (
  <View style={[Mixins.FLEX]}>
    <Loader size={40} color={Colors.PRIMARY} />
  </View>
);

const NewShoppingListName = ({navigation, route}) => {
  const [isLoading, setIsLoading] = useState(false);

  const inputPlaceholderStyle = {
    color: '#B0B0B0',
    fontFamily: Fonts.HEAVY,
    fontSize: Typography._18,
    lineHeight: Typography._22,
  };
  const [inputStyle, setInputStyle] = useState(inputPlaceholderStyle);
  const [listName, setListName] = useState('');

  const onSubmit = () => {
    if (listName) {
      setIsLoading(true);

      DataService.createShoppingList(listName).subscribe(
        async data => {
          setIsLoading(false);

          const {status, data: shoppingListResp = {}} = data || {};
          if (status) {
            const shoppingListSlug = shoppingListResp.slug;
            navigation.navigate('ShoppingListAddItems', {
              shoppingListSlug,
              isNewList: true,
            });
          }
        },
        error => {
          DEFAULT_ERROR_CALLBACK(error);
          setIsLoading(false);
        },
      );
    }
  };

  if (isLoading) {
    return <LoaderSpinner />;
  }

  return (
    <SafeAreaContainer
      style={{
        paddingBottom: heightPercentageToDP('7%'),
        paddingHorizontal: 35,
      }}>
      <HeaderBar backButton leftClick={() => navigation.goBack()} />

      <Heading
        title={AppConstants.SHOPPING_LIST.NEW_LIST.PAGE_TITLE}
        style={styles.pageHeading}
        containerStyle={{marginBottom: heightPercentageToDP('5%')}}
      />

      <View style={{flexGrow: 1}}>
        <TextInput
          placeholder={AppConstants.SHOPPING_LIST.NEW_LIST.INPUT_PLACEHOLDER}
          onChangeText={txt => {
            setInputStyle(
              txt.length > 0 ? styles.inputValStyle : inputPlaceholderStyle,
            );

            setListName(txt);
          }}
          // onSubmitEditing={({nativeEvent: {text}}) => onSubmit()}
          style={[{padding: 0}, inputStyle]}
          value={listName}
        />

        <ThemeButton
          onSubmit={onSubmit}
          buttonStyle={styles.btnContainer}
          labelStyle={styles.labelStyle}
          label="Done"
        />
      </View>
    </SafeAreaContainer>
  );
};

export default NewShoppingListName;

const styles = EStyleSheet.create({
  pageHeading: {
    fontSize: Typography._28,
    lineHeight: Typography._38,
    paddingTop: heightPercentageToDP('5%'),
  },

  inputValStyle: {
    color: Colors.LABEL,
    fontFamily: Fonts.HEAVY,
    fontSize: Typography._20,
    lineHeight: heightPercentageToDP('4%'),
    fontWeight: 'normal',
  },

  btnContainer: {
    width: '100%',
    maxWidth: 270,
    height: heightIntoDP(60),
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.PRIMARY,
    borderRadius: 18,
    shadowColor: '#382D7C',
    shadowOffset: {width: 0, height: 0},
    shadowRadius: 10,
    shadowOpacity: 0.16,
    elevation: 8,
    position: 'absolute',
    bottom: heightPercentageToDP('7%'),
  },

  labelStyle: {
    color: Colors.WHITE,
    fontSize: Typography._16,
    fontFamily: Fonts.MEDIUM,
  },
});
