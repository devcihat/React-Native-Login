import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons } from "@expo/vector-icons";
import "react-native-gesture-handler";
import TouchScreen from "./src/screens/TouchScreen";
import PınScreen from "./src/screens/PınScreen";
import HomeScreen from "./src/screens/HomeScreen";
import SendRequestScreen from "./src/screens/SendRequestScreen";
import CardsScreen from "./src/screens/CardsScreen";

const App = () => {
  const AppStack = createStackNavigator();
  const TabStack = createBottomTabNavigator();

  const screenOptions = ({ route }) => ({
    tabBarIcon: ({ focused }) => {
      let icon = "";
      const color = focused ? "#559dff" : "#828282";
      const size = 22;
      //console.clear()
      //console.log('object',route)

      switch (route.name) {
        case "Cards":
          icon = "credit-card";
          // console.log(icon)
          break;

        case "SendRequest":
          icon = "send";
          // console.log(icon)
          break;

        default:
          //console.log("def",route.name)
          icon = "dashboard";
      }
      return <MaterialIcons name={icon} color={color} size={size} />;
    },
    headerShown: false,
    tabBarStyle: {
      backgroundColor: "#1e1e1e",
      borderTopColor: "#1e1e1e",
    },
  });

  const TabStackScreens = () => {
    return (
      <TabStack.Navigator screenOptions={screenOptions}>
        <TabStack.Screen name="Home" component={HomeScreen} />
        <TabStack.Screen
          name="SendRequest"
          component={SendRequestScreen}
          options={{ title: "Send & Request" }}
        />

        <TabStack.Screen
          name="Cards"
          component={CardsScreen}
          options={{ title: "My Cards" }}
        />
      </TabStack.Navigator>
    );
  };

  return (
    <NavigationContainer>
      <AppStack.Navigator headerMode="none">
        <AppStack.Screen name="Touch" component={TouchScreen} />
        <AppStack.Screen name="Pin" component={PınScreen} />
        <AppStack.Screen name="Tabs" component={TabStackScreens} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
};

export default App;
