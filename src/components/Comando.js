import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

export default props => 
<View style={styles.topo}>
    <Button
    color="#841584"
    title = 'Calcular'
    onPress = {props.acao}
     />
        
</View>;

const styles = StyleSheet.create({
   
    topo: {
        
       
    }
});