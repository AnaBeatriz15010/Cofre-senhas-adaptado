import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';
import { router } from 'expo-router';

export default function LoginScreen() {
  // Mantém o estado do usuário/senha e adiciona o da nova caixa
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');
  const [palavraChave, setPalavraChave] = useState('');

  const handleLogin = () => {
    // Defina as validações necessárias para os três campos
    if (usuario && senha && palavraChave) {
      Alert.alert('Sucesso', 'Acesso permitido!');
      router.replace('/home'); 
    } else {
      Alert.alert('Erro', 'Preencha todos os campos, incluindo a palavra-passe adicional!');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Atualização de Acesso</Text>
      
      {/* Caixa do Usuário */}
      <TextInput
        style={styles.input}
        placeholder="Usuário"
        value={usuario}
        onChangeText={setUsuario}
      />

      {/* Caixa da Senha */}
      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry
        value={senha}
        onChangeText={setSenha}
      />

      {/* Nova Caixa solicitada para a palavra-passe adicional */}
      <TextInput
        style={styles.input}
        placeholder="Palavra-passe adicional"
        secureTextEntry
        value={palavraChave}
        onChangeText={setPalavraChave}
      />

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 15,
  },
  button: {
    height: 50,
    backgroundColor: '#007AFF',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});