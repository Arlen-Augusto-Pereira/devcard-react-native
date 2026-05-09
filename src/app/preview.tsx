import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';

export default function Preview() {
  const router = useRouter();

  const params = useLocalSearchParams();

  const nome = String(params.nome || '');
  const cargo = String(params.cargo || '');
  const empresa = String(params.empresa || '');
  const anos = String(params.anos || '');
  const tecnologia = String(params.tecnologia || '');
  const cor = String(params.cor || '');

  let corCartao = '#3483eb';

  if (cor === 'verde') {
    corCartao = '#20b26b';
  }

  if (cor === 'roxo') {
    corCartao = '#7254f3';
  }

  let nivel = 'Júnior';
  let corBadge = '#999';

  if (Number(anos) >= 3 && Number(anos) <= 5) {
    nivel = 'Pleno';
    corBadge = '#1f7ae0';
  }

  if (Number(anos) >= 6) {
    nivel = 'Sênior';
    corBadge = '#d4a017';
  }

  let primeiraLetra = '?';

  if (nome !== '') {
    primeiraLetra = nome.substring(0, 1).toUpperCase();
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Seu Cartão</Text>

      <View style={[styles.cartao, { backgroundColor: corCartao }]}>
        <View style={styles.avatar}>
          <Text style={styles.letra}>{primeiraLetra}</Text>
        </View>

        <Text style={styles.nome}>{nome}</Text>

        <Text style={styles.cargo}>{cargo}</Text>

        <Text style={styles.empresa}>
          {empresa === '' ? 'Empresa não informada' : empresa}
        </Text>

        <View style={styles.linha}></View>

        <Text style={styles.textoPequeno}>Especialista em</Text>
        <Text style={styles.tecnologia}>{tecnologia}</Text>

        <View style={[styles.badge, { backgroundColor: corBadge }]}>
          <Text style={styles.textoBadge}>{nivel}</Text>
        </View>

        <Text style={styles.anos}>{anos} anos de experiência</Text>
      </View>

      <TouchableOpacity style={styles.botaoEditar} onPress={() => router.back()}>
        <Text style={styles.textoEditar}>Editar dados</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.botaoFinalizar} onPress={() => router.replace('/sucesso')}>
        <Text style={styles.textoFinalizar}>Finalizar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 22,
    backgroundColor: '#f4f4f8',
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 20,
    color: '#222',
  },
  cartao: {
    borderRadius: 18,
    padding: 25,
    alignItems: 'center',
    marginBottom: 25,
  },
  avatar: {
    backgroundColor: '#fff',
    width: 75,
    height: 75,
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  letra: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#6254f3',
  },
  nome: {
    color: '#fff',
    fontSize: 25,
    fontWeight: 'bold',
  },
  cargo: {
    color: '#eee',
    marginTop: 5,
  },
  empresa: {
    color: '#eee',
    marginTop: 3,
  },
  linha: {
    height: 1,
    backgroundColor: '#ffffff55',
    width: '80%',
    marginTop: 20,
    marginBottom: 20,
  },
  textoPequeno: {
    color: '#eee',
  },
  tecnologia: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 4,
  },
  badge: {
    marginTop: 20,
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 20,
  },
  textoBadge: {
    color: '#fff',
    fontWeight: 'bold',
  },
  anos: {
    color: '#eee',
    marginTop: 12,
  },
  botaoEditar: {
    backgroundColor: '#fff',
    borderColor: '#6254f3',
    borderWidth: 1,
    padding: 15,
    borderRadius: 10,
    marginBottom: 12,
  },
  textoEditar: {
    color: '#6254f3',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  botaoFinalizar: {
    backgroundColor: '#6254f3',
    padding: 15,
    borderRadius: 10,
  },
  textoFinalizar: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});