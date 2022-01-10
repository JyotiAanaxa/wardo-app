import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import {
  SafeAreaView, Text,
  TouchableOpacity, View
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import AppIntroSlider from 'react-native-app-intro-slider';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { widthPercentageToDP } from 'react-native-responsive-screen';
import Image from 'react-native-scalable-image';
import Icon from 'react-native-vector-icons/MaterialIcons';
import AuthService from '../../services/auth';
import IntroScreenService from '../../services/intro-service';
import { Colors } from '../../theme';
import { SafeAreaContainer } from '../../utils/app-container';
import { DEFAULT_ERROR_CALLBACK } from '../../utils/app-util';
import styles from './style';

const IntroScreen = () => {
  const navigation = useNavigation();
  const [data, setData] = useState([]);
  const [showDoneBtn, setShowDoneBtn] = useState(false);
  const [doneBtnAnimationClass, setDoneBtnAnimationClass] = useState('');

  const fetchIntroScreens = () => {
    IntroScreenService.fetchIntroScreens().subscribe(
      data => {
        if (data) {
          setData(data);
        }
      },
      error => {
        if (error.response) {
          DEFAULT_ERROR_CALLBACK(error.response);
        }
      },
    );
  };

  const SkipButton = ({ onClick, isLastScreen }) => {
    return (
      !isLastScreen ? <TouchableOpacity onPress={onClick} style={styles.buttonSkip}>
        <Text style={styles.skipBtnText}>Skip</Text>
      </TouchableOpacity>
        : <></>
    );
  };

  const DoneButton = ({ onClick, animation, showDoneBtn }) => {
    return (
      <Animatable.View
        animation={animation}
        duration={150}
        style={{ ...styles.doneBtnStyle, opacity: showDoneBtn ? 1 : 0 }}>
        <TouchableWithoutFeedback onPress={onClick}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              height: '100%',
            }}>
            <Icon name="arrow-forward" color="#fff" size={24} />
          </View>
        </TouchableWithoutFeedback>
      </Animatable.View>
    );
  };

  const _renderItem = ({ item }) => {
    return (
      <>
        <Image
          width={widthPercentageToDP('100%')} // height will be calculated automatically
          source={{ uri: item.imageUrl }}
        />
        <View style={styles.textContainer}>
          <Text style={styles.header}>{item.header}</Text>
          <Text style={styles.subHeader}>{item.subHeader}</Text>
        </View>
      </>
    );
  };

  const _renderPagination = activeIndex => {
    const isLastScreen = activeIndex === data.length - 1;
    return (
      <>
        <SkipButton onClick={_handleSkipOrDone} isLastScreen={isLastScreen} />
        <View style={styles.paginationContainer}>
          <SafeAreaView>
            <View style={styles.paginationDots}>
              {data.length > 1 &&
                data.map((_, i) => (
                  <TouchableOpacity
                    key={i}
                    style={[
                      styles.dotStyle,
                      i === activeIndex
                        ? styles.activeDotStyle
                        : styles.dotStyle,
                    ]}
                  />
                ))}
              <Animatable.Text
                animation={isLastScreen ? 'zoomOut' : ''}
                duration={150}
                style={styles.paginationText}>
                Swipe to continue
              </Animatable.Text>
            </View>
          </SafeAreaView>
        </View>

        <DoneButton
          onClick={_handleSkipOrDone}
          animation={doneBtnAnimationClass}
          showDoneBtn={showDoneBtn}
        />
      </>
    );
  };

  const _handleSkipOrDone = async () => {
    await AuthService.setIntroScreen({ value: true });
    navigation.navigate('GetStarted');
  };

  const _onSlideChange = (index, lastIndex) => {
    if (index === data.length - 1) {
      setShowDoneBtn(true);
      setDoneBtnAnimationClass('slideInRight');
    }

    if (lastIndex === data.length - 1) {
      setDoneBtnAnimationClass('slideOutRight');
    }
  };

  const _keyExtractor = item => item.id;

  useEffect(() => {
    fetchIntroScreens();
  }, []);

  return (
    <SafeAreaContainer style={{ backgroundColor: Colors.WHITE }}>
      <AppIntroSlider
        data={data}
        keyExtractor={_keyExtractor}
        renderItem={_renderItem}
        renderPagination={_renderPagination}
        onSlideChange={_onSlideChange}
      />
    </SafeAreaContainer>
  );
};

export default IntroScreen;
