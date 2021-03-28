// //This is for react native elements
// //https://github.com/react-native-elements/react-native-elements
// //Troubleshooting for mac
// //https://dev-yakuza.posstree.com/en/react-native/install-on-mac/
// import * as React from 'react';
// import {Button, ThemeProvider, Input, Text} from 'react-native-elements'
// import {
//   StyleSheet,
//   View,
// } from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome';
// import {useState} from 'react';
// import {Auth, firebase} from "../Setup"


// export function Register({navigation}) {
//   const[state, setState] = useState({
//     emailAddress: '',
//     password: ''
//   });

//   const signUp=()=>{
//     //alert(JSON.stringify(state));
//   };

//   const[user, setUser] = useState({
//     emailAddress: '',
//     password: ''
//   });

//   const signOut=()=>{}
//   const signIn=()=>{
    
//   };

//   const onAuthStateChanged=user=>{
//       setUser(user);
//   }

//   React.useEffect(()=>{
//     const subscriber=Auth().onAuthStateChanged(onAuthStateChanged);
//     return subscriber;
//   },[]);

//   const theme = {
//     Button: {
//       raised: true,
//     },
//   };

//     return (
//         <View style={styles.body}>
//           <Text h1>Register</Text>
//           <Input
//             value={state.emailAddress}
//             onChangeText={(text)=>setState({...state, emailAddress:text})}
//             placeholder='email@address.com'
//             leftIcon={
//               <Icon
//                 name='envelope'
//                 size={24}
//                 color='black'
//               />
//             }
//           />
//             <Input
//             value={state.password}
//             onChangeText={(text)=>setState({...state, password:text})}
//             placeholder='Password'
//             secureTextEntry={true}
//             leftIcon={
//               <Icon
//                 name='lock'
//                 size={24}
//                 color='black'
//               />
//             }
//           />
          
//           <ThemeProvider theme={theme}>
//             <Button title="Register"
//               onPressIn={signUp}
//               onPress={() => navigation.navigate('HomePage')}
//             />
//           </ThemeProvider>

//           <Text h1>Login</Text>
//           <Input
//             value={state.emailAddress}
//             onChangeText={(text)=>setState({...state, emailAddress:text})}
//             placeholder='email@address.com'
//             leftIcon={
//               <Icon
//                 name='envelope'
//                 size={24}
//                 color='black'
//               />
//             }
//           />
//             <Input
//             value={state.password}
//             onChangeText={(text)=>setState({...state, password:text})}
//             placeholder='Password'
//             secureTextEntry={true}
//             leftIcon={
//               <Icon
//                 name='lock'
//                 size={24}
//                 color='black'
//               />
//             }
//           />
          
//           <ThemeProvider theme={theme}>
//             <Button title="Login"
//               onPress={signIn}
//             />
//           </ThemeProvider>

//           {/* <Input placeholder='FIRSTNAME'/>
//           <Input placeholder='LASTNAME'/>

//           <Input placeholder='USERNAME' errorStyle={{ color: 'red' }} errorMessage='USERNAME TAKEN'/>
//           <Input
//             placeholder='VALORANT ID'
//             errorStyle={{ color: 'red' }}
//             errorMessage='VALORANT ID NOT REGISTERED'
//           />
//           <Input
//             placeholder='PASSWORD'
//             secureTextEntry={true}
//           />
//           <Input
//             placeholder='CONFIRM PASSWORD'
//             secureTextEntry={true}
//             errorStyle={{ color: 'red' }}
//             errorMessage='PASSWORDS DONT MATCH'
//           />
//           <ThemeProvider theme={theme}>
//             <Button title="Register"
//               onPress={() => navigation.navigate('HomePage')}
//             />
//           </ThemeProvider> */}
//         </View>
//       );
    
//   }

//   const styles = StyleSheet.create({
//     body:{
//       flex: 1,
//       backgroundColor: '#ffffff',
//       alignItems: 'center',
//       justifyContent: 'center',
//     },
//   });
  
// Icon.loadFont();
// export default Register;
 
 
