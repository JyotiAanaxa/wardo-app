import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Image, View, Text } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import ThemeButton from '../../components/buttons/theme-button';
import { BottomHalfModal } from '../../components/modals/bottom-half-modal/bottomhalf-modal';

import { dpToHeightPercent } from '../../utils/app-util';
import { Colors, Fonts, Typography } from '../../theme';

const ClientLimitWarnModal = ({
  imgSrc,
  title,
  subTitle,
  isVisible,
  onSwipeHide,
}) => {
  const navigation = useNavigation();

  const BodyComponent = () => {
    return (
      <View style={styles.modalContainer}>
        <View style={styles.line} />

        <Image
          source={imgSrc}
          resizeMode="contain"
          style={{
            width: '100%',
            height: undefined,
            aspectRatio: 1.63,
            marginBottom: dpToHeightPercent(12),
          }}
        />

        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subTitle}>{subTitle}</Text>

        <ThemeButton
          buttonStyle={{
            width: '100%',
            height: dpToHeightPercent(60),
            maxWidth: dpToHeightPercent(300),
            borderRadius: 18,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: Colors.PRIMARY,
          }}
          label="See All Plans"
          labelStyle={{
            color: '#fff',
            fontSize: Typography._16,
            lineHeight: Typography._20,
            fontFamily: Fonts.MEDIUM,
          }}
          onSubmit={() => navigation.navigate('LetStarted', { fromExpert: true })}
        />
      </View>
    );
  };

  return (
    <BottomHalfModal
      isVisible={isVisible}
      onSwipeHide={onSwipeHide}
      body={<BodyComponent />}
    />
  );
};

export default ClientLimitWarnModal;

const styles = EStyleSheet.create({
  modalContainer: {
    paddingTop: 10,
    paddingHorizontal: '9.6%',
    alignItems: 'center',
  },

  line: {
    width: '13.11%',
    height: 4,
    borderRadius: 20,
    marginTop: dpToHeightPercent(10),
    marginBottom: dpToHeightPercent(30),
    backgroundColor: '#F2F2F2',
  },

  title: {
    color: Colors.LABEL,
    fontSize: dpToHeightPercent(20),
    lineHeight: dpToHeightPercent(28),
    fontFamily: Fonts.HEAVY,
    marginBottom: dpToHeightPercent(10),
  },

  subTitle: {
    color: '#979797',
    fontSize: dpToHeightPercent(14),
    lineHeight: dpToHeightPercent(18),
    fontFamily: Fonts.ROMAN,
    textAlign: 'center',
    marginBottom: dpToHeightPercent(40),
  },
});
