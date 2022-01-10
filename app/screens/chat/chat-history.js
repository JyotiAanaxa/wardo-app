import React, {useState} from 'react';
import {ScrollView} from 'react-native';
import {useFocusEffect} from '@react-navigation/native';
import EStyleSheet from 'react-native-extended-stylesheet';

import {Loader} from '../../components/loader/loader';
import {HeaderBar} from '../../components/header/header';
import {SafeAreaContainer} from '../../utils/app-container';
import ChatHistoryItem from './components/chat-history-item';

import {SettingIcon} from '../../icons/setting';

import {dpToHeightPercent} from '../../utils/app-util';
import {Colors, Mixins, Typography} from '../../theme';
import {Heading} from '../../components/heading/heading';
import ProfilePic from '../../components/profile-pic';

const LoaderSpinner = () => (
  <View style={[Mixins.FLEX]}>
    <Loader size={40} color={Colors.PRIMARY} />
  </View>
);

const ChatHistory = ({navigation}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [chatHistory, setChatHistory] = useState([1]);

  const fetchChatHistory = () => {
    // setIsLoading(true);
    // DataService.______().subscribe(
    //   resp => {
    //     setChatHistory(resp);
    //     setIsLoading(false);
    //   },
    //   error => {
    //     setIsLoading(false);
    //   },
    // );
  };

  // useFocusEffect(
  //   React.useCallback(() => {
  //     fetchChatHistory();
  //   }, []),
  // );

  const onUserPress = user => navigation.navigate('ChatApp', {user});

  if (isLoading) {
    return <LoaderSpinner />;
  }

  return (
    <SafeAreaContainer
      style={{
        paddingTop: dpToHeightPercent(60), // 60 header height
        paddingBottom: dpToHeightPercent(75), // 75 bottom navigation height
        paddingHorizontal: dpToHeightPercent(35),
      }}>
      <HeaderBar
        containerStyle={styles.pageHeader}
        leftIcon={<ProfilePic currentUser />}
        leftClick={() => navigation.navigate('Profile')}
        rightBtnStyle={{padding: 0}}
        rightIcon={<SettingIcon color="#6a60da" />}
        rightClick={() => {
          navigation.navigate('Setting');
        }}
      />

      <Heading
        title="Chats"
        style={styles.pageHeading}
        containerStyle={{marginBottom: 0}}
      />

      <ScrollView showsVerticalScrollIndicator={false}>
        {chatHistory.map((user, index) => (
          <ChatHistoryItem
            key={index}
            style={EStyleSheet.child(
              styles,
              'historyItem',
              index,
              chatHistory.length,
            )}
            onPress={() => onUserPress(user)}
          />
        ))}
      </ScrollView>
    </SafeAreaContainer>
  );
};

export default ChatHistory;

const styles = EStyleSheet.create({
  $screenWidth: '100%',

  pageHeader: {
    width: '1 * $screenWidth',
    paddingHorizontal: dpToHeightPercent(25),
  },

  pageHeading: {
    fontSize: Typography._28,
    lineHeight: Typography._34,
    marginBottom: dpToHeightPercent(40),
  },

  historyItem: {
    marginBottom: dpToHeightPercent(40),
  },

  // 'historyItem:last-child': {
  //   marginBottom: 0,
  // }
});
