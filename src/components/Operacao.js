import React, { Component } from 'react';
import { View, Picker, StyleSheet } from 'react-native';

export default class Operacao extends Component{
    
render(){
    return(
        <View style={styles.topo}>
            <Picker
            selectedValue = {this.props.operacao}
                onValueChange={op => { this.props.atualizaOperacao(op);}}
            >
                <Picker.Item label='Soma' value='soma' />
                <Picker.Item label='Subtraçao' value='subtracao' />
            </Picker>
        </View>
    );
}

 
}

const styles = StyleSheet.create({
   
    topo: {
        paddingTop: 10, 
        marginTop: 20,
        height: 100  
    }
});