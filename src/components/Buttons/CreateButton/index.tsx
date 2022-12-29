import { TouchableOpacity, TouchableOpacityProps } from 'react-native'
import { Ionicons } from '@expo/vector-icons';

import { styles } from './styles';

export default function CreateButton(props: TouchableOpacityProps) {
  return (
    <TouchableOpacity {...props} style={styles.buton}>
      <Ionicons name="add-circle-outline" size={20} color="white" />
    </TouchableOpacity>
  )
}
