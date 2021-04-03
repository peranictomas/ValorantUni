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

function realTime({navigation}){

    const [Id, setId] = React.useState();
    const [Name, setName] = React.useState('');
    const [Position, setPosition] = React.useState('');
    const [users, setUsers] = React.useState([]);

    const saveUsers = () =>{
        submitUser(Id, Name, Position).then(result =>{
            setId(null);
            setName('');
            setPosition('');
        })
        .catch(error => {
            console.log(error);
        });
    };
    const deleteAllUsers = () =>{
        database().ref('users').remove().then(()=>{
            setUsers([]);
        });
    };
    const deleteUser = (Item) =>{
        database().ref('users/' + Item.Id).remove().then(()=>{
         }).catch((error)=>{
            console.log(error)
        });
    };
    const editUser = (Item) =>{
        setId(Item.Id);
        setName(Item.Name);
        setPosition(Item.Position);
    };
    React.useEffect(()=>{
        const userRef = database().ref('/users');
        const OnLoadingListener = userRef.on('value', snapshot=>{
            setUsers([]);
            snapshot.forEach(function (childSnapshot){
                setUsers(users => [...users, childSnapshot.val()]);
            });
        });
        const childRemovedListener = userRef.on('child_removed', snapshot =>{
            alert('User Removed');
        });
        const childChangedListener = userRef.on('child_removed', snapshot =>{
            alert('User Changed');
        });
        return()=>{
            userRef.off('value', OnLoadingListener);
            userRef.off('child_removed', childRemovedListener);
            userRef.off('child_changed', childChangedListener);
        };
    },[])
  return (
    <Container>
      <Header>
        <Left style={{flex: 0.2}}>
          <Button transparent icon onPress={() => navigation.goBack()}>
            <Icon name="arrow-left" />
          </Button>
        </Left>
        <Body style={{flex: 1, justifyContent: 'center'}}>
          <Title>Realtime Database</Title>
        </Body>
        <Right style={{flex: 0.2}}>
          <Button transparent icon onPress={() => deleteAllUsers('Id')}>
            <Icon name="trash-o" />
          </Button>
          <Button transparent icon onPress={() => saveUsers('Id')}>
            <Icon name="save" />
          </Button>
        </Right>
      </Header>
      <Header searchBar rounded>
        <Item>
          <Input
            placeholder="Name"
            value = {Name} 
            onChangeText = {text => setName(text)}
            />
        </Item>
        <Item>
          <Input
            keyboardType="numeric"
            placeholder="Position"
            value = {Position}
            onChangeText = {text => setPosition(text)}
          />
        </Item>
      </Header>
      <Content padder>
          {users.map((item, index) => (
          <ListItem icon>
            <Body>
              <Text>
                {"Name: "}
                {item.Name}
              </Text>
              <Text>
                {"Position: "}
                {item.Position}
              </Text>
            </Body>
            <Right>
              <Button transparent onPress={() => editUser(item)}>
                <Icon active name="edit" />
              </Button>
              <Button transparent onPress={() => deleteUser(item)}>
                <Icon active name="trash" />
              </Button>
            </Right>
          </ListItem>
          ))}
      </Content>
    </Container>
  );
};
Icon.loadFont();

export default realTime;