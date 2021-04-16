// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import signUp from './src/signUp';
import userInfo from './src/userInfo';
import homePage from './src/homePage';
import mainMenu from './src/mainMenu';
import signIn from './src/signIn';
import imageTest from './src/imageTest';
const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen name="Test" component={imageTest} /> */}
        <Stack.Screen name="mainMenu" component={mainMenu} />
        <Stack.Screen name="signIn" component={signIn} />
        <Stack.Screen name="signUp" component={signUp}/>
        <Stack.Screen 
        name="homePage" 
        component={homePage} 
        options={{title: 'Home', headerLeft: null}}
        />
        <Stack.Screen 
        name="userInfo" 
        component={userInfo} 
        options={{title: 'Account Information', headerLeft: null}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;