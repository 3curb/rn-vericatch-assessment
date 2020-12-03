import React, { useState, useContext } from "react";
import { View, StyleSheet } from "react-native";
import { Text, Input, Button } from "react-native-elements";

import { Context as AuthContext } from "../context/AuthContext";

const LoginScreen = () => {
  const { state, signIn } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View>
      <Input
        placeholder="email@address.com"
        leftIcon={{ type: "material", name: "email" }}
        label="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        autoCorrect={false}
      />
      <Input
        placeholder="Password"
        leftIcon={{ type: "material", name: "lock" }}
        secureTextEntry
        label="Password"
        value={password}
        onChangeText={setPassword}
        autoCapitalize="none"
        autoCorrect={false}
      />
      {state.errorMessage ? (
        <Text style={{ color: "red", textAlign: "center" }}>
          {state.errorMessage}
        </Text>
      ) : null}
      <Text>{state.user}</Text>
      <Button title="Submit" onPress={() => signIn({ email, password })} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default LoginScreen;
