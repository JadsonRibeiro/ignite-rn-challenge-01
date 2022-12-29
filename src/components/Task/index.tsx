import { useEffect, useState } from 'react';
import { Text, View } from 'react-native';

import { DeleteButton } from '../Buttons/DeleteButton';
import { Checkbox } from '../Checkbox';

import { styles } from './styles';

type Props = {
  text: string;
  checked: boolean;
  onStatusChange: (checked: boolean) => void;
  onDeleteRequest: () => void;
}

export function Task({ text, checked: currentStatus, onStatusChange, onDeleteRequest }: Props) {
  const [checked, setChecked] = useState(currentStatus)

  useEffect(() => {
    onStatusChange(checked);
  }, [checked])

  return (
    <View style={styles.container}>
      <Checkbox checked={checked} onPress={() => setChecked(!checked)} />
      <Text 
        style={checked ? [styles.text, styles.textChecked] : styles.text}
        onPress={() => setChecked(!checked)}
      >{text}</Text>
      <DeleteButton onPress={onDeleteRequest} />
    </View>
  )
}
