import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import {Text, View} from 'react-native';

import {SafeAreaContainer} from '../../utils/app-container';

import {dpToHeightPercent} from '../../utils/app-util';
import {Colors, Fonts, Typography} from '../../theme';
import ClientLimitWarnModal from './warning-modal';

const ClientLimitReach = ({navigation, route}) => {
  return (
    <SafeAreaContainer>
      <ClientLimitWarnModal
        isVisible={true}
        imgSrc={require('../../../assets/img/client-limit-reach.png')}
        title="Free clients limits reached"
        subTitle="Thank you for using Wardo. To continue enjoying the benefits select a plan and become a premium member"
        onSwipeHide={() => navigation.navigate('MyClients')}
      />
    </SafeAreaContainer>
  );
};

export default ClientLimitReach;

const styles = EStyleSheet.create({});
