import { Dimensions, Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'

const ProductDetails = ({ route }) => {

    const { product } = route.params
    return (

        <ScrollView style={{ margin: 10, backgroundColor: "#fff" }}>
            <View style={{ alignSelf: "flex-end", padding: 3, borderRadius: 8, borderWidth: 0.5, margin: 10, borderColor: "brown" }}>
                <Text style={{ color: "brown" }}>{product.rating.rate}★</Text>
            </View>
            <Image source={{ uri: product.image }} style={styles.image} />
            <Text style={styles.name}>{product.title}</Text>
            <Text style={styles.description}>{product.description}</Text>
            <Text style={styles.price}>price: $ {product.price}</Text>

            <TouchableOpacity style={styles.cartView}>
                <Text style={[styles.description, { color: "#fff" }]}>Add to Cart</Text>
            </TouchableOpacity>
        </ScrollView >
    )
}

export default ProductDetails

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
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height * 0.5,
        marginBottom: 8,
        resizeMode: "contain"
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000',
    },
    description: {
        fontSize: 16,
        // fontWeight: 'bold',
        color: '#000',
        marginVertical: 10
    },
    price: {
        fontSize: 16,
        color: '#000',
        fontWeight: "700",
        alignSelf: "center"
    },
    cartView: {
        backgroundColor: "blue",
        alignItems: "center",
        marginTop: 20,
        borderRadius: 15
    }
});