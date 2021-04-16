import * as React from 'react';
import { Container, Content, Header, Body, Title, Text, Left, Button, Right, Form, Item } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';
import signUp from './signUp';

function mainMenu({navigation}){

  return (
    <Container>
      <Content>
            <Button block onPress={() => navigation.navigate('signUp')}>
                <Text>Sign Up</Text>
            </Button>
            <Button block onPress={() => navigation.navigate('signIn')}>
                <Text>Sign In</Text>
            </Button>
      </Content>
    </Container>
  );
};
Icon.loadFont();

export default mainMenu;