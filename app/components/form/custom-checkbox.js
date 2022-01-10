import React, {useState} from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import {TouchableHighlight, View} from 'react-native';
import {Colors} from '../../theme';
import { CheckboxIcon } from '../../icons/checkbox';

const CustomCheckbox = ({
  isChecked = false,
  size = 20,
  bgColor = Colors.PRIMARY,
  onPress,
  style
}) => {
  const [checked, setChecked] = useState(isChecked);

  const toggleChecked = () => {
    setChecked(prev => !prev);
    onPress && onPress();
  };

  return (
    <TouchableHighlight
      onPress={toggleChecked}
      underlayColor="transparent"
      style={style}
    >
      <View
        style={{

          width: size,
          height: size,
          backgroundColor: bgColor,
          borderRadius: 3
        }}>
        {checked ? (
          <View style={styles.selectedUI}>
            {/* <Image
              source={require("./assets/tick.png")}
              style={styles.checkboxTickImg}
            /> */}
            <CheckboxIcon width="100%" height="100%"/>
          </View>
        ) : (
          <View style={styles.uncheckedCheckbox} />
        )}
      </View>
    </TouchableHighlight>
  );
};

export default CustomCheckbox;

const styles = EStyleSheet.create({
  selectedUI: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  checkboxTickImg: {
    width: '85%',
    height: '85%',
    tintColor: '#ffffff',
    resizeMode: 'contain',
  },

  uncheckedCheckbox: {
    flex: 1,
    margin: 2,
    borderRadius: 2,
    backgroundColor: '#ffffff',
  },
});
