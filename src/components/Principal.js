import React, { Component } from 'react';
import {
    StyleSheet,
    View
} from 'react-native';

export default class Principal extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.topo}>

                </View>

                <View style={styles.resultado}>

                </View>

                <View style={styles.painel}>

                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  topo: {
    flex: 1,
    backgroundColor: "#c0c0c0"
  },
  resultado: {
    flex: 1,
    backgroundColor: "#fff"
  },
    painel: {
        flex: 3,
        backgroundColor: '#c0c0c0',
    }
});
