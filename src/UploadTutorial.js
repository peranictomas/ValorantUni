
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

export const data = [
    {
        value: '',
        label: 'Tiger Nixon',
        employee_salary: '320800',
        employee_age: '61',
    },
    {
        value: '2',
        label: 'Garrett Winters',
        employee_salary: '170750',
        employee_age: '63',
    },
    {
        value: '3',
        label: 'Ashton Cox',
        employee_salary: '86000',
        employee_age: '66',
    },
    {
        value: '4',
        label: 'Cedric Kelly',
        employee_salary: '433060',
        employee_age: '22',
    },
];

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