import { Text, View, StyleSheet } from "react-native";
import { Link } from "expo-router";

export default function Index() {
  return (
    <View style={estilo.conteiner}>
      <Text style={estilo.text}>Olá! Essa é minha primeira pagina de aplicação mobile</Text>
      <Link
        href='/about'
        style={estilo.button}
      >
        Clique aqui para mudar de pagina</Link>
    </View>
  );
}

const estilo = StyleSheet.create({
  conteiner: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#ffff',
  },
  button: {
    fontSize: 20,
    textDecorationLine: 'underline',
    color: '#ffff',
  },
})
