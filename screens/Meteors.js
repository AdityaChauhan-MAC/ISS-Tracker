import React,{Component} from 'react';
import {Alert, Text,View} from 'react-native';
import axios from "axios";



export default class MeteorScreen extends Component {
constructor (props){
super (props)
this.state = {
meteors:{}   
}


}
componentDidMount  (){
this.getMeteors()


} 
getMeteors =()=>{
axios
.get("")
.then(response =>{
this.setState({meteors:response.data.near_earth_objects})

})
.catch(error => {
Alert.alert(error.message)


})
}











    render() {
if(Object.keys(this.state.meteors).length===0){
    return (
        <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center"
            }}>
            <Text>loading</Text>
        </View>
    )

}
else{
        return (
            <View
                style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                <Text>Meteor Screen</Text>
            </View>
        )
    }
}
}
