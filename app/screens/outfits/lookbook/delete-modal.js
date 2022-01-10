import React from 'react';
import { View, Text } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Button } from 'native-base';
import { DefModal } from '../../../components/modals/default-modal/default-modal';
import { DeleteItemIcon } from '../../../icons/delete-item';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Colors, Fonts, Typography } from '../../../theme';
import { RemoveIcon } from '../../../icons/remove';

const DeleteLookModal = ({ isVisible, onSuccess, onCancel }) => {
  const BodyComponent = () => {
    return (
      <View style={styles.modalContainer}>
        <RemoveIcon />
        <Text style={styles.modalTitleStyle}>Delete Look</Text>
        <Text style={styles.modalTxtStyle}>
          Are you sure you want to remove this look?
        </Text>

        <View style={styles.btnRowContainer}>
          <Button onPress={onCancel} style={styles.activeBtnContainer}>
            <Text style={styles.activebtnTxtStyle}>Cancel</Text>
          </Button>

          <Button onPress={onSuccess} style={styles.inactiveBtnContainer}>
            <Text style={styles.inactivebtnTxtStyle}>Delete</Text>
          </Button>
        </View>
      </View>
    );
  };
  return (
    <DefModal
      isVisible={isVisible}
      onCancel={onCancel}
      body={<BodyComponent />}
    />
  );
};

export default DeleteLookModal;

const styles = EStyleSheet.create({
  modalContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 15,
  },

  modalTitleStyle: {
    fontSize: hp('2.3%'),
    color: Colors.LABEL,
    fontFamily: Fonts.BOLD,
    marginTop: 30,
    textAlign: 'center',
  },

  modalTxtStyle: {
    fontSize: Typography.SMALL,
    color: Colors.SECONDARY_TEXT,
    fontFamily: Fonts.BOLD,
    fontWeight: '900',
    marginTop: 10,
    textAlign: 'center',
  },

  btnRowContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 25,
  },

  activeBtnContainer: {
    width: hp('16%'),
    height: hp('6.2%'),
    marginRight: 10,
    borderRadius: 15,
    backgroundColor: Colors.WHITE,
    borderWidth: 1,
    borderColor: Colors.PRIMARY,
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 10,
    shadowOpacity: 0.16,
    elevation: 8,
  },

  activebtnTxtStyle: {
    fontSize: hp('1.9%'),
    color: Colors.PRIMARY,
    fontFamily: Fonts.HEAVY,
    fontWeight: '900',
  },

  inactiveBtnContainer: {
    width: hp('16%'),
    height: hp('6.3%'),
    marginLeft: 10,
    borderRadius: 15,
    backgroundColor: Colors.PRIMARY,
    borderWidth: 1,
    borderColor: Colors.PRIMARY,
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 10,
    shadowOpacity: 0.16,
    elevation: 8,
  },

  inactivebtnTxtStyle: {
    fontSize: hp('1.9%'),
    color: Colors.WHITE,
    fontFamily: Fonts.HEAVY,
    fontWeight: '900',
  },
});
