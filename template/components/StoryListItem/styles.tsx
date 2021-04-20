import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listItemContainer: {
    backgroundColor: '#e5e5e5',
    width: '100%',
    height: height / 5,
    marginBottom: '5%',
    padding: '5%',
    borderRadius: 15,
    shadowColor: 'gray',
    shadowOffset: {width: 0, height: 8},
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 5,
  },
  titleContainer: {
    width: '100%',
    height: '30%',
    borderBottomWidth: 1,
  },
  title: {
    fontSize: width / 30,
    fontWeight: 'bold',
  },
  urlContainer: {
    width: '100%',
    height: '50%',
    justifyContent: 'center',
  },
  url: {
    fontSize: width / 30,
    color: '#0000EE',
  },
  footerContainer: {
    width: '100%',
    height: '25%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  footerSubContainer: {
    width: '50%',
    height: '100%',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  authorName: {
    fontSize: width / 30,
  },
  alignRight: {
    alignItems: 'flex-end',
  },
});

export default styles;
