import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import PropTypes from 'prop-types';

class Circle extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };

    }
    render() {
        return (
            <TouchableOpacity onPress={this.props.onPress} style={[styles.block, { height: this.props.height, width: this.props.height }]}>
                <Ionicons name={this.props.name} size={this.props.size} color={this.props.color ? this.props.color : "#16a085"} style={{ alignSelf: "center" }} />
            </TouchableOpacity >
        );
    }
}
const styles = StyleSheet.create({
    block: {
        backgroundColor: "white",
        justifyContent: "center",
        alignSelf: 'flex-end',
        margin: 10,
        borderRadius: 50,

    }
});
export default Circle;