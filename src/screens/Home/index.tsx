import { Text, View } from "react-native";
import { style } from "./styles";
import { Header } from "../../components/Header";
import { Form } from "../../components/Form";

export function Home() {
    return(
        <View style={style.container}>
            <Header/>
            <View style={style.subContainer} >
                <Form />
                <Text>Banana</Text>
            </View>
        </View>
    )
}