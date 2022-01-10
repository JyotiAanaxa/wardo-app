import React from 'react';
import {View, Text, StyleSheet, Animated} from 'react-native';
import {Colors, Fonts} from '../../theme';

const AnimatedView = Animated.createAnimatedComponent(View);

const width = 50;
const pointerWidth = width * 0.47;

function LabelBase(props) {
  const {position, value, leftDiff, pressed} = props;
  const scaleValue = React.useRef(new Animated.Value(0.01)); // Behaves oddly if set to 0
  const cachedPressed = React.useRef(pressed);

  React.useEffect(() => {
    Animated.timing(scaleValue.current, {
      toValue: pressed ? 1 : 0.01,
      duration: 200,
      delay: pressed ? 0 : 2000,
      useNativeDriver: true,
    }).start();
    cachedPressed.current = pressed;
  }, [pressed]);

  return (
    Number.isFinite(position) &&
    Number.isFinite(value) && (
      <AnimatedView
        style={[
          stylesCustomLabel.sliderLabel,
          {
            left: position - width / 2,
            transform: [
              {translateY: width},
              {scale: scaleValue.current},
              {translateY: -width},
            ],
          },
        ]}>
        <View style={stylesCustomLabel.pointer} />
        <Text style={stylesCustomLabel.sliderLabelText}>{value}</Text>
      </AnimatedView>
    )
  );
}

export default function CustomLabel(props) {
  const {
    leftDiff,
    oneMarkerValue,
    twoMarkerValue,
    oneMarkerLeftPosition,
    twoMarkerLeftPosition,
    oneMarkerPressed,
    twoMarkerPressed,
  } = props;

  return (
    <View style={stylesCustomLabel.parentView}>
      <LabelBase
        position={oneMarkerLeftPosition}
        value={oneMarkerValue}
        leftDiff={leftDiff}
        pressed={oneMarkerPressed}
      />
      <LabelBase
        position={twoMarkerLeftPosition}
        value={twoMarkerValue}
        leftDiff={leftDiff}
        pressed={twoMarkerPressed}
      />
    </View>
  );
}

const stylesCustomLabel = StyleSheet.create({
  parentView: {
    position: 'relative',
  },
  sliderLabel: {
    position: 'absolute',
    justifyContent: 'center',
    bottom: -35,
    width: width,
    height: width,
    zIndex: 99,
  },
  sliderLabelText: {
    textAlign: 'center',
    lineHeight: width,
    borderRadius: width / 2,
    borderWidth: 2,
    borderColor: Colors.PRIMARY,
    backgroundColor: '#fff',
    flex: 1,
    fontSize: 13,
    fontFamily: Fonts.LIGHT,
    color: '#aaa',
  },
  pointer: {
    position: 'absolute',
    bottom: -pointerWidth / 4,
    left: (width - pointerWidth) / 2,
    transform: [{rotate: '45deg'}],
    width: pointerWidth,
    height: pointerWidth,
    backgroundColor: Colors.PRIMARY,
  },
});
