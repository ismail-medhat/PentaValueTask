// BottomTabNavigator.tsx

import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ContactsScreen, FavoriteContacts } from "../screens";
import ScreenNames from "./ScreenNames";
import { StyleSheet, View, Text, Platform } from "react-native";
import { Colors, ScaleHeight, ScaleWidth } from "common";
import Icon from "react-native-vector-icons/Ionicons";
import { ParamListBase } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

const Tab = createBottomTabNavigator();

type ISBottomTabsProps = {
  navigation: StackNavigationProp<ParamListBase>;
};

const BottomTabNavigator: React.FC<ISBottomTabsProps> = ({ navigation }) => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarLabel: ({ focused }) => {
          return (
            <View>
              <Text
                style={[
                  styles.tabBarName,
                  { color: focused ? Colors.black : Colors.gray2 },
                ]}
              >
                {route.name}
              </Text>
            </View>
          );
        },
        tabBarIcon: ({ focused }) => {
          let IconName;
          if (route.name === ScreenNames.favoriteContacts) {
            IconName = focused ? "heart" : "heart-outline";
          } else if (route.name === ScreenNames.Contacts) {
            IconName = focused ? "person" : "person-outline";
          }
          return <Icon name={IconName} size={22} />;
        },
        headerShown: false,
        tabBarStyle: [
          styles.tapStyles,
          {
            backgroundColor: Colors.white,
            borderTopWidth: 0,
            borderWidth: 0,
            borderTopLeftRadius: 15,
            borderTopRightRadius: 15,
          },
        ],
        tabBarLabelStyle: styles.tabBarLabelStyle,
      })}
    >
      <Tab.Screen name={ScreenNames.Contacts} component={ContactsScreen} />
      <Tab.Screen
        name={ScreenNames.favoriteContacts}
        component={FavoriteContacts}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;

const styles = StyleSheet.create({
  tapStyles: {
    justifyContent: "center",
    alignItems: "center",
    height: ScaleHeight(80),
    width: ScaleWidth("100%"),
    borderWidth: 1,
  },
  tabBarItemStyle: {
    top: 15,
    height: 45,
  },
  tabBarLabelStyle: {
    bottom: 10,
  },
  tabBarName: {
    fontSize: 12,
    paddingTop: Platform.OS === "ios" ? ScaleHeight(2) : 0,
    marginBottom: Platform.OS === "android" ? ScaleHeight(14) : 0,
  },
});
