import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons'

import { styles } from './styles';

type Props = {
  checked: boolean;
  onPress: (checked: boolean) => void;
}

export function Checkbox({ checked, onPress }: Props) {
  return (
    <TouchableOpacity 
      style={checked ? [styles.checkbox, styles.active] : styles.checkbox}
      onPress={() => onPress(!checked)}
    >
      {checked && (
        <Ionicons name="checkmark" size={14} color="white" />
      )}
    </TouchableOpacity>
  )
}
