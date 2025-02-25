import React from "react";
import { View, Text, StyleSheet, Switch } from "react-native";
import { useTheme } from "../theme/ThemeContext";

const Settings = () => {
     const { theme } = useTheme();
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
   
     return (
       <View
         style={{ flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: theme === "dark" ? "#FFFFFF" : "#000000" }}>
         <Text
           style={{ fontSize: 20, fontWeight: "bold", color: theme === "dark" ? "#FFFFFF" : "#000000"}}>
           Task ndnfjnafndjakfdaknf
         </Text>
         <ThemeToggleButton/>
       </View>
  )
}

export default Settings

const styles = StyleSheet.create({})