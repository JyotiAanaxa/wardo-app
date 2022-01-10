import React, {useState, useEffect} from 'react';
import {View, Image, Text, TextInput, Platform} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {heightPercentageToDP} from 'react-native-responsive-screen';
import {SafeAreaContainer} from '../../../utils/app-container';
import {HeaderBar} from '../../../components/header/header';
import DeleteLookModal from './delete-modal';

import {DeleteSqrOutlineIcon} from '../../../icons/delete';
import {ProfileIcon} from '../../../icons/profile-icon';

import {Mixins, Colors, Fonts, Typography} from '../../../theme';
import DataService from '../../../services/data-service';
import {DEFAULT_MSG_CALLBACK} from '../../../utils/app-util';

const LoaderSpinner = () => (
  <View style={[Mixins.FLEX]}>
    <Loader size={40} color={Colors.PRIMARY} />
  </View>
);

const ViewLook = ({navigation, route}) => {
  const {isReadOnly, look} = route.params || {};

  const [isLoading, setIsLoading] = useState(true);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);

  const inputPlaceholderStyle = {
    color: '#B0B0B0',
    fontFamily: Fonts.MEDIUM,
    fontSize: Typography._22,
    lineHeight: Typography._26,
  };
  const [inputStyle, setInputStyle] = useState(inputPlaceholderStyle);
  const [lookName, setLookName] = useState('');

  const deleteLook = () => {
    setOpenDeleteModal(false);

    const {id} = look || {};

    if (id) {
      setIsLoading(true);

      DataService.deleteLook(id).subscribe(
        async data => {
          setIsLoading(false);

          const resp = await data;

          if (resp.status) {
            navigation.goBack();
          }
        },
        error => {
          DEFAULT_ERROR_CALLBACK(error);
          setIsLoading(false);
        },
      );
    }
  };

  const updateLookName = name => {
    setIsLoading(true);

    const dto = {...look, name};

    DataService.updateLook(dto).subscribe(
      async data => {
        setIsLoading(false);

        const resp = await data;

        if (resp.status) {
          DEFAULT_MSG_CALLBACK('Look succesfully saved');
        }
      },
      error => {
        DEFAULT_ERROR_CALLBACK(error);
        setIsLoading(false);
      },
    );
  };

  useEffect(() => {
    if (look.name) {
      setLookName(look.name);
      setInputStyle(styles.inputValStyle);
    }
  }, []);

  if (isLoading) {
    <LoaderSpinner />;
  }

  return (
    <SafeAreaContainer
      style={{
        paddingTop: 70,
        paddingHorizontal: 20,
        paddingBottom: 70,
      }}>
      <HeaderBar
        headerStyle={{marginLeft: Platform.OS === 'android' ? -8 : 0}}
        backButton
        leftClick={() => navigation.goBack()}
        {...!isReadOnly && {
          rightIcon: <DeleteSqrOutlineIcon />,
          rightClick: () => setOpenDeleteModal(true),
        }}
      />
      {!isReadOnly && (
        <View
          style={{
            marginBottom:
              Platform.OS === 'android'
                ? heightPercentageToDP('3.6%')
                : -heightPercentageToDP('5.6%'),
            marginTop: Platform.OS === 'android' ? 0 : 70,
            paddingHorizontal: Platform.OS === 'android' ? 0 : 25,
          }}>
          <TextInput
            placeholder="Enter a name"
            onChangeText={txt => {
              setInputStyle(
                txt.length > 0 ? styles.inputValStyle : inputPlaceholderStyle,
              );

              setLookName(txt);
            }}
            onSubmitEditing={({nativeEvent: {text}}) => updateLookName(text)}
            style={[{padding: 0}, inputStyle]}
            value={lookName}
          />
        </View>
      )}

      <View
        style={[
          Mixins.FLEX,
          {paddingHorizontal: Platform.OS === 'android' ? 0 : 25},
        ]}>
        <Image
          source={{uri: look.imageUrl}}
          style={{
            width: '100%',
            height: '100%',
          }}
          resizeMode="contain"
        />
      </View>

      <View style={styles.lookDetails}>
        <ProfileIcon rectagleStroke="#6A60DA" style={{marginRight: 14}} />
        <View flex={1} flexDirection="row" justifyContent="space-between">
          <View justifyContent="space-between">
            <Text style={styles.lookAuthorTitle}>Created By</Text>
            <Text style={styles.lookAuthorName}>{look.createdByName}</Text>
          </View>
          <Text style={styles.createdOn}>{look.timeAgo}</Text>
        </View>
      </View>

      <DeleteLookModal
        isVisible={openDeleteModal}
        onSuccess={deleteLook}
        onCancel={() => setOpenDeleteModal(false)}
      />
    </SafeAreaContainer>
  );
};

export default ViewLook;

const styles = EStyleSheet.create({
  inputValStyle: {
    color: Colors.LABEL,
    fontFamily: Fonts.HEAVY,
    fontSize: Typography._28,
    lineHeight: heightPercentageToDP('4%'),
    fontWeight: 'normal',
  },

  lookDetails: {
    marginVertical: heightPercentageToDP('3.69%'),
    backgroundColor: Colors.WHITE,
    borderRadius: 18,
    shadowColor: '#00000050',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 8,
    elevation: 2.5,
    paddingHorizontal: 16,
    marginHorizontal: Platform.OS === 'android' ? 0 : 25,
    paddingVertical: 18,
    flexDirection: 'row',
    marginBottom:
      Platform.OS === 'android'
        ? heightPercentageToDP('3.5%')
        : heightPercentageToDP('10%'),
  },

  lookAuthorTitle: {
    color: '#80838C',
    fontSize: Typography._13,
    fontFamily: Fonts.MEDIUM,
    lineHeight: Typography._16,
  },

  lookAuthorName: {
    color: Colors.LABEL,
    fontSize: Typography._16,
    lineHeight: Typography._19,
    fontFamily: Fonts.HEAVY,
  },

  createdOn: {
    color: Colors.LABEL,
    fontSize: Typography._13,
    lineHeight: Typography._19,
    fontFamily: Fonts.MEDIUM,
  },
});
