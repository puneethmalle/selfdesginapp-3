import React,{Component} from "react";
import {View, StyleSheet, TouchableOpacity, Text,Image} from "react-native";
import AppHeader from "../components/AppHeader";

export default class HomeScreen extends Component{
  
    render(){
        return(
            <View>
             <AppHeader />


             <View>
               <View   style = {styles.buttonsContainer} >
                
                <TouchableOpacity 
                  style={styles.buttons}
                  onPress={() => this.props.navigation.navigate("AmericanFootballscreen")}>
                  <Text style={{ fontSize:20, color:"white"}}>American Football</Text>
                  <Image source = {require("../assets/americanfootball.png")} 
                  style = {styles.americanFootballImage}></Image>
                  </TouchableOpacity>

                  <TouchableOpacity 
                  style={styles.buttons}
                  onPress={() => this.props.navigation.navigate("Basketballscreen")}>
                  <Text style={{ fontSize:20, color:"white"}}>Basketball</Text>
                  <Image source = {require("../assets/basketball.png")} style = {styles.basketballImage}></Image>
                  </TouchableOpacity>

                  <TouchableOpacity 
                  style={styles.buttons}
                  onPress={() => this.props.navigation.navigate("Footballscreen")}>
                  <Text style={{ fontSize:20, color:"white"}}>Football</Text>
                  <Image source = {require("../assets/football.png")} style = {styles.footballImage}></Image>
                  </TouchableOpacity>


                  
                </View> 
             </View>
            </View>
        )
    }
  
}
const styles = StyleSheet.create({
    buttonsContainer: {
      alignSelf: 'center',
      marginTop: 50,
    },
    buttons: {
      alignItems: 'left',
      justifyContent: 'center',
      borderWidth: 2,
      borderRadius: 15,
      backgroundColor:"purple",
      margin: 50,
      width: 200,
      height: 100,
    },
    americanFootballImage:{
      position: "absolute",
        height: 50,
        width: 200,
        resizeMode: "contain",
        right: -80,
        top: 50
    },
    footballImage:{
position: "absolute",
        height: 100,
        width: 200,
        resizeMode: "contain",
        right: -50,
        top: 0
    },
    basketballImage:{
      position: "absolute",
        height: 100,
        width: 200,
        resizeMode: "contain",
        right: -50,
        top: 0
    }
    
  });