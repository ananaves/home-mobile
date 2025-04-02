import { View, StyleSheet } from 'react-native';
import { Stack, Link } from 'expo-router';


export default function NotFoundScreen() {
    return (
        <View>
            <Stack.Screen options={{ title: 'Pagina nao emcontrada' }} />
            <View style={estilo.container}>
                <Link
                    href="/"
                    style={estilo.button}
                >
                    Volte para a página inicial
                </Link>
            </View>
        </View>
    );
}

const estilo = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#25292e',
        justifyContent: 'center',
        alignItems: 'center',
    },

    button: {
        fontSize: 20,
        textDecorationLine: 'underline',
        color: '#fff',
    },
});
