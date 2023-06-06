import { Text, TouchableOpacity, View } from 'react-native'
import { styles } from './styles'
import Trash from '../../../assets/trash.svg'
import { TaskType } from '../../screens/Home'

interface TaskProps {
  task: TaskType
  onRemoveTask: (id: string) => void
  onCompleteTask: (id: string) => void
}

export function Task({ task, onRemoveTask, onCompleteTask }: TaskProps) {
  function handleCompleteTask() {
    onCompleteTask(task.id)
  }

  function handleRemoveTask() {
    onRemoveTask(task.id)
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={handleCompleteTask}>
        {task.completed ? (
          <View style={styles.circleCheck}>
            <Text style={styles.iconCheck}>&#x2714;</Text>
          </View>
        ) : (
          <View style={styles.circle}></View>
        )}
      </TouchableOpacity>
      {task.completed ? (
        <Text style={styles.textCheck}>{task.text}</Text>
      ) : (
        <Text style={styles.text}>{task.text}</Text>
      )}

      <TouchableOpacity style={styles.button} onPress={handleRemoveTask}>
        <Trash style={styles.buttonIcon} />
      </TouchableOpacity>
    </View>
  )
}
