import React, { useState, useEffect } from 'react';
import {ActivityIndicator, FlatList, View, Text, TouchableHighlight} from 'react-native';
import { database } from '../Setup';
import {submitUser} from "../apiService";


function TutorialsPage() {


    const [tutorials, setTutorials] = React.useState([]);



    const getTutorials = () =>{
        database().ref('tutorials').once("value").then((snapshot)=>{
            setTutorials([snapshot.val()]);
        });
    };

    return (
        <View>
         <FlatList
             data={tutorials}
             renderItem={({ item }) => (
                 <TouchableHighlight onPress={() => {}}>
                     <Text>
                         {item.Title}
                     </Text>
                 </TouchableHighlight>
             )}
         />
        </View>
    );
}
export default TutorialsPage;