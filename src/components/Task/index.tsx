import { Text, TouchableOpacity, View } from 'react-native'
import { styles } from './styles'
import Trash from '../../../assets/trash.svg'

export function Task() {
  const check = Math.random() < 0.5
  function handleParticipantAdd() {}
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
        {check ? (
          <View style={styles.circleCheck}>
            <Text style={styles.iconCheck}>&#x2714;</Text>
          </View>
        ) : (
          <View style={styles.circle}></View>
        )}
      </TouchableOpacity>
      {check ? (
        <Text style={styles.textCheck}>
          Integer urna interdum massa libero auctor neque turpis turpis semper.
        </Text>
      ) : (
        <Text style={styles.text}>
          Integer urna interdum massa libero auctor neque turpis turpis semper.
        </Text>
      )}

      <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
        <Trash style={styles.buttonIcon} />
      </TouchableOpacity>
    </View>
  )
}
