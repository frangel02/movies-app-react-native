import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {View, ActivityIndicator, Dimensions, Text} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {MoviePoster} from '../components/MoviePoster';
import {useMovies} from '../hooks/useMovies';
import Carousel from 'react-native-snap-carousel';
import {FlatList, ScrollView} from 'react-native-gesture-handler';
import { HorizontalSlider } from '../components/HorizontalSlider';

const {width: windowWith} = Dimensions.get('window');

export const HomeScreen = () => {
  //const navigation = useNavigation();
  const {nowPlaying,popular,topRated,upComing, isLoading} = useMovies();
  const {top} = useSafeAreaInsets();

  //console.log(nowPlaying[0]?.title);

  if (isLoading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignContent: 'center'}}>
        <ActivityIndicator color="red" size={100} />
      </View>
    );
  }

  return (
    <ScrollView>
      <View style={{marginTop: top + 20}}>
        {/*<MoviePoster movie={moviesCine[9]} />*/}

        {/*Carrusel principal*/}
        <View style={{height: 440}}>
          <Carousel
            data={nowPlaying!}
            renderItem={({item}: any) => <MoviePoster movie={item} />}
            sliderWidth={windowWith}
            itemWidth={300}
          />
        </View>

        {/*Peliculas Populares*/}
        <HorizontalSlider title="Populares" movies={popular!} />
        <HorizontalSlider title="Top Rated" movies={topRated!} />
        <HorizontalSlider title="Upcoming" movies={upComing!} />
      </View>
    </ScrollView>
  );
};
