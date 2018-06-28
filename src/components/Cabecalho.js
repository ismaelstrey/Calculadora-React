import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default props => (
  <View style={styles.topo}>
        <Text style={styles.txt}>Calculadora 1.0</Text>
  </View>
);

const styles = StyleSheet.create({
   
    topo: {
        padding: 10,
        backgroundColor: "#2196f3",
        alignItems: 'center'
    },
    txt:{
        fontSize: 25,
        color: '#FFF'
        
    }
});