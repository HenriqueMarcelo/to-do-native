import { FlatList, View } from 'react-native'
import { style } from './styles'
import { Header } from '../../components/Header'
import { Form } from '../../components/Form'
import { Counters } from '../../components/Counters'
import { AnyTasks } from '../../components/AnyTasks'
import { Task } from '../../components/Task'
import { useState } from 'react'

export interface TaskType {
  id: string
  text: string
  completedAt: Date | null
}

export function Home() {
  const [tasks, setTasks] = useState<TaskType[]>([])

  function handleAddTask(task: TaskType) {
    setTasks([...tasks, task])
  }

  return (
    <View style={style.container}>
      <Header />
      <View style={style.subContainer}>
        <Form onCreateTask={handleAddTask} />
        <Counters />

        <FlatList
          data={tasks}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <Task />}
          ListEmptyComponent={AnyTasks}
          contentContainerStyle={{
            paddingBottom: 320,
          }}
        />
      </View>
    </View>
  )
}
