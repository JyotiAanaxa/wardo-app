import React, {useEffect, useState} from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import {Text, View} from 'react-native';

import {SafeAreaContainer} from '../../utils/app-container';
import {HeaderBar} from '../../components/header/header';
import {Heading} from '../../components/heading/heading';
import {useFocusEffect} from '@react-navigation/native';
import FilterIcon from '../../icons/filter-icon';
import {dpToHeightPercent} from '../../utils/app-util';
import {Colors, Fonts, Typography} from '../../theme';

import ExpertFilterModal from './expert-filter-modal';
import DataService from '../../services/data-service';
import {Loader} from '../../components/loader/loader';
import {FlatList} from 'react-native-gesture-handler';
import ExpertCard from './expert-card';
import NoExpertFound from './no-experts';

const ExpertList = ({navigation, route}) => {
  const {
    data = {},
    entity,
    showCategoryFilter = false,
    minCost = 0,
    maxCost = 50000,
  } = route.params || {};

  const [expertsFound, setExpertsFound] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [allLoaded, setAllLoaded] = useState(false);

  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(0);

  const [categories, setCategories] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [multiSliderValue, setMultiSliderValue] = useState([minCost, maxCost]);
  const [isExpertFilterModalOpen, setIsExpertFilterModalOpen] = useState(false);

  const getExpertList = () => {
    setIsLoading(true);

    DataService.getExpertList(
      page,
      data.key,
      multiSliderValue,
      entity,
    ).subscribe(
      resp => {
        setIsLoading(false);

        const {content, totalElements} = resp || {};

        setTotal(totalElements || 0);
        setExpertsFound(prev => {
          if (prev.length + content.length === totalElements) {
            // if no new items were fetched, set all loaded to true to prevent further requests
            setAllLoaded(true);
          }

          return page ? [...prev, ...content] : content;
        });

        // load more complete, set loading more to false
        setLoadingMore(false);
      },
      error => {
        setIsLoading(false);

        // load more complete, set loading more to false
        setLoadingMore(false);
      },
    );
  };

  const fetchCategories = () => {
    DataService.getStylistMasterData().subscribe(
      resp => {
        setCategories(resp.categories);
      },
      error => {
        console.error(error);
      },
    );
  };

  useFocusEffect(
    React.useCallback(() => {
      showCategoryFilter && fetchCategories();
      getExpertList();
    }, []),
  );

  useEffect(() => {
    page !== 0 && getExpertList();
  }, [page]);

  const handleLoadMore = info => {
    // if already loading more, or all loaded, return
    if (loadingMore || allLoaded) return;

    // set loading more (also updates footer text)
    setLoadingMore(true);

    // get next results
    setPage(page + 1);
  };

  const onfliterIconPress = () => setIsExpertFilterModalOpen(true);

  const onViewProfileBtnPress = expert => {
    navigation.navigate('StylistProfile', {expert: expert});
  };

  const onApplyFilter = () => {
    setIsExpertFilterModalOpen(false);
    getExpertList();
  };

  return (
    <SafeAreaContainer style={styles.screen}>
      <HeaderBar
        backButton
        leftClick={() => navigation.goBack()}
        rightIcon={<FilterIcon />}
        rightClick={onfliterIconPress}
        containerStyle={styles.pageHeader}
      />

      <Heading
        title={data.value || 'All Experts'}
        style={styles.pageHeading}
        containerStyle={{marginBottom: 0}}
      />

      <View style={styles.viewTotal}>
        {isLoading ? (
          <Loader color="#fff" size={15} />
        ) : (
          <Text style={styles.viewProfileBtn__Text}>{total} Found</Text>
        )}
      </View>

      {!isLoading ? (
        <FlatList
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{flexGrow: 1}}
          data={expertsFound}
          ListEmptyComponent={<NoExpertFound />}
          renderItem={({item}) => (
            <ExpertCard
              expert={item}
              onViewBtnPress={() => onViewProfileBtnPress(item)}
            />
          )}
          keyExtractor={(item, index) => index}
          onEndReached={handleLoadMore}
          onEndReachedThreshold={0.7}
          initialNumToRender={20}
          ListFooterComponent={
            <View
              style={{
                alignItems: 'center',
                paddingBottom: 15,
              }}>
              {loadingMore && <Loader color={Colors.PRIMARY} size={40} />}
            </View>
          }
        />
      ) : (
        <Loader color={Colors.PRIMARY} size={40} />
      )}

      <ExpertFilterModal
        {...{
          showCategoryFilter,
          categories,
          selectedCategories,
          setSelectedCategories,
          minCost,
          maxCost,
          multiSliderValue,
          setMultiSliderValue,
        }}
        isVisible={isExpertFilterModalOpen}
        onSwipeHide={() => setIsExpertFilterModalOpen(false)}
        onApplyFilter={onApplyFilter}
      />
    </SafeAreaContainer>
  );
};

export default ExpertList;

const styles = EStyleSheet.create({
  $screenWidth: '100%',

  screen: {
    paddingTop: dpToHeightPercent(55),
    paddingBottom: dpToHeightPercent(75), // 75 bottom navigation height
    paddingHorizontal: dpToHeightPercent(35),
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    borderRadius: 18,
    overflow: 'hidden',
  },

  pageHeader: {
    width: '1 * $screenWidth',
    paddingHorizontal: dpToHeightPercent(10),
  },

  pageHeading: {
    fontSize: Typography._28,
    lineHeight: Typography._34,
    marginBottom: dpToHeightPercent(20),
  },

  searchBar: {
    marginBottom: dpToHeightPercent(50),
  },

  historyTitle: {
    fontSize: Typography._18,
    lineHeight: Typography._22,
    fontFamily: Fonts.BOLD,
    marginBottom: dpToHeightPercent(35),
  },

  historyItem: {
    color: Colors.PRIMARY,
    fontSize: Typography._16,
    lineHeight: Typography._20,
    fontFamily: Fonts.MEDIUM,
    marginBottom: dpToHeightPercent(30),
  },

  expertCard: {
    borderRadius: 18,
    padding: '5.3%',
    backgroundColor: '#FAFAFA',
    marginBottom: dpToHeightPercent(22),
  },

  expertBody: {
    flexDirection: 'row',
  },

  expert__avatar: {
    width: '19.26%',
    aspectRatio: 1,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#F2F2F2',
    backgroundColor: 'pink',
    marginRight: '5.19%',
  },

  expert__info: {
    flexGrow: 1,
  },

  expert__name: {
    color: Colors.LABEL,
    fontSize: Typography._14,
    lineHeight: Typography._16,
    fontFamily: Fonts.HEAVY,
    marginBottom: dpToHeightPercent(6),
  },

  expert__rating: {
    alignSelf: 'flex-start',
    padding: 6,
    borderRadius: 16,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F0EFFF',
    marginBottom: dpToHeightPercent(10),
  },

  expert__rating__count: {
    marginLeft: 4,
    color: Colors.PRIMARY,
    fontSize: Typography._10,
    lineHeight: Typography._12,
    fontFamily: Fonts.MEDIUM,
  },

  expertMeta: {
    flexDirection: 'row',
    marginBottom: dpToHeightPercent(8),
  },

  expertMeta__Icon: {
    minWidth: 14,
    width: '6.86%',
    aspectRatio: 1,
    marginRight: '2.94%',
  },

  expertMeta__Text: {
    color: Colors.SECONDARY_TEXT,
    fontSize: Typography._12,
    marginRight: '2%',
    lineHeight: Typography._16,
    fontFamily: Fonts.MEDIUM,
  },

  expertFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: dpToHeightPercent(20),
  },

  expertCost__price: {
    color: Colors.LABEL,
    fontSize: Typography._14,
    lineHeight: Typography._16,
    fontFamily: Fonts.HEAVY,
    marginBottom: dpToHeightPercent(5),
  },

  expertCost__Text: {
    color: Colors.SECONDARY_TEXT,
    fontSize: Typography._10,
    lineHeight: Typography._12,
    fontFamily: Fonts.MEDIUM,
  },

  viewProfileBtn: {
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 8,
    backgroundColor: Colors.PRIMARY,
  },
  viewTotal: {
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 8,
    marginBottom: '5%',
    alignSelf: 'flex-start',
    backgroundColor: Colors.PRIMARY,
  },

  viewProfileBtn__Text: {
    color: '#FFF',
    fontSize: Typography._12,
    fontFamily: Fonts.ROMAN,
  },

  noResultTitle: {
    color: Colors.LABEL,
    fontSize: Typography._20,
    lineHeight: Typography._18,
    fontFamily: Fonts.HEAVY,
    marginTop: dpToHeightPercent(30),
    marginBottom: dpToHeightPercent(10),
  },

  noResultSubTitle: {
    maxWidth: 250,
    color: '#979797',
    fontSize: Typography._12,
    lineHeight: Typography._16,
    fontFamily: Fonts.ROMAN,
    textAlign: 'center',
  },
});
