import React, {useEffect, useState, useRef} from 'react';
import {
  Text,
  View,
  Image,
  Platform,
  // Button,
  // ScrollView,
  // FlatList,
  // TouchableOpacity,
} from 'react-native';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import uniqueId from 'react-native-uuid';
import ViewShot, {captureRef} from 'react-native-view-shot';
import IconButton from '../../../components/buttons/icon-button';
import {HeaderBar} from '../../../components/header/header';
// import {PaintBrushIcon} from '../../../icons/paint-brush';
import {SaveIcon} from '../../../icons/save';
import {DoneIcon} from '../../../icons/done';
import {UndoIcon} from '../../../icons/undo';
import {RedoIcon} from '../../../icons/redo';
import {RemoveItemIcon} from '../../../icons/drag-drop-actions/remove-item';
import {FlipItemIcon} from '../../../icons/drag-drop-actions/flip-item';
import {CloneItemIcon} from '../../../icons/drag-drop-actions/clone-item';
import {ForwardIcon} from '../../../icons/drag-drop-actions/forward';
import {BackwardIcon} from '../../../icons/drag-drop-actions/backward';
import DataService from '../../../services/data-service';
import {Colors, Fonts, Typography, Mixins} from '../../../theme';
import {SafeAreaContainer} from '../../../utils/app-container';
// import {NavigationContainer} from '@react-navigation/native';
// import {createStackNavigator} from '@react-navigation/stack';
import {
  // DEFAULT_ERROR_CALLBACK,
  DEFAULT_MSG_CALLBACK,
} from '../../../utils/app-util';
import BottomModal from './bottom-modal';

import CreateLookCanvas from '../../discover/discover';

import {styles} from '../style';
import FastImage from 'react-native-fast-image';
import {Loader} from '../../../components/loader/loader';
import ConfirmModal from './confirm-modal';

function move(inpArr, currIndex, direction) {
  const arr = [...inpArr];
  const numberOfDeletedElm = 1;

  // delete one element only, in index-from
  const [deletedElem] = arr.splice(currIndex, numberOfDeletedElm);

  if (direction === 'forward') {
    const nextIndex = currIndex + 1;
    arr.splice(nextIndex, 0, deletedElem);
  } else if (direction === 'backward') {
    const prevIndex = currIndex - 1;
    arr.splice(prevIndex, 0, deletedElem);
  }

  return arr;
}

const LoaderSpinner = () => (
  <View
    style={{
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      backgroundColor: 'rgba(255,255,255,0.5)',
    }}>
    <Loader size={40} color={Colors.PRIMARY} />
  </View>
);

const NoItemUI = () => {
  return (
    <>
      <FastImage
        style={{width: '80%', height: '80%', marginTop: 10}}
        source={require('../../../../assets/img/paint-brush.png')}
        resizeMode={FastImage.resizeMode.contain}
      />
      {/* <PaintBrushIcon /> */}
      <Text
        style={{
          marginTop: -58,
          color: '#616678',
          fontSize: Typography._14,
          lineHeight: Typography._20,
          fontFamily: Fonts.MEDIUM,
          textAlign: 'center',
        }}>
        Select an item below to create look
      </Text>
    </>
  );
};

const PreviewLook = ({uri}) => {
  return (
    <Image
      source={{uri}}
      style={{
        width: '100%',
        height: '100%',
      }}
      resizeMode="contain"
    />
  );
};

const UndoRedoActions = ({handleUndoRedo, actionHistory, undoHistory}) => {
  const isUndoDisabled = actionHistory.length <= 0;
  const isRedoDisabled = undoHistory.length <= 0;

  return (
    <View
      style={{
        position: 'absolute',
        bottom: 0,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
      }}>
      <IconButton
        disabled={isUndoDisabled}
        buttonStyle={{marginRight: 30}}
        iconComponent={
          <UndoIcon color={isUndoDisabled ? '#979797' : Colors.PRIMARY} />
        }
        onSubmit={() => handleUndoRedo('undo')}
      />
      <IconButton
        disabled={isRedoDisabled}
        iconComponent={
          <RedoIcon color={isRedoDisabled ? '#979797' : Colors.PRIMARY} />
        }
        onSubmit={() => handleUndoRedo('redo')}
      />
    </View>
  );
};

const CompControls = ({
  items,
  removeItem,
  flipItem,
  cloneItem,
  bringFwd,
  moveBehind,
  activeIndex,
  lastItemsIndex,
  setActionHistory,
}) => {
  const fwdBtnDisabled = activeIndex === lastItemsIndex;
  const bwdBtnDisabled = activeIndex === 0;

  const saveActionHistory = action => {
    setActionHistory(prev => {
      const tempArr = [...prev];

      let itemIndex = activeIndex;

      if (action === 'clone') {
        itemIndex = items.length;
      } else if (action === 'forward') {
        itemIndex = activeIndex + 1;
      } else if (action === 'backward') {
        itemIndex = activeIndex - 1;
      }

      let obj = {
        action,
        itemIndex,
        item: items[activeIndex],
      };
      tempArr.push(obj);

      return tempArr;
    });
  };

  return (
    <View style={styles.compContainer}>
      <View flexDirection="row">
        <IconButton
          onPress={() => {
            saveActionHistory('remove');
            removeItem(activeIndex);
          }}
          iconComponent={<RemoveItemIcon />}
          buttonStyle={[styles.canvasActionBtn, {marginLeft: 0}]}
          iconText="Remove"
          txtStyle={styles.canvasActionBtnLabel}
        />
        <IconButton
          onPress={() => {
            saveActionHistory('flip');
            flipItem(activeIndex);
          }}
          iconComponent={<FlipItemIcon />}
          buttonStyle={styles.canvasActionBtn}
          iconText="Flip"
          txtStyle={styles.canvasActionBtnLabel}
        />
        <IconButton
          onPress={() => {
            saveActionHistory('clone');
            cloneItem(activeIndex);
          }}
          iconComponent={<CloneItemIcon />}
          buttonStyle={styles.canvasActionBtn}
          iconText="Clone"
          txtStyle={styles.canvasActionBtnLabel}
        />
      </View>
      <View flexDirection="row">
        <IconButton
          onPress={() => {
            saveActionHistory('forward');
            bringFwd(activeIndex);
          }}
          disabled={fwdBtnDisabled}
          iconComponent={<ForwardIcon />}
          buttonStyle={[
            styles.canvasActionBtn,
            {opacity: fwdBtnDisabled ? 0.5 : 1},
          ]}
          iconText="Forward"
          txtStyle={styles.canvasActionBtnLabel}
        />
        <IconButton
          onPress={() => {
            saveActionHistory('backward');
            moveBehind(activeIndex);
          }}
          disabled={bwdBtnDisabled}
          iconComponent={<BackwardIcon />}
          buttonStyle={[
            styles.canvasActionBtn,
            {opacity: bwdBtnDisabled ? 0.5 : 1},
            {marginRight: 0},
          ]}
          iconText="Backward"
          txtStyle={styles.canvasActionBtnLabel}
        />
      </View>
    </View>
  );
};

const defaultBottomSheetHeight = 30;

export const NewLook = ({navigation, route}) => {
  const {client = {}, saveAsTodaysLook, saveToLookBook} = route.params || {};

  const [height, setHeight] = useState(
    heightPercentageToDP(`${defaultBottomSheetHeight}%`),
  );
  const [isBtmModalExpanded, setIsBtmModalExpanded] = useState(false);
  const [isConfirmModalVisible, setIsConfirmModalVisible] = useState(false);
  const [isShowPreview, setIsShowPreview] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [isDisabled, setIsDisabled] = useState(false);
  const [items, setItems] = useState([]);
  const [isNewItemAdded, setIsNewItemAdded] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [actionHistory, setActionHistory] = useState([]);
  const [undoHistory, setUndoHistory] = useState([]);
  const [undoRedoCount, setUndoRedoCount] = useState(0);

  const [imageUrl, setImageUrl] = useState(null);
  const cardRef = useRef();

  useEffect(() => {
    if (isNewItemAdded) {
      /* Add the newly added item's action as 'add' action in actionHistory for undo */
      setActionHistory(prev => {
        const tempArr = [...prev];

        let obj = {
          action: 'add',
          itemIndex: items.length - 1,
          item: items[items.length - 1],
        };

        tempArr.push(obj);

        return tempArr;
      });

      /* To make newly added item active on canvas */
      setHeight(heightPercentageToDP(`${defaultBottomSheetHeight}%`));
      setIsDisabled(false);
      setActiveIndex(items.length - 1);
      setIsNewItemAdded(false);
    }
  }, [isNewItemAdded]);

  const toggleModalheight = () => {
    setIsBtmModalExpanded(prev => !prev);
    setHeight(
      isBtmModalExpanded
        ? heightPercentageToDP(`${defaultBottomSheetHeight}%`)
        : heightPercentageToDP('95%'),
    );
  };

  const toggleConfirmModal = () => {
    setIsConfirmModalVisible(true);
  };

  const saveAsImage = async () => {
    setIsConfirmModalVisible(false);
    captureRef(cardRef, {
      format: 'png',
      quality: 0.8,
      result: 'tmpfile',
    }).then(
      async uri => {
        setIsLoading(true);

        let response = {
          uri: uri,
          type: 'image/png',
          fileName: uniqueId.v4().toString(),
        };
        const imgUrl = await DataService.uploadImageFile(response);
        setImageUrl(imgUrl);

        setIsLoading(false);

        setIsShowPreview(true);

        setItems([]);
      },
      error => console.error('Oops, snapshot failed', error),
    );
  };

  const saveLook = () => {
    navigation.navigate('SaveLook', {
      client,
      imageUrl,
      saveAsTodaysLook,
      saveToLookBook,
    });
  };

  const removeItem = itemIndex => {
    setItems(prev => {
      const tempArr = [...prev].filter((item, idx) => idx !== itemIndex);
      return tempArr;
    });
  };

  const flipItem = itemIndex => {
    const index = itemIndex;
    setItems(prev => {
      const tempArr = [...prev];

      const {isFlipped, ...rest} = tempArr[itemIndex];

      const tempItem = {...rest, isFlipped: !isFlipped};

      tempArr[index] = tempItem;

      return tempArr;
    });
  };

  const cloneItem = () => {
    setItems(prev => {
      const tempArr = [...prev];
      const activeItem = tempArr[activeIndex];
      tempArr.push({...activeItem, key: new Date().getTime()});

      return tempArr;
    });
    setActiveIndex(items.length);
  };

  const bringFwd = itemIndex => {
    const sortedArr = move(items, itemIndex, 'forward');

    setItems(sortedArr);
    setActiveIndex(prev => prev + 1);
  };

  const moveBehind = itemIndex => {
    const sortedArr = move(items, itemIndex, 'backward');

    setItems(sortedArr);
    setActiveIndex(prev => prev - 1);
  };

  const handleUndoRedo = type => {
    if (undoRedoCount >= 50) {
      DEFAULT_MSG_CALLBACK('Max. 50 undo/redo actions allowed');
      return;
    }

    const history = type === 'undo' ? actionHistory : undoHistory;

    const tempStack = [...history];

    const lastAction = tempStack.pop();

    if (lastAction) {
      const lastActionName = lastAction.action;
      const item = lastAction.item;
      const index = lastAction.itemIndex;

      let actionName;

      switch (lastActionName) {
        case 'remove':
          setItems(prev => {
            const tempArr = [...prev];
            tempArr.splice(index, 0, item);
            return tempArr;
          });
          actionName = 'add';
          break;
        case 'flip':
          flipItem(index);
          actionName = 'flip';
          break;
        case 'add':
        case 'clone':
          removeItem(index);
          actionName = 'remove';
          break;
        case 'forward':
          moveBehind(index);
          actionName = 'backward';
          break;
        case 'backward':
          bringFwd(index);
          actionName = 'forward';
          break;
      }

      let itemIndex = index;

      if (actionName === 'forward') {
        itemIndex = index + 1;
      } else if (actionName === 'backward') {
        itemIndex = index - 1;
      }

      let undoObj = {
        action: actionName,
        itemIndex,
        item,
      };

      if (type === 'undo') {
        setUndoHistory(prev => [...prev, undoObj]);
        setActionHistory(prev => {
          const tempArr = [...prev];
          tempArr.pop();
          return tempArr;
        });
      } else if (type === 'redo') {
        setActionHistory(prev => [...prev, undoObj]);
        setUndoHistory(prev => {
          const tempArr = [...prev];
          tempArr.pop();
          return tempArr;
        });
      }

      setUndoRedoCount(prev => prev + 1);
    }
  };

  return (
    <SafeAreaContainer style={{backgroundColor: Colors.WHITE}}>
      <View style={{flex: 1, display: isBtmModalExpanded ? 'none' : 'flex'}}>
        <HeaderBar
          containerStyle={{top: 0}}
          backButton
          leftClick={() => navigation.goBack()}
          rightIcon={
            <IconButton
              disabled={items.length > 0 ? !isDisabled : !isShowPreview}
              iconComponent={items.length > 0 ? <DoneIcon /> : <SaveIcon />}
              iconText={items.length > 0 ? 'Done' : 'save'}
              txtStyle={{
                color: Colors.LABEL,
                fontSize: Typography._12,
                marginTop: Platform.OS === 'android' ? 3 : 0,
                marginLeft: -12,
                textTransform: 'capitalize',
                fontFamily: Fonts.MEDIUM,
              }}
              buttonStyle={{
                width: widthPercentageToDP('17%'),
                height: 30,
                alignItems: 'center',
                justifyContent: 'center',
                borderWidth: 1,
                borderColor: '#BEC2C1',
                borderRadius: 10,
                opacity:
                  items.length > 0
                    ? isDisabled
                      ? 1
                      : 0.5
                    : isShowPreview
                    ? 1
                    : 0.5,
              }}
              onSubmit={items.length > 0 ? toggleConfirmModal : saveLook}
            />
          }
        />

        <View
          style={{
            flex: 1,
            marginTop: 45,
            marginBottom: heightPercentageToDP(
              `${defaultBottomSheetHeight + 1}%`,
            ),
            position: 'relative',
            paddingBottom: 53,
            alignItems: 'center',
          }}>
          {isShowPreview ? (
            <PreviewLook uri={imageUrl} />
          ) : items.length > 0 ? (
            <>
              <ViewShot
                ref={cardRef}
                style={{
                  flex: 1,
                  width: '100%',
                  justifyContent: 'flex-start',
                  alignItems: 'center',
                }}>
                <CreateLookCanvas
                  {...{
                    items,
                    setItems,
                    activeIndex,
                    setActiveIndex,
                    isDisabled,
                    setIsDisabled,
                  }}
                />
              </ViewShot>
              {!isDisabled ? (
                <CompControls
                  {...{
                    items,
                    removeItem,
                    flipItem,
                    cloneItem,
                    bringFwd,
                    moveBehind,
                    activeIndex,
                    lastItemsIndex: items.length - 1,
                    setActionHistory,
                  }}
                />
              ) : (
                <UndoRedoActions
                  {...{handleUndoRedo, actionHistory, undoHistory}}
                />
              )}
              {isLoading && <LoaderSpinner />}
            </>
          ) : (
            <NoItemUI />
          )}
        </View>
      </View>

      <BottomModal
        {...{client, height, toggleModalheight, setIsNewItemAdded}}
        addItem={setItems}
      />

      <ConfirmModal
        isVisible={isConfirmModalVisible}
        onSuccess={saveAsImage}
        onCancel={() => {
          setIsConfirmModalVisible(false);
        }}
      />
    </SafeAreaContainer>
  );
};

export default NewLook;
