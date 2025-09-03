import { Ionicons } from "@expo/vector-icons";
import { Tabs } from 'expo-router';
import React from 'react';

const Tabslayout = () => {

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "blue",
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" color={color} size={size} />
          ),
        }}
      />

      <Tabs.Screen
        name="message"
        options={{
          title: "SMS",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="mail" color={color} size={size} />
          ),
          tabBarBadge: "3",
          tabBarBadgeStyle: { backgroundColor: "red" },
        }}
      />

      <Tabs.Screen
        name="account"
        options={{
          title: "Account",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="people" color={color} size={size} />
          ),
        }}
      />

      <Tabs.Screen
        name="history"
        options={{
          title: "History",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="list" color={color} size={size} />
          ),
        }}
      />
    </Tabs>
  );
};

export default Tabslayout