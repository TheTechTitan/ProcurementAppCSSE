import React, {Component} from 'react';
import { StyleSheet, Text, View, ScrollView, Dimensions, TouchableOpacity, Image , ImageBackground, Picker, Switch} from 'react-native';
import { Avatar, Button, Card, Title, Paragraph, Chip } from 'react-native-paper';
import {Actions} from "react-native-router-flux";
// import { Actions } from 'react-native-router-flux';
// import NavBar from "./Homescreen";

class HomeData extends Component {

    constructor(props){
        super(props);
        this.state={
            homeSelected : this.props.homeSelected,
            dataOrders : [],
            orderID:''
        }
    }

    onCardPress = (dataObject) =>{

        console.log('Card Pressed ' + this.state.homeSelected);
        Action.jump('deliveryNotification')


    }

    // onBookNow = () =>{

    //     console.log('Book Now Pressed ' + this.state.homeSelected);
    //     Actions.jump('reservationMain')


    // }

    // selectHome(select){
    //     this.setState({
    //         homeSelected : select
    //     })
    // }

    // componentDidUpdate(prevProps) {
    //     if (prevProps.homeSelected !== this.props.homeSelected) {
    //         this.setState({
    //             homeSelected: this.props.homeSelected
    //         })
    //     }
    // }

    // componentDidMount() {


    //     const ipAddress = "192.168.8.101"

    //     const getClasses = "http://"+ ipAddress +":5000/order/Order";
    //     // const getGyms = "http://"+ ipAddress +":5000/class/Gym";


    //     fetch(getClasses)
    //         .then(response =>{
    //             return response.json()
    //         })
    //         .then(json => {
    //             this.setState({
    //                 dataClasses : json
    //             })
    //         })

      
    // }

    render() {

        const {homeSelected, dataGym, dataClasses} = this.state;

        let dataOrders = [
            {
                orderID : '#ON001',
                status : 'Delivered',
            },
            {
                orderID : '#ON002',
                status : 'Partially-Delivered',
            },
            {
                orderID : '#ON003',
                status : 'Delivered',
            },
            {
                orderID : '#ON004',
                status : 'Delivered',
            },
            {
                orderID : '#ON005',
                status : 'Delivered',
            },
           
        ]
        return (
          <View style={{flex: 1}}>
          <ImageBackground
           resizeMode={'stretch'} // or cover
           style={{flex: 1}} // must be passed from the parent, the number may vary depending upon your screen size
           source={require('../../../images/AppBg.jpg')}
          >    
          <View style={{marginTop:20}}>
              <Text style={{textAlign:'right', color:"#f2a600", fontWeight:"bold", fontSize:45}}>DELIVERY</Text>
          <Text style={{textAlign:'right', color:"#f2a600", fontWeight:"bold", fontSize:45}}>STATUS</Text>
              </View> 
              <View style={{flexDirection:'row', paddingLeft:10}}>
              <Card style={{width : (Dimensions.get('window').width - 30)/2, backgroundColor:"#f2a600"}} theme={{ roundness : 15 }} >
                    <Text style={{fontSize:20, textAlign:'center', color:"#000000", fontWeight:"3"}}>ORDER NO</Text>
                    </Card>
                    <Card style={{width : (Dimensions.get('window').width - 30)/2, backgroundColor:"#f2a600"}} theme={{ roundness : 15 }} >

                    <Text style={{fontSize:20, color:"#000000", fontWeight:"3", textAlign:'center'}}>STATUS</Text>

              </Card>
              </View>
                  <ScrollView contentContainerStyle={styles.contentContainerStyle}>
                { dataOrders.map((dataObject, index) =>{
                        return(
                            <Card style={styles.card} theme={{ roundness : 15 }} key={index + "class"}>
                                    <TouchableOpacity onPress={() => Actions.jump('deliveryList')} key={index + "class" + "touchable"}>
                                        <Card.Content  key={index + "class" + "cardContent"}>
                                            <View style={{paddingTop:18, flexDirection:'row', height:50}}>
                                                <View>
                                                    <Text style={{textAlign:'left', color:'#000000'}}>{dataObject.orderID}</Text> 
                                                </View>
                                                <View style={{paddingLeft: Dimensions.get('window').width - 220}}>
                                                    <Text style={{textAlign:'right',color:'#000000'}} key={index + "class" + "pricePerDay"}>{dataObject.status}</Text>
                                                </View>
                                           
                                                </View>
                                        </Card.Content>
                                    </TouchableOpacity>
                            </Card>
                        )
                    })}
            </ScrollView>
            </ImageBackground>
            </View>
            
            
        );
    }
}

export default HomeData;

const styles = StyleSheet.create({

    card: {
        width : Dimensions.get('window').width - 30,
        marginTop : 20,
        backgroundColor: '#ffffff',
        paddingTop:10

    },
    cardCover:{
        overflow: 'hidden',
    },
    cardTitle:{
        fontWeight: "700",
        color: 'white',
        flexWrap: 'wrap',
        marginBottom: -8
    },
    rating:{
        marginRight: 20,
        backgroundColor: '#ff6000'
    },
    ratingText:{
        fontSize: 16,
        fontWeight: "700",
    },
    contentText: {
        color: '#bdbdbd'    
    },
    priceText: {
        color: '#ff6000'
    },
    contentContainerStyle: {
        flexGrow: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop : 15,
        paddingBottom : Dimensions.get('window').height / 1.6,

    }
});
