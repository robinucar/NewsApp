import React from 'react';
import {View, Image, Text, StyleSheet, Dimensions} from 'react-native';

const NewsCard = (props) => {
  const {news} = props;
  return (
    <View style={styles.container}>
      <Image source={{uri: news.imageUrl}} style={styles.image} />
      <Text style={styles.title}>{news.title}</Text>
      <Text style={styles.description}>{news.description}</Text>
    </View>
  );
};

export {NewsCard};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: '#eceff1',
    padding: 5,
    margin: 5,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  description: {},
  image: {
    height: Dimensions.get('window').height * 0.2,
    borderRadius: 5,
  },
});
