import * as React from 'react';
import {Button, ThemeProvider, Input, Text} from 'react-native-elements'
import {
    StyleSheet,
    View,
} from 'react-native';
import { submitTutorial } from '../apiService';

const theme = {
    Button: {
        raised: true,
    },
};

function UploadTutorial({navigation}) {

    const [Id, setId] = React.useState();
    const [Title, setTitle] = React.useState('');
    const [Tags, setTags] = React.useState([]);
    const [Link, setLink] = React.useState('');

    const saveTutorial = () =>{
        submitTutorial(Id, Title, Tags, Link).then(result =>{
            setId(null);
            setTitle('');
            setTags('');
            setLink('');
        })
            .catch(error => {
                console.log(error);
            });
    };


    return (
        <View style={styles.body}>
            <Text h5>Upload Tutorial</Text>
            <Input
                placeholder='Title'
                value={Title}
                onChangeText = {text => setTitle(text)}
            />
            <Input
                placeholder='Tags ("Bind,Omen,Attack,Smoke")'
                value={Tags.toString()}
                onChangeText = {text => setTags(text.split(/[,]+/))}
            />
            <Input
                placeholder='Youtube Embedded Link'
                value={Link}
                onChangeText = {text => setLink(text)}
            />
            <ThemeProvider theme={theme}>
                <Button title="Upload"
                        onPress={() => saveTutorial('Id')}
                />
            </ThemeProvider>
        </View>
    );

}

const styles = StyleSheet.create({
    body:{
        height: '100%',
        backgroundColor: '#ffffff',
        alignItems: 'center',
    },
});

export default UploadTutorial;