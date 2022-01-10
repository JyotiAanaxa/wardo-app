import React, {useState} from 'react';
import {useFocusEffect} from '@react-navigation/native';
import Clipboard from '@react-native-community/clipboard';
import {
  Image,
  ImageBackground,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {Fonts, Colors, Typography, Mixins} from '../../theme';
import {SafeAreaContainer} from '../../utils/app-container';
import {
  arrayToMatrix,
  DEFAULT_ERROR_CALLBACK,
  dpToHeightPercent,
  getAvatarBgClrByGender,
  getFirstAndLastCharacterInString,
  SHOW_INFO_NOTIFICATION,
} from '../../utils/app-util';
import AuthService from '../../services/auth';
import InviteClientModal from '../my-store/invite-client-modal';
import {Loader} from '../../components/loader/loader';
import DataService from '../../services/data-service';
import {RightArrowIcon} from '../../icons/right-arrow';
import {AnimatedCircularProgress} from 'react-native-circular-progress';
import {HeaderBar} from '../../components/header/header';
import {ProfileIcon} from '../../icons/profile-icon';
import InfinityIcon from '../../icons/infinity-icon';

import {SvgCss} from 'react-native-svg';
import ProfilePic from '../../components/profile-pic';

const RightArrow = ({props}) => {
  const xml = `
<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
  <g id="My_Client_Arrow" data-name="My Client Arrow" transform="translate(-288 -263)">
    <g id="Group_4391" data-name="Group 4391" transform="translate(161.801 459.199) rotate(-90)">
      <rect id="Rectangle_2952" data-name="Rectangle 2952" width="18" height="18" transform="translate(178.199 126.199)" fill="rgba(255,255,255,0)"/>
      <path id="icons8-down-button" d="M21.726,9v3.71a1.474,1.474,0,0,1-.552,1.15l-5.89,4.712a1.472,1.472,0,0,1-1.839,0L7.554,13.86A1.47,1.47,0,0,1,7,12.71V9l7.363,5.89Z" transform="translate(172.836 121.583)" fill="#1a1a1a"/>
    </g>
  </g>
</svg>
`;

  return <SvgCss xml={xml} {...props} />;
};

const Client = ({client = {}, onPress}) => (
  <TouchableOpacity
    onPress={() => {
      onPress(client);
    }}
    style={styles.clientWrapper}>
    <View
      style={[
        styles.clientProfilePic,
        {
          backgroundColor: getAvatarBgClrByGender(client.gender),
        },
      ]}>
      {client.profilePicUrl ? (
        <Image
          source={{
            uri: client.profilePicUrl || undefined,
          }}
          style={{
            width: '100%',
            aspectRatio: 1,
          }}
        />
      ) : (
        <Text
          style={[
            {
              fontSize: Typography._14,
              fontFamily: Fonts.BOLD,
              letterSpacing: 4,
            },
          ]}>
          {getFirstAndLastCharacterInString(client.name || '')}
        </Text>
      )}
    </View>
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: dpToHeightPercent(6),
      }}>
      <Text style={styles.clientName} numberOfLines={1}>
        {client.name}
      </Text>

      <RightArrowIcon color="#B0B0B0" width={20} style={{marginRight: -2}} />
    </View>
  </TouchableOpacity>
);

const LoaderSpinner = () => (
  <View style={[Mixins.FLEX]}>
    <Loader size={40} color={Colors.PRIMARY} />
  </View>
);

export const MyClient = ({navigation}) => {
  const [isLoading, setIsLoading] = useState(false);

  const [circleProgressBarSize, setCircleProgressBarSize] = useState({
    size: 72,
    width: 8,
  });

  // const [user, setUser] = useState({});
  const [stylistInfo, setStylistInfo] = useState({});

  const [clients, setClients] = useState([]);
  const [clientsCount, setClientsCount] = useState(0);

  const [isInviteModalOpen, setIsInviteModalOpen] = useState(false);
  const [inviteCode, setInviteCode] = useState('');

  const getLoggedInUserSlug = async () => {
    const user = await AuthService.getUser();

    if (user) {
      const {stylistInfo = {}} = user || {};

      // setUser(user);
      setStylistInfo(stylistInfo);
      setInviteCode(stylistInfo.inviteCode || '');
    }
  };

  const fetchClients = () => {
    setIsLoading(true);

    DataService.getMyClients().subscribe(
      async data => {
        setIsLoading(false);

        const {status, data: respData = {}} = data || {};

        if (status) {
          const {content = [], totalElements = 0} = respData || {};
          setClients(arrayToMatrix(content, 2));
          setClientsCount(totalElements);
        }
      },
      error => {
        DEFAULT_ERROR_CALLBACK(error);
        setIsLoading(false);
      },
    );
  };

  useFocusEffect(
    React.useCallback(() => {
      getLoggedInUserSlug();
      fetchClients();
    }, []),
  );

  const copyInviteCodeToClipboard = () => {
    Clipboard.setString(inviteCode);
    setIsInviteModalOpen(false);
    SHOW_INFO_NOTIFICATION('Copied to clipboard!');
  };

  const onClientPress = client => {
    navigation.navigate('ClientProfile', {client});
  };

  if (isLoading) {
    return <LoaderSpinner />;
  }

  return (
    <SafeAreaContainer
      style={{
        paddingTop: dpToHeightPercent(100),
        paddingBottom: dpToHeightPercent(75), // 75 bottom navigation height
        paddingHorizontal: dpToHeightPercent(35),
      }}>
      <HeaderBar
        containerStyle={styles.pageHeader}
        leftIcon={<ProfilePic currentUser />}
        leftClick={() => navigation.navigate('ExpertProfile')}
      />

      <ImageBackground
        source={require('../../../assets/img/my-client-card-bg.png')}
        resizeMode="contain"
        style={{
          marginHorizontal: '-4.24%', // to componsate for whitespace around actual image in .png

          aspectRatio: 1.41,
          paddingTop: '3.64%',
          paddingHorizontal: '10.5%',
          paddingBottom: '18.18%',
        }}>
        <View
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
          style={{
            width: '100%',
            marginBottom: dpToHeightPercent(40),
          }}
          onLayout={event => {
            var {width} = event.nativeEvent.layout;

            const progressBarSize = width * 0.27;
            const progressBarWidth = width * 0.03;

            setCircleProgressBarSize({
              size: progressBarSize,
              width: progressBarWidth,
            });
          }}>
          <View>
            <Text
              style={{
                color: '#fff',
                fontSize: Typography._22,
                lineHeight: Typography._26,
                fontFamily: Fonts.BOLD,
                marginBottom: dpToHeightPercent(7),
              }}>
              My Clients
            </Text>

            <Text
              style={{
                color: '#fff',
                fontSize: Typography._10,
                lineHeight: Typography._16,
                fontFamily: Fonts.ROMAN,
                maxWidth: 190,
              }}>
              {stylistInfo.onboardingPlan === 'FREE'
                ? clientsCount === 0
                  ? 'You currently do not have any clients'
                  : clientsCount > 0 && clientsCount < 3
                  ? `You currently have ${clientsCount} clients`
                  : clientsCount === 3
                  ? 'Upgrade to pro to add more clients!'
                  : ''
                : 'As a pro member, you can invite unlimited clients'}
            </Text>
          </View>

          <AnimatedCircularProgress
            size={circleProgressBarSize.size}
            width={circleProgressBarSize.width}
            fill={
              stylistInfo.onboardingPlan === 'FREE'
                ? clientsCount
                  ? clientsCount > 0 && clientsCount <= 3
                    ? clientsCount * 33.33
                    : 100
                  : 10
                : clientsCount
            }
            rotation={0}
            tintColor="#fff"
            lineCap="round"
            backgroundColor="#433690">
            {fill => (
              <Text
                style={{
                  color: '#fff',
                  fontSize: Typography._18,
                  lineHeight: Typography._22,
                  fontFamily: Fonts.HEAVY,
                }}>
                {stylistInfo.onboardingPlan === 'FREE' ? (
                  `${clientsCount}/3`
                ) : (
                  <InfinityIcon />
                )}
              </Text>
            )}
          </AnimatedCircularProgress>
        </View>

        <TouchableOpacity
          onPress={() =>
            clientsCount >= 3
              ? navigation.navigate('LetStarted', {fromExpert: true})
              : setIsInviteModalOpen(true)
          }
          style={styles.clientCardCTA}>
          <Text
            style={{
              color: Colors.LABEL,
              fontSize: Typography._13,
              lineHeight: Typography._16,
              fontFamily: Fonts.MEDIUM,
            }}>
            {stylistInfo.onboardingPlan === 'FREE' && clientsCount >= 3
              ? 'Upgrade To Pro'
              : 'Invite Clients'}
          </Text>

          <RightArrow />
        </TouchableOpacity>
      </ImageBackground>

      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{
          marginTop: dpToHeightPercent(20),
          marginHorizontal: dpToHeightPercent(-35),
        }}>
        <View style={styles.itemGrid}>
          {(clients || []).map((row, index) => {
            return (
              <View
                key={index}
                style={EStyleSheet.child(
                  styles,
                  'itemRow',
                  index,
                  clients.length,
                )}>
                {(row || []).map((client, _index2) => (
                  <Client
                    key={_index2}
                    client={client}
                    onPress={onClientPress}
                  />
                ))}
              </View>
            );
          })}
        </View>
      </ScrollView>

      <InviteClientModal
        isVisible={isInviteModalOpen}
        onSwipeHide={() => setIsInviteModalOpen(false)}
        inviteCode={inviteCode}
        onCopy={copyInviteCodeToClipboard}
      />
    </SafeAreaContainer>
  );
};

export default MyClient;

const styles = EStyleSheet.create({
  $screenWidth: '100%',

  pageHeader: {
    width: '1 * $screenWidth',
    paddingHorizontal: dpToHeightPercent(35),
  },

  pageHeading: {
    fontSize: Typography._28,
    lineHeight: Typography._34,
    marginBottom: dpToHeightPercent(20),
  },

  clientCardCTA: {
    marginTop: 'auto',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: '5.6%',
    paddingLeft: '7.9%',
    paddingRight: '6.58%',
    backgroundColor: '#FFF',
    borderRadius: 18,
    elevation: 2,
  },

  itemGrid: {
    paddingBottom: dpToHeightPercent(20),
  },

  itemRow: {
    paddingVertical: dpToHeightPercent(22),
    paddingHorizontal: dpToHeightPercent(55),
    borderBottomWidth: 1,
    borderBottomColor: '#F2F2F2',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  'itemRow:first-child': {
    paddingTop: 0,
  },

  clientWrapper: {
    alignItems: 'center',
  },

  clientProfilePic: {
    width: '0.21 * $screenWidth',
    aspectRatio: 1,
    borderRadius: 18,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: dpToHeightPercent(10),
  },

  clientName: {
    maxWidth: 90,
    color: Colors.LABEL,
    fontSize: Typography._12,
    lineHeight: Typography._14,
    fontFamily: Fonts.HEAVY,
  },
});
