import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";

import useGetBooksData from "../../hook/useGetBooksData";

const NotificationScreen = () => {
  // Datos de ejemplo para las notificaciones
  const notificationsData = [
    { id: "1", text: "Notificación 1: Lorem ipsum dolor sit amet." },
    { id: "2", text: "Notificación 2: Consectetur adipiscing elit." },
    {
      id: "3",
      text: "Notificación 3: Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    { id: "4", text: "Notificación 4: Ut enim ad minim veniam." },
    {
      id: "5",
      text: "Notificación 5: Quis nostrud exercitation ullamco laboris.",
    },
  ];

  const { booksToShared, currentUserBooksToShared } = useGetBooksData();

  const [res, setRes] = useState({});

  const handleClick = () => {
    const res = booksToShared();
    const res2 = currentUserBooksToShared();

    console.log("GET DATA IN NOTIFICATION SCREEN TO GET: " + res.length);
    console.log("GET DATA IN NOTIFICATION SCREEN SHARING: " + res2.length);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Notificaciones</Text>
      <FlatList
        data={notificationsData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.notificationItem}>
            <Text style={styles.notificationText}>{item.text}</Text>
          </TouchableOpacity>
        )}
      />
      <TouchableOpacity style={styles.notificationItem} onPress={handleClick}>
        <Text style={styles.notificationText}>PRESS ME!</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  notificationItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "lightgray",
  },
  notificationText: {
    fontSize: 16,
  },
});

export default NotificationScreen;
