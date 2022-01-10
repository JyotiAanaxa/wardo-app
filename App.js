import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import { View, StatusBar } from 'react-native';
import { Root } from 'native-base';
import CheckInternetConnection from './app/utils/internet-connection';
import { Colors } from './app/theme';
import Entry from './app/screens/entry/entry';

import EStyleSheet from 'react-native-extended-stylesheet';
EStyleSheet.build({})

const App = () => {

  return (
    <React.Fragment>
      <CheckInternetConnection />
      <View
        style={{
          flex: 1,
          backgroundColor: Colors.WHITE,
        }}>
        <StatusBar
          backgroundColor={Colors.STATUS_BAR}
          barStyle="dark-content"
        />
        <Root>
          <Entry />
        </Root>
      </View>
    </React.Fragment>
  );
};
export default App;
