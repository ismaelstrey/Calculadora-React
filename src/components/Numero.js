import React from 'react';
import {TextInput, StyleSheet } from 'react-native';

export default props => (
  <TextInput
    style={styles.txt}
    placeholder="Entrada"
    value={props.num}
    onChangeText={valorDoCampo => props.atualizaValor(props.nome, valorDoCampo)}
  />
);

const styles = StyleSheet.create({
  txt: {
      width: 140,
      height: 80,
      fontSize: 20,
  }
});