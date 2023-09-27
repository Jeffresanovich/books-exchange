import React from "react";
import { StyleSheet, Pressable } from "react-native";

//Icon
import { Feather } from "@expo/vector-icons";

//Redux
import { useSelector } from "react-redux";

const IconOpenDrawerComponent = () => {
  const drawerNavigator = useSelector((state) => state.routingSlice.navigation);

  return (
    <Pressable onPress={() => drawerNavigator.openDrawer()}>
      <Feather name='menu' size={22} color='white' />
    </Pressable>
  );
};

export default IconOpenDrawerComponent;

const styles = StyleSheet.create({});
