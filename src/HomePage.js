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
} from 'native-base';

function HomePage({navigation}){
  return (
    <Container>
      <Header>
        <Body>
          <Title>React Native Firebase Tutorials</Title>
        </Body>
        <Right/>
      </Header>
      <Content>
        <ListItem onPress={() => navigation.navigate('auth')}>
          <Text>Authentication</Text>
        </ListItem>
        <ListItem>
          <Text onPress={() => navigation.navigate('realTime')}>Realtime Database</Text>
        </ListItem>
      </Content>
    </Container>
  );
};

export default HomePage;