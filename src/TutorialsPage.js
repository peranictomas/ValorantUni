import React, {useState, useEffect, Component} from 'react';
import {NavigationContainer} from "react-navigation";
import {ActivityIndicator, FlatList, View, Text, TouchableHighlight, StyleSheet} from 'react-native';
import { database } from '../Setup';
import Video from 'react-native-video'
import YoutubePlayer from "react-native-youtube-iframe";
import {Container} from "native-base";

function TutorialsPage({navigation}) {

    const [loading, setLoading] = useState(true); // Set loading to true on component mount
    const [tutorials, setTutorials] = useState([]); // Initial empty array of users

    useEffect(() => {
        let subscriber = database()
            .ref('tutorials')
            .once('value')
            .then((snapshot) => {
                const tutorials = [];

                snapshot.forEach((child) => {
                    tutorials.push(child.val());
                });

                setTutorials(tutorials);
                setLoading(false);
            });

        // Unsubscribe from events when no longer in use
        return () => subscriber();
    }, []);

    if (loading) {
        return <ActivityIndicator />;
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={tutorials}
                renderItem={({item}) =>

                    <TouchableHighlight>
                        <View style={styles.listItem}>
                            <View >
                                <YoutubePlayer height={225} play={false} videoId={item.Link} />
                            </View>
                            <View style={styles.title}>
                                <Text style={styles.text}>
                                    {item.Title}
                                </Text>
                            </View>
                            {/*<View style={styles.tags}>*/}
                            {/*    <Text>*/}
                            {/*        {item.Tags.replaceAll(',', ', ')}*/}
                            {/*    </Text>*/}
                            {/*</View>*/}
                        </View>
                    </TouchableHighlight>
                }
                keyExtractor={(item, index) => index.toString()}

            />
        </View>
    );
}


const styles = StyleSheet.create({

    listItem:{
        marginBottom: '5%',
        backgroundColor: '#CCCCCC',
    },
    text:{
        fontSize: 20,
        paddingLeft: '2%',
    },
    title:{
      marginBottom: '3%',
    },
    container:{
        backgroundColor: '#FFFFFF',
    }
});

export default TutorialsPage;