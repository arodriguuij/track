import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Input, Text, Button } from "react-native-elements";
import Spacer from "../components/Spacer";

const SignupScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <Spacer>
        <Text h3> Sing Up for Tracker </Text>
      </Spacer>
      <Spacer>
        <Input
          autoCapitalize="none"
          autoCorrect={false}
          label="Email"
          value={email}
          placeholder="example@example.com"
          onChangeText={(newEmail) => setEmail(newEmail)}
        />
      </Spacer>
      <Spacer>
        <Input
          secureTextEntry
          autoCapitalize="none"
          autoCorrect={false}
          label="Password"
          value={password}
          placeholder="pass1234"
          onChangeText={(newPassword) => setPassword(newPassword)}
        />
      </Spacer>
      <Spacer>
        <Button title="Sign Up" onPress={() => console.log("click")} />
      </Spacer>
    </View>
  );
};

SignupScreen.navigationOptions = () => {
  return {
    headerShown: false,
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginBottom: 200,
  },
});

export default SignupScreen;
