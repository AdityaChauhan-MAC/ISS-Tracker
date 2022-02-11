import React, { Component } from 'react';
import { Text, View, StyleSheet, SafeAreaView, TouchableOpacity, ImageBackground, Image } from 'react-native';
import { baseGestureHandlerProps } from 'react-native-gesture-handler/lib/typescript/handlers/gestureHandlerCommon';

export default class HomeScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <SafeAreaView style={styles.droidSafeArea}></SafeAreaView>
                <ImageBackground source={require("/assets/bg.png")}>
                <View style={styles.titleBar}>
                <Text style ={styles.titleText}>Iss Tracker App!</Text>
            </View>
<TouchableOpacity style={styles.routeCard}>
<Text style={styles.routeText}>

Iss Location  

</Text>

</TouchableOpacity>

<TouchableOpacity style={styles.routeCard}>

<Text style={styles.routeText}>

Meteors

</Text>



</TouchableOpacity>

</ImageBackground>




            </View>
        )
    }
}
const styles = StyleSheet.create({
container:{
flex :1   
},

titleText: { 
fontSize: 40, 
fontWeight: "bold", 
color: "white" 
},
droidSafeArea: 
{ 
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0 
},
titleBar: { flex: 0.15, 
    justifyContent: "center",
     alignItems: "center" 
    },
    routeCard: { 
        flex: 0.25, 
        marginLeft: 50, 
        marginRight: 50, 
        marginTop: 50, 
        borderRadius: 30, 
        backgroundColor: 'white' 
},
routeText: { 
    fontSize: 35, 
    fontWeight: "bold", 
    color: "black", 
    marginTop: 75, 
    paddingLeft: 30 
},
})