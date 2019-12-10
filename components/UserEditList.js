import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class UserEditList extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <Image
                    style={{ width: 300, height: 300, alignContent: "center" }}
                    source={require('../img/user.png')}
                />
                <Text style={styles.text}>LOGIN: {}</Text>
                <Text style={styles.text}>HASŁO: {}</Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "center",
    },
    text: {
        alignSelf: "center",
        fontSize: 24,
        color: "black",
        textAlign: "center",
        flex: 1,
    },
    block: {

    }
});

export default UserEditList;
