import { View } from 'react-native'
import { style } from './styles'
import { Header } from '../../components/Header'
import { Form } from '../../components/Form'
import { Counters } from '../../components/Counters'

export function Home() {
  return (
    <View style={style.container}>
      <Header />
      <View style={style.subContainer}>
        <Form />
        <Counters />
      </View>
    </View>
  )
}
