import { FlatList, View } from 'react-native'
import { style } from './styles'
import { Header } from '../../components/Header'
import { Form } from '../../components/Form'
import { Counters } from '../../components/Counters'
import { AnyTasks } from '../../components/AnyTasks'
import { Task } from '../../components/Task'

export function Home() {
  const tasks = ['many', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'] as string[]
  return (
    <View style={style.container}>
      <Header />
      <View style={style.subContainer}>
        <Form />
        <Counters />

        <FlatList
          data={tasks}
          keyExtractor={(item) => item}
          renderItem={({ item }) => <Task />}
          ListEmptyComponent={AnyTasks}
        />
      </View>
    </View>
  )
}
