import { StyleSheet } from 'react-native';
import { Colors, Fonts } from '../../theme';
import { heightPercentageToDP } from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  octopusLogoContainer: {
    width: 40,
    height: 40,
    padding: 4,
    borderRadius: 8,
    backgroundColor: Colors.PRIMARY,
  },
  logo: {
    width: 300,
    height: 200,
  },
  caption: {
    color: Colors.PRIMARY,
    fontSize: 22,
    fontFamily: Fonts.ROMAN,
  },
  getStartedBtn: {
    width: heightPercentageToDP('28%'),
    height: heightPercentageToDP('7%'),
    backgroundColor: Colors.PRIMARY,
    justifyContent: 'center',
    borderRadius: 18,
    shadowColor: '#382D7C29',
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowRadius: 28,
    elevation: 8,
    alignSelf: 'auto',
    marginTop: 'auto',
    position: 'absolute',
    bottom: 50
  },
  getStartedBtnText: {
    color: '#FFF',
    fontFamily: Fonts.HEAVY,
    fontSize: 16,
  },
});

export default styles;
