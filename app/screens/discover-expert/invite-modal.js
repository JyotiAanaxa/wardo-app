import React, {useEffect, useState} from 'react';
import {View, Text, TextInput} from 'react-native';
import {BottomHalfModal} from '../../components/modals/bottom-half-modal/bottomhalf-modal';
import FormButton from '../../components/buttons/form-button';
import ForwardArrow from '../../icons/forwardArrow';
import DataService from '../../services/data-service';
import OTPInputView from '@twotalltotems/react-native-otp-input';

import {
  DEFAULT_ERROR_CALLBACK,
  dpToHeightPercent,
  getFirstAndLastCharacterInString,
  heightIntoDP,
  SHOW_INFO_NOTIFICATION,
} from '../../utils/app-util';
import {Colors, Fonts, Mixins, Typography} from '../../theme';

import {styles} from './style';
import AuthService from '../../services/auth';
import HandshakeIcon from '../../icons/handshake';
import ThemeButton from '../../components/buttons/theme-button';
import {Loader} from '../../components/loader/loader';

export const InviteModal = ({isVisible, onSwipeHide, onSuccess}) => {
  const [showInviteCodeScreen, setShowInviteCodeScreen] = useState(true);
  const [user, setUser] = useState({});
  const [expert, setExpert] = useState({});
  const [errorMessage, setErrorMessage] = useState(null);
  const [showError, setShowError] = useState(false);

  const getUser = async () => {
    const user = await AuthService.getUser();
    setUser(user);
  };

  useEffect(() => {
    getUser();
  }, []);

  const InviteCode = () => {
    const inputPlaceholderStyle = {
      color: '#B0B0B0',
      fontFamily: Fonts.ROMAN,
      fontSize: Typography._14,
      lineHeight: Typography._16,
    };

    const otpStyle = {
      otpContainerStyle: {
        marginTop: 40,
        width: '100%',
      },
      inputFieldStyle: {
        width: 50,
        height: 50,
        marginRight: 8,
        borderRadius: 5,
        backgroundColor: '#F2F2F2',
        color: Colors.BLACK,
        fontFamily: Fonts.HEAVY,
        fontSize: Typography.INPUT_TEXT,
        fontWeight: 'normal',
      },
      inputHighlightStyle: {
        width: 50,
        height: 50,
        marginRight: 8,
        backgroundColor: '#F2F2F2',
        borderRadius: 5,
      },
      txtStyle: {
        fontSize: Typography.INPUT_TEXT,
        fontFamily: Fonts.HEAVY,
        alignSelf: 'center',
        color: Colors.LABEL,
      },
    };
    const [inputStyle, setInputStyle] = useState(inputPlaceholderStyle);
    const [value, setInputValue] = useState();
    const [isLoading, setIsLoading] = useState(false);

    const inputValStyle = {
      color: Colors.LABEL,
      fontFamily: Fonts.ROMAN,
      fontSize: Typography._14,
      lineHeight: Typography._16,
    };

    const showErrorBlock = error => {
      setErrorMessage(error);
      setShowError(true);
      setTimeout(() => {
        setShowError(false);
      }, 5000);
    };

    const connect = () => {
      if (value) {
        setIsLoading(true);

        DataService.findClientByInviteCode(value).subscribe(
          data => {
            setIsLoading(false);
            if (data.status) {
              setExpert(data.data);
              setShowInviteCodeScreen(false);
            }
          },
          error => {
            if (error.response) {
              showErrorBlock(error.response.data.message);
            }
            setIsLoading(false);
          },
        );
      } else {
        showErrorBlock('Enter invite code.');
      }
    };

    return (
      // <View style={styles.modalContainer}>
      //   <View style={styles.lineContainer}>
      //     <View style={styles.line} />
      //   </View>
      <View
        style={[
          styles.modalHeading,
          {
            borderBottomWidth: 0,
          },
        ]}>
        <Text
          style={[
            styles.heading,
            {fontSize: Typography._22, lineHeight: Typography._26},
          ]}>
          Got an Invite Code?
        </Text>
        <Text
          style={[
            styles.subHeading,
            {
              marginTop: 10,
              fontFamily: Fonts.ROMAN,
              lineHeight: Typography._14,
            },
          ]}>
          Join by entering your code below
        </Text>
        <View
          style={{
            height: heightIntoDP(50),
            paddingHorizontal: 10,
            margin: 20,
            alignSelf: 'center',
            marginBottom: 30,
          }}>
          <OTPInputView
            style={otpStyle.otpContainerStyle}
            placeholder={'Enter Invite Code'}
            pinCount={6}
            autoFocusOnLoad={false}
            codeInputFieldStyle={otpStyle.inputFieldStyle}
            codeInputHighlightStyle={otpStyle.inputHighlightStyle}
            keyboardType={'default'}
            onCodeFilled={code => {
              console.log('code', code);
              // setInputStyle(
              //   code.length > 0 ? inputValStyle : inputPlaceholderStyle,
              // );
              setInputValue(code.trim());
            }}
          />
          {/* <TextInput
            flex={1}
            placeholder="Enter Invite Code"
            style={[{ padding: 0 }, inputStyle]}
            value={value}
            onChangeText={txt => {
              setInputStyle(
                txt.length > 0 ? inputValStyle : inputPlaceholderStyle,
              );

              setInputValue(txt.trim());
            }}
          /> */}
        </View>
        <View style={styles.btnContainer}>
          <FormButton
            icon={<ForwardArrow />}
            onSubmit={connect}
            isLoading={isLoading}
            disabled={isLoading}
          />
        </View>

        {showError && (
          <Text
            style={{
              marginTop: 30,
              color: Colors.DANGER,
              fontFamily: Fonts.ROMAN,
              fontSize: Typography._14,
              lineHeight: Typography._18,
            }}>
            {errorMessage}
          </Text>
        )}
      </View>
      // </View>
    );
  };

  const InviteSuccess = () => {
    const [isLoading, setIsLoading] = useState(false);

    const connect = () => {
      setIsLoading(true);

      DataService.connectWithClient(expert.inviteCode).subscribe(
        data => {
          setIsLoading(false);

          if (data.status) {
            onSuccess(expert);
            SHOW_INFO_NOTIFICATION('Expert connected!');
          }
        },
        error => {
          DEFAULT_ERROR_CALLBACK(error);
          setIsLoading(false);
        },
      );
    };

    const NameInitalCard = ({initals}) => (
      <View
        style={{
          width: 100,
          aspectRatio: 1,
          borderRadius: 20,
          borderWidth: 1,
          borderColor: '#F1F0EE',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#fff',
        }}>
        <Text
          style={{
            textTransform: 'uppercase',
            color: '#EF709D',
            fontSize: Typography._24,
            fontFamily: Fonts.HEAVY,
            letterSpacing: 1,
          }}>
          {initals}
        </Text>
      </View>
    );

    const myInitials = user.name && getFirstAndLastCharacterInString(user.name);

    const expertInitials =
      expert.name && getFirstAndLastCharacterInString(expert.name);

    return (
      <View
        style={{
          marginTop: 30,
          paddingHorizontal: dpToHeightPercent(35),
        }}>
        <View
          flexDirection="row"
          justifyContent="center"
          alignItems="center"
          style={{marginBottom: dpToHeightPercent(40)}}>
          <NameInitalCard initals={myInitials} />
          <HandshakeIcon style={{marginHorizontal: -4, zIndex: 1}} />
          <NameInitalCard initals={expertInitials} />
        </View>

        <Text
          style={{
            textAlign: 'center',
            color: Colors.PRIMARY,
            fontSize: Typography._20,
            lineHeight: Typography._28,
            fontFamily: Fonts.HEAVY,
            paddingHorizontal: dpToHeightPercent(20),
            marginBottom: dpToHeightPercent(10),
          }}>
          Would you like to connect with{' '}
          <Text
            style={{
              fontWeight: 'normal',
              fontFamily: Fonts.BOLD,
            }}>
            {expert.name}
          </Text>?
        </Text>

        <Text
          style={{
            color: '#979797',
            textAlign: 'center',
            fontSize: Typography._14,
            lineHeight: Typography._18,
            fontFamily: Fonts.ROMAN,
            paddingHorizontal: dpToHeightPercent(20),
            marginBottom: dpToHeightPercent(33),
          }}>
          Your expert will be able to access your fashion, beauty information
          and make edits to your account
        </Text>

        <ThemeButton
          buttonStyle={{
            alignSelf: 'center',
            width: '100%',
            height: dpToHeightPercent(60),
            maxWidth: dpToHeightPercent(300),
            borderRadius: 18,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: Colors.PRIMARY,
          }}
          disabled={isLoading}
          label={isLoading ? <Loader color="#fff" /> : 'Confirm'}
          labelStyle={{
            color: '#fff',
            fontSize: Typography._16,
            lineHeight: Typography._20,
            fontFamily: Fonts.MEDIUM,
          }}
          onSubmit={connect}
        />

        <Text
          onPress={() => setShowInviteCodeScreen(true)}
          style={{
            color: Colors.PRIMARY,
            textAlign: 'center',
            fontSize: Typography._14,
            lineHeight: Typography._20,
            fontFamily: Fonts.MEDIUM,
            marginTop: dpToHeightPercent(20),
          }}>
          Not my stylist
        </Text>
      </View>
    );
  };

  const BodyComponent = () => {
    return (
      <View style={styles.modalContainer}>
        <View style={styles.lineContainer}>
          <View style={styles.line} />
        </View>
        {showInviteCodeScreen ? <InviteCode /> : <InviteSuccess />}
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

export default InviteModal;
