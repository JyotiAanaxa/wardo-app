import React, {useState} from 'react';
import {useFocusEffect} from '@react-navigation/native';
import {
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
  Platform,
} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {SafeAreaContainer} from '../../../utils/app-container';
import {HeaderBar} from '../../../components/header/header';
import {Heading} from '../../../components/heading/heading';
import {RightArrowIcon} from '../../../icons/right-arrow';
import {Loader} from '../../../components/loader/loader';

import {Mixins, Colors, Fonts, Typography} from '../../../theme';
import {heightPercentageToDP} from 'react-native-responsive-screen';
import FastImage from 'react-native-fast-image';

import {
  arrayToMatrix,
  DEFAULT_ERROR_CALLBACK,
  pluralizer,
} from '../../../utils/app-util';
import DataService from '../../../services/data-service';

const Book = ({onPress, lookbook}) => (
  <View
    style={{
      flexGrow: 1,
      maxWidth: '33.33%',
      paddingRight: 20,
      position: 'relative',
    }}>
    <TouchableOpacity onPress={onPress}>
      <ImageBackground
        style={{
          width: '100%',
          aspectRatio: 100 / 132,
        }}
        source={{uri: lookbook.bookIconUrl}}
        resizeMode="contain">
        <View
          style={{
            width: 34,
            height: 34,
            padding: 5,
            marginLeft: 11,
            marginTop: 10,
            borderRadius: 7,
            backgroundColor: 'rgba(255,255,255, 0.3)',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <FastImage
            style={{
              width: '100%',
              aspectRatio: 1,
            }}
            source={{
              uri: lookbook.activeIconUrl,
              priority: FastImage.priority.normal,
            }}
            resizeMode={FastImage.resizeMode.contain}
          />
        </View>
        <View
          style={{
            flex: 1,
            paddingTop: '12%',
            paddingLeft: 11,
            paddingRight: 25,
            paddingBottom: '22%',
          }}>
          <View style={{maxWidth: 100}}>
            <Text
              style={{
                color: '#fff',
                fontSize: Typography._14,
                fontFamily: Fonts.HEAVY,
                flexShrink: 1,
                lineHeight: heightPercentageToDP('2.09%'),
              }}>
              {lookbook.name}
            </Text>
          </View>
          <View
            style={{
              marginTop: 'auto',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: '#fff',
                fontSize: Typography._11,
                fontFamily: Fonts.MEDIUM,
              }}>
              {lookbook.count} Look{pluralizer(lookbook.count)}
            </Text>
            <RightArrowIcon color="#FFF" width={18} height={18} />
          </View>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  </View>
);

const LoaderSpinner = () => (
  <View style={[Mixins.FLEX]}>
    <Loader size={40} color={Colors.PRIMARY} />
  </View>
);

export const LookBook = ({navigation, route}) => {
  const {client = {}, saveAsTodaysLook} = route.params || {};

  const [isLoading, setIsLoading] = useState(false);
  const [activelookBookCategories, setActiveLookBookCategories] = useState([]);
  const [inActiveLookBookCategories, setInActiveLookBookCategories] = useState(
    [],
  );
  const [activeLookBookCount, setActiveLookBookCount] = useState(0);

  const fetchLookbooks = () => {
    setIsLoading(true);

    DataService.getLookBookCategoriesByStatus(client.slug).subscribe(
      data => {
        setActiveLookBookCategories(data && arrayToMatrix(data['ACTIVE'], 3));
        setActiveLookBookCount(data && data['ACTIVE'].length);

        if (!saveAsTodaysLook) {
          setInActiveLookBookCategories(
            data && arrayToMatrix(data['INACTIVE'], 3),
          );
        }

        setIsLoading(false);
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
      fetchLookbooks();
    }, []),
  );

  const onCategoryPress = lookbook => {
    navigation.navigate('LookBookList', {
      lookbookName: lookbook.name,
      saveAsTodaysLook,
      client
    });
  };

  const getPageTitle = `${
    client && client.name
      ? `${client.name.split(' ')[0]}'s \nLookbooks`
      : 'My Lookbooks'
    }`;

  if (isLoading) {
    return <LoaderSpinner />;
  }

  return (
    <SafeAreaContainer
      style={{
        paddingHorizontal: 20,
        paddingBottom: heightPercentageToDP('9%'),
      }}>
      <HeaderBar
        containerStyle={{marginLeft: Platform.OS === 'android' ? -8 : 0}}
        backButton
        leftClick={() => navigation.goBack()}
      />

      <Heading
        title={
          saveAsTodaysLook
            ? 'Select The Look You\nWould Like To Add'
            : getPageTitle
        }
        style={styles.pageHeading}
      />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          width: Platform.OS === 'android' ? '98%' : '86.5%',
          alignSelf: 'center',
        }}>
        {activelookBookCategories.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.label}>Active ({activeLookBookCount})</Text>

            <View style={{overflow: 'hidden'}}>
              {activelookBookCategories.map((row, index) => (
                <View
                  key={index}
                  style={EStyleSheet.child(
                    styles,
                    'row',
                    index,
                    activelookBookCategories.length,
                  )}>
                  {row.map((lookbook, idx) => (
                    <Book
                      key={idx}
                      onPress={() => onCategoryPress(lookbook)}
                      lookbook={lookbook}
                    />
                  ))}
                  <View style={styles.shelf} />
                </View>
              ))}
            </View>
          </View>
        )}

        {inActiveLookBookCategories.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.label}>Inactive</Text>
            <View style={{overflow: 'hidden'}}>
              {inActiveLookBookCategories.map((row, index) => (
                <View
                  key={index}
                  style={EStyleSheet.child(
                    styles,
                    'row',
                    index,
                    inActiveLookBookCategories.length,
                  )}>
                  {row.map((lookbook, idx) => (
                    <Book
                      key={idx}
                      onPress={() => onCategoryPress(lookbook)}
                      lookbook={lookbook}
                    />
                  ))}
                  <View style={styles.shelf} />
                </View>
              ))}
            </View>
          </View>
        )}
      </ScrollView>
    </SafeAreaContainer>
  );
};

export default LookBook;

const styles = EStyleSheet.create({
  pageHeading: {
    fontSize: Typography._28,
    lineHeight: Typography._36,
    paddingLeft: Platform.OS === 'android' ? 3 : heightPercentageToDP('3%'),
    paddingTop: heightPercentageToDP('3.6%'),
    paddingBottom: heightPercentageToDP('1.6%'),
  },

  section: {
    marginBottom: heightPercentageToDP('3.45%'),
  },

  label: {
    color: '#B0B0B0',
    fontSize: Typography._14,
    fontFamily: Fonts.ROMAN,
    marginBottom: heightPercentageToDP('2.9%'),
  },

  row: {
    position: 'relative',
    flexDirection: 'row',
    marginRight: -30,
    paddingHorizontal: 7,
    marginBottom: heightPercentageToDP('4.92%'),
  },

  'row:last-child': {
    marginBottom: 0,
  },

  shelf: {
    position: 'absolute',
    bottom: 7,
    height: 6,
    width: '100%',
    backgroundColor: '#D0D0D0',
  },
});
