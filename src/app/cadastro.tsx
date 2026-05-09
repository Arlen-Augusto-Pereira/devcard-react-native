import { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';

export default function Cadastro() {
  const router = useRouter();

  const [nome, setNome] = useState('');
  const [cargo, setCargo] = useState('');
  const [empresa, setEmpresa] = useState('');
  const [anos, setAnos] = useState('');
  const [tecnologia, setTecnologia] = useState('');
  const [cor, setCor] = useState('');

  const [erroNome, setErroNome] = useState('');
  const [erroCargo, setErroCargo] = useState('');
  const [erroAnos, setErroAnos] = useState('');
  const [erroTec, setErroTec] = useState('');
  const [erroCor, setErroCor] = useState('');

  function gerarCartao() {
    let podeIr = true;

    setErroNome('');
    setErroCargo('');
    setErroAnos('');
    setErroTec('');
    setErroCor('');

    if (nome.length < 3) {
      setErroNome('Nome obrigatório, mínimo 3 caracteres');
      podeIr = false;
    }

    if (cargo === '') {
      setErroCargo('Cargo obrigatório');
      podeIr = false;
    }

    if (anos === '' || Number(anos) <= 0) {
      setErroAnos('Digite um número maior que 0');
      podeIr = false;
    }

    if (tecnologia === '') {
      setErroTec('Tecnologia obrigatória');
      podeIr = false;
    }

    if (cor === '') {
      setErroCor('Escolha uma cor');
      podeIr = false;
    }

    if (podeIr) {
      router.push({
        pathname: '/preview',
        params: {
          nome: nome,
          cargo: cargo,
          empresa: empresa,
          anos: anos,
          tecnologia: tecnologia,
          cor: cor,
        },
      });
    }
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.titulo}>Cadastro</Text>
      <Text style={styles.subtitulo}>Preencha seus dados de dev</Text>

      <Text style={styles.label}>Nome completo</Text>
      <TextInput style={styles.input} value={nome} onChangeText={setNome} />
      <Text style={styles.erro}>{erroNome}</Text>

      <Text style={styles.label}>Cargo</Text>
      <TextInput style={styles.input} value={cargo} onChangeText={setCargo} />
      <Text style={styles.erro}>{erroCargo}</Text>

      <Text style={styles.label}>Empresa</Text>
      <TextInput style={styles.input} value={empresa} onChangeText={setEmpresa} />

      <Text style={styles.label}>Anos de experiência</Text>
      <TextInput
        style={styles.input}
        value={anos}
        onChangeText={setAnos}
        keyboardType="numeric"
      />
      <Text style={styles.erro}>{erroAnos}</Text>

      <Text style={styles.label}>Tecnologia favorita</Text>
      <TextInput style={styles.input} value={tecnologia} onChangeText={setTecnologia} />
      <Text style={styles.erro}>{erroTec}</Text>

      <Text style={styles.label}>Cor do cartão</Text>

      <View style={styles.cores}>
        <TouchableOpacity
          style={cor === 'azul' ? styles.corSelecionada : styles.corBotao}
          onPress={() => setCor('azul')}
        >
          <Text>Azul</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={cor === 'verde' ? styles.corSelecionada : styles.corBotao}
          onPress={() => setCor('verde')}
        >
          <Text>Verde</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={cor === 'roxo' ? styles.corSelecionada : styles.corBotao}
          onPress={() => setCor('roxo')}
        >
          <Text>Roxo</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.erro}>{erroCor}</Text>

      <TouchableOpacity style={styles.botao} onPress={gerarCartao}>
        <Text style={styles.textoBotao}>Gerar Cartão</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 22,
    backgroundColor: '#f4f4f8',
  },
  titulo: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#222',
    marginTop: 20,
  },
  subtitulo: {
    color: '#777',
    marginBottom: 20,
  },
  label: {
    marginTop: 10,
    marginBottom: 5,
    fontWeight: 'bold',
    color: '#333',
  },
  input: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 12,
  },
  erro: {
    color: 'red',
    fontSize: 12,
    minHeight: 18,
  },
  cores: {
    flexDirection: 'row',
    gap: 10,
  },
  corBotao: {
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
    flex: 1,
    alignItems: 'center',
  },
  corSelecionada: {
    backgroundColor: '#d9e5ff',
    padding: 12,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#6254f3',
    flex: 1,
    alignItems: 'center',
  },
  botao: {
    backgroundColor: '#6254f3',
    padding: 16,
    borderRadius: 10,
    marginTop: 30,
    marginBottom: 40,
  },
  textoBotao: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});