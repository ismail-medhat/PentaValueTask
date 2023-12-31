import {StyleSheet} from 'react-native';
import {Colors, Fonts} from 'common';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.primary,
  },
  seoudiTxt: {
    color: Colors.white,
    fontSize: 30,
    fontFamily: Fonts.semi_bold,
    letterSpacing: 2,
  },
});

export default styles;
