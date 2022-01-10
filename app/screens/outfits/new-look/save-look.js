import React, { useState, useEffect } from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList,
  TextInput,
} from 'react-native';
import { SafeAreaContainer } from '../../../utils/app-container';
import { HeaderBar } from '../../../components/header/header';

import { Mixins, Colors, Fonts, Typography } from '../../../theme';

// import IconButton from '../../../components/buttons/icon-button';
import { Loader } from '../../../components/loader/loader';
import FastImage from 'react-native-fast-image';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { CheckboxPurpleShadowIcon } from '../../../icons/checkbox-purple-shadow';
import {
  SHOW_INFO_NOTIFICATION,
  DEFAULT_ERROR_CALLBACK,
} from '../../../utils/app-util';
import DataService from '../../../services/data-service';

const chevronUp = require('../../../../assets/img/chevron-up.png');
const chevronDown = require('../../../../assets/img/chevron-down.png');

const LoaderSpinner = () => (
  <View style={[Mixins.FLEX]}>
    <Loader size={40} color={Colors.PRIMARY} />
  </View>
);

export const SaveLook = ({ navigation, route }) => {
  const { client = {}, imageUrl, saveAsTodaysLook, saveToLookBook } = route.params || {};

  const [isLoading, setIsLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const [lookbookCategories, setLookBookCategories] = useState([]);

  const [selectedLookBookCategory, setSelectedLookBookCategory] = useState();

  const inputPlaceholderStyle = {
    fontFamily: Fonts.MEDIUM,
    fontSize: Typography._14,
  };
  const [inputStyle, setInputStyle] = useState(inputPlaceholderStyle);
  const [lookName, setLookName] = useState('');

  const fetchLookbooks = () => {
    DataService.getLookBookCategories().subscribe(
      data => {
        const categoryList = data.map(item => ({ ...item, isSelected: false }));
        setLookBookCategories(categoryList);

        const lookbook = categoryList.find(lookbook => lookbook.name === saveToLookBook);

        if (lookbook) {
          setSelectedLookBookCategory({...lookbook, isSelected: true});
        }

        setIsLoading(false);
      },
      error => {
        DEFAULT_ERROR_CALLBACK(error);
        setIsLoading(false);
      },
    );
  };

  useEffect(() => {
    fetchLookbooks();
  }, []);

  const toggleVisibility = () => {
    setIsVisible(prev => !prev);
  };

  const saveLook = () => {
    if (!selectedLookBookCategory) {
      SHOW_INFO_NOTIFICATION('Please Assign Lookbook to Item');
      return;
    }

    if (imageUrl) {
      const look = {
        name: lookName,
        lookbookName: selectedLookBookCategory.name,
        imageUrl,
      };

      setIsLoading(true);

      DataService.saveLookWithTodayFlag(look, saveAsTodaysLook, client.slug).subscribe(
        data => {
          if (data.status) {
            const routeName = saveAsTodaysLook ? 'Outfits' : 'LookBook'
            navigation.navigate(routeName);
          }

          setIsLoading(false);
        },
        error => {
          DEFAULT_ERROR_CALLBACK(error);
          setIsLoading(false);
        },
      );
    }
  };

  const onItemPress = selectedItem => {
    let lookbook;

    setLookBookCategories(prev => {
      const tempArr = [...prev];

      const arr = tempArr.map(item => {
        const obj = { ...item };

        if (item.name === selectedItem.name) {
          const isSelectedVal = !obj.isSelected;
          obj.isSelected = isSelectedVal;
          lookbook = isSelectedVal ? obj : undefined;
        } else {
          obj.isSelected = false;
        }

        return obj;
      });

      return arr;
    });

    setSelectedLookBookCategory(lookbook);
    if (lookbook) {
      setIsVisible(false);
    }
  };

  if (isLoading) {
    return <LoaderSpinner />;
  }

  return (
    <SafeAreaContainer style={{ paddingTop: 50, paddingBottom: 70 }}>
      <HeaderBar
        backButton
        leftClick={() => navigation.goBack()}
        rightText="Save"
        rightTxtStyle={styles.saveBtnStyle}
        rightClick={saveLook}
      />
      <View style={{ flexGrow: 1, alignItems: 'center' }}>
        <View style={styles.imgContainer}>
          <FastImage
            style={styles.imgStyle}
            source={{
              uri: imageUrl,
              priority: FastImage.priority.normal,
            }}
            resizeMode={FastImage.resizeMode.contain}
          />
        </View>
        <View style={styles.container}>
          <TouchableOpacity onPress={toggleVisibility}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Text style={styles.labelStyle}>Lookbook*</Text>
              <View>
                <Image
                  style={styles.toggleIconStyle}
                  resizeMode="contain"
                  source={isVisible ? chevronUp : chevronDown}
                />
              </View>
            </View>

            {selectedLookBookCategory && (
              <Text style={styles.selectedTexStyle}>
                {selectedLookBookCategory.name}
              </Text>
            )}
          </TouchableOpacity>

          {isVisible && (
            <FlatList
              data={lookbookCategories}
              contentContainerStyle={{
                flexGrow: 1,
                paddingTop: 10,
              }}
              ListEmptyComponent={() => {
                return (
                  <View style={Mixins.FLEX}>
                    <Text
                      style={{
                        color: Colors.LABEL,
                        fontSize: Typography._16,
                        fontFamily: Fonts.MEDIUM,
                      }}>
                      No Items Available
                    </Text>
                  </View>
                );
              }}
              renderItem={({ item }) => (
                <View
                  style={{
                    flex: 1,
                    maxWidth: '25%',
                    paddingHorizontal: 5,
                    paddingVertical: 7,
                  }}>
                  <TouchableOpacity
                    style={{ flex: 1 }}
                    onPress={() => onItemPress(item)}>
                    <View
                      style={{
                        flex: 1,
                        alignItems: 'center',
                        backgroundColor: item.isSelected
                          ? '#6A60DA'
                          : '#F2F2F2',
                        borderRadius: 16,
                        padding: 14,
                        position: 'relative',
                      }}>
                      {item.isSelected && (
                        <CheckboxPurpleShadowIcon
                          style={{ position: 'absolute', top: -17, right: -20 }}
                        />
                      )}
                      <Image
                        source={{
                          uri: item.isSelected
                            ? item.activeIconUrl
                            : item.inactiveIconUrl,
                        }}
                        style={{
                          width: '100%',
                          aspectRatio: 1,
                          marginBottom: 8,
                        }}
                        resizeMode="contain"
                      />

                      <Text
                        style={[
                          styles.categoryName,
                          { color: item.isSelected ? '#fff' : Colors.LABEL },
                        ]}>
                        {item.name}
                      </Text>
                    </View>
                  </TouchableOpacity>
                </View>
              )}
              keyExtractor={item => item.id}
              numColumns={4}
            />
          )}

          <View style={{ marginTop: 30 }}>
            <Text style={[[styles.labelStyle, { marginVertical: 0 }]]}>Name</Text>
            <TextInput
              placeholder="Enter here..."
              onChangeText={txt => {
                setInputStyle(
                  txt.length > 0
                    ? {
                      color: Colors.LABEL,
                      fontFamily: Fonts.HEAVY,
                      fontSize: Typography._22,
                      fontWeight: 'normal',
                    }
                    : inputPlaceholderStyle,
                );

                setLookName(txt);
              }}
              placeholderTextColor="#D0D0D0"
              style={[
                {
                  paddingHorizontal: 0,
                },
                inputStyle,
              ]}
              value={lookName}
            />
          </View>
        </View>
      </View>
    </SafeAreaContainer>
  );
};

export default SaveLook;

const styles = EStyleSheet.create({
  saveBtnStyle: {
    color: Colors.SECONDARY_TEXT,
    fontFamily: Fonts.BOLD,
    fontSize: Typography._16,
  },

  imgContainer: {
    width: '100%',
    alignItems: 'center',
  },

  imgStyle: {
    width: hp('20%'),
    height: hp('20%'),
  },

  container: {
    flex: 1,
    width: '85%',
    marginTop: 30,
  },

  labelStyle: {
    fontSize: Typography.SMALL,
    color: Colors.SECONDARY_TEXT,
    fontFamily: Fonts.ROMAN,
    marginVertical: 10,
  },

  toggleIconStyle: {
    height: 30,
    width: 30,
    opacity: 0.5,
  },

  selectedTexStyle: {
    color: Colors.LABEL,
    fontSize: Typography._22,
    fontFamily: Fonts.HEAVY,
  },

  categoryName: {
    textAlign: 'center',
    fontSize: Typography._10,
    fontFamily: Fonts.MEDIUM,
    lineHeight: 12,
  },
});
