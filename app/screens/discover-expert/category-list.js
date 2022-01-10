import React, { useState } from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import { FlatList, Text, TouchableOpacity, View, Image } from 'react-native';
import { SafeAreaContainer } from '../../utils/app-container';
import { HeaderBar } from '../../components/header/header';
import { Heading } from '../../components/heading/heading';
import { dpToHeightPercent } from '../../utils/app-util';
import { Colors, Fonts, Typography } from '../../theme';
import { useFocusEffect } from '@react-navigation/native';
import DataService from '../../services/data-service';
import FastImage from 'react-native-fast-image';
import { Loader } from '../../components/loader/loader';
// import FilterIcon from '../../icons/filter-icon';
// import ExpertFilterModal from './expert-filter-modal';
import { AppConstants } from '../../utils/app-constants';

const CategoryCard = ({ category, style = {}, onPress }) => {
  const { iconUrl, value } = category || {};

  return (
    <TouchableOpacity onPress={onPress} style={[styles.categoryCard, style]}>
      <View flex={1}>
        <View style={{ flex: 1, margin: 25 }}>
          <FastImage
            style={{ height: '100%', width: '100%', alignSelf: 'center' }}
            source={{
              uri: iconUrl || undefined,
              priority: FastImage.priority.normal,
            }}
            resizeMode={FastImage.resizeMode.contain}
          />
        </View>
        <View style={styles.titleCard}>
          <Text style={styles.categoryCard__Title} numberOfLines={2}>
            {value}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const CategoryList = ({ navigation, route }) => {
  const { title, entity, minCost = 0, maxCost = 50000 } = route.params || {};

  const [isLoading, setIsLoading] = useState(true);

  const [data, setData] = useState([]);

  const getServices = () => {
    setIsLoading(true);

    DataService.getPackageTemplateBySpeciality(entity).subscribe(
      resp => {
        setIsLoading(false);

        const { packages } = resp || {};

        const data = packages || [];

        setData(data);
      },
      error => {
        setIsLoading(false);
      },
    );
  };

  useFocusEffect(
    React.useCallback(() => {
      getServices();
    }, []),
  );

  const onCategoryPress = item =>
    navigation.navigate('ExpertList', {
      data: item,
      entity: AppConstants.ENTITY.SERVICES,
      showCategoryFilter: true,
      minCost,
      maxCost,
    });

  return (
    <SafeAreaContainer style={styles.screen}>
      <HeaderBar
        backButton
        leftClick={() => navigation.goBack()}
        containerStyle={styles.pageHeader}
      />

      <Heading
        title={title}
        style={styles.pageHeading}
        containerStyle={{ marginBottom: 0 }}
      />
      {/* {data.length > 0 && (
        <View style={styles.viewTotal}>
          <Text style={styles.viewProfileBtn__Text} numberOfLines={1}>{`${
            data.length
          } Found`}</Text>
        </View>
      )} */}

      {!isLoading ? (
        <FlatList
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.gridContainer}
          data={data}
          numColumns={2}
          renderItem={({ item }) => (
            <View style={styles.gridItem}>
              <CategoryCard
                category={item}
                onPress={() => onCategoryPress(item)}
              />
            </View>
          )}
          keyExtractor={(item, index) => index}
        />
      ) : (
          <Loader color={Colors.PRIMARY} size={40} />
        )}
    </SafeAreaContainer>
  );
};

export default CategoryList;

const styles = EStyleSheet.create({
  $screenWidth: '100%',

  screen: {
    paddingTop: dpToHeightPercent(55),
    paddingBottom: dpToHeightPercent(75), // 75 bottom navigation height
    paddingHorizontal: dpToHeightPercent(35),
  },

  pageHeading: {
    fontSize: Typography._28,
    lineHeight: Typography._36,
    marginBottom: dpToHeightPercent(40),
  },

  image: {
    flex: 1,
    resizeMode: 'cover',
    borderRadius: 18,
    overflow: 'hidden',
  },

  $gutterWidth:
    '0.08 * $screenWidth' /* 0.08 = 8% = 30dp according to 375 mobile width  */,

  gridContainer: {
    padding: 6,
    marginRight: '$gutterWidth * -1',
  },

  gridItem: {
    width: '50%',
    paddingRight: '$gutterWidth',
    paddingBottom: dpToHeightPercent(24),
  },

  categoryCard: {
    aspectRatio: 0.77,
    borderRadius: 18,
    overflow: 'hidden',
    backgroundColor: Colors.WHITE,
    shadowColor: '#1A1A1A17',
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 26,
    shadowOpacity: 0.29,
    elevation: 4,
  },

  titleCard: {
    backgroundColor: '#FAFAFA',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '12%',
  },
  categoryCard__Title: {
    color: '#1A1A1A',
    fontSize: Typography._14,
    lineHeight: Typography._18,
    fontFamily: Fonts.MEDIUM,
  },
  viewTotal: {
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 8,
    marginBottom: dpToHeightPercent(40),
    alignSelf: 'flex-start',
    backgroundColor: Colors.PRIMARY,
  },
  viewProfileBtn__Text: {
    color: '#FFF',
    fontSize: Typography._12,
    fontFamily: Fonts.ROMAN,
  },
});
