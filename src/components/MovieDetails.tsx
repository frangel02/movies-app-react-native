import React from 'react'
import { FlatList, Text, View } from 'react-native';
import currencyFormatter from 'currency-formatter';
import Icon from 'react-native-vector-icons/Ionicons';


import { MovieFullDetail } from '../interfaces/movieInterface';
import { Cast } from '../interfaces/creditsInterface';
import { CastItem } from './CastItem';

interface Props {
    movieFullDetail: MovieFullDetail;
    cast: Cast[]
}


export const MovieDetails = ({ movieFullDetail, cast }: Props) => {
    return (
        <>
            {/* Detalles */}
            <View style={{ marginHorizontal: 20 }}>

                <View style={{ flexDirection: 'row' }}>
                    <Icon 
                        name="star-outline"
                        color="grey"
                        size={ 16 }
                    />

                    <Text style={{ color: 'grey'}} > { movieFullDetail.vote_average }</Text>

                    <Text style={{ marginLeft: 5 , color: 'gray'}}>
                         - { movieFullDetail.genres.map( g => g.name ).join(', ') }
                    </Text>

                </View>

                {/* Historia */}
                <Text style={{ fontSize: 23, marginTop: 10, fontWeight: 'bold',color: 'grey' }}>
                    Historia
                </Text>

                <Text style={{ fontSize: 16, color: 'gray' }}>
                    { movieFullDetail.overview }
                </Text>

                {/* Historia */}
                <Text style={{ fontSize: 23, marginTop: 10, fontWeight: 'bold',color: 'gray' }}>
                    Presupuesto
                </Text>
                <Text style={{ fontSize: 18 , color: 'gray'}}>
                    { currencyFormatter.format( movieFullDetail.budget, { code:'USD' }) }
                </Text>
                

            </View>

            {/* Casting */}
            <View style={{ marginTop: 10, marginBottom: 100   }}>
                <Text style={{ fontSize: 23, marginTop: 10, fontWeight: 'bold', marginHorizontal: 20,color: 'gray'}}>
                    Actores
                </Text>

                <FlatList 
                    data={ cast }
                    keyExtractor={ (item, index ) => item.id.toString() + index }
                    renderItem={ ({ item }) => <CastItem actor={ item } /> }
                    horizontal={ true }
                    showsHorizontalScrollIndicator={ false }
                    style={{ marginTop: 10, height: 70 }}
                />
                

            </View>

        </>
    )
}
