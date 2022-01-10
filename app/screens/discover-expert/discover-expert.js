import React, { useState } from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import {
  FlatList,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';

import { SafeAreaContainer } from '../../utils/app-container';
import { HeaderBar } from '../../components/header/header';
import { Heading } from '../../components/heading/heading';

import BarCodeIcon from '../../icons/barcode-icon';
import MagnifyingGlassIcon from '../../icons/magnifying-glass-icon';
import { RightArrowIcon } from '../../icons/right-arrow';

import { dpToHeightPercent, DEFAULT_ERROR_CALLBACK } from '../../utils/app-util';
import { Colors, Fonts, Typography } from '../../theme';
import { useFocusEffect } from '@react-navigation/native';
import DataService from '../../services/data-service';
import InviteModal from './invite-modal';
import { Loader } from '../../components/loader/loader';
import ProfilePic from '../../components/profile-pic';

import { AppConstants } from '../../utils/app-constants';
import SuccessModal from './sucess-modal';

const UseCodeToFindBtn = () => (
  <View style={styles.useCodeBtn}>
    <BarCodeIcon style={{ marginRight: 7 }} />
    <Text style={styles.useCodeBtn__Text}>Use Code</Text>
  </View>
);
const SearchBtn = ({ style = {}, onPress }) => {
  const styles = EStyleSheet.create({
    btn: {
      width: '100%',
      aspectRatio: 6.04,
      padding: '5.96%',
      borderRadius: 14,
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#FAFAFA',
    },

    text: {
      color: '#D0D0D0',
      fontSize: Typography._13,
      lineHeight: Typography._15,
      fontFamily: Fonts.ROMAN,
    },
  });

  return (
    <TouchableOpacity onPress={onPress} style={[styles.btn, style]}>
      <View
        style={{ width: '6.77%', minWidth: 18, aspectRatio: 1, marginRight: 8 }}>
        <MagnifyingGlassIcon width="100%" height="100%" />
      </View>
      <Text style={styles.text} numberOfLines={1}>
        Search by an expert's name
      </Text>
    </TouchableOpacity>
  );
};

const CategoryCard = ({ category, style = {}, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.categoryCard, style]}>
      <Text style={styles.categoryCard__Title} numberOfLines={1}>
        {category.value}
      </Text>
    </TouchableOpacity>
  );
};

const ServiceCard = ({ service = {}, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.serviceCardWrapper}>
      <View style={styles.serviceCard}>
        <Image source={{ uri: service.iconUrl }} style={styles.image} />
      </View>
      <Text style={styles.serviceCard__caption}>{service.value}</Text>
    </TouchableOpacity>
  );
};

const DiscoverExpert = ({ navigation, route }) => {
  const [masterData, setMasterData] = useState({ categories: [] });
  const [isLoading, setIsLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const [isSuccessModalVisible, setSuccessModalVisible] = useState(false);
  const [expert, setExpert] = useState({});
  const [expertUserData, setExpertUserData] = useState({});

  const getFilterPriceCosts = () =>
    (masterData &&
      (masterData.minCost || masterData.minCost === 0) &&
      masterData.maxCost && {
      minCost: masterData.minCost,
      maxCost: masterData.maxCost,
    }) ||
    {};

  const onSearchBtnPress = () =>
    navigation.navigate('SearchExpert', {
      showCategoryFilter: true,
      ...getFilterPriceCosts(),
    });

  const onViewAllPress = entity => {
    let obj = {};
    obj.nav = 'CategoryList';
    obj.entity = entity;

    switch (entity) {
      case AppConstants.ENTITY.CATEGORY:
        obj.entity = undefined;
        obj.nav = 'ExpertList';
        obj.showCategoryFilter = true;
        break;
      case AppConstants.ENTITY.TRENDING:
        obj.title = 'Trending \nServices';
        break;
      case AppConstants.ENTITY.PERSONAL:
        obj.title = 'Personal Styling \nServices';
        break;
      case AppConstants.ENTITY.COMMERCIAL:
        obj.title = 'Commercial Styling \nServices';
        break;
      case AppConstants.ENTITY.BEAUTIY:
        obj.title = 'Beauty Styling \nServices';
        break;
      case AppConstants.ENTITY.SUSTAINABLE:
        obj.title = 'Sustainable Styling \nServices';
        break;
    }
    navigation.navigate(obj.nav, { ...obj, ...getFilterPriceCosts() });
  };

  const onCategoryPress = item => {
    navigation.navigate('ExpertList', {
      data: item,
      entity: AppConstants.ENTITY.CATEGORY,
      showCategoryFilter: false,
      ...getFilterPriceCosts(),
    });
  };

  const onServicePress = item => {
    navigation.navigate('ExpertList', {
      data: item,
      entity: AppConstants.ENTITY.SERVICES,
      showCategoryFilter: true,
      ...getFilterPriceCosts(),
    });
  };

  const fetchCategories = () => {
    DataService.getStylistMasterData().subscribe(
      resp => {
        setMasterData(resp);
        setIsLoading(false);
      },
      error => {
        setIsLoading(false);
      },
    );
  };

  useFocusEffect(
    React.useCallback(() => {
      fetchCategories();
    }, []),
  );

  const onModelOpen = () => setIsVisible(true);
  const onSwipeHide = () => setIsVisible(false);
  const onCancel = () => setSuccessModalVisible(false);

  const onSuccess = expert => {
    setExpert(expert);
    DataService.getConsumerData(expert.slug).subscribe(
      async data => {
        const resp = await data;
        setExpertUserData(resp);
      },
      error => {
        DEFAULT_ERROR_CALLBACK(error);
      },
    );
    onSwipeHide();
    setSuccessModalVisible(true);
  };

  const onViewBtnPress = () => {
    navigation.navigate('StylistProfile', { expert: expertUserData });
  };

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
        rightBtnStyle={{ padding: 0 }}
        rightIcon={<UseCodeToFindBtn />}
        rightClick={onModelOpen}
      />

      <Heading
        title={'Discover Experts'}
        style={styles.pageHeading}
        containerStyle={{ marginBottom: 0 }}
      />

      <ScrollView
        style={styles.pageContent}
        showsVerticalScrollIndicator={false}>
        <View style={{ paddingRight: dpToHeightPercent(35) }}>
          <SearchBtn style={styles.searchBtn} onPress={onSearchBtnPress} />
        </View>

        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Category</Text>

            <TouchableOpacity
              style={styles.viewAllBtn}
              onPress={() => onViewAllPress(AppConstants.ENTITY.CATEGORY)}>
              <Text style={styles.viewAllBtn__Text}>View All</Text>
              <RightArrowIcon width="18" color="#B0B0B0" />
            </TouchableOpacity>
          </View>

          {!isLoading ? (
            <FlatList
              horizontal
              contentContainerStyle={{ flexGrow: 1 }}
              showsHorizontalScrollIndicator={false}
              data={masterData.categories}
              renderItem={({ item }) => (
                <CategoryCard
                  style={{ backgroundColor: (item || {}).bgColor || '#C2CDF3' }}
                  category={item}
                  onPress={() => onCategoryPress(item)}
                />
              )}
              keyExtractor={(item, index) => index}
            />
          ) : (
              <Loader color={Colors.PRIMARY} size={40} />
            )}
        </View>

        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Trending Services</Text>

            {/* <TouchableOpacity
              style={styles.viewAllBtn}
              onPress={() => onViewAllPress(AppConstants.ENTITY.TRENDING)}>
              <Text style={styles.viewAllBtn__Text}>View All</Text>
              <RightArrowIcon width="18" color="#B0B0B0" />
            </TouchableOpacity> */}
          </View>

          {!isLoading ? (
            <FlatList
              horizontal
              contentContainerStyle={{ flexGrow: 1 }}
              showsHorizontalScrollIndicator={false}
              data={masterData.trendingServices}
              renderItem={({ item }) => (
                <ServiceCard
                  service={item}
                  onPress={() => onServicePress(item)}
                />
              )}
              keyExtractor={(item, index) => index}
            />
          ) : (
              <Loader color={Colors.PRIMARY} size={40} />
            )}
        </View>

        {masterData.specialities &&
          masterData.specialities.map((item, index) => (
            <View key={index} style={styles.section}>
              <View style={styles.sectionHeader}>
                <Text style={styles.sectionTitle}>{item.value}</Text>

                <TouchableOpacity
                  style={styles.viewAllBtn}
                  onPress={() => onViewAllPress(item.key)}>
                  <Text style={styles.viewAllBtn__Text}>View All</Text>
                  <RightArrowIcon width="18" color="#B0B0B0" />
                </TouchableOpacity>
              </View>

              <FlatList
                horizontal
                contentContainerStyle={{ flexGrow: 1 }}
                showsHorizontalScrollIndicator={false}
                data={masterData.services[item.key]}
                renderItem={({ item }) => (
                  <ServiceCard
                    service={item}
                    onPress={() => onServicePress(item)}
                  />
                )}
                keyExtractor={(item, index) => index}
              />
            </View>
          ))}
      </ScrollView>
      <InviteModal {...{ isVisible, onSwipeHide, onSuccess }} />
      <SuccessModal
        {...{ isSuccessModalVisible, expert, onViewBtnPress, onCancel }}
      />
    </SafeAreaContainer>
  );
};

export default DiscoverExpert;

const styles = EStyleSheet.create({
  $screenWidth: '100%',

  pageHeader: {
    width: '1 * $screenWidth',
    paddingHorizontal: dpToHeightPercent(25),
  },

  useCodeBtn: {
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.PRIMARY,
  },

  useCodeBtn__Text: {
    color: '#FFF',
    fontSize: Typography._12,
    lineHeight: Typography._14,
    fontFamily: Fonts.HEAVY,
  },

  pageHeading: {
    fontSize: Typography._28,
    lineHeight: Typography._34,
    marginBottom: dpToHeightPercent(20),
  },

  searchBtn: {
    marginBottom: dpToHeightPercent(40),
  },

  pageContent: {
    marginRight: dpToHeightPercent(-35),
  },

  section: { marginBottom: dpToHeightPercent(40) },

  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: dpToHeightPercent(35),
    marginBottom: dpToHeightPercent(22),
  },

  sectionTitle: {
    color: Colors.LABEL,
    fontSize: Typography._18,
    lineHeight: Typography._22,
    fontFamily: Fonts.BOLD,
  },

  viewAllBtn: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  viewAllBtn__Text: {
    color: '#B0B0B0',
    fontSize: Typography._12,
    lineHeight: Typography._14,
    fontFamily: Fonts.ROMAN,
    alignItems: 'center',
  },

  categoryCard: {
    width: '.36 * $screenWidth',
    aspectRatio: 0.77,
    borderRadius: 18,
    marginRight: 15,
    paddingVertical: '15%',
    paddingHorizontal: '8%',
  },

  categoryCard__Title: {
    color: '#FFF',
    fontSize: Typography._14,
    lineHeight: Typography._18,
    fontFamily: Fonts.MEDIUM,
  },

  serviceCardWrapper: {
    width: '.32 * $screenWidth',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },

  serviceCard: {
    width: '100%',
    aspectRatio: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 18,
    marginBottom: dpToHeightPercent(8),
  },

  serviceCard__caption: {
    color: Colors.LABEL,
    fontSize: Typography._14,
    lineHeight: Typography._16,
    fontFamily: Fonts.MEDIUM,
    textAlign: 'center',
  },

  image: {
    width: '70%',
    height: '70%',
    resizeMode: 'contain',
    borderRadius: 18,
    overflow: 'hidden',
  },
});
