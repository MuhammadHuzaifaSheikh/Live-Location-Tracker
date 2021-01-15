/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React,{useEffect, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
import Geolocation from '@react-native-community/geolocation';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App = () => {
  const [initialRegion, setInitialRegion] = useState({
    latitude: 24.910233599999998,
    longitude:  67.0564352,
    latitudeDelta: 0.09,
    longitudeDelta: 0.035,
  });
  const [latitude, setLatitude] = useState(37.78825);
  const [longitude, setLongitude] = useState(-122.4324);

  useEffect(()=>{
    
    Geolocation.getCurrentPosition(info => {
      setLatitude(info.coords.latitude);
      setLatitude(info.coords.longitude);

    })


  },[])
  
  const regionChange=(region)=>{
    // console.log(JSON.stringify(region));
  }
  return (
    <View style={styles.body}>


      <MapView
        provider={PROVIDER_GOOGLE} // remove if not using Google Maps
        showsUserLocation={true}
        showsMyLocationButton
        style={styles.map}
        initialRegion={{
    latitude: latitude,
    longitude:  longitude,
    latitudeDelta: 0.009,
    longitudeDelta: 0.0035,
  }}
        onRegionChange={regionChange}
        ></MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    backgroundColor: 'blue',
    flex: 1,
  },
  map: {
    flex: 1,
  },
});

export default App;
