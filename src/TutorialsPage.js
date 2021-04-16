import React, {useState, useEffect, Component} from 'react';
import {
    ActivityIndicator,
    FlatList,
    View,
    Text,
    TouchableHighlight,
    StyleSheet,
    RefreshControl,
    ScrollView
} from 'react-native';
import {Header, Left, Right, Body, Title, Button, Icon} from 'native-base'
import { database } from '../Setup';
import YoutubePlayer from "react-native-youtube-iframe";

function TutorialsPage({navigation}){

    const [loading, setLoading] = useState(true); // Set loading to true on component mount
    const [tutorials, setTutorials] = useState([]); // Initial empty array of users
    const [refreshing, setRefreshing] = useState(false);

    const onRefresh = () =>{
        setRefreshing(true)
        database().ref('tutorials').once('value').then((snapshot) => {
            const tutorials = [];

            snapshot.forEach((child) => {
                tutorials.push(child.val());
            });

            setTutorials(tutorials);
            setLoading(false);
        })
        setRefreshing(false);
    }

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
            {/*<Left>*/}

            {/*    <Button transparent icon onPress={() => }>*/}
            {/*        <Icon name="refresh"/>*/}
            {/*    </Button>*/}
            {/*</Left>*/}


            <Button block onPress={() => navigation.navigate('mainMenu')}>
                <Text>Create Tutorial</Text>
            </Button>


            {/*<FlatList*/}
            {/*    data={tutorials}*/}
            {/*    renderItem={({item}) =>*/}


            <ScrollView
                        refreshControl={
                            <RefreshControl
                                refreshing={refreshing}
                                onRefresh={onRefresh}
                            />
                        }>
                {
                    tutorials.map((item) => {
                        return(
                            <View key={item.Id} style={styles.listItem}>
                                <View>
                                    <YoutubePlayer height={225} play={false} videoId={item.Link}/>
                                </View>
                                <View style={styles.title}>
                                    <Text style={styles.text}>
                                        {item.Title}
                                    </Text>
                                </View>
                            </View>
                        )
                    })
                }


                    {/*<TouchableHighlight>*/}
                    {/*    <View style={styles.listItem}>*/}
                    {/*        <View>*/}
                    {/*            <YoutubePlayer height={225} play={false} videoId={item.Link}/>*/}
                    {/*        </View>*/}
                    {/*        <View style={styles.title}>*/}
                    {/*            <Text style={styles.text}>*/}
                    {/*                {item.Title}*/}
                    {/*            </Text>*/}
                    {/*        </View>*/}
                    {/*    </View>*/}
                    {/*</TouchableHighlight>*/}

            </ScrollView>


                {/*}*/}
                {/*keyExtractor={(item, index) => index.toString()}*/}

            {/*/>*/}
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
        height: '100%',
        backgroundColor: '#FFFFFF',
    }
});

export default TutorialsPage;