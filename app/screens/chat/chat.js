import React, {useCallback, useEffect, useState} from 'react';
import {Text} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {Bubble, GiftedChat, Send, Time} from 'react-native-gifted-chat';
import {isSameUser} from 'react-native-gifted-chat/lib/utils';

import {HeaderBar} from '../../components/header/header';
import {SafeAreaContainer} from '../../utils/app-container';
import SendIcon from '../../icons/send-icon';

import {dpToHeightPercent} from '../../utils/app-util';

import {Colors, Fonts, Typography} from '../../theme';

import MyStylistBadge from './components/my-stylist-badge';

export const Chat = ({navigation, route}) => {
  const {user} = route.params || {};
  const [messages, setMessages] = useState([]);

  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages =>
      GiftedChat.append(previousMessages, messages),
    );
  }, []);

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Hello developer',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
      {
        _id: 11,
        text: 'Hello developer',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
      {
        _id: 12,
        text: 'Hello developer',
        createdAt: new Date(),
        user: {
          _id: 1,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
      {
        _id: 13,
        text: 'Hello developer',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
    ]);
  }, []);

  const renderTime = props => {
    if (props.currentMessage.createdAt) {
      return (
        <Time
          {...props}
          containerStyle={{
            left: {
              marginLeft: 'auto'
            }
          }}
          timeTextStyle={{
            left: {color: '#979797', ...styles.time},
            right: {...styles.time},
          }}
        />
      );
    }
    return null;
  };

  const renderBubble = props => {
    console.log('props', props);

    const marginBottom = isSameUser(props.currentMessage, props.nextMessage)
      ? dpToHeightPercent(10)
      : dpToHeightPercent(26);

    return (
      <Bubble
        {...props}
        containerStyle={{
          left: {marginBottom},
          right: {marginBottom},
        }}
        wrapperStyle={{
          left: {
            borderRadius: 16,
            backgroundColor: '#F2F2F2',
          },
          right: {
            borderRadius: 16,
            backgroundColor: Colors.PRIMARY,
          },
        }}
        containerToPreviousStyle={{
          left: {borderTopLeftRadius: 0},
          right: {borderTopRightRadius: 0},
        }}
        containerToNextStyle={{
          left: {borderBottomLeftRadius: 0},
          right: {borderBottomRightRadius: 0},
        }}
        textStyle={{
          left: {
            color: Colors.LABEL,
            fontFamily: Fonts.LIGHT,
            ...styles.bubbleTextStyle,
          },
          right: {
            color: '#FFF',
            fontFamily: Fonts.MEDIUM,
            ...styles.bubbleTextStyle,
          },
        }}
      />
    );
  };

  const renderSend = props => (
    <Send {...props} containerStyle={styles.sendContainer}>
      <SendIcon width={22} height={22} />
    </Send>
  );

  return (
    <SafeAreaContainer
      style={{
        paddingTop: dpToHeightPercent(60), // 60 header height
        paddingBottom: dpToHeightPercent(12),
        paddingHorizontal: dpToHeightPercent(15),
      }}>
      <HeaderBar
        containerStyle={styles.pageHeader}
        backButton
        leftClick={() => navigation.goBack()}
        rightBtnStyle={{padding: 0}}
        rightIcon={<MyStylistBadge />}
      />

      <GiftedChat
        messages={messages}
        onSend={messages => onSend(messages)}
        user={{
          _id: 1,
        }}
        scrollToBottomOffset={300}
        renderAvatar={null}
        containerStyle={styles.composerContainerStyle}
        placeholder="Write a message..."
        textInputStyle={styles.textInputStyle}
        renderBubble={renderBubble}
        renderTime={renderTime}
        alwaysShowSend
        renderSend={renderSend}
      />
    </SafeAreaContainer>
  );
};

export default Chat;

const styles = EStyleSheet.create({
  $screenWidth: '100%',

  pageHeader: {
    width: '1 * $screenWidth',
    paddingHorizontal: dpToHeightPercent(15),
  },

  composerContainerStyle: {
    borderTopWidth: 0,
    borderRadius: 18,
    padding: 4,
    backgroundColor: '#F2F2F2',
  },

  textInputStyle: {
    fontFamily: Fonts.ROMAN,
    fontSize: Typography._14,
    lineHeight: Typography._14,
  },

  sendContainer: {
    width: '12.75%',
    minWidth: 44,
    aspectRatio: 1,
    borderRadius: 16,
    backgroundColor: Colors.PRIMARY,
    justifyContent: 'center',
    alignItems: 'center',
  },

  bubbleTextStyle: {
    fontSize: Typography._14,
    lineHeight: Typography._20,
    marginTop: dpToHeightPercent(12),
    marginLeft: dpToHeightPercent(14),
    marginRight: dpToHeightPercent(30),
  },

  time: {
    fontSize: Typography._10,
    lineHeight: Typography._20,
    fontFamily: Fonts.ROMAN,
  },
});
