import { Text, View } from "react-native";
import { style } from "./styles";
import { Header } from "../../components/Header";

export function Home() {
    return(
        <View style={style.container}>
            <Header/>
            <Text>Banana</Text>
        </View>
    )
}