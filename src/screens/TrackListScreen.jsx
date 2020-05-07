import React from "react";
import { Text, StyleSheet, Button } from "react-native";
import Spacer from '../components/Spacer';

const TrackListScreen = ({ navigation }) => {
  return (
    <Spacer>
      <Text style={{ fontSize: 48 }}>TrackListScreen</Text>
      <Button
        title="Go to track detail"
        onPress={() => navigation.navigate("TrackDetail")}
      />
    </Spacer>
  );
};

const styles = StyleSheet.create({});

export default TrackListScreen;
