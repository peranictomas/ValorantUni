//This is for react native elements
//https://github.com/react-native-elements/react-native-elements
//Troubleshooting for mac
//https://dev-yakuza.posstree.com/en/react-native/install-on-mac/
import * as React from 'react';
import {Button, ThemeProvider, Input, Text} from 'react-native-elements'
import {
  StyleSheet,
  View,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const theme = {
  Button: {
    raised: true,
  },
};

function Register({navigation}) {
    return (
        <View style={styles.body}>
          <Text h1>VALORANT UNIVERSITY</Text>
          <Input
            placeholder='FIRSTNAME'
          />
           <Input
            placeholder='LASTNAME'
          />
          <Input
            placeholder='USERNAME'
            errorStyle={{ color: 'red' }}
            errorMessage='USERNAME TAKEN'
          />
          <Input
            placeholder='VALORANT ID'
            errorStyle={{ color: 'red' }}
            errorMessage='VALORANT ID NOT REGISTERED'
          />
          <Input
            placeholder='PASSWORD'
            secureTextEntry={true}
          />
          <Input
            placeholder='CONFIRM PASSWORD'
            secureTextEntry={true}
            errorStyle={{ color: 'red' }}
            errorMessage='PASSWORDS DONT MATCH'
          />
          <ThemeProvider theme={theme}>
            <Button title="Register"
              onPress={() => navigation.navigate('Profile')}
            />
          </ThemeProvider>
        </View>
      );

  }

  const styles = StyleSheet.create({
    body:{
      flex: 1,
      backgroundColor: '#ffffff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

export default Register;


