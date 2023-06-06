import { Text, View } from 'react-native'
import { style } from './styles'
import Logo from '../../../assets/logo.svg'

export function Header() {
  return (
    <View style={style.container}>
      <Logo width={120} height={40} />
    </View>
  )
}
