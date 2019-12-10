import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, ActivityIndicator } from 'react-native';
import Button from "./myButton"
import * as Font from "expo-font";


class Home extends Component {
    //<NAV BAR>
    static navigationOptions = {
        title: 'Home',
        headerStyle: {
            backgroundColor: '#004ba0',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
    };
    //</NAVBAR>

    constructor(props) {
        super(props);
        this.state = {
        };
    }
    componentWillMount = async () => {
        await Font.loadAsync({
            'Oleo': require('../assets/fonts/Oleo.ttf'),
            'Slab': require('../assets/fonts/RobotoSlab.ttf')
        });
        this.setState({ fontloaded: true })
    }
    render() {


        return (

            <View style={styles.container}>
                <View style={styles.header}>
                    {this.state.fontloaded
                        ?
                        <View style={{ flex: 1, justifyContent: "center" }}>
                            <Text style={[{ fontFamily: "Oleo" }, styles.headerText]}>
                                Camera APP</Text>
                            <Text style={[{ fontFamily: "Slab" }, styles.paragraphText]}>
                                Take a photo</Text>
                        </View>
                        :
                        <View style={{ flex: 1, padding: 20 , justifyContent: "center" }}>
                            <ActivityIndicator size="large" color="#1976d2" />
                        </View>}
                </View>
                <View style={styles.form}>
                    <Button
                        title="Go in"
                        onPress={()=>{
                            this.props.navigation.navigate("List")
                        }}
                    />
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: '#ffffff',
    },
    header: {

        justifyContent: "center",
        flex: 1,
        flexDirection: "column",
        backgroundColor: "#1976d2"
    },
    headerText: {
        textAlign: "center",
        color: "#ffffff",
        fontSize: 60
    },
    button:{
        backgroundColor:"#1976d2"
    },
    paragraphText: {
        textAlign: "center",
        color: "white",
        fontSize: 30
    },
    form: {
        justifyContent: "center",
        flex: 2,
        flexDirection: "row"
    },
    input: {
        borderRadius: 50,
        borderColor: "#1976d2",
        borderWidth: 1,
        textAlign: "center",
        height: 50,
        fontSize: 24,
        margin: 5,
    }
})
export default Home;