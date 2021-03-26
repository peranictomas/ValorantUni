import * as React from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import {Button, ThemeProvider, Input, Text, Avatar} from 'react-native-elements';

import { FlatList, StyleSheet, View, TouchableHighlight, ScrollView } from 'react-native';



function TutorialsPage() {
    return (


        <ScrollView style={styles.container}>

            <View style={styles.body}>

                <Text h3>   TUTORIALS</Text>

            </View>

            <View style={styles.header}>
                <DropDownPicker
                    items={[
                        {label: 'Haven', value: 'Haven'},
                        {label: 'Bind', value: 'Bind'},
                    ]}
                    defaultIndex={0}
                    placeholder="Map"
                    containerStyle={{width: '30%', height: 40}}
                    onChangeItem={item => console.log(item.label, item.value)}
                />
                <DropDownPicker
                    items={[
                        {label: 'Sova', value: 'Sova'},
                        {label: 'Viper', value: 'Viper'},
                    ]}
                    defaultIndex={0}
                    placeholder="Agent"
                    containerStyle={{width: '30%', height: 40}}
                    onChangeItem={item => console.log(item.label, item.value)}
                />
                <DropDownPicker
                    items={[
                        {label: 'Attack', value: 'Attack'},
                        {label: 'Defense', value: 'Defense'},
                    ]}
                    defaultIndex={0}
                    placeholder="Phase"
                    containerStyle={{width: '30%', height: 40}}
                    onChangeItem={item => console.log(item.label, item.value)}
                />
            </View>

            <View style={styles.body}>

                <FlatList
                    ItemSeparatorComponent={
                        Platform.OS !== 'android' &&
                        (({ highlighted }) => (
                            <View
                                style={[
                                    style.separator,
                                    highlighted && { marginLeft: 0 }
                                ]}
                            />
                        ))
                    }
                    data={[{ map: 'Bind', agent: 'Sova', phase: 'Attack', author: 'Wahby', key: 'Bind' },
                        { map: 'Ascent', agent: 'Sova', phase: 'Attack',  author: 'Wahby', key: 'Ascent' },
                        { map: 'Haven', agent: 'Sova', phase: 'Defense',  author: 'Wahby', key: 'Haven' },
                        { map: 'Icebox', agent: 'Sova', phase: 'Defense',  author: 'Wahby', key: 'Icebox' },
                        { map: 'Split', agent: 'Sova', phase: 'Attack',  author: 'Wahby', key: 'Split' }]}

                    renderItem={({ item, index, separators }) => (
                        <TouchableHighlight
                            key={item.key}
                            onPress={() => (console.log(item.key))}
                            onShowUnderlay={separators.highlight}
                            onHideUnderlay={separators.unhighlight}>
                            <View style={styles.item}>
                                <Avatar
                                    size="medium"
                                    title="MAP"
                                    rounded
                                    activeOpacity={1}
                                />
                                <Avatar
                                    size="medium"
                                    title="Agent"
                                    rounded
                                    activeOpacity={1}
                                />
                                <Text style={styles.itemTitle}>    {item.phase}</Text>
                                <Text style={styles.itemSubtitle}>       Created By: {item.author}</Text>
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
export default TutorialsPage;