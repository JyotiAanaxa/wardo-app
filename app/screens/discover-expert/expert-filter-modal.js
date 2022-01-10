import React, {useEffect, useState} from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import {Animated, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import MultiSlider from '@ptomasroos/react-native-multi-slider';

import {BottomHalfModal} from '../../components/modals/bottom-half-modal/bottomhalf-modal';
import PurpleFlowerShapeCheckIcon from '../../icons/purple-flower-shape-check';

import CustomCheckbox from '../../components/form/custom-checkbox';
import CustomLabel from './multislider-custom-label';

import {currencyFormatter, dpToHeightPercent} from '../../utils/app-util';
import {Colors, Fonts, Typography} from '../../theme';

const FilterOption = ({label, value, isChecked, onChange}) => (
  <View style={styles.filterOption}>
    <View style={{width: '5.63%', aspectRatio: 1}}>
      <PurpleFlowerShapeCheckIcon width="100%" height="100%" />
    </View>
    <Text style={styles.filterOption__text}>{label}</Text>

    <CustomCheckbox
      size={17}
      isChecked={isChecked}
      onPress={() => onChange(value)}
    />
  </View>
);

const CustomMarker = () => <View style={styles.customMarker} />;

const ExpertFilterModal = ({
  isVisible,
  onSwipeHide,
  showCategoryFilter,
  categories,
  selectedCategories,
  setSelectedCategories,
  minCost,
  maxCost,
  multiSliderValue,
  setMultiSliderValue,
  onApplyFilter,
}) => {
  const [priceRangeContainerWidth, setPriceRangeContainerWidth] = useState();

  const onCategorySelect = key => {
    if (isSelected(key)) {
      setSelectedCategories(selectedCategories.filter(item => item !== key));
    } else {
      setSelectedCategories([key, ...selectedCategories]);
    }
  };

  const isSelected = key => {
    return selectedCategories.includes(key);
  };

  const onPriceRangeContainerLayout = event => {
    const {width, height} = event.nativeEvent.layout;
    if (width !== priceRangeContainerWidth) {
      setPriceRangeContainerWidth(width);
    }
  };

  const onsliderValuesChangeFinish = values => setMultiSliderValue(values);

  const BodyComponent = () => {
    return (
      <View style={styles.modalContainer}>
        <View style={styles.line} />

        <Text style={styles.heading}>Filters</Text>

        <View>
          {showCategoryFilter && categories.length && (
            <View style={styles.category}>
              <Text
                style={[
                  styles.modal__heading__h2,
                  {marginBottom: dpToHeightPercent(20)},
                ]}>
                Category
              </Text>

              {categories.map((item, index) => (
                <View key={index}>
                  <FilterOption
                    isChecked={isSelected(item.key)}
                    label={item.value}
                    value={item.key}
                    onChange={onCategorySelect}
                  />
                </View>
              ))}
            </View>
          )}

          <View style={styles.price}>
            <Text style={styles.modal__heading__h2}>Price</Text>
            <Text style={styles.price__range}>
              Rs. {multiSliderValue[0]} - Rs. {multiSliderValue[1]}
            </Text>
          </View>

          <View
            onStartShouldSetResponder={event => false}
            onLayout={onPriceRangeContainerLayout}
            style={styles.priceRangeContainerStyle}>
            <MultiSlider
              imageBackgroundSource={require('../../../assets/img/price-range-bg.png')}
              min={minCost}
              max={maxCost}
              step={1000}
              enableLabel
              customLabel={CustomLabel}
              isMarkersSeparated={true}
              sliderLength={priceRangeContainerWidth}
              customMarkerLeft={e => <CustomMarker />}
              customMarkerRight={e => <CustomMarker />}
              values={[multiSliderValue[0], multiSliderValue[1]]}
              onValuesChangeFinish={onsliderValuesChangeFinish}
              containerStyle={{
                height: undefined,
                aspectRatio: 5.2,
                justifyContent: 'flex-end',
                marginBottom: 10,
              }}
              trackStyle={{backgroundColor: '#D0D0D0'}}
              selectedStyle={{backgroundColor: Colors.PRIMARY}}
            />

            <View flexDirection="row" justifyContent="space-between">
              <Text style={styles.priceRangeLabel}>
                ₹{currencyFormatter(minCost)}
              </Text>
              <Text style={styles.priceRangeLabel}>
                ₹{currencyFormatter(maxCost)}
              </Text>
            </View>
          </View>
        </View>

        <TouchableOpacity onPress={onApplyFilter} style={styles.filterCTA}>
          <Text style={styles.filterCTA__Label}>Apply Filter</Text>
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <BottomHalfModal
      propagateSwipe={true}
      isVisible={isVisible}
      onSwipeHide={onSwipeHide}
      body={<BodyComponent />}
    />
  );
};

export default ExpertFilterModal;

const styles = EStyleSheet.create({
  modalContainer: {
    paddingTop: 10,
    paddingHorizontal: dpToHeightPercent(36),
  },

  line: {
    alignSelf: 'center',
    width: 40,
    height: 4,
    borderRadius: 20,
    marginTop: dpToHeightPercent(10),
    marginBottom: dpToHeightPercent(24),
    backgroundColor: '#F2F2F2',
  },

  heading: {
    alignSelf: 'center',
    color: Colors.LABEL,
    fontSize: Typography._16,
    lineHeight: Typography._18,
    fontFamily: Fonts.HEAVY,
    marginBottom: dpToHeightPercent(40),
  },

  category: {
    paddingBottom: dpToHeightPercent(40),
  },

  modal__heading__h2: {
    color: Colors.LABEL,
    fontSize: Typography._16,
    lineHeight: Typography._16,
    fontFamily: Fonts.HEAVY,
  },

  filterOption: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: dpToHeightPercent(17),
  },

  filterOption__text: {
    flex: 1,
    paddingHorizontal: '2.8%',
    color: Colors.SECONDARY_TEXT,
    fontSize: Typography._14,
    fontFamily: Fonts.MEDIUM,
  },

  price: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginBottom: dpToHeightPercent(40),
  },

  price__range: {
    color: Colors.PRIMARY,
    fontSize: Typography._16,
    lineHeight: Typography._16,
    fontFamily: Fonts.HEAVY,
  },

  customMarker: {
    height: 24,
    width: 24,
    backgroundColor: Colors.PRIMARY,
    borderWidth: 6,
    borderRadius: 30,
    borderColor: '#FFF',
    shadowColor: '#00000038',
    shadowOffset: {width: 0, height: 3},
    shadowRadius: 10,
    shadowOpacity: 0.29,
    elevation: 2,
  },

  priceRangeContainerStyle: {
    position: 'relative',
    marginBottom: dpToHeightPercent(100),
  },

  priceRangeLabel: {
    color: '#979797',
    fontSize: Typography._12,
    lineHeight: Typography._16,
    fontFamily: Fonts.MEDIUM,
  },

  filterCTA: {
    width: '100%',
    maxWidth: 270,
    alignSelf: 'center',
    borderRadius: 18,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#382D7C',
    shadowOffset: {width: 0, height: 9},
    shadowRadius: 28,
    shadowOpacity: 0.29,
    backgroundColor: Colors.PRIMARY,
  },

  filterCTA__Label: {
    color: '#FFF',
    fontSize: Typography._16,
    lineHeight: Typography._20,
    fontFamily: Fonts.MEDIUM,
  },
});
