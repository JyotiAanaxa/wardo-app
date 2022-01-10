import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {DefModal} from '../../components/modals/default-modal/default-modal';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {Colors, Fonts, Typography} from '../../theme';
import Check from '../../icons/check';

const SuccessModal = ({
  isSuccessModalVisible,
  expert = {},
  onCancel,
  onViewBtnPress,
}) => {
  const BodyComponent = () => {
    return (
      <View style={styles.modalContainer}>
        <View style={{width: 200}}>
          <Image
            style={{width: 70, height: 70, alignSelf: 'flex-end'}}
            source={require('../../../assets/img/layer.png')}
            resizeMode="cover"
          />
        </View>
        <View
          style={{
            backgroundColor: '#F0EFFF',
            height: 100,
            width: 100,
            borderRadius: 50,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Check />
        </View>
        <Text style={styles.modalTitleStyle}>Connection Successful</Text>
        <View style={{width: '70%'}}>
          <Text style={styles.subHeading}>
            {expert.name} has been added as your stylist and can now style you.
          </Text>
        </View>
        <TouchableOpacity
          style={styles.viewProfileBtn}
          onPress={onViewBtnPress}>
          <Text style={styles.viewProfileBtn__Text}>View Profile</Text>
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <DefModal
      isVisible={isSuccessModalVisible}
      onCancel={onCancel}
      body={<BodyComponent />}
      style={{borderRadius: 30, elevation: 2}}
    />
  );
};

export default SuccessModal;

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
  viewProfileBtn: {
    marginTop: 20,
    paddingVertical: 15,
    paddingHorizontal: 24,
    borderRadius: 16,
    backgroundColor: Colors.PRIMARY,
  },

  viewProfileBtn__Text: {
    color: '#FFF',
    fontSize: Typography._15,
    fontFamily: Fonts.ROMAN,
  },

  subHeading: {
    marginTop: 10,
    fontSize: Typography._12,
    lineHeight: 19,
    color: '#979797',
    textAlign: 'center',
    fontFamily: Fonts.LIGHT,
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
    shadowOffset: {width: 0, height: 0},
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
    shadowOffset: {width: 0, height: 0},
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
