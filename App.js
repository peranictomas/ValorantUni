// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import signUp from './src/signUp';
import mainMenu from './src/mainMenu';
import signIn from './src/signIn';
import UploadTutorial from "./src/UploadTutorial";
import TutorialsPage from "./src/TutorialsPage";
import homePage from "./src/homePage";
import userInfo from "./src/userInfo";

const Stack = createStackNavigator();

function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="mainMenu" component={mainMenu} />
            <Stack.Screen name="homePage" component={homePage} />
          <Stack.Screen name="TutorialsPage" component={TutorialsPage} />
          <Stack.Screen name="UploadTutorial" component={UploadTutorial} />
        <Stack.Screen name="signIn" component={signIn} />
        <Stack.Screen name="signUp" component={signUp}/>
            <Stack.Screen name="userInfo" component={userInfo}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;