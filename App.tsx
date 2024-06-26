/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect, useState} from 'react';
import {
  Button,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

interface Task {
  key: string;
  text: string;
  completed: boolean;
}
const App = () => {
  const [task, setTask] = useState<string>('');
  const [tasks, setTasks] = useState<Task[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');

  const addTask = () => {
    if (task.trim()) {
      setTasks([
        ...tasks,
        {key: String(tasks.length + 1), text: task, completed: false},
      ]);
      setTask('');
    }
  };
  const toggleTask = (index: number) => {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
  };
  const removeTask = (index: number) => {
    const newTask = tasks.filter((_, i) => i !== index);
    setTasks(newTask);
  };
  const filterTasks = searchQuery
    ? tasks.filter(t => {
        return t.text.toLowerCase().includes(searchQuery.toLowerCase());
      })
    : tasks;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inputContainers}>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder=" Add new Task"
            value={task}
            onChangeText={setTask}></TextInput>
        </View>
        <Button title="Add Task" onPress={addTask} />
      </View>
      <View style={styles.inputContainerSearch}>
        <TextInput
          style={styles.input}
          placeholder=" Search Tasks"
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>
      <FlatList
        data={filterTasks}
        keyExtractor={task => task.key.toString()}
        renderItem={({item, index}) => (
          <View style={styles.taskItem}>
            <Text
              style={[
                styles.taskText,
                item.completed && styles.taskTextCompleted,
              ]}
              onPress={() => toggleTask(index)}>
              {item.text}
            </Text>
            <TouchableOpacity onPress={() => removeTask(index)}>
              <Text style={styles.removeTaskText}>Remove</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  inputContainers: {
    flexDirection: 'row',
    width: '100%',
    backgroundColor: 'blue',
    alignItems: 'center',
  },
  inputContainerSearch: {
    flexDirection: 'row',
    width: '90%',
    height: 40,
    margin: 10,
    borderWidth: 1,
    backgroundColor: 'white',
  },
  inputContainer: {
    flexDirection: 'row',
    width: '60%',
    height: 40,
    margin: 10,
    borderWidth: 1,
    backgroundColor: 'white',
  },
  taskItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  taskText: {
    fontSize: 16,
  },
  taskTextCompleted: {
    textDecorationLine: 'line-through',
    color: 'gray',
  },
  removeTaskText: {
    color: 'red',
  },
});
export default App;
