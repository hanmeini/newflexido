import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const TaskForm = () => {
  const [selectedTab, setSelectedTab] = useState("task"); // task atau note
  const [priority, setPriority] = useState("High");

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.cancelText}>Cancel</Text>
        <View style={styles.switchContainer}>
          <TouchableOpacity
            style={[
              styles.switchButton,
              selectedTab === "note" && styles.switchActive,
            ]}
            onPress={() => setSelectedTab("note")}
          >
            <Ionicons name="document-text-outline" size={18} color="white" />
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.switchButton,
              selectedTab === "task" && styles.switchActive,
            ]}
            onPress={() => setSelectedTab("task")}
          >
            <Ionicons name="clipboard-outline" size={18} color="black" />
          </TouchableOpacity>
        </View>
        <Text style={styles.doneText}>Done</Text>
      </View>

      <Text style={styles.infoText}>Please fill in all fields to add tasks.</Text>

      {/* Form */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Title</Text>
        <TextInput style={styles.input} placeholder="Enter task title" placeholderTextColor="#999" />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Description</Text>
        <TextInput
          style={[styles.input, styles.textarea]}
          placeholder="Add description"
          placeholderTextColor="#999"
          multiline
        />
      </View>

      {/* Deadline & Attachments */}
      <View style={styles.row}>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Deadline</Text>
          <TouchableOpacity style={styles.iconInput}>
            <Text style={{ color: "#999" }}>Date & Time</Text>
            <Ionicons name="calendar-outline" size={18} color="white" />
          </TouchableOpacity>
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Attachments</Text>
          <TouchableOpacity style={styles.iconInput}>
            <Text style={{ color: "#999" }}>Upload</Text>
            <Ionicons name="attach-outline" size={18} color="white" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Priority */}
      <Text style={styles.label}>Priority</Text>
      <View style={styles.priorityContainer}>
        {["Low", "Medium", "High"].map((item) => (
          <TouchableOpacity
            key={item}
            style={[styles.priorityButton, priority === item && styles.priorityActive]}
            onPress={() => setPriority(item)}
          >
            <Text style={[styles.priorityText, priority === item && { color: "black" }]}>{item}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#1C1C1E", padding: 20 },
  header: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 20 },
  cancelText: { color: "white", fontSize: 16 },
  doneText: { color: "white", fontSize: 16 },
  switchContainer: { flexDirection: "row", backgroundColor: "#333", borderRadius: 20, padding: 5 },
  switchButton: { padding: 8, borderRadius: 15 },
  switchActive: { backgroundColor: "white" },
  infoText: { color: "#999", textAlign: "center", marginBottom: 15 },
  inputContainer: { marginBottom: 15 },
  label: { color: "white", marginBottom: 5 },
  input: {
    backgroundColor: "#2C2C2E",
    borderRadius: 10,
    padding: 10,
    color: "white",
  },
  textarea: { height: 80, textAlignVertical: "top" },
  row: { flexDirection: "row", justifyContent: "space-between" },
  iconInput: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#2C2C2E",
    borderRadius: 10,
    padding: 10,
    alignItems: "center",
    width: 150,
  },
  priorityContainer: { flexDirection: "row", justifyContent: "space-between" },
  priorityButton: {
    flex: 1,
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#2C2C2E",
    alignItems: "center",
    marginHorizontal: 2,
  },
  priorityActive: { backgroundColor: "#FFD700" },
  priorityText: { color: "white" },
});

export default TaskForm;
