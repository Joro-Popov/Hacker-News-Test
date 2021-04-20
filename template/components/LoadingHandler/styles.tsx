import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: '5%',
  },
  modalContentContainer: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentContainer: {
    width: Dimensions.get('window').width / 1.5,
    height: '10%',
    backgroundColor: 'white',
    borderRadius: 15,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: '5%',
  },
  text: {
    paddingLeft: '10%',
    fontSize: Dimensions.get('window').width / 20,
    color: '#868484',
  },
});

export default styles;
