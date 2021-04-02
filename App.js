// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomePage from './src/HomePage';
import auth from './src/auth';
import realTime from './src/realTime';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="HomePage" component={HomePage} />
        <Stack.Screen name="auth" component={auth} />
        <Stack.Screen name="realTime" component={realTime} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;