// LoadingScreen.js
import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator,StyleSheet } from 'react-native';


const LoadingScreen = ({ navigation }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    
    const fakeAsyncOperation = async () => {
      
      await new Promise(resolve => setTimeout(resolve, 2000));

      
      setLoading(false);
    };

    fakeAsyncOperation();
  }, []);

  useEffect(() => {
    
    if (!loading) {
      navigation.replace('Login');
    }
  }, [loading, navigation]);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={styles.innerText}>Fantasy Match</Text>
      <ActivityIndicator size="large" />
    </View>
  );
};

const styles = StyleSheet.create({
    innerText:{
      color:'red',
      fontWeight:'bold',
      fontSize:50,
    },
  });

export default LoadingScreen;
