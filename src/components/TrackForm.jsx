import React, { useContext } from "react";
import { Input, Button } from "react-native-elements";
import Spacer from "./Spacer";
import { Context as LocationContext } from "../context/LocationContext";
import useSaveTrack from "../hooks/useSaveTrack.js";

const TrackForm = () => {
  const { state, changeName, startRecording, stopRecording } = useContext(
    LocationContext
  );
  const { name, recording, locations } = state;
  const [savetrack] = useSaveTrack();

  //console.log(locations.length);
  return (
    <>
      <Spacer>
        <Input
          value={name}
          placeholder="Enter name"
          onChangeText={(text) => changeName(text)}
        />
      </Spacer>
      <Spacer>
        <Button
          title={recording ? "Stop" : "Start Recording"}
          onPress={recording ? stopRecording : startRecording}
        />
      </Spacer>
      {!recording && locations.length ? (
        <Spacer>
          <Button title="Save Recorging" onPress={savetrack} />
        </Spacer>
      ) : null}
    </>
  );
};

export default TrackForm;
