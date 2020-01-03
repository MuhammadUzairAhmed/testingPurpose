import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
  Image
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

export default class LoginView extends Component {
    constructor(props){
        super(props)
        this.state={
            email:'',
            password:''
        }
    }
    signIn=()=>{
        if(this.state.email == 'uzair@gmail.com' || this.state.email == 'joeee@gmail.com'){
            this.props.navigation.navigate('Home',{
                email:this.state.email,
                password:this.state.password
            })
        }else{alert('please insert the correct email')}
    }
  render() {
   
    return (
      <View style={styles.container}>
        <View>
          <Image source={require('./../assets/logo.png')} style={{width:400,height:200}} />  
        </View>
        <View style={styles.inputContainer}>
          {/* <Image style={[styles.icon, styles.inputIcon]} source={{uri: 'https://png.icons8.com/password/androidL/40/3498db'}}/> */}
          <Icon style={[styles.icon, styles.inputIcon]} name="mail" size={20} color="grey" />
          <TextInput style={styles.inputs}
              placeholder="Email"
              keyboardType="email-address"
              underlineColorAndroid='transparent'
              value={this.state.email}
              onChangeText={(email) => this.setState({email})}
              />
        </View>
        
        <View style={styles.inputContainer}>
          <Icon style={[styles.icon, styles.inputIcon]} name="lock" size={23} color="grey" />
          <TextInput style={styles.inputs}
              placeholder="Password"
              value={this.state.password}
              secureTextEntry={true}
              underlineColorAndroid='transparent'
              onChangeText={(password) => this.setState({password})}
              />
        </View>
     
        <TouchableOpacity style={styles.restoreButtonContainer}>
            <Text style={{ color:'blue'}}>Forgot?</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={this.signIn} style={[styles.buttonContainer, styles.loginButton]}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#53ADAB',
  },
  inputContainer: {
      borderBottomColor: '#F5FCFF',
      backgroundColor: '#E2F4F4',
      borderRadius:30,
      borderBottomWidth: 1,
      width:250,
      height:45,
      marginBottom:15,
      flexDirection: 'row',
      alignItems:'center'
  },
  inputs:{
      height:45,
      marginLeft:16,
      borderBottomColor: '#FFFFFF',
      flex:1,
      color:'black'
  },
  icon:{
    width:30,
    height:30,
  },
  inputIcon:{
    marginLeft:15,
    marginTop:8,
    justifyContent: 'center'
  },
  buttonContainer: {
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
  },
  loginButton: {
    backgroundColor: '#53ADAB',
  },
  fabookButton: {
    backgroundColor: "#3b5998",
  },
  googleButton: {
    backgroundColor: "#ff0000",
  },
  loginText: {
    color: 'white',
  },
  restoreButtonContainer:{
    width:250,
    marginBottom:15,
    alignItems: 'flex-end'
   
  },
  socialButtonContent:{
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center', 
  },
  socialIcon:{
    color: "#FFFFFF",
    marginRight:5
  }
});