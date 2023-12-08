// CreateAccountScreen.js
import React from 'react';
import { View, Text } from 'react-native';
import CreateAccountScreen from './CreateAccountScreen'; 
//import { createAccount } from './api'; 

const CreateScreen = () => {
  const handleFormSubmit = async (formData) => {
    try {
      
      await createAccount(formData);
      console.log('Account created successfully!');
      
    } catch (error) {
      console.error('Error creating account: ', error);
    }
  };

  return (
    <View>
      <Text>Create Account</Text>
      <CreateAccountForm onFormSubmit={handleFormSubmit} />
    </View>
  );
};

export default CreateAccountScreen;
