import { Button, Icon, Text } from 'native-base';
import { View, StyleSheet, TouchableNativeFeedback, Platform } from 'react-native';
import React from 'react';
import { Typography, Colors } from '../../theme';

const IconButton = ({
  icon,
  iconComponent,
  iconText,
  onSubmit,
  buttonStyle = styles.btnStyle,
  iconStyle = styles.iconStyle,
  txtStyle,
  ...rest
}) => {
  return (
    <Button style={buttonStyle} onPress={onSubmit} transparent {...rest}>
      {iconComponent ? (
        iconComponent
      ) : (
          <Icon type="MaterialIcons" name={icon} style={iconStyle} />
        )}
      {iconText && (
        <Text style={txtStyle ? txtStyle : styles.defaultTxtStyle}>
          {iconText}
        </Text>
      )}
    </Button>
  );
};

const styles = StyleSheet.create({
  btnStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    width: 40,
  },
  iconStyle: {
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: Typography.HEADER_ICON,
    color: Colors.LABEL,
    width: '100%',
  },
  defaultTxtStyle: {
    fontSize: Typography.SMALL,
    marginTop:Platform.OS==='android' ? 0 : 4,
    color: Colors.LABEL,
    fontWeight: 'bold',
    textTransform: 'capitalize',
  },
});

export default IconButton;
