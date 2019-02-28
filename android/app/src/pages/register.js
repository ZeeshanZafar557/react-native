
import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView, TouchableOpacity, AsyncStorage, NetInfo } from 'react-native';
import { Actions } from 'react-native-router-flux';
export default class Register extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          email:'',
          name:'',
          number:'',
          password:''
        };
        this.registerFunction = this.registerFunction.bind(this);
    }
    registerFunction()
    {
        const url = "http://192.168.100.5:4000/api/register";
      
        fetch(url, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            u_name:this.state.name,
            u_email:this.state.email,
            u_number:this.state.number,
            u_password:this.state.password
    
          }),
        })
          .then((response) => response.json())
          .then((responseJson) => {

if(responseJson.success){

            //  Actions.homeScreen();
       this.setState({
        email:'',
        name:'',
        number:'',
        password:''
       })
}else{

}
          })
    }
    render() {
        return (

            <ScrollView>
                <Text style={styles.heading}>Register</Text>
                <View style={styles.container}>
                    <TextInput style={styles.email_field}
                        placeholder="Email"
                        placeholderTextColor="green"
                        onChangeText={(email) => this.setState({email},()=>{
                        })}
                    />
                    <TextInput style={styles.email_field}
                        placeholder="Name"
                        placeholderTextColor="green"
                        onChangeText={(name) => this.setState({name},()=>{
                        })}
                    />
                    <TextInput style={styles.email_field}
                        placeholder="Phone Number"
                        placeholderTextColor="green"
                        onChangeText={(number) => this.setState({number},()=>{
                        })}
                    />

                    <TextInput style={styles.email_field}
                        placeholder="Password"
                        placeholderTextColor="green"
                        secureTextEntry
                        onChangeText={(password) => this.setState({password},()=>{
                        })}
                    />

                    <TouchableOpacity onPress={() => {
                  this.registerFunction()
                       Actions.records();
                    }
                    } style={styles.login_button_text}><Text style={{ color: 'white', textAlign: 'center' }} >Register</Text></TouchableOpacity>


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
