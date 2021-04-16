import * as React from 'react';
import { Container, Content, Header, Body, Title, Text, Left, Button, Right, Form, Item } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';
import { Auth } from '../Setup';
import { SignInUser, SignUpUser, SignOutUser } from '../apiService';

function signIn({navigation}){

    const [state, setState] = React.useState({
        emailAddress: '',
        password:'',
    });

    const [user, setUser] = React.useState();

    const signIn = () => {
        SignInUser(state.emailAddress, state.password)
        .then(data =>{
            alert(data);
        })
        .catch(error=>{
            alert(error);
        });
    };

    const onAuthStateChanged = user => {
        setUser(user);
    };

    React.useEffect(() => {
        const subscriber = Auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber;
    },[]);

  return (
    <Container>
      <Content>
      <Form>
            <Item>
                <Input
                label="Email"
                placeholder='Email Address'
                value={state.emailAddress}
                onChangeText={(text)=>setState({...state, emailAddress:text})}
                    leftIcon={
                        <Icon
                        name='envelope'
                        size={24}
                        color='black'/>
                    }/>
            </Item>
            <Item>
            <Input
                label="Password"
                placeholder='Password'
                value={state.password}
                secureTextEntry={true}
                onChangeText={(text)=>setState({...state, password:text})}
                    leftIcon={
                        <Icon
                        name='lock'
                        size={24}
                        color='black'/>
                    }/>
            </Item>
            <Button block onPress={signIn}>
                <Text>Sign In</Text>
            </Button>
          </Form>
           {user &&(
        <Button block onPress={()=>{
            navigation.navigate('homePage',{
            });
        }} >
            <Text>Continue</Text>
          </Button>
        )}
      </Content>
     
    </Container>
  );
};
Icon.loadFont();

export default signIn;