import React, { useState, useEffect } from 'react';
import {ActivityIndicator, FlatList, View, Text, TouchableHighlight} from 'react-native';
import { database } from '../Setup';


function TutorialsPage() {


    const tutorials = database().ref('tutorials').limitToFirst(10).once('value')
    console.log(tutorials.length)
    // database()
    //     .ref('/tutorials')
    //     .once('value')
    //     .then(snapshot => {
    //         console.log('User data: ', snapshot.val());
    //     });

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