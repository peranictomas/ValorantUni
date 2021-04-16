import * as React from 'react';
import { Container, Content, Header, Body, Title, Text, Left, Button, Right, Form, Item } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';
import { Auth } from '../Setup';
import { SignOutUser } from '../apiService';

function homePage({navigation}){

    const [user, setUser] = React.useState();

    const signOut = () => {
        SignOutUser()
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
                    <Button block onPress={signOut}>
                        <Text>Sign Out</Text>
                    </Button>
                </Form>
                <Button block onPress={() => navigation.navigate('TutorialsPage')}>
                    <Text>Tutorials Page</Text>
                </Button>
                <Button block onPress={() => navigation.navigate('mainMenu')}>
                    <Text>Continue</Text>
                </Button>

            </Content>
        </Container>
    );
};

Icon.loadFont();

export default homePage;
