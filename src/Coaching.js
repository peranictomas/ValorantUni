import * as React from 'react';
import {Text, Avatar} from 'react-native-elements';
import { FlatList, StyleSheet, View, TouchableHighlight, ScrollView } from 'react-native';

function Coaching() {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.body}>
                <Text h3>Coaching</Text>
            </View>
            <View style={styles.body}>
                <FlatList
                    data={[{ name: 'Tenz', rank: 'Radiant', valorantID: 'Tenzzz', author: 'Tomas', key: 'Tenz' },
                        { name: 'Tenz', rank: 'Radiant', valorantID: 'Tenzzz',  author: 'Tomas', key: 'Tenz' }]}
                    renderItem={({ item, index, separators }) => (
                        <TouchableHighlight
                            key={item.key}
                            onPress={() => (console.log(item.key))}
                            onShowUnderlay={separators.highlight}
                            onHideUnderlay={separators.unhighlight}>
                            <View style={styles.item}>
                                <Avatar
                                    size="medium"
                                    title="Coach"
                                    rounded
                                    activeOpacity={1}
                                />
                                <Text style={styles.itemTitle}>    {item.phase}</Text>
                                <Text style={styles.itemSubtitle}></Text>
                            </View>
                        </TouchableHighlight>
                    )}
                />
            </View>
        </ScrollView>
    );
}
const styles = StyleSheet.create({
    header:{
        flexDirection:'row',
        backgroundColor: '#ffffff',
        justifyContent: 'center',
        zIndex: 1,
        marginBottom:'5%'
    },
    container:{
        backgroundColor: '#FFFFFF',

    },
    body:{
        backgroundColor: '#FFFFFF',
        marginBottom:'5%'
    },
    item:{
        flexDirection:'row',
        backgroundColor: '#F1F1F1',
        padding: '5%',
        margin: 5
    },
    itemTitle:{
        paddingTop: '3%',
        fontSize: 20
    },
    itemSubtitle:{
        paddingTop: '4%',
        fontSize: 15
    }
});
export default Coaching;