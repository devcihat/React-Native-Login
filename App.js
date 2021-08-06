import { StatusBar } from "expo-status-bar";
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

  const tabBarOptions = {
    showLabel: true,
    style: {
      backgroundColor: "#1e1e1e",
      borderTopColor: "#1e1e1e",
      paddingBottom: 32,
    },
  };

  const screenOptions = ({ route }) => ({
    tabBarIcon: ({ focused }) => {
      let icon = "";
      const color = focused ? "#559dff" : "#828282";
      const size = 22;
      console.clear()
      console.log('object',route)

      switch (route.name) {
        case "SendRequest":
          icon = "credit-card"
        break;  
          

        default:
          console.log("def",route.name)
          icon = "dashboard";

          return <MaterialIcons name={icon} color={color} size={size} />;
      }
    },
  });

  const TabStackScreens = () => {
    return (
      <TabStack.Navigator
        screenOptions={screenOptions}
        tabBarOptions={tabBarOptions}
      >
        <TabStack.Screen name="Home" component={HomeScreen} />
        <TabStack.Screen name="SendRequest" component={SendRequestScreen} />
        <TabStack.Screen name="Cards" component={CardsScreen} />
      </TabStack.Navigator>
    );
  };

  return (
    <NavigationContainer>
      <AppStack.Navigator headerMode="none">
        <AppStack.Screen name="Pin" component={PınScreen} />
        <AppStack.Screen name="Touch" component={TouchScreen} />
        <AppStack.Screen name="Tabs" component={TabStackScreens} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
};

export default App;
