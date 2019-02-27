/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView, TouchableOpacity, AsyncStorage ,NetInfo} from 'react-native';

export default class App extends Component {
  render() {
    return (
      <ScrollView>
        <Text style={styles.heading}>Register</Text>
      <View style={styles.container}>
        <TextInput style={styles.email_field}
          placeholder="Email"
          placeholderTextColor="green"
      
        />
           <TextInput style={styles.email_field}
          placeholder="Name"
          placeholderTextColor="green"
      
        />
           <TextInput style={styles.email_field}
          placeholder="Phone Number"
          placeholderTextColor="green"
      
        />
     
        <TextInput style={styles.email_field}
          placeholder="Password"
          placeholderTextColor="green"
          secureTextEntry
      
        />
       
        <TouchableOpacity  style={styles.login_button_text}><Text style={{ color: 'white',textAlign: 'center' }} >Register</Text></TouchableOpacity>

 
      </View>
    </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginVertical: 20
  },
  heading: {
    fontSize: 40,
    alignItems: 'center',
    marginVertical: 20,
    textAlign: 'center'
  },
  login_button_text: {
    width: 300,
    padding: 15,
    backgroundColor: 'green',
    borderRadius: 25,
    color: 'green',
    marginVertical: 10,
    
  },
  email_field: {
    width: 300,
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 25,
    color: 'green',
    marginVertical: 10
  },
  login_button: {
    width: 300,
    padding: 8,
    backgroundColor: '#11ad28',
    borderRadius: 25,
    marginVertical: 20,

  }
});
