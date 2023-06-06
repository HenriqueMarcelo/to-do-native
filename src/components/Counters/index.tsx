import { Text, View } from 'react-native'
import { styles } from './styles'

export function Counters() {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.thing}>Criadas</Text>
        <Text style={styles.number}>0</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.thang}>Concluídas</Text>
        <Text style={styles.number}>0</Text>
      </View>
    </View>
  )
}
