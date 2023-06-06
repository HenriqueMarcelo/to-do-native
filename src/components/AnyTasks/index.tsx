import { Text, View } from 'react-native'
import { styles } from './styles'
import Icon from '../../../assets/clipboard.svg'

export function AnyTasks() {
  return (
    <View style={styles.container}>
      <Icon style={styles.icon} />
      <Text style={styles.text1}>Você ainda não tem tarefas cadastradas</Text>
      <Text style={styles.text2}>
        Crie tarefas e organize seus itens a fazer
      </Text>
    </View>
  )
}
