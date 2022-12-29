import { StyleSheet } from 'react-native';
import { Colors } from '../../styles/global';

export const styles = StyleSheet.create({
  checkbox: {
    width: 24,
    height: 24,
    borderRadius: 24,
    borderColor: Colors.blue,
    borderWidth: 1,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center'
  },
  active: {
    backgroundColor: Colors.purpleDark,
    borderColor: Colors.purpleDark,
  }
})