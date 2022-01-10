import React, {useEffect, useState} from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import {
  ScrollView,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
  View,
} from 'react-native';

import {SafeAreaContainer} from '../../utils/app-container';
import {HeaderBar} from '../../components/header/header';
import {Heading} from '../../components/heading/heading';

import FilterIcon from '../../icons/filter-icon';
import MagnifyingGlassIcon from '../../icons/magnifying-glass-icon';
import {CloseIcon} from '../../icons/close';

import {dpToHeightPercent} from '../../utils/app-util';
import {Colors, Fonts, Typography} from '../../theme';

import {useFocusEffect} from '@react-navigation/native';

import ExpertFilterModal from './expert-filter-modal';
import DataService from '../../services/data-service';
import {Loader} from '../../components/loader/loader';
import NoExpertFound from './no-experts';
import ExpertCard from './expert-card';
import FindExpert from './find-expert';
import AuthService from '../../services/auth';

const SearchBar = ({style = {}, value, setValue, onSearchInputPress}) => {
  const styles = EStyleSheet.create({
    wrapper: {
      width: '100%',
      aspectRatio: 6.04,
      padding: '5%',
      borderRadius: 14,
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#FAFAFA',
    },
  });

  const inputPlaceholderStyle = {
    color: '#D0D0D0',
    fontSize: Typography._13,
    lineHeight: Typography._15,
    fontFamily: Fonts.ROMAN,
  };
  const inputValueStyle = {
    color: Colors.LABEL,
    fontFamily: Fonts.HEAVY,
    fontWeight: 'normal',
  };

  const [inputStyle, setInputStyle] = useState(inputPlaceholderStyle);

  useEffect(() => {
    setInputStyle(value.length > 0 ? inputValueStyle : inputPlaceholderStyle);
  }, [value]);

  return (
    <View style={[styles.wrapper, style]}>
      <View style={{width: '6.77%', minWidth: 18, aspectRatio: 1}}>
        <MagnifyingGlassIcon width="100%" height="100%" />
      </View>

      <TextInput
        onFocus={onSearchInputPress}
        flex={1}
        autoFocus={true}
        placeholder="Search by an expert's name"
        placeholderTextColor="#D0D0D0"
        style={[{paddingVertical: 0, paddingHorizontal: 10}, inputStyle]}
        onChangeText={txt => setValue(txt)}
        value={value}
      />
      {value.length > 0 && (
        <TouchableOpacity style={styles.clearBtn} onPress={() => setValue('')}>
          <CloseIcon />
        </TouchableOpacity>
      )}
    </View>
  );
};

const SearchHistory = ({history = [], onPress}) => (
  <View>
    <Text style={styles.historyTitle}>Recent</Text>
    {history.map((item, index) => (
      <TouchableOpacity key={index} onPress={() => onPress(item)}>
        <Text style={styles.historyItem} numberOfLines={1}>
          {item}
        </Text>
      </TouchableOpacity>
    ))}
  </View>
);

let searchSubscription = null;

const SearchExpert = ({navigation, route}) => {
  const {showCategoryFilter = false, minCost = 0, maxCost = 50000} =
    route.params || {};

  const [searchInpVal, setSearchInpVal] = useState('');
  const [searchHistory, setSearchHistory] = useState([]);

  const [expertsFound, setExpertsFound] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false);
  const [allLoaded, setAllLoaded] = useState(false);

  const [categories, setCategories] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [showNoExpertScreen, setShowNoExpertScreen] = useState(false);
  const [multiSliderValue, setMultiSliderValue] = useState([minCost, maxCost]);
  const [historyVisible, setHistoryVisible] = useState(false);
  const [page, setPage] = useState(0);

  const [isExpertFilterModalOpen, setIsExpertFilterModalOpen] = useState(false);

  const onfliterIconPress = () => setIsExpertFilterModalOpen(true);

  const onHistoryItemPress = expertName => {
    setSearchInpVal(expertName);
    setHistoryVisible(false);
  };

  const onViewProfileBtnPress = expert => {
    if (expert.name) {
      if (!searchHistory.includes(expert.name)) {
        if (searchHistory.length === 5) {
          setSearchHistory(history => {
            let tempArray = [...history];
            tempArray.pop();
            tempArray.unshift(expert.name);

            AuthService.setRecentExpertSearchHistory(tempArray);
            return tempArray;
          });
        } else {
          setSearchHistory(history => {
            let tempArr = [...history];
            tempArr.unshift(expert.name);

            AuthService.setRecentExpertSearchHistory(tempArr);
            return tempArr;
          });
        }
      }
    }

    navigation.navigate('StylistProfile', {expert});
  };

  const searchStylist = pageNo => {
    setHistoryVisible(false);

    if (searchSubscription) {
      searchSubscription.unsubscribe();
    }

    searchSubscription = DataService.getFilteredExpertList(
      pageNo || pageNo === 0 ? pageNo : page,
      searchInpVal,
      selectedCategories,
      multiSliderValue,
    ).subscribe(
      resp => {
        const {content, totalElements} = resp || {};

        const data = content || [];

        if (data.length === 0) {
          setShowNoExpertScreen(true);
        } else {
          setShowNoExpertScreen(false);
        }

        setExpertsFound(prev => {
          if (prev.length + content.length === totalElements) {
            // if no new items were fetched, set all loaded to true to prevent further requests
            setAllLoaded(true);
          }

          return page ? [...prev, ...content] : content;
        });

        setIsLoading(false);

        // load more complete, set loading more to false
        setLoadingMore(false);
      },
      error => {
        console.error(error);
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
      error => {},
    );
  };

  useEffect(() => {
    page !== 0 && searchStylist();
  }, [page]);

  const handleLoadMore = info => {
    // if already loading more, or all loaded, return
    if (loadingMore || allLoaded) return;

    // set loading more (also updates footer text)
    setLoadingMore(true);

    // get next results
    setPage(page + 1);
  };

  const setRecentHistory = async () => {
    const recentSearchHistory = await AuthService.getRecentExpertSearchHistory();
    recentSearchHistory && setSearchHistory(recentSearchHistory);
  };

  useFocusEffect(
    React.useCallback(() => {
      setRecentHistory();
      fetchCategories();
    }, []),
  );

  const onSearchInputPress = () => {
    setHistoryVisible(true);
  };

  const onSearchChange = val => setSearchInpVal(val);

  useEffect(() => {
    if (searchInpVal === '') {
      setHistoryVisible(true);
      setPage(0);
      setExpertsFound([]);
    } else {
      setAllLoaded(false);
      setIsLoading(true);
      searchStylist();
    }
  }, [searchInpVal]);

  const onFilterApply = () => {
    setIsExpertFilterModalOpen(false);
    setExpertsFound([]);
    setPage(0);
    setAllLoaded(false);
    setIsLoading(true);
    searchStylist(0);
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
        title="Search"
        style={styles.pageHeading}
        containerStyle={{marginBottom: 0}}
      />

      <SearchBar
        onSearchInputPress={onSearchInputPress}
        style={styles.searchBar}
        value={searchInpVal}
        setValue={onSearchChange}
      />

      {historyVisible && searchHistory.length > 0 ? (
        <SearchHistory history={searchHistory} onPress={onHistoryItemPress} />
      ) : isLoading ? (
        <Loader color={Colors.PRIMARY} size={40} />
      ) : (
        <FlatList
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{flexGrow: 1}}
          data={expertsFound}
          ListEmptyComponent={
            showNoExpertScreen ? <NoExpertFound /> : <FindExpert />
          }
          renderItem={({item}) => (
            <ExpertCard
              expert={item}
              onViewBtnPress={() => onViewProfileBtnPress(item)}
            />
          )}
          keyExtractor={(item, index) => index}
          onEndReached={handleLoadMore}
          onEndReachedThreshold={0.5}
          initialNumToRender={10}
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
        onApplyFilter={onFilterApply}
      />
    </SafeAreaContainer>
  );
};

export default SearchExpert;

const styles = EStyleSheet.create({
  $screenWidth: '100%',

  screen: {
    paddingTop: dpToHeightPercent(55),
    paddingBottom: dpToHeightPercent(75), // 75 bottom navigation height
    paddingHorizontal: dpToHeightPercent(35),
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
