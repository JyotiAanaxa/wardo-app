import React, {useState} from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import {View, TextInput} from 'react-native';

import HyperLinkIcon from '../../icons/hyperlink-icon';

import {Colors, Typography, Fonts} from '../../theme';

const AddItemUrlInput = ({urlInput, setUrlInput}) => {
  const inputPlaceholderStyle = {
    color: '#B0B0B0',
    fontFamily: Fonts.ROMAN,
    fontSize: Typography._14,
    lineHeight: Typography._16,
  };
  const [inputStyle, setInputStyle] = useState(inputPlaceholderStyle);

  return (
    <View style={styles.inpContainer}>
      <HyperLinkIcon color="#b0b0b0" />

      <TextInput
        flex={1}
        placeholder="Enter URL.."
        style={[{padding: 0, marginLeft: 14}, inputStyle]}
        value={urlInput}
        onChangeText={txt => {
          setInputStyle(
            txt.length > 0 ? styles.inputValStyle : inputPlaceholderStyle,
          );

          setUrlInput(txt.trim());
        }}
      />
    </View>
  );
};

export default AddItemUrlInput;

const styles = EStyleSheet.create({
  inpContainer: {
    padding: 14,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#D0D0D0',
    flexDirection: 'row',
    alignItems: 'center',
  },

  inputValStyle: {
    color: Colors.LABEL,
    fontFamily: Fonts.ROMAN,
    fontSize: Typography._14,
    lineHeight: Typography._16,
  },
});
