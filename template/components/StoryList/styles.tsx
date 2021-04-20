import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    padding: '5%',
  },
  webViewContainer: {
    flex: 1,
  },
  webviewHeader: {
    height: height / 15,
    justifyContent: 'center',
    paddingHorizontal: '5%',
  },
  backText: {
    fontSize: width / 25,
    color: '#0000EE',
  },
});

export default styles;
