import React, { useContext, useState } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { Image, View, TouchableOpacity, FlatList, Text, StyleSheet, Platform } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { SafeAreaContainer, FlexContainer } from '../../../utils/app-container';
import { HeaderBar } from '../../../components/header/header';
import { Loader } from '../../../components/loader/loader';

import { Mixins, Colors, Typography, Fonts } from '../../../theme';
import { HangerIcon } from '../../../icons/hanger';
import { WardrobeContext } from '../../../context/wardrobe-context';
import DataService from '../../../services/data-service';
import { DEFAULT_ERROR_CALLBACK, heightIntoDP } from '../../../utils/app-util';
import ThemeButton from '../../../components/buttons/theme-button';
import { heightPercentageToDP } from 'react-native-responsive-screen';
import { NoItemFoundIcon } from '../../../icons/no-item';
import useItemCountAPI from '../../../hooks/use-item-count-api';
import { NoLooksFoundIcon } from '../../../icons/no-looks';

const LoaderSpinner = () => (
  <View style={[Mixins.FLEX]}>
    <Loader size={40} color={Colors.PRIMARY} />
  </View>
);

export const LookBook = ({ navigation, route }) => {
  const { client = {}, lookbookName, saveAsTodaysLook } = route.params || {};
  const wardrobeContext = useContext(WardrobeContext);

  const [isLoading, setIsLoading] = useState(true);
  const [looks, setLooks] = useState([]);

  const { itemCount } = useItemCountAPI(setIsLoading);

  const fetchLooksByCategory = () => {
    DataService.getAllLooksByLookBookName(0, lookbookName, client.slug).subscribe(
      data => {
        setLooks(data.content);
        setIsLoading(false);
      },
      error => {
        DEFAULT_ERROR_CALLBACK(error);
        setIsLoading(false);
      },
    );
  };

  const updateTodaysLook = lookSlug => {
    setIsLoading(true);
    DataService.updateTodaysLook(lookSlug).subscribe(
      async data => {
        setIsLoading(false);

        if (data.status) {
          navigation.navigate('Outfits');
        }
      },
      error => {
        DEFAULT_ERROR_CALLBACK(error);
        setIsLoading(false);
      },
    );
  };

  /* on component mount or is current screen */
  useFocusEffect(
    React.useCallback(() => {
      fetchLooksByCategory();
    }, []),
  );

  const onLookPress = look => {
    if (saveAsTodaysLook) {
      look.slug && updateTodaysLook(look.slug);
    } else {
      navigation.navigate('ViewLook', { look, isReadOnly: !!client.slug });
    }
  };

  if (isLoading) {
    return <LoaderSpinner />;
  }

  return (
    <SafeAreaContainer
      style={{
        paddingBottom: heightPercentageToDP('7%'),
        paddingTop: heightPercentageToDP('7%'),
        paddingHorizontal: 30,
        backgroundColor: '#FAFAFA',
      }}>
      <HeaderBar
        backButton
        leftClick={() => navigation.goBack()}
      // rightIcon={<HangerIcon />}
      // rightClick={() => {
      //   wardrobeContext.setIsAddItemModalOpen(true);
      //   navigation.navigate('Wardrobe');
      // }}
      />

      <FlatList
        data={looks}
        contentContainerStyle={{ flexGrow: 1, marginHorizontal: Platform.OS === 'android' ? -4.5 : heightPercentageToDP('2.8%'), marginTop: Platform.OS === 'android' ? 0 : heightPercentageToDP('6%') }}
        ListEmptyComponent={!isLoading ?
          <FlexContainer>
            <View style={styles.noItemContainer}>
              <NoLooksFoundIcon />
            </View>
            <Text style={styles.msgStyle}>No Looks available</Text>
            <ThemeButton
              onSubmit={() => {
                // if (itemCount === 0) {
                //   wardrobeContext.setIsAddItemModalOpen(true);
                //   navigation.navigate('Wardrobe');
                // } else {
                navigation.navigate('CreateLook', {
                  screen: 'NewLook',
                  params: {
                    client,
                    saveAsTodaysLook: false,
                    saveToLookBook: lookbookName,
                  },
                });
                // }
              }}
              buttonStyle={styles.btnContainer}
              labelStyle={styles.labelStyle}
              label={'Add Look'}
            />
          </FlexContainer> :
          <Loader color={Colors.PRIMARY} size={30} />}
        renderItem={({ item }) => (
          <View
            style={{
              flex: 1,
              maxWidth: '33.33%',
              padding: 5,
            }}>
            <TouchableOpacity
              style={{ flex: 1 }}
              onPress={() => onLookPress(item)}>
              <View
                style={{
                  flex: 1,
                  height: 120,
                  backgroundColor: '#FFF',
                  borderRadius: 12,
                  shadowColor: '#1A1A1A0D',
                  shadowOffset: {
                    width: 2,
                    height: 2,
                  },
                  shadowOpacity: 0.23,
                  shadowRadius: 10,
                  elevation: 2.8,
                  padding: 7,
                }}>
                <Image
                  source={{ uri: item.imageUrl }}
                  style={{
                    width: '100%',
                    height: '100%',
                  }}
                  resizeMode="contain"
                />
              </View>
            </TouchableOpacity>
          </View>
        )}
        keyExtractor={item => item.id}
        numColumns={3}
      />
    </SafeAreaContainer>
  );
};

export default LookBook;

const styles = StyleSheet.create({
  msgStyle: {
    fontSize: Typography._15,
    color: Colors.SECONDARY_TEXT,
    marginTop: 20,
    textTransform: 'capitalize',
    fontFamily: Fonts.ROMAN
  },
  noItemContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10
  },

  btnContainer: {
    width: '50%',
    height: heightIntoDP(60),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.PRIMARY,
    borderRadius: 18,
    shadowColor: '#382D7C',
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 10,
    shadowOpacity: 0.16,
    elevation: 8,
    position: 'absolute',
    bottom: Platform.OS === 'android' ? heightPercentageToDP('6%') : heightPercentageToDP('10%')
  },

  labelStyle: {
    color: Colors.WHITE,
    fontSize: Typography._16,
    fontFamily: Fonts.MEDIUM
  },
});
