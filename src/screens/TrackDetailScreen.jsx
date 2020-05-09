import React, { useContext } from "react";
import { Text, StyleSheet, View } from "react-native";
import MapView, { Polyline } from "react-native-maps";
import Spacer from "../components/Spacer";
import { Context as TrackContext } from "../context/TrackContext";

const TrackDetailScreen = ({ navigation }) => {
  const { state } = useContext(TrackContext);
  const _id = navigation.getParam("_id");

  const track = state.find((t) => t._id === _id);
  const initialCoords = track.locations[0].coords;

  return (
    <View style={styles.background}>
      <Spacer>
        <Text style={{ fontSize: 48 }}>{track.name}</Text>
        <MapView
          style={styles.map}
          initialRegion={{
            longitudeDelta: 0.01,
            latitudeDelta: 0.01,
            ...initialCoords,
          }}
        >
          <Polyline coordinates={track.locations.map((loc) => loc.coords)} />
        </MapView>
      </Spacer>
    </View>
  );
};

const styles = StyleSheet.create({
  map: {
    height: 300,
  },
  background: {
    backgroundColor: "white",
    flex: 1,
  },
});

export default TrackDetailScreen;
