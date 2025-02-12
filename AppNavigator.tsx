import React from "react";
import { ThemeProvider } from "./src/theme/ThemeContext"; // Import ThemeProvider
import { NavigationContainer, useNavigationState } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./src/components/Home";
import LoginScreen from "./src/screen/LoginScreen";
import OnBoarding from "./src/screen/OnBoarding";
import Startedpage from "./src/screen/Startedpage";
import ForgotPassword from "./src/screen/ForgotPassword";
import ResetPassword from "./src/screen/ResetPassword";
import { useTheme } from "./src/theme/ThemeContext"; // Import hook useTheme
import { Ionicons } from "@expo/vector-icons";
import { View, Switch, StyleSheet, TouchableOpacity, Image, Text } from "react-native";
import Task from "./src/components/Task";
import { Divider } from "react-native-paper";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

// Komponen untuk Toggle Dark Mode
const ThemeToggleButton = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <View style={{ padding: 10 }}>
      <Switch
        value={theme === "dark"}
        onValueChange={toggleTheme}
      />
    </View>
  );
};

function TabNavigator() {
  const { theme } = useTheme();

  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: theme === "dark" ? "#98E2F4" : "#000",
        tabBarInactiveTintColor: theme === "dark" ? "#fff" : "#888",
        tabBarStyle: {
          backgroundColor: theme === "dark" ? "#141d20" : "#fff",
          height: 72,
          borderTopColor: "transparent",
        },
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="home" size={30} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Task"
        component={Task}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="home" size={30} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
function CustomDrawerContent(props: any) {
  const activeRoute = useNavigationState((state) => {
    const activeTab = state.routes[state.index];
    return activeTab?.name;
  });

  const getDrawerItemStyle = (routeName:any) => {
    return activeRoute === routeName
      ? styles.activeBackground
      : styles.inactiveBackground;
  };
  return (
    <DrawerContentScrollView contentContainerStyle={styles.drawerContainer}>
      <View style={styles.header}>
        <Image
          source={require("./assets/images/logo.png")}
          style={styles.logo}
        />
        <TouchableOpacity
          onPress={() => navigation.navigate("EditProfile", { userData: user })}
        >
          <Image
            source={
              user.photoURL
                ? { uri: user.photoURL }
                : require("./assets/images/pp-kosong.jpg")
            }
            style={styles.profileImage}
          />
        </TouchableOpacity>
        <Text style={styles.userName}>{user.fullName || ""}</Text>
        <Text style={styles.userEmail}>{user.email}</Text>
      </View>

      <Divider />

      <View style={styles.navigation}>
        <DrawerItem
          icon={({ size, color }) => (
            <Icon name="bullseye" size={21} color={"#fff"} />
          )}
          label="Days"
          onPress={() => navigation.navigate("Days")}
          style={getDrawerItemStyle("Days")}
          labelStyle={styles.drawerLabel}
        />
        <DrawerItem
          icon={({ size, color }) => (
            <Icon name="tasks" size={19} color={"#fff"} />
          )}
          label="All Task"
          onPress={() => navigation.navigate("All Task")}
          style={[styles.drawerItem, getDrawerItemStyle("All Task")]}
          labelStyle={[
            styles.drawerLabel,
            activeRoute === "All Task" && styles.activeLabel,
          ]}
        />
        <DrawerItem
          icon={({ size, color }) => (
            <Ionicons name="calendar-clear-outline" size={19} color="#fff" />
          )}
          label="Calendar"
          onPress={() => navigation.navigate("Calendar")}
          style={getDrawerItemStyle("Calendar")}
          labelStyle={styles.drawerLabel}
        />
        <DrawerItem
          icon={({ size, color }) => (
            <Icon name="user" size={21} color={"#fff"} />
          )}
          label="Profile"
          onPress={() => navigation.navigate("Profile")}
          style={getDrawerItemStyle("Profile")}
          labelStyle={styles.drawerLabel}
        />
      </View>

      <TouchableOpacity
        style={styles.settingsButton}
        onPress={() => navigation.navigate("EditProfile", { userData: user })} // Pastikan data user dikirimkan jika diperlukan
      >
        <Ionicons name="settings-outline" size={20} color="#d3d3d3" />
        <Text style={styles.settingsText}>Account Settings</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Ionicons name="log-out-outline" size={20} color="#FF6B6B" />
        <Text style={styles.logoutText}>Sign Out</Text>
      </TouchableOpacity>
    </DrawerContentScrollView>
  );
}


function DrawerNavigator() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        headerShown: true,
        headerRight: () => <ThemeToggleButton />, // Tambahkan tombol di header
      }}
    >
      <Drawer.Screen name="Flexido" component={TabNavigator} />
    </Drawer.Navigator>
  );
}

export default function AppNavigator() {
  return (
    <ThemeProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="OnBoarding" component={OnBoarding} />
          <Stack.Screen name="Started" component={Startedpage} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Flexido" component={DrawerNavigator} />
          <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
          <Stack.Screen name="ResetPassword" component={ResetPassword} />
          <Stack.Screen name="Task" component={Task} />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}
