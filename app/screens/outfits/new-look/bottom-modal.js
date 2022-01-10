import React from 'react';
import { View, Platform } from 'react-native';
// import ToggleButton from '../../../components/buttons/toggle-button';
// import {Typography, Fonts, Colors} from '../../../theme';

import WardrobeNavigation from './navigation/wardrobe-navigation';
import { heightPercentageToDP } from 'react-native-responsive-screen';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

const BottomModal = ({
  client,
  height,
  toggleModalheight,
  addItem,
  setIsNewItemAdded,
}) => {
  return (
    <View
      style={{
        height: height,
        position: 'absolute',
        bottom: 0,
        backgroundColor: 'white',
        width: '100%',
        shadowColor: '#000',
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        shadowOffset: { width: 0, height: 0 },
        shadowRadius: 6,
        shadowOpacity: 0.12,
        elevation: 16,
        paddingHorizontal: Platform.OS==='android' ? 30 : 0,
      }}>
      <TouchableWithoutFeedback
        style={{
          paddingTop: 10,
          paddingBottom: 20,
          alignItems: 'center',
          justifyContent: 'center',
        }}
        onPress={toggleModalheight}>
        <View
          style={{
            height: 3.5,
            borderRadius: 10,
            width: heightPercentageToDP('6%'),
            alignItems: 'center',
            marginTop: 2,
            backgroundColor:'#F2F2F2'
          }}
        />
      </TouchableWithoutFeedback>
      <View style={{ flex: 1}}>
        <WardrobeNavigation {...{ client, addItem, setIsNewItemAdded }} />
      </View>
    </View>
  );
};

export default BottomModal;
