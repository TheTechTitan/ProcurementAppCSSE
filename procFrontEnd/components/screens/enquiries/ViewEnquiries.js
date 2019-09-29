import React, { Component } from 'react';
import { View, StyleSheet,TouchableOpacity, Text, ScrollView, FlatList, ImageBackground } from 'react-native';
import { Checkbox, Card, TextInput, Button, Paragraph, Dialog, Portal, Divider, IconButton, Colors, RadioButton } from 'react-native-paper';

 
export default class ViewEnquiries extends React.Component {

    // state = {
    //     data: [],
    // };

    // componentWillMount() {
    //     this.fetchData();
    // }

    // fetchData = async () => {
    //     const response = await fetch('http://localhost:5000/enquiry');
    //     const json = await response.json();
    //     this.setState({data: json.enquiries})
    // };
    
  render() {
   

    return (

        <View style={{flex: 1}}>
        <ImageBackground
        resizeMode={'stretch'} // or cover
        style={{flex: 1}}
        source={require('../../../images/AppBg.jpg')}
        >
       
      <ScrollView style={{height:'100%'}}>
      
        <View>
           {/* <FlatList 
           data={this.state.data}
           keyExtractor={(x, i) => i}
           renderItem={({ item }) =>
           <Text>
           {`${item.name.enquiryID} ${item.name.orderID}`}
           </Text>}
           /> */}
           <View>
            <Text style={{fontSize:45,color:'#ffa600',fontWeight:3,marginLeft:200,marginTop:20}}>ENQUIRY</Text>
            <Text style={{fontSize:45,color:'#ffa600',fontWeight:3,marginLeft:298}}>LIST</Text>
          </View>
           <TouchableOpacity style={styles.card}> 
              <Text style={styles.cardText}>Enquiry</Text> 
              <Text style={{marginLeft:20}}>Enquiry ID : EN01</Text>
              <Text style={{marginLeft:20}}>Order ID : OR01</Text>
              <Button mode="contained" color='#ffbf00' onPress={this.ViewEnquiries} style={{width:100, marginLeft:250,marginTop:-40}}>
                VIEW 
              </Button>
           </TouchableOpacity>

           <TouchableOpacity style={styles.card}> 
              <Text style={styles.cardText}>Enquiry</Text> 
              <Text style={{marginLeft:20}}>Enquiry ID : EN02</Text>
              <Text style={{marginLeft:20}}>Order ID : OR02</Text>
              <Button mode="contained" color='#ffbf00' onPress={() => console.log('View Enquiry')} style={{width:100, marginLeft:250,marginTop:-40}}>
                VIEW 
              </Button>
           </TouchableOpacity>

           <TouchableOpacity style={styles.card}> 
              <Text style={styles.cardText}>Enquiry</Text> 
              <Text style={{marginLeft:20}}>Enquiry ID : EN03</Text>
              <Text style={{marginLeft:20}}>Order ID : OR03</Text>
              <Button mode="contained" color='#ffbf00' onPress={() => console.log('View Enquiry')} style={{width:100, marginLeft:250,marginTop:-40}}>
                VIEW 
              </Button>
           </TouchableOpacity>

           <TouchableOpacity style={styles.card}> 
              <Text style={styles.cardText}>Enquiry</Text> 
              <Text style={{marginLeft:20}}>Enquiry ID : EN04</Text>
              <Text style={{marginLeft:20}}>Order ID : OR04</Text>
              <Button mode="contained" color='#ffbf00' onPress={() => console.log('View Enquiry')} style={{width:100, marginLeft:250,marginTop:-40}}>
                VIEW 
              </Button>
           </TouchableOpacity>

           <TouchableOpacity style={styles.card}> 
              <Text style={styles.cardText}>Enquiry</Text> 
              <Text style={{marginLeft:20}}>Enquiry ID : EN05</Text>
              <Text style={{marginLeft:20}}>Order ID : OR05</Text>
              <Button mode="contained" color='#ffbf00' onPress={() => console.log('View Enquiry')} style={{width:100, marginLeft:250,marginTop:-40}}>
                VIEW 
              </Button>
           </TouchableOpacity>
        </View>
 
      </ScrollView>
      </ImageBackground>
      </View>
    );
  }
}
const styles = StyleSheet.create({
 container: {
     backgroundColor:"#F5FCFF",
     marginTop:20
 },
 card: {
     backgroundColor:'#fff',
     marginBottom:10,
     marginLeft:'5%',
     width:'90%',
     height:'18%',
     shadowColor:'#000',
     shadowOpacity:0.2,
     shadowRadius:1,
     shadowOffset:{
         width:3,
         height:3
     }

 },
 cardText: {
    padding:10,
    fontSize:25
 }
 
    
     
});


