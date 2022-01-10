import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import {Text, TouchableOpacity, View, Image} from 'react-native';
// import {StarsIcon} from '../../icons/stars';
import PurpleFlowerShapeCheckIcon from '../../icons/purple-flower-shape-check';
import UnverifiedExpertIcon from '../../icons/unverified-expert';
import {TimeIcon} from '../../icons/time';

import {
  currencyFormatter,
  dpToHeightPercent,
  // toTitleCase,
} from '../../utils/app-util';
import {Colors, Fonts, Typography} from '../../theme';
import ProfilePic from '../../components/profile-pic';

const ExpertCard = ({expert, onViewBtnPress}) => {
  const {name, gender, stylistInfo} = expert || {};

  console.log({name, gender,})

  const {
    profilePicUrl,
    userCategoryObject,
    experienceRangeObject,
    minPrice,
    maxPrice,
  } = stylistInfo || {};

  const formattedMinPrice = minPrice && currencyFormatter(minPrice);
  const formattedMaxPrice = maxPrice && currencyFormatter(maxPrice);

  const estimatedCost =
    minPrice === maxPrice
      ? `Starting from Rs. ${formattedMinPrice}`
      : `Rs. ${formattedMinPrice} - Rs. ${formattedMaxPrice}`;

  return (
    <View style={styles.expertCard}>
      <View style={styles.expertBody}>
        <ProfilePic
          url={profilePicUrl}
          name={name}
          gender={gender}
          style={styles.expert__avatar}
          textStyle={{
            fontSize: Typography._14,
            fontFamily: Fonts.BOLD,
            letterSpacing: 4,
          }}
        />

        <View style={styles.expert__info}>
          <Text style={styles.expert__name}>{name}</Text>
          <Text
            style={{
              color: '#80838C',
              fontSize: Typography._12,
              lineHeight: Typography._14,
              fontFamily: Fonts.HEAVY,
              marginBottom: dpToHeightPercent(10),
            }}>
            No rating available
          </Text>

          {userCategoryObject && (
            <View style={styles.expertMeta}>
              <View style={styles.expertMeta__Icon}>
                {userCategoryObject.value ? (
                  <PurpleFlowerShapeCheckIcon width="100%" height="100%" />
                ) : (
                  <UnverifiedExpertIcon width="100%" height="100%" />
                )}
              </View>
              <View style={{flex: 1, flexDirection: 'row', flexWrap: 'wrap'}}>
                <Text style={styles.expertMeta__Text}>
                  {userCategoryObject.value
                    ? userCategoryObject.value
                    : 'Unverified'}
                </Text>
              </View>
            </View>
          )}

          {experienceRangeObject && (
            <View style={styles.expertMeta}>
              <View style={styles.expertMeta__Icon}>
                <TimeIcon width="100%" height="100%" />
              </View>
              <Text style={styles.expertMeta__Text}>
                {experienceRangeObject.value}
              </Text>
            </View>
          )}
        </View>
      </View>

      <View style={styles.expertFooter}>
        {minPrice && (
          <View style={styles.expertCost}>
            <Text style={styles.expertCost__price}>{estimatedCost}</Text>
            <Text style={styles.expertCost__Text}>Estimated Cost</Text>
          </View>
        )}
        <TouchableOpacity
          style={styles.viewProfileBtn}
          onPress={onViewBtnPress}>
          <Text style={styles.viewProfileBtn__Text}>View Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ExpertCard;

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
    marginRight: '5.19%',
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },

  expert__info: {
    flexGrow: 1,
  },

  expert__name: {
    color: Colors.LABEL,
    fontSize: Typography._14,
    lineHeight: Typography._16,
    fontFamily: Fonts.HEAVY,
    marginBottom: dpToHeightPercent(5),
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
    marginLeft: 'auto',
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
