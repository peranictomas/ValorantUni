// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomePage from './src/HomePage';
import auth from './src/auth';
import realTime from './src/realTime';
import UploadTutorial from "./src/UploadTutorial";
import TutorialsPage from "./src/TutorialsPage";
import VideoPlayerScreen from "./src/VideoPlayerScreen";

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
          <Stack.Screen name="TutorialsPage" component={TutorialsPage} />
          <Stack.Screen name="UploadTutorial" component={UploadTutorial} />
        <Stack.Screen name="HomePage" component={HomePage} />
        <Stack.Screen name="auth" component={auth} />
        <Stack.Screen name="realTime" component={realTime} />
        <Stack.Screen name="VideoPlayer" component={VideoPlayerScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;