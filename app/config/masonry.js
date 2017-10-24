import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  fillsContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%'
  },
  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  hugRightEdge: {
    alignSelf: 'flex-end'
  },
  labelBlockText: {
    color: 'white',
    backgroundColor: 'black',
    padding: 8,
    margin: 12,
    fontSize: 24
  }
});
