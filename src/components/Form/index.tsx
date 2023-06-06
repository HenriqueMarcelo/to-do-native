import { Text, TextInput, TouchableOpacity, View } from 'react-native'
import { styles } from './styles'
import { useState } from 'react'
import { TaskType } from '../../screens/Home'

interface FormProps {
  onCreateTask: (task: TaskType) => void
}

export function Form({ onCreateTask }: FormProps) {
  const [inputText, setInputText] = useState('')

  function handleAddTask() {
    const task = {
      id: Date.now().toString(36),
      text: inputText,
      completedAt: null,
    } as TaskType

    setInputText('')

    onCreateTask(task)
  }

  return (
    <View style={styles.form}>
      <TextInput
        style={styles.input}
        placeholder="Adicione uma nova tarefa"
        placeholderTextColor="#808080"
        onChangeText={setInputText}
        value={inputText}
      />

      <TouchableOpacity style={styles.button} onPress={handleAddTask}>
        <Text style={styles.buttonText}>+</Text>
      </TouchableOpacity>
    </View>
  )
}
