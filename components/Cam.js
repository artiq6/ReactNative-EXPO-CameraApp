import React, { Component } from 'react';
import { View, Text, StyleSheet, } from 'react-native';
import * as Permissions from "expo-permissions";
import { Camera } from 'expo-camera';
import Circle from "./myCircle";
import * as MediaLibrary from "expo-media-library";
import { ToastAndroid } from 'react-native';
import { BackHandler } from "react-native"


class Cam extends Component {
    static navigationOptions = {
        header: null,
        };

    constructor(props) {
        super(props);
        this.state = {
            hasCameraPermission: null,         // przydzielone uprawnienia do kamery
            type: Camera.Constants.Type.back,  // typ kamery
        };
    }
    componentWillMount = async () => {
        let { status } = await Permissions.askAsync(Permissions.CAMERA);
        this.setState({ hasCameraPermission: status == 'granted' });
        BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);

    }
    componentWillUnmount = async () => {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);
    }
    rdButton = async ()=>{
      
       
      console.log("3rd button")
    }
    rotateCamera = () => {
        console.log("rev")
        this.setState({
            type: this.state.type === Camera.Constants.Type.back
                ? Camera.Constants.Type.front
                : Camera.Constants.Type.back,
        });
    }
    handleBackPress = () => {
        this.props.navigation.state.params.refresh()
        this.props.navigation.goBack()
        return true;
    }
    takePhoto = async () => {
        if (this.camera) {
            let foto = await this.camera.takePictureAsync();
            let asset = await MediaLibrary.createAssetAsync(foto.uri); // domyslnie zapisuje w DCIM

            ToastAndroid.showWithGravity(
                'CHEESE',
                ToastAndroid.SHORT,
                ToastAndroid.CENTER
            );
        }
    }
    render() {
        const { hasCameraPermission } = this.state; // podstawienie zmiennej ze state
        if (hasCameraPermission == null) {
            return <View />;
        } else if (hasCameraPermission == false) {
            return <Text>brak dostępu do kamery</Text>;
        } else {
            return (
                <View style={{ flex: 1 }}>
                    <Camera
                        ref={ref => {
                            this.camera = ref; // Uwaga: referencja do kamery używana później
                        }}
                        style={{ flex: 1 }}
                        type={this.state.type}
                        ratio={this.state.ratio}
                    >
                        <View style={[{ flex: 1 }, styles.buttons]}>
                            <Circle onPress={this.rotateCamera} name="md-reverse-camera" size={32} height={50} ></Circle>
                            <Circle onPress={this.takePhoto} name="md-camera" size={64} height={100} ></Circle>
                            <Circle onPress={this.rdButton} name="md-photos" size={32} height={50}></Circle>
                        </View>
                    </Camera>
                </View>
            );
        }
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: '#ffffff',
    },
    buttons: {
        flex: 1,
        backgroundColor: 'transparent',
        flexDirection: 'row',
        justifyContent: "center"
    },

})
export default Cam;