import { TextInput, TextInputProps } from 'react-native';
import { Colors } from '../../styles/global';

import { styles } from './styles';

export function Input({ style, ...props}: TextInputProps) {
  return (
    <TextInput 
      {...props}
      placeholderTextColor={Colors.gray300}
      style={[styles.input, style]}
    />
  )
}
