import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Button from "./myButton"
class flatListComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  click = () => {
    this.props.nav.navigate("BigPhoto",{imageFile:this.props.uri,asset:this.props.asset,refresh:this.props.refresh})
  }
  longPress = () => {
    this.props.overlayPhoto(this.props.index)
  }
  render() {
    var width = Dimensions.get("window").width
    var height = Dimensions.get("window").height
    var sizeOfPic = (width - 10 * 5) / 4



    return (

      <View style={styles.container}>
        <View style={{ flex: 1 }}>
          {this.props.numColumns == 1 ?
            <TouchableOpacity onPress={this.click} onLongPress={this.longPress}> 
              <Image
                style={{
                  height: 200,
                  width: width,
                }}
                source={{ uri: this.props.uri }}
              />
              {this.props.overlay ?
                <View
                  style={{
                    height: 200,
                    width: width,
                    position: 'absolute',
                    left: 0,
                    top: 0,
                    opacity: 0.5,
                    backgroundColor: '#1976d2',
                    justifyContent: "center"
                  }}>
                  <Ionicons name="md-checkmark-circle" size={64} color="white" style={{ alignSelf: "center" }} />
                </View>
                :
                null
              }
            </TouchableOpacity>
            :
            <TouchableOpacity onPress={this.click} onLongPress={this.longPress}>
              <Image
                style={{
                  marginLeft: 10,
                  marginTop: 10,
                  height: sizeOfPic,
                  width: sizeOfPic,
                }}

                source={{ uri: this.props.uri }}
              />
              {this.props.overlay ?
                <View
                  style={[

                    {
                      marginLeft: 10,
                      marginTop: 10,
                      height: sizeOfPic,
                      width: sizeOfPic,
                      position: 'absolute',
                      left: 0,
                      top: 0,
                      opacity: 0.5,
                      backgroundColor: '#1976d2',
                      justifyContent: "center"
                    }
                  ]}>
                  <Ionicons name="md-checkmark-circle" size={32} color="white" style={{ alignSelf: "center" }} />
                </View>
                :
                null
              }
            </TouchableOpacity>
          }
        </View>
      </View>
    );

  }
}
const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    backgroundColor: "#ffffff"
  },
  textcontainer: {
    flex: 2,
    flexDirection: "column",
    justifyContent: "center",
  },
  text: {
    alignSelf: "center",
    fontSize: 16,
    color: "gray",
    textAlign: "left",
    flex: 1,
  },
  heading: {
    fontSize: 24,
    color: "black",
  },
  buttonEdit: {
    width: 50,
    backgroundColor: "green",
    alignSelf: "center",
    flex: 1,
    margin: 2,
    borderRadius: 50,
  },
  buttonRemove: {
    width: 50,
    backgroundColor: "red",
    alignSelf: "center",
    flex: 1,
    margin: 2,
    borderRadius: 50,
  }
});
export default flatListComponent;