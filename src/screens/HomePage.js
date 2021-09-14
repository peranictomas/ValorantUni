import React from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import Onboarding from '../../components/Onboarding';

function HomePage() {
  return (
    <View style={styles.container}>
      <Onboarding />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  pageTitle: {
    textAlign: 'center',
    fontSize: 50,
    color: '#ff5151',
    fontWeight: 'bold',
    backgroundColor: '#172945',
    borderRadius: 10,
    margin: 30,
  },
  heading: {
    textAlign: 'left',
    marginLeft: 10,
    marginTop: 10,
    fontSize: 20,
    color: '#172945',
  },
  body: {
    textAlign: 'left',
    marginLeft: 10,
    marginRight: 10,
    marginTop: 5,
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },

  title: {
    fontWeight: '800',
    fontSize: 28,
    marginBottom: 10,
    color: '#1a2c49',
    textAlign: 'center',
    paddingTop: 20,
  },
});

export default HomePage;
