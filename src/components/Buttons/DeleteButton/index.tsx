import { TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; 

import { styles } from './styles';
import { Colors } from '../../../styles/global';

export function DeleteButton(props: TouchableOpacityProps) {
  return (
    <TouchableOpacity {...props} style={styles.button}>
      <FontAwesome name="trash-o" size={24} color={Colors.gray300} />
    </TouchableOpacity>
  )
}
