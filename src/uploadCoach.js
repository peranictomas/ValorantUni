import * as React from 'react';
import {Button, ThemeProvider, Input, Text} from 'react-native-elements'
import {
    StyleSheet,
    View,
} from 'react-native';
import { submitCoach, submitTutorial } from '../apiService';

const theme = {
    Button: {
        raised: true,
    },
};

function uploadCoach({navigation}) {

    const [Id, setId] = React.useState();
    const [Name, setName] = React.useState('');
    const [Rank, setRank] = React.useState([]);
    const [Rating, setRating] = React.useState('');

    const saveCoach = () =>{
        submitCoach(Id, Name, Rank, Rating).then(result =>{
            setId(null);
            setName('');
            setRank('');
            setRating('');
        })
            .catch(error => {
                console.log(error);
            });
    };

    return (
        <View style={styles.body}>
            <Text h5>Upload Coach Data</Text>
            <Input
                placeholder='Name'
                value={Name}
                onChangeText = {text => setName(text)}
            />
            <Input
                placeholder='Rank'
                value={Rank}
                onChangeText = {text => setRank(text)}
            />
            <Input
                placeholder='Rating'
                value={Rating}
                onChangeText = {text => setRating(text)}
            />
            <ThemeProvider theme={theme}>
                <Button title="Upload"
                        onPressIn={() => saveCoach('Id')}
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

export default uploadCoach;