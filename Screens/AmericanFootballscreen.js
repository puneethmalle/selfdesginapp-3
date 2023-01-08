import React,{Component} from "react";
import {View, Text, TouchableOpacity, StyleSheet, Image,ImageBackground} from "react-native";
import AppHeader from "../components/AppHeader";
 
const bgImage = require("../assets/cupper.png");

export default class AmericanFootball extends Component{

    render(){
        return(
            <View>
                <AppHeader/>
          <View>
          <ImageBackground source={bgImage} style = {styles.bgImage}/>
            <TouchableOpacity
            style = {styles.button}
            onPress = {()=>{
                this.props.navigation.navigate("Americanfootballgames")
            }}>
                <Text style = {{fontSize:20,color:"white"}}>Games</Text>
                <Image source = {require("../assets/versus.png")} style = {styles.Gimages}></Image>
            </TouchableOpacity>

            <TouchableOpacity
            style = {styles.button}
            onPress = {()=>{
                this.props.navigation.navigate("Americanfootballrankings")
            }}>
                <Text style = {{fontSize:20,color:"white"}}>Rankings</Text>
                <Image source = {require("../assets/ranking.png")} style = {styles.Rimages}></Image>
            </TouchableOpacity>

            <TouchableOpacity
            style = {styles.button}
            onPress = {()=>{
                this.props.navigation.navigate("Americanfootballstats")
            }}>
                <Text style = {{fontSize:20,color:"white"}}>Stats</Text>
                <Image source = {require("../assets/stats.png")} style = {styles.Simages}></Image>
            </TouchableOpacity>

                <TouchableOpacity
                style = {styles.buttons}
                onPress = {()=>
                    this.props.navigation.navigate("Homescreen")}>
                    <Text style = {{fontSize:20,color:"white"}}>Back</Text>
                </TouchableOpacity>
            </View>
            </View>
        );
   }
}

const styles = StyleSheet.create({
       buttons: {
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 2,
        borderRadius: 15,
        backgroundColor:"#000080",
        margin: 10,
        width: 200,
        height: 50,
        top:80,
        right:-50
      },
      button:{
        alignItems: 'left',
      justifyContent: 'center',
      borderWidth: 2,
      borderRadius: 15,
      backgroundColor:"#5C4033",
      margin: 45,
      width: 200,
      height: 100,
      right:45,
      top:120

      },
      Gimages:{
        position: "absolute",
        height: 90,
        width: 250,
        resizeMode: "contain",
        right: -50,
        top: 0
      },
      Rimages:{
        position: "absolute",
        height: 90,
        width: 200,
        resizeMode: "contain",
        right: -50,
        top: 0
      },
      Simages:{
        position: "absolute",
        height: 100,
        width: 200,
        resizeMode: "contain",
        right: -25,
        top: 0
      },
      bgImage:{
        flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    right:0,
    height:710
    ,
    width:400
      }
    
})