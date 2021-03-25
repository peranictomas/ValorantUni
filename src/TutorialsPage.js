import * as React from 'react';
import {Button, ThemeProvider, Input, Text} from 'react-native-elements'
import {
    StyleSheet,
    View,
} from 'react-native';

function TutorialsPage() {
    return (
        <View style={styles.body}>
            <Text h1>VALORANT UNIVERSITY</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    body:{
        flex: 1,
        backgroundColor: '#ffffff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
export default TutorialsPage;