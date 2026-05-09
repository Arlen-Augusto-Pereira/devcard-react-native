import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

export default function Sucesso() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.circulo}>
        <Text style={styles.check}>✓</Text>
      </View>

      <Text style={styles.titulo}>Cartão criado com sucesso!</Text>

      <Text style={styles.texto}>
        Seu cartão de visita digital está pronto.
      </Text>

      <TouchableOpacity style={styles.botao} onPress={() => router.replace('/')}>
        <Text style={styles.textoBotao}>Criar outro cartão</Text>
      </TouchableOpacity>
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
  circulo: {
    backgroundColor: '#24c486',
    width: 120,
    height: 120,
    borderRadius: 70,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 35,
  },
  check: {
    color: '#fff',
    fontSize: 70,
    fontWeight: 'bold',
  },
  titulo: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#222',
    textAlign: 'center',
  },
  texto: {
    color: '#666',
    textAlign: 'center',
    marginTop: 15,
    marginBottom: 80,
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
  },
});