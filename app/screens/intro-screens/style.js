import { StyleSheet } from 'react-native';
import { Fonts, Colors } from '../../theme';
import { heightPercentageToDP } from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  textContainer: {
    left: 40,
    maxWidth: 300,
    position: 'absolute',
    bottom: '17.5%',
  },
  header: {
    color: '#1A1A1A',
    fontSize: 24,
    fontFamily: Fonts.BOLD,
    marginBottom: 10,
    lineHeight: 30,
  },
  subHeader: {
    color: '#80838C',
    fontSize: 12,
    fontFamily: Fonts.ROMAN,
    lineHeight: 16,
  },
  paginationContainer: {
    position: 'absolute',
    alignSelf: 'flex-start',
    bottom: 30,
    left: '5.5%',
  },
  paginationDots: {
    height: 16,
    margin: 16,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dotStyle: {
    backgroundColor: '#C1BCFF',
    height: 6,
    width: 6,
    borderRadius: 5,
    marginHorizontal: 4,
  },
  activeDotStyle: {
    backgroundColor: '#6A60DA',
    borderRadius: 6,
    width: 16,
    height: 6,
  },
  paginationText: {
    fontFamily: Fonts.MEDIUM,
    fontSize: 14,
    marginLeft: 15,
  },
  buttonSkip: {
    backgroundColor: '#FFFFFF',
    borderColor: '#D0D0D0',
    borderWidth: 1,
    borderRadius: 12,
    position: 'absolute',
    top: 15,
    right: 25,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  skipBtnText: {
    fontFamily: Fonts.HEAVY,
    fontSize: heightPercentageToDP('1.6%'),
  },
  buttonCircle: {
    width: 40,
    height: 40,
    backgroundColor: 'rgba(0, 0, 0, .3)',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  doneBtnStyle: {
    position: 'absolute',
    right: 25,
    bottom: 40,
    height: 60,
    width: 60,
    backgroundColor: Colors.PRIMARY,
    borderRadius: 18,
    shadowColor: '#382D7C29',
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowRadius: 28,
  },
});

export default styles;
