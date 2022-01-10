import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { BottomHalfModal } from '../../components/modals/bottom-half-modal/bottomhalf-modal';
import { TShirtIcon } from '../../icons/t-shirt';
import { BookIcon } from '../../icons/book';
import { styles } from './style';
import { widthPercentageToDP } from 'react-native-responsive-screen';

export const OutfitModal = ({
  isVisible,
  onSwipeHide,
  onCreateNewLook,
  addFromLookBook,
}) => {
  const options = [
    {
      label: 'Create New Look',
      icon: <TShirtIcon />,
      onPress: onCreateNewLook,
    },
    {
      label: 'Add From Lookbooks',
      icon: <BookIcon />,
      onPress: addFromLookBook,
      style: {
        marginLeft: -2.5,
      },
    },
  ];

  const BodyComponent = () => {
    return (
      <View style={styles.modalContainer}>
        <View style={styles.lineContainer}>
          <View style={styles.line}></View>
        </View>
        <View style={styles.modalHeading}>
          <Text style={styles.heading}>Today's Look</Text>
          <Text style={[styles.subHeading, { marginTop: 8 }]}>Select an option to assign today's look</Text>
        </View>

        <View style={styles.optionContainer}>
          {options.map((op, index) => (
            <TouchableOpacity onPress={op.onPress} key={index}>
              <View
                style={[
                  EStyleSheet.child(styles, 'listItem', index, options.length),
                  op.style,
                ]}>
                {op.icon}
                <Text style={[styles.optionLabel, index == 0 && { marginLeft: widthPercentageToDP('3.7%') }]}>{op.label}</Text>
              </View>
            </TouchableOpacity>
          ))}
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

export default OutfitModal;
