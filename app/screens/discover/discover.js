import React, {useState, useEffect} from 'react';
import {Image, StyleSheet, View, TouchableOpacity} from 'react-native';
import {Colors} from '../../theme';
import {FlexContainer} from '../../utils/app-container';
import {DragResizeContainer} from './drag-resize-container';
import {DragResizeBlock} from './drag-resize';

const connectors = ['tl', 'tm', 'tr', 'mr', 'br', 'bm', 'bl', 'ml', 'c'];

export const Explore = ({
  navigation,
  items,
  setItems,
  activeIndex,
  setActiveIndex,
  isDisabled,
  setIsDisabled,
}) => {
  const [limitation, setLimitation] = useState();

  const onDragEnd = ([x, y]) => {
    setItems(items => {
      const tempArr = [...items];

      const currItem = tempArr[activeIndex];

      const tempItem = {...currItem, x, y};

      tempArr[activeIndex] = tempItem;

      return tempArr;
    });
  };

  return (
    <FlexContainer>
      <TouchableOpacity
        onPress={() => {
          setIsDisabled(true);
        }}
        style={{flex: 1, width: '100%'}}
        activeOpacity={1}>
        <View style={styles.container}>
          <DragResizeContainer
            onInit={limitation => {
              setLimitation(limitation);
              return limitation;
            }}
            style={{width: '100%', height: '100%'}}>
            {items.length > 0 &&
              items.map((item, idx) => (
                <DragResizeBlock
                  x={item.x}
                  y={item.y}
                  w={150}
                  h={150}
                  limitation={limitation}
                  connectors={connectors}
                  key={item.key}
                  zIndex={100}
                  isDisabled={isDisabled ? true : !(activeIndex === idx)}
                  onDragEnd={onDragEnd}
                  onPress={() => {
                    setActiveIndex(idx);
                    setIsDisabled(false);
                  }}>
                  <View
                    style={[
                      item.isFlipped ? styles.flipStyle : styles.defaultStyle,
                    ]}>
                    <Image
                      source={{
                        uri: item.imageUrl,
                      }}
                      style={{height:'100%',width:'100%'}}
                      resizeMode="contain"
                    />
                  </View>
                </DragResizeBlock>
              ))}
          </DragResizeContainer>
        </View>
      </TouchableOpacity>
    </FlexContainer>
  );
};

const styles = StyleSheet.create({
  flipStyle: {
    transform: [{rotateY: '180deg'}],
  },
  defaultStyle: {
    transform: [{rotateY: '0deg'}],
  },
  fwdStyle: {
    zIndex: 10,
    backgroundColor: Colors.PRIMARY,
  },
  bwdStyle: {
    zIndex: 0,
  },
  canvas: {
    width: '100%',
    height: '100%',
    backgroundColor: '#D1D5DA',
    marginTop: 4,
  },
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: Colors.WHITE,
    padding: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  item: {
    width: 200,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Explore;
