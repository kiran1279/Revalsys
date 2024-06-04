// App.js
import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, SafeAreaView, Text, View, ScrollView, TextInput, ActivityIndicator, TouchableOpacity } from 'react-native';
import ProductCard from '../Components/ProductCard';
import axios from 'axios';

const AllProducts = () => {
    const [data, setData] = useState([])
    const [bestSellingData, setSellingData] = useState([])
    const [trendingData, setTrendingData] = useState([])
    const [loading, setLoading] = useState(false)
    const [selectedItem, setSelectedItem] = useState('All');

    const category = ["All", "electronics", "jewelery", "men's clothing", "women's clothing"];



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
    const getSelectedProducts = (item) => {
        setLoading(true)
        if (item === 'All') {
            getProducts()
        } else {
            axios.get(`https://fakestoreapi.com/products/category/${item}`)
                .then((response) => {
                    // console.log(response.data);
                    setData(response?.data)
                    setLoading(false)
                })
                .catch((error) => {
                    console.error('Error fetching products:', error);
                });
        }
    }


    const renderItem = ({ item }) => (
        <TouchableOpacity
            style={[
                styles.itemContainer,
                selectedItem === item && styles.selectedItem
            ]}
            onPress={() => { getSelectedProducts(item), setSelectedItem(item) }}
        >
            <Text style={selectedItem === item ? styles.itemSelectText : styles.itemText}>{item}</Text>
        </TouchableOpacity>
    );




    useEffect(() => {
        getProducts()

    }, [])



    return (
        <>
            {loading ? <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <ActivityIndicator />
            </View> :
                <View style={styles.container}>


                    <FlatList
                        data={category}
                        renderItem={renderItem}
                        keyExtractor={(item) => item}
                        horizontal
                    />
                    <FlatList
                        data={data}
                        numColumns={2}
                        renderItem={({ item }) => <ProductCard product={item} />}
                        keyExtractor={(item) => item.id}
                    />
                </View>
            }
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        backgroundColor: '#f5f5f5',
        margin: 5,
        marginBottom: 20
    },
    header: {
        fontWeight: "700",
        fontSize: 16,
        color: "#000"
    },
    ViewStyle: {
        // fontWeight: "700",
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
    itemContainer: {
        borderWidth: 1,
        marginHorizontal: 5,
        padding: 5,
        borderRadius: 10,
    },
    selectedItem: {
        backgroundColor: 'lightblue',
    },
    itemText: {
        fontSize: 16,
        color: "#000"

    },
    itemSelectText: {
        fontSize: 16,
        color: "#fff"
    },
    selectedText: {
        marginTop: 20,
        fontSize: 18,
        // color: "#fff"
    },
});


export default AllProducts

