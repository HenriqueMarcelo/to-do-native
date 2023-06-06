import { FlatList, Text, View } from 'react-native'
import { style } from './styles'
import { Header } from '../../components/Header'
import { Form } from '../../components/Form'
import { Counters } from '../../components/Counters'
import { AnyTasks } from '../../components/AnyTasks'

export function Home() {
  const tasks = [] as string[]
  return (
    <View style={style.container}>
      <Header />
      <View style={style.subContainer}>
        <Form />
        <Counters />

        <FlatList
          data={tasks}
          keyExtractor={(item) => item}
          renderItem={({ item }) => <Text>{item}</Text>}
          ListEmptyComponent={AnyTasks}
        />
      </View>
    </View>
  )
}
