import EStyleSheet from 'react-native-extended-stylesheet';
import { Fonts, Colors, Typography } from '../../theme';
import { heightPercentageToDP } from 'react-native-responsive-screen';
import { Platform } from 'react-native';

export const styles = EStyleSheet.create({
  greetCard: {
    width: 275,
    height: 333,
    borderRadius: 30,
    paddingTop: 30,
    paddingHorizontal: 20,
    backgroundColor: '#FFD067',
    position: 'relative',
    overflow: 'hidden',
  },

  cardBg: {
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: -1,
  },

  greetText: {
    fontFamily: Fonts.HEAVY,
    fontSize: 14,
    lineHeight: 17,
    color: '#FFFFFF',
    marginBottom: 3,
  },

  greetSubText: {
    fontFamily: Fonts.MEDIUM,
    fontSize: 14,
    lineHeight: 17,
    color: '#FFFFFF',
  },

  cardPlusBtn: {
    padding: 20,
    backgroundColor: '#FFFFFF',
    position: 'absolute',
    bottom: 16,
    right: 16,
    borderRadius: 18,
  },

  outfitFooterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingBottom: Platform.OS==='android' ? 15 : heightPercentageToDP('13%'),
  },

  footerIconBtn: {
    borderColor: '#D0D0D0',
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: Colors.WHITE,
    width: 110,
    paddingVertical: 15,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 6,
    shadowOpacity: 0.12,
    elevation: 4,
  },

  chngOutfitBtn: {
    borderColor: '#D0D0D0',
    borderWidth: 1,
    borderRadius: 10,
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: Colors.WHITE,
    paddingHorizontal: 10,
    paddingVertical: 14,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 6,
    shadowOpacity: 0.12,
    elevation: 4,
  },

  footerBtn: {
    fontFamily: Fonts.MEDIUM,
    color: Colors.LABEL,
    fontSize: Typography._10,
    marginTop:Platform.OS==='android' ? 0 : 4,
    backgroundColor: '#FFF',
  },

  footerIconBtn__text: {
    marginTop: 'auto',
    paddingTop: 20,
    fontSize: Typography._12,
  },

  modalContainer: {
    paddingTop: 10,
  },
  lineContainer: {
    width: '100%',
    alignItems: 'center',
  },

  line: {
    height: 3.5,
    borderRadius: 10,
    width: heightPercentageToDP('6%'),
    alignItems: 'center',
    marginTop: 2,
    backgroundColor: '#D0D0D0',
  },

  modalHeading: {
    marginTop: 30,
    paddingBottom: 27,
    borderBottomWidth: 1,
    borderBottomColor: '#D0D0D0',
    paddingHorizontal: 36,
  },

  heading: {
    fontSize: heightPercentageToDP('2.1%'),
    lineHeight: 20,
    fontFamily: Fonts.HEAVY,
  },

  subHeading: {
    fontSize: Typography._12,
    lineHeight: 19,
    color: '#979797',
    fontFamily: Fonts.LIGHT,
  },

  optionContainer: {
    width: '100%',
    paddingTop: heightPercentageToDP('4%'),
    paddingHorizontal: heightPercentageToDP('4.92%'),
  },

  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: heightPercentageToDP('3.69%'),
  },

  'listItem:last-child': {
    marginBottom: 0,
  },

  optionLabel: {
    fontSize: Typography._16,
    lineHeight: Typography._20,
    marginLeft: 12,
    // textTransform: 'capitalize',
    color: Colors.LABEL,
    fontFamily: Fonts.HEAVY,
  },

  compContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
  canvasActionBtn: {
    height: 'auto',
    maxWidth: 90,
    flexDirection: 'column',
    alignItems: 'center',
    marginHorizontal: 5,
  },
  canvasActionBtnLabel: {
    color: Colors.SECONDARY_TEXT,
    fontSize: Typography._10,
    fontFamily: Fonts.MEDIUM,
    textTransform: 'capitalize',
    marginTop: 7,
  },
});
