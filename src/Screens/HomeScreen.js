// App.js
import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, SafeAreaView, Text, View, ScrollView, TextInput, ActivityIndicator, TouchableOpacity } from 'react-native';
import ProductCard from '../Components/ProductCard';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
    const [data, setData] = useState([])
    const [bestSellingData, setSellingData] = useState([])
    const [trendingData, setTrendingData] = useState([])
    const [loading, setLoading] = useState(false)

    const navigation = useNavigation()
    const products = [
        {
            id: '1',
            name: 'Product 1',
            price: '$10.00',
            image: 'https://via.placeholder.com/150'
        },
        {
            id: '2',
            name: 'Product 2',
            price: '$20.00',
            image: 'https://via.placeholder.com/150'
        },
        {
            id: '3',
            name: 'Product 3',
            price: '$30.00',
            image: 'https://via.placeholder.com/150'
        },
    ];

    const newProducts = [
        {
            id: '1',
            name: 'Product 1',
            price: '$10.00',
            image: 'https://via.placeholder.com/150'
        },
        {
            id: '2',
            name: 'Product 2',
            price: '$20.00',
            image: 'https://via.placeholder.com/150'
        },
        {
            id: '3',
            name: 'Product 3',
            price: '$30.00',
            image: 'https://via.placeholder.com/150'
        },
    ];

    const trendingProd = [
        {
            id: '1',
            name: 'Product 1',
            price: '$10.00',
            image: 'https://via.placeholder.com/150'
        },
        {
            id: '2',
            name: 'Product 2',
            price: '$20.00',
            image: 'https://via.placeholder.com/150'
        },
        {
            id: '3',
            name: 'Product 3',
            price: '$30.00',
            image: 'https://via.placeholder.com/150'
        },
    ];


    const getSellingProducts = () => {
        setLoading(true)
        axios.get('https://fakestoreapi.com/products/category/jewelery')
            .then((response) => {
                // console.log(response.data);
                setSellingData(response?.data)
                setLoading(false)
            })
            .catch((error) => {
                console.error('Error fetching products:', error);
            });
    }
    const getTrendingProducts = () => {
        setLoading(true)
        axios.get('https://fakestoreapi.com/products/category/electronics')
            .then((response) => {
                // console.log(response.data);
                setTrendingData(response?.data)
                setLoading(false)
            })
            .catch((error) => {
                console.error('Error fetching products:', error);
            });
    }
    const getProducts = () => {
        setLoading(true)
        axios.get('https://fakestoreapi.com/products')
            .then((response) => {
                // console.log(response.data);
                setData(response?.data)
                setLoading(false)
            })
            .catch((error) => {
                console.error('Error fetching products:', error);
            });
    }




    const filterValue = (value) => {
        console.log(value);
    }

    useEffect(() => {
        getProducts()
        getSellingProducts()
        getTrendingProducts()
    }, [])



    return (
        <>
            {loading ? <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <ActivityIndicator />
            </View>
                :
                <ScrollView style={styles.container}>

                    <TextInput
                        style={styles.searchBar}
                        placeholder="Search products..."
                        onChangeText={filterValue}
                    />
                    <View>
                        <View style={{ flexDirection: "row", justifyContent: "space-between", marginHorizontal: 5 }}>
                            <Text style={styles.header}>New Items</Text>
                            <TouchableOpacity
                                onPress={() => { navigation.navigate("AllProducts") }}
                            >
                                <Text style={styles.ViewStyle}>{'View all >'}</Text>
                            </TouchableOpacity>
                        </View>
                        <FlatList
                            data={data.slice(0, 4)}
                            renderItem={({ item }) => <ProductCard product={item} />}
                            keyExtractor={(item) => item.id}
                            horizontal
                        />
                    </View>
                    <View>
                        <View style={{ flexDirection: "row", justifyContent: "space-between", marginHorizontal: 5 }}>
                            <Text style={styles.header}>Best Selling</Text>
                            <TouchableOpacity
                                onPress={() => { navigation.navigate("AllProducts") }}
                            >
                                <Text style={styles.ViewStyle}>{'View all >'}</Text>
                            </TouchableOpacity>
                        </View>
                        <FlatList
                            data={bestSellingData}
                            renderItem={({ item }) => <ProductCard product={item} />}
                            keyExtractor={(item) => item.id}
                            horizontal
                        />
                    </View>
                    <View>
                        <View style={{ flexDirection: "row", justifyContent: "space-between", marginHorizontal: 5 }}>
                            <Text style={styles.header}>Trending</Text>
                            <TouchableOpacity
                                onPress={() => { navigation.navigate("AllProducts") }}
                            >
                                <Text style={styles.ViewStyle}>{'View all >'}</Text>
                            </TouchableOpacity>
                        </View>
                        <FlatList
                            data={trendingData}
                            renderItem={({ item }) => <ProductCard product={item} />}
                            keyExtractor={(item) => item.id}
                            horizontal
                        />
                    </View>

                </ScrollView>
            }
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        backgroundColor: '#f5f5f5',
        margin: 5
    },
    header: {
        fontWeight: "700",
        fontSize: 16,
        color: "#000"
    },
    ViewStyle: {
        fontSize: 12,
        color: "blue"
    },
    searchBar: {
        flex: 1,
        height: 40,
        backgroundColor: '#f0f0f0',
        borderRadius: 8,
        paddingHorizontal: 16,
        marginRight: 8,
        marginVertical: 8
    },
});


export default HomeScreen

