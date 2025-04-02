import { Text, View, StyleSheet} from "react-native";

export default function About(){
    
    return(
        <View style={estilo.conteiner}> {/* renderiza o estilo */}
        <Text style={estilo.text}>About Screen</Text>
        </View>
    )
}

//estilos --------------------------------------------------------
const estilo = StyleSheet.create({
    conteiner: {
        flex: 1,
        backgroundColor: '#25292e',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: '#ffff',
    }
});