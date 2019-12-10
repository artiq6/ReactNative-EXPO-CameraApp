import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { createStackNavigator, createAppContainer } from "react-navigation";
import { Ionicons } from '@expo/vector-icons';

class Button extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
        
    }
    render() {
        return (
            <TouchableOpacity onPress={this.props.onPress} style={this.props.style != undefined ? this.props.style : styles.block}>
                <Text style={styles.text}>{this.props.title}</Text>
            </TouchableOpacity >
        );
    } 
}
const styles = StyleSheet.create({
    text: {
        fontSize: 18,
        color:"white",
        textAlign:"center",
    },
    block:{
        backgroundColor:"#1976d2",
        justifyContent:"center",
        flex:1,
        height:50,
        alignSelf:"center",
        borderRadius: 50,
        margin:10,
    }
});
export default Button;