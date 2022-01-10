import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import MyWardrobe from './my-wardrobe';
import MyItems from './my-items';
import { Platform } from 'react-native';

const Stack = createStackNavigator();

const WardrobeNavigation = ({ client, addItem, setIsNewItemAdded }) => {
  return (
      <Stack.Navigator
        initialRouteName="MyWardrobe"
        screenOptions={{
          headerShown: false,
          cardStyle: { backgroundColor: 'white' },
        }}>
        <Stack.Screen name="MyWardrobe">
          {props => <MyWardrobe {...props} client={client} />}
        </Stack.Screen>
        <Stack.Screen name="MyItems">
          {props => <MyItems {...props} addItem={addItem} setIsNewItemAdded={setIsNewItemAdded} />}
        </Stack.Screen>
      </Stack.Navigator>
  );
};

export default WardrobeNavigation;
