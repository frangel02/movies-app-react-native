import { useNavigation } from '@react-navigation/core';
import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {Movie} from '../interfaces/movieinterface';

interface Props {
  movie: Movie;
  height?: number;
  width?: number;
}

export const MoviePoster = ({movie, height = 420, width = 300}: Props) => {
  const uri = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;

  const nativation = useNavigation();

  console.log(movie);
  return (
    <TouchableOpacity
    onPress={ ()=> nativation.navigate('DetailScreen', movie)}
    activeOpacity={0.8}
      style={{
        width,
        height,
        marginHorizontal: 2,
        paddingBottom:20,
        paddingHorizontal:7
        // backgroundColor: 'red'
      }}>
      <View style={styles.imageContainer}>
        <Image source={{uri}} style={styles.image} />
        {/*<Text>{movie.title}</Text>*/}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
    borderRadius: 18,
  },

  imageContainer: {
    flex: 1,
    borderRadius: 18,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.24,
    shadowRadius: 3.84,

    elevation: 9,
  },
});
