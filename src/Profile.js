import * as React from 'react';
import {useState, useEffect} from 'react';
import {Button, ThemeProvider, Input, Text} from 'react-native-elements';
import {
  ActivityIndicator,
  FlatList,
  Image,
  ImageBackground,
  StyleSheet,
  View,
} from 'react-native';

export default class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      dataSource: null,
    }
  }

  componentDidMount() {
    return fetch('http://stelar7.no/valorant/vod/game.json')
      .then( (response) => response.json())
      .then( (responseJson) => {

        this.setState({
          isLoading: false,
          dataSource: responseJson,
        })

      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View style={styles.container}>
          <Text>Loading</Text>
        </View>
      )
    } else {

        // let userStats = this.state.dataSource.map((val, key) => {
        //   // console.log(val.stats.kills)
        //   console.log(this.state.dataSource[0].stats.kills)
        //   return(
        //       <View key={key}>
        //         <Text>{val.stats.kills}</Text>
        //       </View>
        //       )
        //
        // });

        return (
          <View style={styles.container}>
            <View style={styles.imageContainer}>
              <ImageBackground
                  style={styles.box}
                  source={{
                    uri: 'https://i.imgur.com/boNjV3d.png',
                  }}>
                <Text style={styles.username}>raysye #12345</Text>
                <Image
                    style={styles.tinyLogo}
                    source={{
                      uri:
                          'https://static.wikia.nocookie.net/valorant/images/d/d3/TX_CompetitiveTier_Large_15.png/revision/latest/top-crop/width/300/height/300?cb=20200623203419',
                    }}
                />
                <Text style={styles.rank}>Platinum 1</Text>
                <Text style={styles.history}>Form: W/L/W/W/W </Text>
              </ImageBackground>
            </View>

            <View style={styles.statContainer}>
              <Text style={styles.title}>Your Last Match</Text>
              <Text style={styles.header}>Match Breakdown</Text>
              <Text>Game Mode: {this.state.dataSource.matchInfo.queueId}</Text>
              <Text>Rounds Won: {this.state.dataSource.teams[1].roundsWon}</Text>
              <Text>Rounds Played: {this.state.dataSource.teams[1].roundsPlayed}</Text>
            </View>

            <View style={styles.statContainer}>
              <Text style={styles.header}>Personal Stats</Text>
              <Text>Score: {this.state.dataSource.players[0].stats.score}</Text>
              <Text>Kills: {this.state.dataSource.players[0].stats.kills}</Text>
              <Text>Deaths: {this.state.dataSource.players[0].stats.deaths}</Text>
              <Text>Assists: {this.state.dataSource.players[0].stats.assists}</Text>
            </View>

            <View style={styles.statContainer}>
              <Text style={styles.header}>Best Round</Text>
              <Text>Round Number: 8</Text>
              <Text>Number of Kills: {this.state.dataSource.roundResults[8].playerStats[0].kills.length}</Text>
              <Text>Score: {this.state.dataSource.roundResults[8].playerStats[0].score}</Text>
            </View>
          </View>
        );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  box: {
    height: '100%',
  },
  username: {
    fontSize: 26,
    fontWeight: 'bold',
    color: 'black',
    paddingLeft: 15,
    paddingTop: 15,
  },
  tinyLogo: {
    width: 50,
    height: 50,
    left: 50,
    marginTop: 20,
  },
  rank: {
    fontWeight: 'bold',
    paddingLeft: 40,
    paddingTop: 5,
  },
  history: {
    fontWeight: 'bold',
    paddingLeft: 40,
    paddingTop: 5,
  },
  item: {
    flex: 1,
  },
  header: {
    fontWeight: 'bold',
    fontSize: 15,
  },
  statContainer: {
    margin: 15,
  },
  imageContainer: {
    height: '40%',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#2d0080',
  },
});
