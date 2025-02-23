import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Calendar } from "react-native-calendars";
import { Ionicons } from "@expo/vector-icons"; // Untuk ikon
import { Divider } from "react-native-paper";
import Svg, { Path } from "react-native-svg";
import { useTheme } from "../theme/ThemeContext";
import { ScrollView } from "react-native-gesture-handler";

const CustomCalendar = () => {
  const theme = useTheme()
  const [selectedDate, setSelectedDate] = useState("");

  // Data dummy untuk menandai event
  const todoList = [
    // {
    //   id: 1,
    //   title: "Meeting with team",
    //   description: "Discuss project milestones and upcoming tasks.",
    //   date: "2025-02-23",
    //   time: "10:00 - 11:00 AM",
    //   priority: "High Priority",
    //   completed: true,
    // },
    // {
    //   id: 2,
    //   title: "Menyatakan Perasaan",
    //   description: "Discuss project milestones and upcoming tasks.",
    //   date: "2025-02-23",
    //   time: "10:00 - 11:00 AM",
    //   priority: "Medium Priority",
    //   completed: true,
    // },
    // {
    //   id: 3,
    //   title: "halo dek",
    //   description: "Discuss project milestones and upcoming tasks.",
    //   date: "2025-02-23",
    //   time: "10:00 - 11:00 AM",
    //   priority: "Medium Priority",
    //   completed: true,
    // },
    // {
    //   id: 4,
    //   title: "Menyatakan Perasaan",
    //   description: "Discuss project milestones and upcoming tasks.",
    //   date: "2025-02-24",
    //   time: "10:00 - 11:00 AM",
    //   priority: "Medium Priority",
    //   completed: true,
    // },
  ];
  const markedDates = {
    "2025-03-03": { dotColor: "#FF7E7E" }, // Overdue
    "2025-03-07": { dotColor: "#98E2F4" }, // Ongoing
    "2025-03-15": { dotColor: "#98E2F4" },
    "2025-03-21": { dotColor: "#98E2F4" },
  };
  // Mendapatkan tanggal hari ini dalam format 'YYYY-MM-DD'
  const today = new Date().toISOString().split('T')[0];

  // Filter untuk menampilkan task hari ini
  const todayTasks = todoList.filter(item => item.date === today);

  return (
    <ScrollView style={styles.container}>
      {/* Header Kalender */}
      <View style={styles.header}>
        <TouchableOpacity style={{ backgroundColor:'#242525', padding:10, borderRadius:10 }}>
          <Svg width="21" height="21" viewBox="0 0 21 21" fill="none">
            <Path d="M10.4167 2.08333C15.0104 2.08333 18.75 5.82292 18.75 10.4167C18.75 15.0104 15.0104 18.75 10.4167 18.75C5.82292 18.75 2.08333 15.0104 2.08333 10.4167C2.08333 5.82292 5.82292 2.08333 10.4167 2.08333ZM10.4167 0C4.66667 0 0 4.66667 0 10.4167C0 16.1667 4.66667 20.8333 10.4167 20.8333C16.1667 20.8333 20.8333 16.1667 20.8333 10.4167C20.8333 4.66667 16.1667 0 10.4167 0ZM10.4167 13.5417L6.25 9.375H14.5833L10.4167 13.5417Z" fill="white"/>
          </Svg>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>March, 2025</Text>
        <TouchableOpacity style={{ backgroundColor:'#242525', padding:10, borderRadius:10 }}>
          <Ionicons name="add" size={24} color="white" />
        </TouchableOpacity>
      </View>

      {/* Legend */}
      <View style={styles.legend}>
        <View style={styles.legendItem}>
          <View style={[styles.dotLegend, { backgroundColor: "#98E2F4" }]} />
          <Text style={styles.legendText}>Ongoing</Text>
        </View>
        <View style={styles.legendItem}>
          <View style={[styles.dotLegend, { backgroundColor: "#FF7E7E" }]} />
          <Text style={styles.legendText}>Overdue</Text>
        </View>
      </View>

      {/* Kalender */}
      <Calendar
        theme={{
          backgroundColor: "#1C1C1E",
          calendarBackground: "#1C1C1E",
          textSectionTitleColor: "#A1A1A1",
          selectedDayBackgroundColor: "#3A3A3C",
          selectedDayTextColor: "#ffffff",
          todayTextColor: "#ffffff",
          dayTextColor: "#ffffff",
          textDisabledColor: "#585858",
          dotColor: "#ffffff",
          arrowColor: "white",
          monthTextColor: "white",
          textDayFontWeight: "bold",
          textMonthFontWeight: "bold",
          textDayHeaderFontWeight: "bold",
          textDayFontSize: 16,
          textMonthFontSize: 18,
          textDayHeaderFontSize: 14,
        }}
        markingType={"dot"}
        markedDates={markedDates}
        onDayPress={(day) => setSelectedDate(day.dateString)}
        dayComponent={({ date, state }) => {
          const isMarked = markedDates[date.dateString];
          const dotColor = isMarked ? isMarked.dotColor : null;

          return (
            <View style={styles.dayContainer}>
              <Text style={[styles.dayText, state === "disabled" && styles.disabledText]}>
                {date.day}
              </Text>
              {dotColor && <View style={[styles.dot, { backgroundColor: dotColor }]} />}
            </View>
          );
        }}
      />

      {/* Divider */}
      <View style={{ position:'relative', marginTop:50, marginBottom:10 }}>
        <View style={{ flexDirection:'row', marginLeft:'10%', gap:13, marginBottom:10}}>
          <Text style={{ fontFamily:'Inter-Bold', color:'#fff', }}>Task</Text>
          <Text style={{ fontFamily:'Inter-Bold', color:'#fff', }}>12</Text>
        </View>
        <Divider/>
        <View style={{ backgroundColor:'#fff', width:'27%', height:5, borderRadius:20, position:'absolute', left:'6%', bottom:0,}}></View>
      </View>

      {/* Notes */}
      <View style={{ padding:20, marginBottom:50 }}>
        {todayTasks.length > 0 ? (
          todayTasks.map((item,index) => (
            <View style={{ flexDirection:'row', marginBottom:10 }}>
              <View style={{ flexDirection:'column', gap:40 }}>
                <Text style={{ color:'#fff', maxWidth:'70%', textAlign:'right', fontFamily:'Inter-Bold' }}>08.00 <Text style={{ color:'#646464' }}>AM</Text></Text>
                <Text style={{ color:'#fff', maxWidth:'70%', textAlign:'right', fontFamily:'Inter-Bold' }}>09.00 <Text style={{ color:'#646464' }}>AM</Text></Text>
              </View>
              <View style={{ flex:1 }}>
                <View style={{ flexDirection:'column',backgroundColor:'#242525', flex:1, paddingHorizontal:20, borderRadius:20, position:'relative', justifyContent:'center', gap:5 }}>
                  <Text style={{ color:'#fff', fontFamily:'Inter-Bold' }}>{item.title}</Text>
                  <View style={{ flexDirection:'row', gap:10 }}>
                    <Ionicons name="home" size={20} color='#fff'/>
                    <Text style={{ color:'#696969', fontFamily:'Inter-Bold', }}>{item.time}</Text>
                  </View>
                  <View style={{ flexDirection:'row', gap:10 }}>
                    <Ionicons name="home" size={20} color='#98E2F4'/>
                    <Text style={{ color:'#fff' }}>{item.priority}</Text>
                  </View>
                </View>
                <Divider style={{marginTop:20}}/>
              </View>
            </View>
          ))
        ):(
          // Placeholder jika tidak ada catatan
          <View style={{ paddingHorizontal: 20, paddingVertical: 20, }}>
            <View style={{ alignItems: 'center', }}>
              <Svg width="71" height="68" viewBox="0 0 71 68" fill="none">
                <Path d="M33.9998 67.3334C36.6665 67.3334 39.3332 67 41.6665 66.3334C40.3332 64.6667 38.9998 62.6667 38.3332 60.3334C36.9998 60.6667 35.3332 60.6667 33.9998 60.6667C19.3332 60.6667 7.33317 48.6667 7.33317 34C7.33317 19.3334 19.3332 7.33335 33.9998 7.33335C36.6665 7.33335 38.9998 7.66669 41.3332 8.33335L46.6665 3.00002C42.6665 1.66669 38.3332 0.666687 33.9998 0.666687C15.6665 0.666687 0.666504 15.6667 0.666504 34C0.666504 52.3334 15.6665 67.3334 33.9998 67.3334ZM15.6665 32.3334L20.3332 27.6667L30.6665 38L59.3332 9.33335L63.9998 14L30.6665 47.3334L15.6665 32.3334ZM57.3332 40.6667L53.1332 49.8334L43.9998 54L53.1332 58.2L57.3332 67.3334L61.4998 58.2L70.6665 54L61.4998 49.8334L57.3332 40.6667Z" fill="#404040"/>
              </Svg>
              <Text style={{ color: '#999', fontSize: 17, marginTop: 20, textAlign: 'center', maxWidth:"70%", fontFamily:'Inter-Bold' }}>
                There is no task today
              </Text>
            </View>
          </View>
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#1C1C1E", paddingTop: 50, paddingHorizontal:20, },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  headerTitle: { color: "white", fontSize: 20, fontWeight: "bold" },
  legend: { flexDirection: "row", gap:20, marginBottom: 10 },
  legendItem: { flexDirection: "row", alignItems: "center" },
  dotLegend: { width: 6, height: 6, borderRadius: 3, marginRight: 5 },
  legendText: { color: "white", fontSize: 14 },

  dayContainer: {
    width: 52, // Perbesar agar lebih rapat
    height: 50,
    borderRadius: 10, // Sudut rounded
    backgroundColor: "#2C2C2E",
    justifyContent: "center",
    alignItems: "center",
    position: "relative", // Supaya dot bisa diatur posisinya secara absolute
    margin: -5, // Kurangi margin agar lebih padat
  },
  dayText: { color: "white", fontSize: 16, fontWeight: "bold" },
  disabledText: { color: "#585858" },

  dot: {
    position: "absolute",
    top: 4,  // Geser lebih ke atas
    right: 4, // Geser lebih ke kanan
    width: 6,
    height: 6,
    borderRadius: 3,
  },
});

export default CustomCalendar;
