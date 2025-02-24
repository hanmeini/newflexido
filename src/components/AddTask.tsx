import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet, StatusBar } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "../theme/ThemeContext";

const TaskForm = (props: any) => {
  const { theme } = useTheme();
  const [selectedTab, setSelectedTab] = useState("task");
  const [isFocused, setIsFocused] = useState(false);
  const [selectedBackground, setSelectedBackground] = useState(null);
  const [selectedPriority, setSelectedPriority] = useState('low');

  const getPriorityColor = (priority: string) => {
    if (selectedPriority === priority) {
      if (priority === "low") return "#ffff"; // Biru
      if (priority === "medium") return "#98E2F4"; // Kuning
      if (priority === "high") return "#FFF25F"; // Merah
    }
    return theme === "dark" ? "#EAEAEA" : "#242525";
  };


  return (
    <View style={{ flex: 1, backgroundColor: theme === "dark" ? "#F0F2F9" : "#1C1C1E", paddingTop: 20 }}>
      <StatusBar barStyle="light-content" />
      <ScrollView contentContainerStyle={{ padding: 20, paddingBottom: 50 }}>
        <View style={{ flexDirection: "row", justifyContent: "space-between", marginBottom: 30 }}>
          <TouchableOpacity>
            <Text style={{ color: "#696969" }}>Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={{ color: theme === "dark" ? "#000" : "#fff" }}>Done</Text>
          </TouchableOpacity>
        </View>

        {/* Switch Button */}
        <View style={styles.header}>
          <View
            style={{
              flexDirection: "row",
              backgroundColor: theme === "dark" ? "#fff" : "#2C2C2E",
              borderRadius: 30,
              padding: 2,
            }}
          >
            <TouchableOpacity
              style={[
                styles.switchButton,
                selectedTab === "note" && {
                  backgroundColor: theme === "dark" ? "#3F9ED4" : "#fff",
                },
              ]}
              onPress={() => setSelectedTab("note")}
            >
              <Ionicons
                name="document-text-outline"
                size={20}
                color={selectedTab === "note" ? (theme === "dark" ? "white" : "black") : theme === "dark" ? "black" : "white"}
              />
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.switchButton,
                selectedTab === "task" && {
                  backgroundColor: theme === "dark" ? "#3F9ED4" : "#fff",
                },
              ]}
              onPress={() => setSelectedTab("task")}
            >
              <Ionicons
                name="clipboard-outline"
                size={20}
                color={selectedTab === "task" ? (theme === "dark" ? "white" : "black") : theme === "dark" ? "black" : "white"}
              />
            </TouchableOpacity>
          </View>
        </View>

        <Text style={styles.message}>Please fill in all fields to add tasks.</Text>

        {/* Input Title */}
        <Text style={styles.label(theme)}>Title</Text>
        <TextInput
          style={[styles.input(theme), isFocused && styles.inputFocused]}
          placeholder="Enter title"
          placeholderTextColor="#A1A1A1"
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />

        {/* Input Description */}
        <Text style={styles.label(theme)}>Description</Text>
        <TextInput
          style={[styles.input(theme), styles.descriptionInput]}
          placeholder="Add description"
          placeholderTextColor="#A1A1A1"
          multiline
        />

        {/* Row untuk Deadline/Priority & Attachments */}
        <View style={styles.row}>
          <View style={styles.smallBox}>
            <Text style={styles.label(theme)}>{selectedTab === "task" ? "Deadline" : "Priority"}</Text>
            {selectedTab === "task" ? (
              <TouchableOpacity style={styles.input(theme)}>
                <Text style={{ color: theme === "dark" ? "#646464" : "white" }}>Date & Time</Text>
                <Ionicons name="calendar-outline" size={18} color={theme === "dark" ? "black" : "white"} />
              </TouchableOpacity>
            ) : (
              <View style={styles.input(theme)}>
                <Text style={{ color: "#A1A1A1" }}>Pinned</Text>
              </View>
            )}
          </View>

          <View style={styles.smallBox}>
            <Text style={styles.label(theme)}>Attachments</Text>
            <TouchableOpacity style={styles.input(theme)}>
              <Text style={{ color: theme === "dark" ? "#646464" : "white" }}>Upload</Text>
              <Ionicons name="link-outline" size={18} color={theme === "dark" ? "black" : "white"} />
            </TouchableOpacity>
          </View>
        </View>

        {/* Set backgorund */}
        {selectedTab === "note" && (
          <>
          <View style={{ flexDirection:'column' }}>
            <Text style={{ fontFamily: 'Inter-Bold', color: theme === "dark" ? "#000" : '#fff', marginBottom:10 }}>Set Background</Text>
            <View style={{ flexDirection:'row',gap:10 }}>
              <TouchableOpacity style={{ width:60, height:60, borderRadius:50, backgroundColor: theme === "dark" ? "#fff" : "#161616",borderWidth:1, borderColor:theme === "dark" ? "#161616" : "#fff", justifyContent:'center', alignItems:'center' }}>
                <Ionicons name="add-outline" size={20} color= {theme === "dark" ? "#242525" : "#fff"}/>
              </TouchableOpacity>
              <TouchableOpacity style={{ width:60, height:60, borderRadius:50, backgroundColor:'#98E2F4' }}>
              </TouchableOpacity>
              <TouchableOpacity style={{ width:60, height:60, padding:20, borderRadius:50, backgroundColor:'#FFF25F' }}>
              </TouchableOpacity>
            </View>
          </View>
          </>
        )}

        {/* Priority untuk Task */}
        {selectedTab === "task" && (
          <>
            <Text style={styles.label(theme)}>Priority</Text>
            <View style={{ flexDirection: "row", marginBottom: 15, backgroundColor: theme === "dark" ? "#EAEAEA" : "#242525", padding:5, borderRadius:15 }}>
              <TouchableOpacity onPress={() => setSelectedPriority("low")} style={[styles.priorityButton, { backgroundColor: getPriorityColor("low") }]}>
                <Text style={{ fontFamily:'Inter-Bold', color: selectedPriority === "low" ? "#black" : "#696969" }}>Low</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setSelectedPriority("medium")} style={[styles.priorityButton, { backgroundColor: getPriorityColor("medium") }]}>
                <Text style={{fontFamily:'Inter-Bold', color: selectedPriority === "medium" ? "black" : "#696969" }}>Medium</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setSelectedPriority("high")} style={[styles.priorityButton, { backgroundColor: getPriorityColor("high") }]}>
                <Text style={{fontFamily:'Inter-Bold', color: selectedPriority === "high" ? "black" : "#696969" }}>High</Text>
              </TouchableOpacity>
            </View>
          </>
        )}
      </ScrollView>
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  header: { flexDirection: "row", justifyContent: "center", alignItems: "center", marginBottom: 20 },
  switchButton: { paddingVertical: 20, paddingHorizontal: 30, borderRadius: 30 },
  message: { color: "#A1A1A1", textAlign: "center", marginBottom: 15 },
  label: (theme: string) => ({
    color: theme === "dark" ? "black" : "white",
    fontSize: 14,
    marginBottom: 5,
  }),
  input: (theme: string) => ({
    backgroundColor: theme === "dark" ? "#E1E3E9" : "#2C2C2E",
    color: theme === "dark" ? "black" : "white",
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  }),
  inputFocused: { borderColor: "#74C0FC", borderWidth: 2 },
  descriptionInput: { height: 150, textAlignVertical: "top" },
  row: { flexDirection: "row", justifyContent: "space-between", marginBottom: 20 },
  smallBox: { width: "48%" },
  priorityButton: { paddingHorizontal: 10, paddingVertical: 20, borderRadius: 10, flex: 1, alignItems: "center", },
});

export default TaskForm;
