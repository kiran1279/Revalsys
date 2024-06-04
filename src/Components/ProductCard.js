// ProductCard.js
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const ProductCard = ({ product }) => {
    const navigation = useNavigation()
    console.log(product);
    return (
        <TouchableOpacity
            onPress={() => { navigation.navigate("ProductDetails", { product: product }) }}
            style={styles.card}>
            <View style={styles.ratingView}>
                <Text>{product.rating.rate}★</Text>
            </View>
            <Image source={{ uri: product.image }} style={styles.image} />
            <Text style={styles.price}>$ {product.price}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        borderRadius: 8,
        padding: 16,
        marginVertical: 8,
        marginHorizontal: 16,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowRadius: 4,
        shadowOffset: { width: 0, height: 2 },
    },
    image: {
        width: Dimensions.get("window").width * 0.3,
        height: Dimensions.get("window").height * 0.2,
        marginBottom: 8,
        resizeMode: "contain"
    },
    name: {
        fontSize: 12,
        fontWeight: 'bold',
    },
    price: {
        fontSize: 16,
        color: '#000',
    },
    ratingView: {
        alignSelf: "flex-end",
        padding: 3,
        borderRadius: 8,
        borderWidth: 0.5,
        marginBottom: 10
    }
});

export default ProductCard;
