import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

export default props => (
  <View style={styles.topo}>
        <TextInput 
        style={styles.txt}
        value={props.resultado}
        placeholder = 'Resultado'
        editable = {false}
        
        />
  </View>
);

const styles = StyleSheet.create({
   
    topo: {
        paddingTop: 10, 
        marginTop: 20,
        height: 100      
       
    },
    txt: {
        fontSize: 30,
        
    }
});