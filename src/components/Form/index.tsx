import { Text, TextInput, TouchableOpacity, View } from 'react-native'
import { styles } from './styles'

export function Form() {
  function handleParticipantAdd() {}
  function setInputText() {}
  const inputText = ''

  return (
    <View style={styles.form}>
      <TextInput
        style={styles.input}
        placeholder="Adicione uma nova tarefa"
        placeholderTextColor="#808080"
        onChangeText={setInputText}
        value={inputText}
      />

      <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
        <Text style={styles.buttonText}>+</Text>
      </TouchableOpacity>
    </View>
  )
}
