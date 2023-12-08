// CreateAccountScreen.js
import React, { useEffect, useState } from 'react';
import { View, Text ,TextInput,TouchableOpacity, StyleSheet} from 'react-native';
import Toast from 'react-native-toast-message';
import CreateForm from './CreateForm';

const showToast = () => {
    Toast.show({
      type: 'success', 
      position: 'bottom',
      text1: 'Account Created!!!',
      text2: 'Your Account has been Created Successfully. Login Now!!!',
    });
  };

const CreateAccountScreen = ({onFormSubmit}) => {

    const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [FirstName, setFirstName] = useState('');
  const [LastName, setLastName] = useState('');
  const [mobile, setmobile] = useState('');

    /*const handleCreateAccount = () => {
        
        navigation.navigate('Login');
        showToast();
      };*/

      const handleSubmit = () => {
        
        onFormSubmit({FirstName,LastName,mobile, username, email, password });
      };
      
      
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}>
      <Text style={{fontSize:30,fontWeight:'bold',color:'red',paddingBottom:20}}>Create Account</Text>
      <TextInput
        style={styles.input}
        placeholder="First Name"
      />
      <TextInput
        style={styles.input}
        placeholder="Last Name"
      />
      <TextInput
        style={styles.input}
        placeholder="Mobile Number"
      />
      <TextInput
        style={styles.input}
        placeholder="Email Address"
        autoCapitalize="none"
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Username"
        autoCapitalize="none"
        keyboardType="email-address"
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
      />
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Create Account</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 16,
    },
    title: {
      fontSize: 24,
      marginBottom: 16,
      color:'red',
      fontWeight:'bold',
      fontSize:30
    },
    input: {
      height: 40,
      width: '90%',
      borderColor: 'gray',
      borderWidth: 1,
      marginBottom: 16,
      padding: 8,
    },
    button: {
      backgroundColor: '#3498db',
      padding: 10,
      borderRadius: 5,
      width: '60%',
      alignItems: 'center',
      marginBottom: 10,
    },
    buttonText: {
      color: 'white',
      fontSize: 16,
    },
  });
export default CreateAccountScreen;
