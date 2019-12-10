import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Button from "./myButton"
class Screen2 extends Component {
   static navigationOptions = {
      title: 'Edit Profile',
      headerStyle: {
         backgroundColor: '#16a085',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
         fontWeight: 'bold',
      },
   };
   constructor(props) {
      super(props);
      this.state = {
      };
   }
   render() {
      return (
         <View style={styles.container}>
            <Button
               title="go to screen1"
               onPress={() => {
                  this.props.navigation.navigate("s1")
               }}
            />
            <Image
               source={require('../img/user.png')}
               style={{ alignSelf:"center",width: 200, height: 200}}
            />
            <Text style={styles.text}>LOGIN: {this.props.navigation.state.params.login}</Text>
            <Text style={styles.text}>HASŁO: {this.props.navigation.state.params.password}</Text>
         </View>
      );

   }
}
const styles = StyleSheet.create({
   container: {
      flexDirection: "column",
      justifyContent: "center",
   },
   text: {
      fontSize: 32,
      color: "black",
      textAlign: "center",
   },
   block: {

   }
});
export default Screen2;