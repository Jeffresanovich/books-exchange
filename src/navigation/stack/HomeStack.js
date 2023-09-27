import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { headerStyles } from "../../theme/commonStyles";

import { Button } from "react-native";

import HomeScreen from "../../screens/tabScreens/HomeScreen";
import BookDatailScreen from "../../screens/tabScreens/BookDatailScreen";

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator
      initialRouteName='HomeScreen'
      screenOptions={{
        headerShown: false,
        headerRight: () => (
          <Button
            onPress={() => alert("This is a button!")}
            title='+'
            color='white'
          />
        ),
      }}
    >
      <Stack.Screen
        name='HomeScreen'
        component={HomeScreen}
        options={{
          title: "Inicio",
          ...headerStyles,
        }}
      />
      <Stack.Screen
        name='BookDatailScreen'
        component={BookDatailScreen}
        options={{
          title: "Detalles",
          ...headerStyles,
        }}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
