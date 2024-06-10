import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const DashBoard = () => {
    const navigation = useNavigation()

    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <Text>Tasks</Text>
            <TouchableOpacity
                onPress={() => { navigation.navigate("Home") }}
                style={styles.buttonView}>
                {/* <Text style={styles.TextStyle}>Task 1: {"\n"}Ecart</Text> */}
                <Text style={styles.TextStyle}>Ecart</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => { navigation.navigate("MapsScreen") }}
                style={styles.buttonView}>
                {/* <Text style={styles.TextStyle}>Task 2:{"\n"} Google Maps</Text> */}
                <Text style={styles.TextStyle}>Google Maps</Text>
            </TouchableOpacity>
        </View>
    )
}

export default DashBoard

const styles = StyleSheet.create({
    buttonView: {
        padding: 20,
        borderWidth: 1,
        borderColor: "#fff",
        borderRadius: 20,
        margin: 20,
        backgroundColor: "#5BC0DE"
    },
    TextStyle: { color: "#fff" }
})