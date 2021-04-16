import React, {useState, useEffect, Component} from 'react';
import {
    ActivityIndicator,
    FlatList,
    View,
    Text,
    TouchableHighlight,
    StyleSheet,
    RefreshControl,
    ScrollView,
    Image
} from 'react-native';
import {Header, Left, Right, Body, Title, Button, Icon, Input, Item} from 'native-base'
import { database } from '../Setup';
import YoutubePlayer from "react-native-youtube-iframe";

function coachingPage({navigation}){

    const [loading, setLoading] = useState(true); // Set loading to true on component mount
    const [coaches, setCoaches] = useState([]); // Initial empty array of users
    const [refreshing, setRefreshing] = useState(false);

    const onRefresh = () =>{
        setRefreshing(true)
        database().ref('coaches').once('value').then((snapshot) => {
            const coaches = [];

            snapshot.forEach((child) => {
                coaches.push(child.val());
            });

            setCoaches(coaches);
            setLoading(false);
        })
        setRefreshing(false);
    }

    useEffect(() => {
        let subscriber = database()
            .ref('coaches')
            .once('value')
            .then((snapshot) => {
                const coaches = [];

                snapshot.forEach((child) => {
                    coaches.push(child.val());
                });

                setCoaches(coaches);
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
            <ScrollView
                        refreshControl={
                            <RefreshControl
                                refreshing={refreshing}
                                onRefresh={onRefresh}
                            />
                        }>
                            
                {
                    coaches.map((item) => {
                        return(
                            <TouchableHighlight style={styles.coach}>
                            <View key={item.Id} style={styles.listItem}>
                            <View style={styles.title}>
                            <Image style={styles.tinyLogo} source={{uri: item.picture}}/>
                                </View>
                                <View style={styles.title}>
                                    <Text style={styles.text}>
                                        {item.Name}
                                    </Text>
                                </View>
                                <View style={styles.title}>
                                    <Text style={styles.text}>
                                        {item.Rank}
                                    </Text>
                                </View>
                                <View style={styles.title}>
                                    <Text style={styles.text}>
                                        {item.Rating}
                                    </Text>
                                </View>
                            </View>
                            </TouchableHighlight>
                        )
                    })
                }
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    listItem:{
        marginBottom: '5%',
        backgroundColor: '#CCCCCC',
        alignItems: 'center',
    },
    text:{
        fontSize: 20,
    },
    title:{
      marginBottom: '3%',
    },
    container:{
        height: '100%',
        backgroundColor: '#FFFFFF',
    },
    tinyLogo: {
        width: 50,
        height: 50,
        marginTop: 10,
        borderRadius: 50,
      },
});

export default coachingPage;