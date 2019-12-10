import React, { Component } from 'react';
import { View, Text, StyleSheet, Switch, FlatList, ActivityIndicator } from 'react-native';
import Button from "./myButton"
import FlatListComponent from "./flatListComponent";
import * as MediaLibrary from "expo-media-library";
import * as Permissions from "expo-permissions";



class List extends Component {
   static navigationOptions = {
      title: 'Gallery',
      headerStyle: {
         backgroundColor: '#004ba0',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
         fontWeight: 'bold',
      },
   };


   constructor(props) {
      super(props);
      this.state = {
         numColumns:1,
      }
   }
   setPermissions = async () => {
      let { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status !== 'granted') {
         alert('brak uprawnień do czytania image-ów z galerii')
      }
   }
   getPhotos = async () => {
      let obj = await MediaLibrary.getAssetsAsync({
         first: 300,           // ilość pobranych assetów
         mediaType: 'photo',    // typ pobieranych danych, photo jest domyślne
         createdAfter:1574195234249,
      })

      //alert(JSON.stringify(obj.assets, null, 4))
      this.setState({
         allPhotos: obj.assets
      })
   }

   componentDidMount() {
      this.setPermissions();
      this.getPhotos();
   }

   overlayPhoto =(index)=>{
      let copy = JSON.parse(JSON.stringify(this.state.allPhotos))
      //make changes to ingredients
      copy[index].overlay = copy[index].overlay == true ? false : true;
      this.setState({
         allPhotos: copy
      })
   }

   deletePhotos= async()=>{
      var tmp = this.state.allPhotos.filter((item)=>{
         if(item.overlay==true)
         return item
      })
      await MediaLibrary.deleteAssetsAsync(tmp);
      this.getPhotos();

   }
  
   render() {
      return (
         <View style={{ flex: 1 }}>
            <View style={styles.gallery}>

               <FlatList
                  numColumns={this.state.numColumns}
                  key={this.state.numColumns}
                  style={{ flex: 1 }}
                  keyExtractor={(item, index) => item + index}
                  data={this.state.allPhotos}
                  renderItem={({ item, index }) => 
                  <FlatListComponent
                  refresh={this.getPhotos} asset={item} nav={this.props.navigation} overlayPhoto={this.overlayPhoto} overlay={item.overlay} numColumns={this.state.numColumns} key={item.key} index={index} uri={item.uri}>
                  </FlatListComponent>}
               />
            </View>
            <View style={styles.buttons}>
               <Button
                  title="Grid/List"
                  onPress={() => {
                    this.setState({
                       numColumns:this.state.numColumns==1?4:1
                    })
                     console.log("b1")
                  }}
               />
               <Button
                  title="Open Camera"
                  onPress={() => {
                     this.props.navigation.navigate("Cam",{refresh:this.getPhotos})
                  }}
               />
               <Button
                  title="Remove selected"
                  onPress={() => {
                     this.deletePhotos();
                  }}
               />
            </View>

         </View>
      );

   }
}
const styles = StyleSheet.create({
   gallery: {
      flex: 10,
   },
   buttons: {
      position:"absolute",
      bottom:0,
      display:"flex",
      flexDirection:"row"
   },
   button: {
      flex: 1,
      backgroundColor: "#16a085",
      justifyContent: "center",
      alignSelf: 'stretch',
   }
})
export default List;