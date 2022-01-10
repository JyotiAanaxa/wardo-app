import React from 'react';
import { View, Text, Image } from 'react-native';
import OctopusLogo from '../../icons/octopus-logo';
import ThemeButton from '../../components/buttons/theme-button';
import { Mixins, Colors } from '../../theme';
import styles from './style';

const GetStarted = ({ navigation }) => {

  const getStartedCallback = () => {
    navigation.navigate('AuthScreen');
  };

  return (

    <View style={[Mixins.FULL_SCREEN, { backgroundColor: '#FBFCFE' }]}>
      <View style={[Mixins.FLEX, { backgroundColor: 'white', borderRadius: 120, margin: 80 }]}>
        {/* <View style={styles.octopusLogoContainer}>
          <OctopusLogo />
        </View> */}
        <Image
          style={styles.logo}
          resizeMode="contain"
          source={require('../../../assets/img/wardo2.png')}
        />
        <Text style={styles.caption}>Fashion Made Easy</Text>
      </View>

      <ThemeButton
        buttonStyle={styles.getStartedBtn}
        labelStyle={styles.getStartedBtnText}
        label="Get Started"
        onSubmit={getStartedCallback}
      />
    </View>
  );
};

export default GetStarted;
