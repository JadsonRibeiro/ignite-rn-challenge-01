import { StyleSheet } from 'react-native';
import { Colors } from '../../styles/global';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 8,
    borderColor: Colors.gray400,
    padding: 12,
    paddingRight: 8,
    marginBottom: 8,
    height: 64,
    backgroundColor: Colors.gray500
  },
  text: {
    flex: 1,
    fontFamily: 'Inter',
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 19.6,
    marginHorizontal: 8,
    color: Colors.gray100
  },
  textChecked: {
    color: Colors.gray300,
    textDecorationLine: 'line-through'
  }
})