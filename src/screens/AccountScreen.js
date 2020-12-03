import React, { useContext } from "react";
import { View, StyleSheet, Text } from "react-native";
import { Context as AuthContext } from "../context/AuthContext";

const AccountScreen = () => {
  const { state } = useContext(AuthContext);

  return (
    <View>
      <Text style={styles.text}>
        {state.first_name} {state.last_name}
      </Text>
      <Text style={styles.text}>{state.uid}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    textAlign: "center",
  },
});

export default AccountScreen;
