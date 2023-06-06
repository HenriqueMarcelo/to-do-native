import { Text, View } from 'react-native'
import { styles } from './styles'
import { TaskType } from '../../screens/Home'

interface CoutersProps {
  tasks: TaskType[]
}

export function Counters({ tasks }: CoutersProps) {
  const total = tasks.length
  const completed = tasks.reduce((accumulator, currentValue) => {
    if (currentValue.completed) {
      accumulator += 1
    }
    return accumulator
  }, 0)

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.thing}>Criadas</Text>
        <Text style={styles.number}>{total}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.thang}>Concluídas</Text>
        <Text style={styles.number}>{completed}</Text>
      </View>
    </View>
  )
}
