import React, { Component } from 'react';
import { View, Text,StyleSheet,Image} from 'react-native';
import Button from './myButton';
import { BackHandler } from "react-native"
import * as MediaLibrary from "expo-media-library";


class BigPhoto extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    componentWillMount = async () => {
        BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);

    }
    componentWillUnmount = async () => {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);
    }
    handleBackPress = () => {
        this.props.navigation.goBack()
        return true;
    }
    deletePhoto= async()=>{
        await MediaLibrary.deleteAssetsAsync([this.props.navigation.state.params.asset]);
        this.props.navigation.state.params.refresh()
        this.props.navigation.goBack()
        return true;
     }

    render() {
        console.log(this.props.navigation.state.params.imageFile)
        return (
            <View style={{ flex: 1 }}>
                <Image
                    resizeMode={'cover'}
                    style={{ width: "100%", height: "100%" }}
                     source={{ uri: this.props.navigation.state.params.imageFile}}
                />
                <View style={styles.buttons}>
               <Button
                  title="DELETE"
                  onPress={() => {
                    this.deletePhoto();
                  }}
               />
               </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    buttons: {
        position:"absolute",
        bottom:0,
        display:"flex",
        flexDirection:"row"
     },


})
export default BigPhoto;
