import React, {useState, useEffect, useContext} from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  Platform,
} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {Typography, Fonts, Colors, Mixins} from '../../../../theme';

import {HeaderBar} from '../../../../components/header/header';
import {Loader} from '../../../../components/loader/loader';

import DataService from '../../../../services/data-service';
import {
  DEFAULT_ERROR_CALLBACK,
  dpToHeightPercent,
} from '../../../../utils/app-util';

import {WardrobeContext} from '../../../../context/wardrobe-context';

const numColumns = 4;

const LoaderSpinner = () => (
  <View style={[Mixins.FLEX]}>
    <Loader size={40} color={Colors.PRIMARY} />
  </View>
);

const MyItems = ({route, navigation, addItem, setIsNewItemAdded}) => {
  const {client = {}, categoryName} = route.params || {};

  const [isLoading, setIsLoading] = useState(true);
  const [items, setItems] = useState();

  const wardrobeContext = useContext(WardrobeContext);

  const fetchItems = () => {
    setIsLoading(true);

    const catName = categoryName === 'All' ? '' : categoryName;

    DataService.myItems(catName, 0, client.slug).subscribe(
      data => {
        setItems(
          data.content.map(item => ({x: 0, y: 0, isFlipped: false, ...item})),
        );
        setIsLoading(false);
      },
      error => {
        DEFAULT_ERROR_CALLBACK(error);
        setIsLoading(false);
      },
    );
  };

  useEffect(() => fetchItems(), []);

  const EmptyComponent = () => {
    return (
      <View
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        style={{paddingHorizontal: 10}}>
        <View style={{maxWidth: '45%'}}>
          <Text style={styles.addNowTitle}>No Items Available</Text>
          <Text style={styles.addNowSubTitle}>
            You need to add items before you can create looks
          </Text>
        </View>

        <TouchableOpacity
          onPress={() => {
            wardrobeContext.setIsAddItemModalOpen(true);
            navigation.navigate('Wardrobe', {
              screen: 'Wardrobe',
              params: {categoryName},
            });
          }}
          style={styles.addNowBtnStyle}>
          <Text style={styles.addNowTextStyle}>Add Now</Text>
        </TouchableOpacity>
      </View>
    );
  };

  const onItemPress = item => {
    addItem(prev => [...prev, {...item, key: new Date().getTime()}]);
    setIsNewItemAdded(true);
  };

  if (isLoading) {
    return <LoaderSpinner />;
  }

  return (
    <View style={{flex: 1, paddingTop: 60}}>
      <HeaderBar
        containerStyle={{
          marginTop: Platform.OS === 'android' ? 0 : -45,
          marginHorizontal: Platform.OS === 'android' ? -20 : 0,
        }}
        headerStyle={{paddingHorizontal: 20}}
        backButton
        leftClick={() => navigation.goBack()}
        title={categoryName}
        txtStyle={{
          fontSize: Typography._16,
          fontFamily: Fonts.HEAVY,
          color: Colors.LABEL,
          marginLeft: Platform.OS === 'android' ? -45 : 0,
        }}
      />

      <FlatList
        data={items}
        style={{
          width: Platform.OS === 'android' ? '100%' : '88%',
          alignSelf: 'center',
        }}
        contentContainerStyle={{flexGrow: 1}}
        ListEmptyComponent={<EmptyComponent />}
        renderItem={({item}) => (
          <View
            style={{
              flex: 1,
              maxWidth: '25%',
              padding: 5,
            }}>
            <TouchableOpacity onPress={() => onItemPress(item)}>
              <View
                style={{
                  flex: 1,
                  alignItems: 'center',
                  backgroundColor: ' pink',
                  // borderWidth: 1,
                  // borderColor: '#D0D0D0',
                  // borderRadius: 16,
                  // padding: 12,
                }}>
                <Image
                  source={{uri: item.imageUrl}}
                  style={{width: '100%', aspectRatio: 1, marginBottom: 8}}
                  resizeMode="contain"
                />
                {/* <Text
                    style={{
                      color: Colors.LABEL,
                      fontSize: Typography._10,
                      fontFamily: Fonts.MEDIUM,
                      marginTop: 'auto',
                    }}>
                    {item.name}
                  </Text> */}
              </View>
            </TouchableOpacity>
          </View>
        )}
        keyExtractor={item => item.id}
        numColumns={numColumns}
      />
    </View>
  );
};

export default MyItems;

const styles = EStyleSheet.create({
  addNowTitle: {
    color: Colors.LABEL,
    fontSize: Typography._14,
    lineHeight: Typography._20,
    fontFamily: Fonts.HEAVY,
    marginBottom: dpToHeightPercent(5),
  },

  addNowSubTitle: {
    color: '#B0B0B0',
    fontSize: Typography._10,
    lineHeight: Typography._13,
    fontFamily: Fonts.MEDIUM,
  },

  addNowBtnStyle: {
    backgroundColor: Colors.PRIMARY,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#F2F2F2',
    paddingVertical: '5%',
    paddingHorizontal: '8%',
  },

  addNowTextStyle: {
    color: Colors.WHITE,
    fontSize: Typography._14,
    fontFamily: Fonts.MEDIUM,
  },
});
