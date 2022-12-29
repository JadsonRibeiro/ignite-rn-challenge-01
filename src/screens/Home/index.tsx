import { useState } from "react";
import { View, Image, Text, FlatList, Alert } from "react-native";

import CreateButton from "../../components/Buttons/CreateButton";
import { Logo } from "../../components/Icons/Logo";
import { Input } from "../../components/Input/inde";
import { Task } from "../../components/Task";

import { styles } from './styles';

type ITask = {
  id: string;
  checked: boolean;
  text: string;
}

export function Home() {
  const [tasks, setTasks] = useState<ITask[]>([]);

  const [taskText, setTaskText] = useState('');

  function EmptyListComponent() {
    return (
      <View style={styles.emptyListBox}>
        <Image source={require('../../../assets/images/clipboard.png')} />
        <Text style={styles.emptyListTitle}>Você ainda não tem tarefas cadastradas. </Text> 
        <Text style={styles.emptyListSubtitle}>Crie tarefas e organize seus itens a fazer</Text>
      </View>
    )
  }

  function handleAddTask() {
    if(!taskText)
      return;

    const newTask = {
      checked: false, 
      text: taskText,
      id: String(Math.floor(Math.random() * 99999))
    };

    setTasks(prevValue => [newTask, ...prevValue]);
    setTaskText('');
  }

  function handleDeleteTaks(taskId: string) {
    Alert.alert('Atenção!', 'Tem certeza que deseja deletar essa task?', [
      {
        text: 'Sim',
        onPress: () => setTasks(prevValue => prevValue.filter((item) => item.id !== taskId))
      },
      {
        text: 'Não'
      }
    ]);
  }

  function handleTaskStatusUpdate(taskId: string, newStatus: boolean) {
    let tasksCopy = [...tasks];

    const index = tasks.findIndex(item => item.id === taskId);

    if(index === -1)
      return;

    tasksCopy[index].checked = newStatus;
    setTasks(tasksCopy);
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Logo />
      </View>
      <View style={styles.body}>
        <View style={styles.formBox}>
          <Input 
            placeholder="Adicione uma nova tarefa"
            style={styles.formBoxInput}
            onChangeText={setTaskText}
            value={taskText}
          />
          <CreateButton onPress={handleAddTask} />
        </View>
        <View style={styles.quantityBox}>
          <View style={styles.quantityBoxInfo}>
            <Text style={styles.quantityBoxLabel}>Criadas</Text>
            <Text style={styles.quantityBoxTag}>{tasks.length}</Text>
          </View>
          <View style={styles.quantityBoxInfo}>
            <Text style={[styles.quantityBoxLabel, styles.quantityBoxLabelCompleted]}>Concluídas</Text>
            <Text style={styles.quantityBoxTag}>{tasks.filter(item => item.checked).length}</Text>
          </View>
        </View>
        <FlatList 
          data={tasks}
          renderItem={({ item }) => (<Task
            checked={item.checked} 
            text={item.text} 
            onDeleteRequest={() => handleDeleteTaks(item.id)}
            onStatusChange={checked => handleTaskStatusUpdate(item.id, checked)}
          />)}
          ListEmptyComponent={EmptyListComponent}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  )
}