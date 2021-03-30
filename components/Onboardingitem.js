import React from 'react';
import {View, Text, StyleSheet, Image, useWindowDimensions} from 'react-native';

function Onboardingitem({item}) {
  const {width} = useWindowDimensions();
  return (
    <View style={[styles.container, {width}]}>
      <Image
        source={item.image}
        style={[styles.image, {width, resizeMode: 'contain'}]}
      />
      <View style={{flex: 0.3}}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 40,
  },
  image: {
    flex: 0.7,
    justifyContent: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 28,
    marginBottom: 10,
    color: '#ff3737',
    textAlign: 'center',
  },
  description: {
    fontWeight: '300',
    color: '#1a2c49',
    textAlign: 'center',
    paddingHorizontal: 10,
  },
});

export default Onboardingitem;
