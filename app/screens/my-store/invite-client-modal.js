import React, {useState} from 'react';
import {View, Text, TouchableOpacity, ImageBackground} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import {BottomHalfModal} from '../../components/modals/bottom-half-modal/bottomhalf-modal';

import {dpToHeightPercent} from '../../utils/app-util';
import {Colors, Fonts, Typography} from '../../theme';

const InviteClientModal = ({isVisible, onSwipeHide, inviteCode, onCopy}) => {
  const BodyComponent = () => {
    return (
      <View style={styles.modalContainer}>
        <View style={styles.line} />

        <Text style={styles.heading}>Invite Clients</Text>

        <TouchableOpacity onPress={onCopy}>
          <ImageBackground
            source={require('../../../assets/img/invite-client-cta-bg.png')}
            resizeMode="contain"
            style={styles.inviteClientCopyBtn}>
            <Text style={styles.inviteCode}>{inviteCode}</Text>
            <Text style={styles.inviteCodeInfoText}>
              Tap to copy to clipboard
            </Text>
          </ImageBackground>
        </TouchableOpacity>

        <View style={styles.inviteClientFooter}>
          <Text style={styles.inviteClientFooter__Title}>
            This is your unique code
          </Text>
          <Text style={styles.inviteClientFooter__SubTitle}>
            You can share this with clients you would like to join you on the
            app
          </Text>
        </View>
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

export default InviteClientModal;

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

  heading: {
    fontSize: dpToHeightPercent(20),
    lineHeight: dpToHeightPercent(24),
    fontFamily: Fonts.BOLD,
    marginBottom: dpToHeightPercent(22),
  },

  inviteClientCopyBtn: {
    width: '100%',
    aspectRatio: 3.02,
    justifyContent: 'center',
    alignItems: 'center',
  },

  inviteCode: {
    color: Colors.PRIMARY,
    fontSize: dpToHeightPercent(40),
    lineHeight: dpToHeightPercent(49),
    letterSpacing: dpToHeightPercent(10),
    fontFamily: Fonts.BOLD,
  },

  inviteCodeInfoText: {
    color: Colors.PRIMARY,
    fontSize: Typography._12,
    lineHeight: Typography._18,
    fontFamily: Fonts.MEDIUM,
  },

  inviteClientFooter: {
    marginTop: dpToHeightPercent(30),
    maxWidth: 250,
  },

  inviteClientFooter__Title: {
    textAlign: 'center',
    color: Colors.PRIMARY,
    fontSize: Typography._16,
    lineHeight: Typography._18,
    fontFamily: Fonts.HEAVY,
    marginBottom: dpToHeightPercent(10),
  },

  inviteClientFooter__SubTitle: {
    textAlign: 'center',
    color: '#979797',
    fontSize: Typography._14,
    lineHeight: Typography._18,
    fontFamily: Fonts.ROMAN,
  },
});
