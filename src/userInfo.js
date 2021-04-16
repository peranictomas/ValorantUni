import * as React from 'react';
import {
  Container,
  Content,
  Header,
  Body,
  Title,
  ListItem,
  Text,
  Right,
  Left,
  Button,
  Item,
  Input
} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import { submitUser } from '../apiService';
import { database } from '../Setup';
import BackHandler from 'react-native';

function userInfo({route, navigation}){
  
    const { email } = route.params;

    const test = JSON.stringify(email)
    const newEmail = test.replace(/['"]+/g, '');

    const [Id, setId] = React.useState();
    const [firstName, setFirstName] = React.useState('');
    const [lastName, setLastName] = React.useState('');
    const [emailAdd, setEmail] = React.useState('');
    const [Age, setAge] = React.useState('');
    const [users, setUsers] = React.useState([]);

    const saveUsers = () =>{
        submitUser(Id, email, firstName, lastName, Age).then(result =>{
            setId(null);
            setEmail('');
            setFirstName('');
            setLastName('');
            setAge('');
        })
        .catch(error => {
            console.log(error);
        });
    };
   
  return (
    <Container>
        <Item>
          <Input
            editable = {false}
            placeholder="Email"
            value = {email} 
            />
        </Item>
      <Item>
          <Input
            placeholder="First Name"
            value = {firstName} 
            onChangeText = {text => setFirstName(text)}
            />
        </Item>
        <Item>
          <Input
            placeholder="Last Name"
            value = {lastName} 
            onChangeText = {text => setLastName(text)}
            />
        </Item>
        <Item>
          <Input
            keyboardType="numeric"
            placeholder="Age"
            value = {Age}
            onChangeText = {text => setAge(text)}
          />
        </Item>
      <Button block onPress={
          () => {saveUsers('Id'); navigation.navigate('HomePage');}
          }>
            <Text>Continue</Text>
        </Button>
        
    </Container>
  );
};
Icon.loadFont();

export default userInfo;