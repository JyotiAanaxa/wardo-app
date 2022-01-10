import React, { useState } from 'react';
import { Text, View, TouchableOpacity, Image, Platform} from 'react-native';
import { SafeAreaContainer } from '../../utils/app-container';
import { HeaderBar } from '../../components/header/header';
import { Mixins, Colors } from '../../theme';
import { styles } from './style';
import AuthService from '../../services/auth';
import { getFirstName, getTimeOfDay, DEFAULT_ERROR_CALLBACK } from '../../utils/app-util';
import { OutfitGreetCard } from '../../icons/outfit-greet-card';
import { OutfitPlusBtnIcon } from '../../icons/outfit-plus-icon';
import { LookBookIcon } from '../../icons/lookbook-icon';
import { OutfitShoppingIcon } from '../../icons/outfit-shopping-icon';
import { OutfitChngBtnIcon } from '../../icons/outfit-chng-btn-icon';
import { TShirtPlusIcon } from '../../icons/t-shirt-plus-icon';
import { ProfileIcon } from '../../icons/profile-icon';
import OutfitModal from './modal';
import { heightPercentageToDP } from 'react-native-responsive-screen';
import { Loader } from '../../components/loader/loader';
import DataService from '../../services/data-service';
import { useFocusEffect } from '@react-navigation/native';
import ProfilePic from '../../components/profile-pic';

const GreetCard = ({ cardColor, greetMsg, onModelOpen }) => {
  return (
    <View style={[styles.greetCard, Mixins.SHADOW_STYLE]}>
      <OutfitGreetCard bgColor={cardColor} style={styles.cardBg} />
      <Text style={styles.greetText}>{greetMsg}</Text>
      <Text style={styles.greetSubText}>Plan today's outfit</Text>
      <TouchableOpacity style={styles.cardPlusBtn} onPress={onModelOpen}>
        <OutfitPlusBtnIcon color={cardColor} />
      </TouchableOpacity>
    </View>
  );
};

export const Outfits = ({ navigation }) => {
  const [cardProps, setCardProps] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [todayLookImageUrl, setTodayLookImageUrl] = useState(null);

  const fetchTodayLook = () => {
    setIsLoading(true);
    DataService.getTodayLook().subscribe(
      async data => {
        const resp = await data;
        setTodayLookImageUrl(resp && resp.imageUrl);
        setIsLoading(false);
      },
      error => {
        // commenting this line because 'Entity not found' message is not descriptive at user point of view'
        // DEFAULT_ERROR_CALLBACK(error);
        setIsLoading(false);
      },
    );
  };

  const getUser = async () => {
    const user = await AuthService.getUser();

    const firstName = getFirstName(user.name);
    const timeOfDay = getTimeOfDay();
    const greetMsg = `${timeOfDay.greet}, ${firstName}`;

    let obj = { cardColor: '', greetMsg };

    switch (timeOfDay.time) {
      case 'morning':
        obj.cardColor = '#FFD067';
        break;
      case 'afternoon':
        obj.cardColor = '#90C8FC';
        break;
      default:
        obj.cardColor = '#6A60DA';
        break;
    }

    setCardProps(obj);
  };

  /* on component mount or is current screen */
  useFocusEffect(
    React.useCallback(() => {
      getUser();
      fetchTodayLook();
    }, []),
  );

  const onModelOpen = () => setIsVisible(true);
  const onSwipeHide = () => setIsVisible(false);

  const navigate = (route, options) => {
    onSwipeHide();
    navigation.navigate(route, options);
  };

  /* methods for lookbook & shopping icon */
  const onLookBookIconPress = () =>
    navigate('LookBook', { saveAsTodaysLook: false });
  const onShoppingListIconPress = () => navigate('ShoppingList');

  /* methods for modal options */
  const onCreateNewLook = () =>
    navigate('CreateLook', {
      screen: 'NewLook',
      params: { saveAsTodaysLook: true },
    });
  const addFromLookBook = () => navigate('LookBook', { saveAsTodaysLook: true });

  return (
    <SafeAreaContainer style={{ paddingBottom: Platform.OS==='android'? heightPercentageToDP('9%'):heightPercentageToDP('20%')}}>
      <HeaderBar
        leftIcon={
          <View style={{ paddingLeft: 6 }}>
            <ProfilePic currentUser />
          </View>
        }
        leftClick={() => {
          navigation.navigate('Profile');
        }}
        rightIcon={<TShirtPlusIcon />}
        rightClick={() => {
          navigate('CreateLook', {
            screen: 'NewLook',
            params: { saveAsTodaysLook: false },
          });
        }}
        centerIcon={
          <Image
            style={{ marginTop: 16, width: 100 }}
            resizeMode="contain"
            source={require('../../../assets/img/logo.png')}
          />
        }
      />

      <View style={[Mixins.FLEX, { padding: 20, marginTop: 20 }]}>
        {!isLoading ? (
          todayLookImageUrl ? (
            <Image
              source={{ uri: todayLookImageUrl }}
              style={{
                width: '100%',
                height: '100%',
              }}
              resizeMode="contain"
            />
          ) : (
              <GreetCard {...{ ...cardProps, onModelOpen }} />
            )
        ) : (
            <Loader color={Colors.PRIMARY} size={30} />
          )}
      </View>

      <View style={styles.outfitFooterContainer}>
        {/* lookbook icon */}
        <TouchableOpacity
          style={styles.footerIconBtn}
          onPress={onLookBookIconPress}>
          <LookBookIcon />
          <Text style={[styles.footerBtn, styles.footerIconBtn__text]}>
            Lookbooks
          </Text>
        </TouchableOpacity>
        {todayLookImageUrl && <TouchableOpacity style={styles.chngOutfitBtn} onPress={onModelOpen}>
          <OutfitChngBtnIcon />
          <Text style={[styles.footerBtn, { marginLeft: 6 }]}>Change Outfit</Text>
        </TouchableOpacity>}
        <TouchableOpacity
          style={styles.footerIconBtn}
          onPress={onShoppingListIconPress}>
          <OutfitShoppingIcon />
          <Text style={[styles.footerBtn, styles.footerIconBtn__text]}>
            Shopping List
          </Text>
        </TouchableOpacity>
      </View>

      {/* Modal */}
      <OutfitModal
        {...{ isVisible, onSwipeHide, onCreateNewLook, addFromLookBook }}
      />
    </SafeAreaContainer>
  );
};

export default Outfits;
