

import React, {Component} from 'react';
import {

  Text,
  FlatList,
  View,
  TouchableOpacity
 
} from 'react-native';
export default class Firend extends Component {
   
    constructor(props) {
      super(props);
      this.state={
        dataSource: [],
        isLoading:true
      }
      const url = 'http://192.168.100.5:4000/api/getRecord';
      fetch(url, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    })
        .then((response) => response.json())
        .then((responseJson) => {
         if(responseJson.success){
          this.setState({
            dataSource: responseJson.data,
            isLoading:false
          },()=>{
    
          })
        }else
        {
          console.warn('No records exist')
        }
        })

    }
    
    renderSeperator=()=>{
      return (
        <View style={{height:1,width:'80%',backgroundColor:'green',
         marginLeft:20,marginTop:10}}>
  
        </View>
      )
    }
    renderItem = ({ item }) => {  
      return (
  
        <TouchableOpacity style={{ flex: 1, flexDirection: 'row' ,marginBottom:3,borderBottomColor:'black',
        alignItems: 'center',
        marginVertical: 20}}>
          <View style={{ flex: 1, justifyContent: 'center' }}>
            <Text style={{color:'green',width:'50%',textAlign: 'center'}}>          
              {item.name}
            </Text>
            <Text style={{color:'green',width:'60%',textAlign: 'center'}}>
            {item.email}
            </Text>
          
            <Text style={{color:'green',width:'60%',textAlign: 'center'}}>
              {item.number}
            </Text>   
          </View>
          
        </TouchableOpacity>
      )
    }
  render() {
    return (
     
      <FlatList
      data={this.state.dataSource}
      renderItem={this.renderItem}
      keyExtractor = {(item, index) => item._id}
      ItemSeparatorComponent={this.renderSeperator}
    />
   
    );
  }
}


