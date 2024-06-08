import React, { useState, useEffect, useRef } from 'react';
import { View, TextInput, Button, StyleSheet, Platform, ActivityIndicator, Text, FlatList, TouchableOpacity, Modal } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import Geolocation from '@react-native-community/geolocation';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { useIsFocused } from '@react-navigation/native';
import { PERMISSIONS, RESULTS, check, request } from 'react-native-permissions';
import PickUpSVG from '../../assets/SVG/PickUpSVG';
import BikeSVG from '../../assets/SVG/BikeSVG';
import InfoSVG from '../../assets/SVG/InfoSVG';

const GOOGLE_MAPS_APIKEY = 'AIzaSyBd1LjbHuAyDMiMAURqoarNzfyVg1F_F4o';
const MapsScreen = () => {

    const [pickup, setPickup] = useState(null);
    const [drop, setDrop] = useState(null);
    const [region, setRegion] = useState({
        latitude: 17.43523674271467,
        longitude: 78.44393809046632,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    });
    const [loading, setLoading] = useState(true)
    const [latitude, setLatitude] = useState(37.78825);
    const [longitude, setLongitude] = useState(-122.4324);
    const [query, setQuery] = useState('');
    const [dropQuery, setDropQuery] = useState('');
    const [filteredLocations, setFilteredLocations] = useState([]);
    const [pickOpen, setPickOpen] = useState(true)
    const [dropOpen, setDropOpen] = useState(true)
    const handleInputChange = (text) => {
        setQuery(text);
        const filtered = hyderabadLocations.filter((location) =>
            location.name.toLowerCase().includes(text.toLowerCase())
        );
        setFilteredLocations(filtered);
    };
    const handleDropChange = (text) => {
        setDropQuery(text);
        const filtered = hyderabadLocations.filter((location) =>
            location.name.toLowerCase().includes(text.toLowerCase())
        );
        setFilteredLocations(filtered);
    };

    const handleItemPress = (location) => {
        setQuery(location.name);
        setPickOpen(false)
        setPickup({
            latitude: location.latitude,
            longitude: location.longitude,
        })
        setFilteredLocations([]);
    };
    const handleDropPress = (location) => {
        setDropQuery(location.name);
        setDrop({
            latitude: location.latitude,
            longitude: location.longitude,
        })
        setDropOpen(false)
        setFilteredLocations([]);
    };

    const renderItem = ({ item }) => (
        <TouchableOpacity onPress={() => handleItemPress(item)}>
            <View style={styles.item}>
                <Text>{item.name}</Text>
            </View>
        </TouchableOpacity>
    );
    const renderDropItem = ({ item }) => (
        <TouchableOpacity onPress={() => handleDropPress(item)}>
            <View style={styles.item}>
                <Text>{item.name}</Text>
            </View>
        </TouchableOpacity>
    );

    const hyderabadLocations = [
        {
            name: "Charminar",
            latitude: 17.3616,
            longitude: 78.4747
        },
        {
            name: "Golconda Fort",
            latitude: 17.3833,
            longitude: 78.4011
        },
        {
            name: "Hussain Sagar",
            latitude: 17.4239,
            longitude: 78.4738
        },
        {
            name: "Qutb Shahi Tombs",
            latitude: 17.3893,
            longitude: 78.4067
        },
        {
            name: "Lumbini Park",
            latitude: 17.4163,
            longitude: 78.4692
        },
        {
            name: "Salar Jung Museum",
            latitude: 17.3714,
            longitude: 78.4804
        },
        {
            name: "Ramoji Film City",
            latitude: 17.2543,
            longitude: 78.6818
        },
        {
            name: "Chowmahalla Palace",
            latitude: 17.3578,
            longitude: 78.4718
        },
        {
            name: "Nehru Zoological Park",
            latitude: 17.3474,
            longitude: 78.4421
        },
        {
            name: "Birla Mandir",
            latitude: 17.4062,
            longitude: 78.4691
        },
        {
            name: "Shilparamam",
            latitude: 17.4346,
            longitude: 78.3852
        },
        {
            name: "Snow World",
            latitude: 17.4113,
            longitude: 78.4807
        },
        {
            name: "NTR Gardens",
            latitude: 17.4238,
            longitude: 78.4707
        },
        {
            name: "Osmania University",
            latitude: 17.4129,
            longitude: 78.5163
        },
        {
            name: "Laad Bazaar",
            latitude: 17.3616,
            longitude: 78.4745
        },
        {
            name: "Mecca Masjid",
            latitude: 17.3616,
            longitude: 78.4747
        },
        {
            name: "Birla Science Museum",
            latitude: 17.4083,
            longitude: 78.4662
        },
        {
            name: "Jalavihar Water Park",
            latitude: 17.4384,
            longitude: 78.4475
        },
        {
            name: "Public Gardens",
            latitude: 17.4065,
            longitude: 78.4711
        },
        {
            name: "Purani Haveli",
            latitude: 17.3651,
            longitude: 78.4827
        },
        {
            name: "Paigah Tombs",
            latitude: 17.3764,
            longitude: 78.4686
        },
        {
            name: "Begumpet Mosque",
            latitude: 17.4421,
            longitude: 78.4829
        },
        {
            name: "Taj Falaknuma Palace",
            latitude: 17.3314,
            longitude: 78.4667
        },
        {
            name: "Chilkur Balaji Temple",
            latitude: 17.3573,
            longitude: 78.3114
        },
        {
            name: "Sudha Cars Museum",
            latitude: 17.3442,
            longitude: 78.4754
        },
        {
            name: "Shamirpet Lake",
            latitude: 17.6315,
            longitude: 78.6524
        },
        {
            name: "KBR National Park",
            latitude: 17.4128,
            longitude: 78.4204
        },
        {
            name: "Necklace Road",
            latitude: 17.4145,
            longitude: 78.4699
        },
        {
            name: "Durgam Cheruvu",
            latitude: 17.4248,
            longitude: 78.4032
        },
        {
            name: "Kasu Brahmananda Reddy National Park",
            latitude: 17.4237,
            longitude: 78.4268
        },
        {
            name: "Sanjeevaiah Park",
            latitude: 17.4196,
            longitude: 78.4786
        },
        {
            name: "Ameerpet",
            latitude: 17.4375,
            longitude: 78.4483
        },
        {
            name: "Banjara Hills",
            latitude: 17.4156,
            longitude: 78.4344
        }
    ];

    const [modalVisible, setModalVisible] = useState(false);

    const toggleModal = () => {
        setModalVisible(!modalVisible);
    };


    const mapRef = useRef(null);
    const focus = useIsFocused()
    useEffect(() => {
        Geolocation.watchPosition(
            (position) => {
                const { latitude, longitude } = position.coords;
                console.log("oooooo", latitude, longitude);
                setLatitude(latitude);
                setLongitude(longitude);
                setRegion({
                    latitude: latitude,
                    longitude: longitude,
                    latitudeDelta: 0.09,
                    longitudeDelta: 0.09,
                });
                const location = {
                    latitude: latitude,
                    longitude: longitude,
                };


            },
            (error) => {
                console.error(error);
            },
            {
                enableHighAccuracy: true,
                distanceFilter: 10,
                interval: 5000,
                fastestInterval: 2000,
            }
        );
        setLoading(false)
    }, []);


    return (
        <>
            {loading ? <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <ActivityIndicator />
            </View>
                :
                <>
                    <View style={styles.container}>

                        <MapView
                            ref={mapRef}
                            style={styles.map}
                            region={region}
                            showsUserLocation={true}
                        // userLocationUpdateInterval={}
                        // onUserLocationChange={}
                        >

                            <Marker coordinate={{
                                latitude: latitude,
                                longitude: longitude,
                            }}>
                                <BikeSVG />
                            </Marker>
                            {pickup && <Marker coordinate={pickup}>
                                <PickUpSVG />
                            </Marker>
                            }

                            {drop && <Marker coordinate={drop} />}
                            {pickup && drop && (
                                <MapViewDirections
                                    origin={pickup}
                                    destination={drop}
                                    apikey={GOOGLE_MAPS_APIKEY}
                                    strokeWidth={3}
                                    strokeColor="hotpink"
                                />
                            )}
                        </MapView>
                        <View style={styles.searchContainer}>
                            <Text>Pickup Point</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="Type a location"
                                value={query}
                                onChangeText={handleInputChange}
                            />
                            {query.length > 0 && pickOpen && (
                                <FlatList
                                    data={filteredLocations}
                                    renderItem={renderItem}
                                    keyExtractor={(item) => item.name}
                                />
                            )
                            }
                            <Text>Drop Point</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="Type a location"
                                value={dropQuery}
                                onChangeText={handleDropChange}
                            />
                            {dropQuery.length > 0 && dropOpen && (
                                <FlatList
                                    data={filteredLocations}
                                    renderItem={renderDropItem}
                                    keyExtractor={(item) => item.name}
                                />
                            )
                            }
                        </View>

                        <View style={styles.infoContainer}>
                            <Text style={styles.infoText}>Latitude: {latitude}</Text>
                            <Text style={styles.infoText}>Longitude: {longitude}</Text>
                        </View>
                        <TouchableOpacity
                            onPress={toggleModal}
                            style={{ position: "absolute", top: 5, left: 10 }}
                        >
                            <InfoSVG color='#2F2FFF' size={30} />
                        </TouchableOpacity>
                    </View>
                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={modalVisible}
                        onRequestClose={toggleModal}
                    >
                        <View style={styles.modalBackground}>
                            <View style={styles.modalContainer}>
                                <Text style={styles.modalText}>Here, I have integrated Google Maps:</Text>
                                <Text style={styles.modalText}>1. To get the directions, we need an auth token which is paid, so I didn't use it here.</Text>
                                <Text style={styles.modalText}>2. To get the location name search, it also needs a token.</Text>
                                <Text style={styles.modalText}>3. For now, I have added static data with a few names, which can be visible while typing in the search box.</Text>
                                <Text style={styles.modalText}>4. Now, we can search a few locations by name.</Text>
                                <Text style={styles.modalText}>5. We can update the pickup point and drop-off point.</Text>
                                <Text style={styles.modalText}>6. The user location can be updated when they move 10 meters.</Text>
                                <TouchableOpacity style={styles.closeButton} onPress={toggleModal}>
                                    <Text style={styles.closeButtonText}>Close</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </Modal>
                </>
            }
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    map: {
        flex: 1,
    },
    searchContainer: {
        // position: 'absolute',
        width: '80%',
        bottom: 10,
        alignSelf: "center"
        // backgroundColor: "#fff"
    },
    autocomplete: {
        container: { flex: 0 },
        listView: { backgroundColor: 'white' },
    },
    infoContainer: {
        position: 'absolute',
        top: 40,
        left: 10,
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
    },
    infoText: {
        fontSize: 16,
    },
    input: {
        height: 40,
        borderWidth: 1,
        borderColor: '#ccc',
        marginBottom: 10,
        paddingHorizontal: 10,
        backgroundColor: 'white',
    },
    item: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        backgroundColor: 'white',
    },
    modalBackground: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    modalContainer: {
        width: 300,
        padding: 20,
        backgroundColor: 'white',
        borderRadius: 10,
        alignItems: 'center',
    },
    modalText: {
        marginBottom: 5,
        // textAlign: 'center',
    },
    closeButton: {
        backgroundColor: '#2196F3',
        padding: 10,
        borderRadius: 5,
    },
    closeButtonText: {
        color: 'white',
        textAlign: 'center',
    },
});

export default MapsScreen;
