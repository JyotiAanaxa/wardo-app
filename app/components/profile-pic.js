import React, {useEffect, useState} from 'react';
import {Image, Text, View} from 'react-native';
import AuthService from '../services/auth';
import {Fonts, Typography} from '../theme';

import {
  getAvatarBgClrByGender,
  getFirstAndLastCharacterInString,
} from '../utils/app-util';

const defaultContainerStyle = {
  width: 42,
  height: 42,
  borderRadius: 12,
  overflow: 'hidden',
  justifyContent: 'center',
  alignItems: 'center',
};

const defaultTextStyle = {
  fontSize: Typography._12,
  fontFamily: Fonts.BOLD,
  letterSpacing: 4,
};

const ProfilePic = ({
  currentUser,
  url,
  name,
  gender,
  style = defaultContainerStyle,
  textStyle = defaultTextStyle,
}) => {
  const [user, setUser] = useState({});

  const getUser = async () => {
    const user = await AuthService.getUser();

    if (user) {
      const {name, gender, stylistInfo} = user;

      setUser({url: stylistInfo.profilePicUrl, name, gender});
    }
  };

  useEffect(() => {
    if (currentUser) {
      getUser();
    }

    setUser({url, name, gender});
  }, []);

  return (
    <View
      style={[
        style,
        {
          backgroundColor: user.gender
            ? getAvatarBgClrByGender(user.gender)
            : '#BCB2F1',
        },
      ]}>
      {user.url ? (
        <Image
          source={{uri: user.url || undefined}}
          resizeMode="cover"
          style={{flex: 1, width: '100%'}}
        />
      ) : (
        <Text style={[{color: '#fff'}, textStyle]}>
          {getFirstAndLastCharacterInString(user.name || '')}
        </Text>
      )}
    </View>
  );
};

export default ProfilePic;
