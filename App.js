// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import Register from './src/Register'
// import HomePage from './src/HomePage'
// import Coaching from './src/Coaching'
import HomePage from './src/HomePage';
import auth from './src/auth';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="HomePage" component={HomePage} />
        <Stack.Screen name="auth" component={auth} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;