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
  completed: boolean
}

export function Home() {
  const [tasks, setTasks] = useState<TaskType[]>([])

  function handleAddTask(task: TaskType) {
    setTasks([...tasks, task])
  }

  function handleRemoveTask(id: string) {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  function handleCompleteTask(id: string) {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          task.completed = !task.completed
        }
        return task
      }),
    )
  }

  return (
    <View style={style.container}>
      <Header />
      <View style={style.subContainer}>
        <Form onCreateTask={handleAddTask} />
        <Counters tasks={tasks} />

        <FlatList
          data={tasks}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Task
              task={item}
              onRemoveTask={handleRemoveTask}
              onCompleteTask={handleCompleteTask}
            />
          )}
          ListEmptyComponent={AnyTasks}
          contentContainerStyle={{
            paddingBottom: 320,
          }}
        />
      </View>
    </View>
  )
}
