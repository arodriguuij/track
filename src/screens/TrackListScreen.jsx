import React, { useContext } from "react";
import {
  Text,
  StyleSheet,
  Button,
  FlatList,
  TouchableOpacity,
  View,
} from "react-native";
import Spacer from "../components/Spacer";
import { ListItem } from "react-native-elements";
import { Context as TrackContext } from "../context/TrackContext";
import { NavigationEvents } from "react-navigation";

const TrackListScreen = ({ navigation }) => {
  const { fetchTracks, state } = useContext(TrackContext);
  return (
    <View style={styles.background}>
      <Spacer>
        <NavigationEvents onWillFocus={fetchTracks} />
        <FlatList
          data={state}
          keyExtractor={(item) => item._id}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("TrackDetail", { _id: item._id })
              }
            >
              <ListItem chevron title={item.name}></ListItem>
            </TouchableOpacity>
          )}
        />
        <Button
          title="Go to track detail"
          onPress={() => navigation.navigate("TrackDetail")}
        />
      </Spacer>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: "white",
    flex: 1,
  },
});

TrackListScreen.navigationOptions = {
  title: "Tracks",
};

export default TrackListScreen;
