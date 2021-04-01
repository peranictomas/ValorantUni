
import * as React from 'react';
import {Button, ThemeProvider, Input, Text} from 'react-native-elements'
import {
    StyleSheet,
    View,
} from 'react-native';
import {
    MultiselectDropdown,
} from 'sharingan-rn-modal-dropdown';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const theme = {
    Button: {
        raised: true,
    },
};

function UploadTutorial({navigation}) {
    return (
        <View style={styles.body}>
            <Text h5>Upload Tutorial</Text>
            <Input
                placeholder='Title'
            />
            <Input
                placeholder='Tags ("Bind, Omen, Attack, Smoke")'
            />
            <Input
                placeholder='Youtube Embedded Link'
            />
            <ThemeProvider theme={theme}>
                <Button title="Upload"
                        onPress={() => navigation.navigate('HomePage')}
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