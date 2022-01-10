import React, {useState} from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  Platform,
} from 'react-native';
import {useFocusEffect} from '@react-navigation/native';
import {Typography, Fonts, Colors, Mixins} from '../../../../theme';

import {HeaderBar} from '../../../../components/header/header';
import {Loader} from '../../../../components/loader/loader';

import DataService from '../../../../services/data-service';
import {DEFAULT_ERROR_CALLBACK} from '../../../../utils/app-util';

import {AllIcon} from '../../../../icons/all-icon';

const numColumns = 4;

const LoaderSpinner = () => (
  <View style={[Mixins.FLEX]}>
    <Loader size={40} color={Colors.PRIMARY} />
  </View>
);

const MyWardrobe = ({client = {}, route, navigation}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [categories, setCategories] = useState();

  const fetchCategories = () => {
    setIsLoading(true);

    DataService.myHierarchicalItem(client.slug).subscribe(
      data => {
        let tempArr = [{name: 'All'}];

        for (const key in data) {
          if (data.hasOwnProperty(key)) {
            const parentCategory = data[key];
            tempArr = tempArr.concat(parentCategory);
          }
        }

        setCategories(tempArr);
        setIsLoading(false);
      },
      error => {
        DEFAULT_ERROR_CALLBACK(error);
        setIsLoading(false);
      },
    );
  };

  useFocusEffect(
    React.useCallback(() => {
      fetchCategories();
    }, []),
  );

  const onCategoryPress = categoryName => {
    navigation.navigate('MyItems', {categoryName, client});
  };

  if (isLoading) {
    return <LoaderSpinner />;
  }

  return (
    <View style={{paddingTop: 45}}>
      <HeaderBar
        title="My Wardrobe"
        headerStyle={{height: 'auto'}}
        containerStyle={{marginTop: Platform.OS === 'android' ? 0 : -45}}
        txtStyle={{
          fontSize: Typography._16,
          fontFamily: Fonts.HEAVY,
          color: Colors.LABEL,
          marginLeft: Platform.OS === 'android' ? -45 : 0,
        }}
      />

      <FlatList
        data={categories}
        contentContainerStyle={{
          marginHorizontal: Platform.OS === 'android' ? -5 : 30,
        }}
        renderItem={({item, index}) => (
          <View
            style={{
              flex: 1,
              maxWidth: '25%',
              padding: 5,
            }}>
            <TouchableOpacity
              style={{flex: 1}}
              onPress={() => {
                onCategoryPress(item.name);
              }}>
              <View
                style={{
                  alignItems: 'center',
                  borderWidth: 1,
                  borderColor: '#D0D0D0',
                  borderRadius: 16,
                  padding: 12,
                  flex: 1,
                }}>
                {index === 0 ? (
                  <View
                    style={{
                      height: 46,
                      marginBottom: 8,
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <AllIcon />
                  </View>
                ) : (
                  <Image
                    source={{uri: item.iconUrl}}
                    style={{width: '100%', height: 46, marginBottom: 8}}
                    resizeMode="contain"
                  />
                )}
                <Text
                  numberOfLines={1}
                  ellipsizeMode="tail"
                  style={{
                    color: Colors.LABEL,
                    fontSize: Typography._10,
                    fontFamily: Fonts.MEDIUM,
                    marginTop: 'auto',
                  }}>
                  {item.name}
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        )}
        keyExtractor={item => item.name}
        numColumns={numColumns}
      />
    </View>
  );
};

export default MyWardrobe;
