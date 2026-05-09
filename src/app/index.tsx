import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

export default function Inicio() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.icone}>💳</Text>

      <Text style={styles.titulo}>DevCard</Text>

      <Text style={styles.subtitulo}>
        Seu cartão de visita digital de dev mobile
      </Text>

      <TouchableOpacity
        style={styles.botao}
        onPress={() => router.push('/cadastro')}
      >
        <Text style={styles.textoBotao}>Criar meu cartão</Text>
      </TouchableOpacity>

      <Text style={styles.rodape}>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f8',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 25,
  },

  icone: {
    fontSize: 55,
    marginBottom: 10,
  },

  titulo: {
    fontSize: 44,
    fontWeight: 'bold',
    color: '#6254f3',
  },

  subtitulo: {
    fontSize: 16,
    color: '#555',
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 150,
  },

  botao: {
    backgroundColor: '#6254f3',
    padding: 16,
    borderRadius: 10,
    width: '100%',
  },

  textoBotao: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
  },

  rodape: {
    marginTop: 25,
    color: '#999',
    fontSize: 12,
  },
});