import React from 'react';
import { Toast } from 'native-base';
import {
  Keyboard,
  StyleSheet,
  Dimensions,
  PermissionsAndroid,
} from 'react-native';
import { Colors, Typography, Fonts } from '../theme';
import moment from 'moment';
import { t } from './i18n';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';

const EXPIRY_DATE = 90;
const REFERENCE_DEVICE_HEIGHT = 812;
const REFERENCE_DEVICE_WIDTH = 375;

export const DEFAULT_ERROR_CALLBACK = error => {
  Toast.show({
    text: error.response ? error.response.data.message : '',
    duration: 8000,
    position: 'bottom',
    textStyle: styles.textStyle,
    buttonText: 'Close',
    buttonTextStyle: {
      color: Colors.PRIMARY,
      fontFamily: Fonts.BOLD,
    },
  });
};

export const DEFAULT_MSG_CALLBACK = message => {
  Toast.show({
    text: message,
    duration: 8000,
    position: 'bottom',
    textStyle: styles.textStyle,
    buttonText: 'Close',
    buttonTextStyle: {
      color: Colors.PRIMARY,
      fontFamily: Fonts.BOLD,
    },
  });
};

export const requestStoragePermission = async () => {
  let storagePermission = false;
  if (Platform.OS === 'android') {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        {
          title: 'Storage Permission',
          message:
            'App needs access to your Storage to access and store photos.',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        storagePermission = true;
      } else {
        storagePermission = false;
      }
    } catch (err) {
      storagePermission = false;
    }
  } else if (Platform.OS === 'ios') {
    storagePermission = true;
  }

  return storagePermission;
};

export const SHOW_INFO_NOTIFICATION = message => {
  Toast.show({
    text: t(message),
    duration: 8000,
    position: 'bottom',
    textStyle: styles.textStyle,
    buttonText: 'Close',
    buttonTextStyle: {
      color: Colors.PRIMARY,
      fontFamily: Fonts.BOLD,
    },
  });
};

export const BACK_BUTTON_NOTIFICATION = () => {
  Toast.show({
    text: '' + t('back.warn.message'),
    duration: 3000,
    position: 'bottom',
    textStyle: styles.textStyle,
    use
  });
};

export const transformToCapitalize = text => {
  let splitStr = text.toLowerCase().split(' ');
  for (let i = 0; i < splitStr.length; i++) {
    // You do not need to check if i is larger than splitStr length, as your for does that for you
    // Assign it back to the array
    splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
  }
  // Directly return the joined string
  return splitStr.join(' ');
}

export const heightIntoDP = (value) => {
  let calc = value / Dimensions.get('window').height * 100;
  return heightPercentageToDP(calc);
}

export const widthIntoDP = (value) => {
  let calc = value / Dimensions.get('window').width * 100;
  return widthPercentageToDP(calc);
}

export const dpToHeightPercent = (dp) => {
  const percent = dp / 812 * 100     // 812 iphone 10 height
  return heightPercentageToDP(percent);
}

export const convertIntoFlatListObj = (list) => {
  let transformObjArr = [];
  if (list) {
    transformObjArr = list.map((item, index) => {
      let obj = {
        label: item.value || item,
        value: item.key || item,
        checked: false,
        index: index
      };
      return obj;
    });
  }
  return transformObjArr;
}

export const convertFromValuesToFlatListObj = (list, selectedValueArr) => {
  let transformObjArr = [];
  if (list) {
    transformObjArr = list.map((item, index) => {
      let obj = {
        label: item.label,
        value: item.value,
        checked: selectedValueArr.includes(item.value),
        index: index,
        hide: false
      };
      return obj;
    });
  }
  return transformObjArr;
}

export const DISMISS_KEYBOARD = () => {
  Keyboard.dismiss();
};

export const getFormattedDate = date => {
  return moment(date).format('DD/MM/YYYY');
};

export const getMonthYearDate = date => {
  return moment(date).format('MMMM,YYYY');
};

export const currencyFormatter = value => {
  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export const getFormattedTime = date => {
  return moment(date).format('hh:mm A');
};

export const getDateDifference = date => {
  let a = moment(date);
  let b = moment();
  return a.diff(b, 'days') + 1;
};

export const getSubscriptionData = data => {
  return (data / EXPIRY_DATE) * 100;
};

export const filterObjArr = (list, property) => {
  return list.sort((a, b) =>
    a[property] > b[property] ? 1 : b[property] > a[property] ? -1 : 0,
  );
};

export const filterObjArrWithLetter = (list, letter) => {
  return list.filter(item => item.name.charAt(0) === letter);
};

export const filterPropertyNotEmpty = (list, prop) => {
  return list.filter(item => item[prop] && item[prop].length);
};

export const firstCharacter = name => {
  let val = name.split(' ');
  return val[0].charAt(0);
};

export const toTitleCase = (val) => {
  let arr = val.toLowerCase().split(" ");
  arr = arr.map(item => item[0].toUpperCase() + item.slice(1));
  return arr.join(" ");
}

export const getFirstName = name => {
  if (name) {
    let [firstName] = name.split(' ');
    return firstName;
  }
  return '';
};

export const getFirstAndLastCharacterInString = name => {
  const [firstName = '', lastName = ''] = name.split(' ');

  const [F = ''] = firstName;
  const [L = ''] = lastName;

  return `${F}${L}`.toUpperCase();
};

export const LastCharacter = name => {
  let val = name.split(' ');
  return val.length > 1 ? val[val.length - 1].charAt(0) : '';
};

export const getCategoryHierarchy = (jsonObj, index, category) => {
  let transformArrObj = [];
  let categoriesArr = Object.keys(jsonObj);
  let childCategoriesArr = Object.values(jsonObj);
  for (let i = index; i < categoriesArr.length; i++) {
    let itemInfo = {
      title: categoriesArr[i],
      index: i,
      data: [],
    };
    for (let j = 0; j < childCategoriesArr[i].length; j++) {
      let itemSubInfo = {
        id: j.toString(),
        index: j,
        title: childCategoriesArr[i][j].name,
        iconUrl: childCategoriesArr[i][j].iconUrl,
        checked: category === childCategoriesArr[i][j].name ? true : false,
      };
      itemInfo.data.push(itemSubInfo);
    }
    transformArrObj.push(itemInfo);
  }

  return transformArrObj;
};

export const searchInObjArr = (arr, searchKey) => {
  return arr.filter(item => `${item.name.toString().toLowerCase()}` === `${searchKey.toString().toLowerCase()}`);
}

export const getDynamicDimension = (width, height) => {
  const screenHeight = Math.round(Dimensions.get('window').height);
  const screenWidth = Math.round(Dimensions.get('window').width);
  const aspectRatio = width / height;
  const newHeight = screenHeight / aspectRatio;
  const newWidth = screenWidth / aspectRatio;
  return { newHeight, newWidth };
};

export const getTimeOfDay = (currentTime = new Date()) => {
  const currentHour = currentTime.getHours();
  const splitAfternoon = 12; // 24hr time to split the afternoon
  const splitEvening = 16; // 24hr time to split the evening

  if (currentHour >= splitAfternoon && currentHour < splitEvening) {
    // Between 12 PM and 4PM
    return { time: 'afternoon', greet: 'Good Afternoon' };
  } else if (currentHour >= splitEvening) {
    // Between 4PM and Midnight
    return { time: 'evening', greet: 'Good Evening' };
  }
  // Between dawn and noon
  return { time: 'morning', greet: 'Good Morning' };
};

export const arrayToMatrix = (arr, columns) =>
  arr.reduce(
    (rows, key, index) =>
      (index % columns == 0
        ? rows.push([key])
        : rows[rows.length - 1].push(key)) && rows,
    [],
  );

export const validateComponent = (component, extraProps = {}) => {
  if (React.isValidElement(component)) {
    return React.cloneElement(component, extraProps);
  }
};

export const pluralizer = count => count !== 1 ? 's' : '';

export const getAvatarBgClrByGender = gender =>
  gender === 'MALE' ? '#79BEFF' : gender === 'FEMALE' ? '#EF709D' : '#BCB2F1';

const styles = StyleSheet.create({
  textStyle: {
    fontSize: Typography.SMALL,
    fontFamily: Fonts.MEDIUM,
    color: Colors.WHITE,
  },
});
