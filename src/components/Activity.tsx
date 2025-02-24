import React from "react";
import { View, Text, StyleSheet, Switch, TouchableOpacity, Image, ScrollView, TextInput } from "react-native";
import { useTheme } from "../theme/ThemeContext";
import Svg, { Path } from "react-native-svg";
import { useNavigation } from "@react-navigation/native";
import { Divider } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";

const todoList = [
  {
    id: 1,
    title: "Meeting with team",
    description: "Discuss project milestones and upcoming tasks.",
    date: "2025-02-28",
    time: "10:00 AM",
    completed: true,
  },
  {
    id: 2,
    title: "Submit assignment",
    description: "Complete and submit the web development assignment.",
    date: "2025-02-16",
    time: "3:00 PM",
    completed: true,
  },
  {
    id: 3,
    title: "Plan content for YouTube",
    description: "Brainstorm ideas for the next 'Tau Gak Sih?' video.",
    date: "2025-02-17",
    time: "5:00 PM",
    completed: false,
  },
  {
    id: 4,
    title: "Coffee shop website update",
    description: "Add new menu items to the UMKM coffee shop website.",
    date: "2025-02-18",
    time: "1:00 PM",
    completed: false,
  },
  {
    id: 1,
    title: "Meeting with team",
    description: "Discuss project milestones and upcoming tasks.",
    date: "2025-02-15",
    time: "10:00 AM",
    completed: true,
  },
  {
    id: 2,
    title: "Submit assignment",
    description: "Complete and submit the web development assignment.",
    date: "2025-02-16",
    time: "3:00 PM",
    completed: true,
  },
  {
    id: 3,
    title: "Plan content for YouTube",
    description: "Brainstorm ideas for the next 'Tau Gak Sih?' video.",
    date: "2025-02-16",
    time: "5:00 PM",
    completed: false,
  },
  {
    id: 4,
    title: "Coffee shop website update",
    description: "Add new menu items to the UMKM coffee shop website.",
    date: "2025-02-18",
    time: "1:00 PM",
    completed: false,
  },
  {
    id: 1,
    title: "Meeting with team",
    description: "Discuss project milestones and upcoming tasks.",
    date: "2025-02-15",
    time: "10:00 AM",
    completed: true,
  },
  {
    id: 2,
    title: "Submit assignment",
    description: "Complete and submit the web development assignment.",
    date: "2025-02-17",
    time: "3:00 PM",
    completed: true,
  },
  {
    id: 3,
    title: "Plan content for YouTube",
    description: "Brainstorm ideas for the next 'Tau Gak Sih?' video.",
    date: "2025-02-17",
    time: "5:00 PM",
    completed: false,
  },
  {
    id: 4,
    title: "Coffee shop website update",
    description: "Add new menu items to the UMKM coffee shop website.",
    date: "2025-02-24",
    time: "1:00 PM",
    completed: false,
  }
];

export default function Activity() {
  const { theme, toggleTheme } = useTheme();

    // Mendapatkan tanggal hari ini dalam format 'YYYY-MM-DD'
    const today = new Date().toISOString().split('T')[0];

    // Filter untuk menampilkan task hari ini
    const todayTasks = todoList.filter(item => item.date === today);

  return (
    <View style={{  flex: 1, position:'relative' }}>
        <View style={{ flexDirection: 'row', paddingTop:'10%', paddingBottom: 30, paddingHorizontal: 20, backgroundColor: theme === "dark" ? "#F0F2F9" : "#1E1E1E", justifyContent: 'space-between' }}>
            <TouchableOpacity onPress={() => navigation.openDrawer()} style={{ backgroundColor:'#242525', borderRadius:10, paddingHorizontal:10, paddingVertical:10, justifyContent:'center', alignItems:'center' }}>
              <Svg width="30" height="30" viewBox="0 0 25 25" fill="none">
              <Path d="M18.75 3.125C19.5471 3.12496 20.3141 3.42951 20.894 3.97634C21.474 4.52317 21.823 5.27094 21.8698 6.06667L21.875 6.25V18.75C21.875 19.5471 21.5705 20.3141 21.0237 20.894C20.4768 21.474 19.7291 21.823 18.9333 21.8698L18.75 21.875H6.25C5.45291 21.875 4.68592 21.5705 4.10598 21.0237C3.52603 20.4768 3.17697 19.7291 3.13021 18.9333L3.125 18.75V6.25C3.12496 5.45291 3.42951 4.68592 3.97634 4.10598C4.52317 3.52603 5.27094 3.17697 6.06667 3.13021L6.25 3.125H18.75ZM18.75 5.20833H9.375V19.7917H18.75C19.0051 19.7916 19.2514 19.698 19.4421 19.5284C19.6327 19.3589 19.7545 19.1253 19.7844 18.8719L19.7917 18.75V6.25C19.7916 5.99486 19.698 5.74861 19.5284 5.55795C19.3589 5.36728 19.1253 5.24548 18.8719 5.21562L18.75 5.20833ZM14.1802 9.59375L14.2781 9.68021L16.3615 11.7635C16.5408 11.9429 16.6485 12.1816 16.6645 12.4347C16.6804 12.6879 16.6034 12.9381 16.4479 13.1385L16.3615 13.2365L14.2781 15.3198C14.0907 15.5066 13.8391 15.6151 13.5746 15.6232C13.3101 15.6312 13.0524 15.5383 12.8539 15.3633C12.6554 15.1882 12.5309 14.9442 12.5058 14.6808C12.4807 14.4173 12.5569 14.1542 12.7188 13.9448L12.8052 13.8469L14.151 12.5L12.8052 11.1531C12.6259 10.9738 12.5181 10.7351 12.5022 10.482C12.4863 10.2288 12.5633 9.97855 12.7188 9.77812L12.8052 9.68021C12.9846 9.50086 13.2232 9.39312 13.4764 9.3772C13.7295 9.36128 13.9798 9.43828 14.1802 9.59375Z" fill="#98E2F4"/>
              </Svg>
            </TouchableOpacity>
          <View style={{ flexDirection: 'column', justifyContent: 'center' }}>
            <Text style={{ fontFamily: 'Inter-Bold', fontSize: 17, color: theme === "dark" ? "#000000" : "#FFFFFF" }}>Keynatasha</Text>
            <Text style={{ fontFamily: 'Inter-Bold', fontSize: 12, color: theme === "dark" ? "#000000" : "#FFFFFF" }}>tasha9472@gmail.com</Text>
          </View>
          <TouchableOpacity style={{ backgroundColor: '#242525', borderRadius: 10, paddingHorizontal: 10, paddingVertical: 10 }}>
            <Ionicons name="mail-open" size={30} color="#fff" />
          </TouchableOpacity>
          <Image source={require('../../assets/image/LogoFlexido.png')} style={{ width: 50, height: 50, borderRadius: 40, borderWidth: 1 }} />
        </View>
        <Divider />
      <ScrollView style={{ backgroundColor: theme === "dark" ? "#F0F2F9" : "#1E1E1E" }}>



       {/* Todo list hanya muncul jika ada task hari ini */}
        {todayTasks.length > 0 && (
          <View style={{ paddingHorizontal: 20, paddingVertical: 20, marginVertical: 10 }}>
            <Text style={{ fontFamily: 'Inter-Bold', marginBottom: 30, color: '#999999' }}>Today</Text>
            {todayTasks.map((item) => (
              <TouchableOpacity
                key={item.id}
                style={{
                  backgroundColor: '#242525',
                  flexDirection: 'row',
                  padding: 20,
                  borderRadius: 20,
                  alignItems: 'center',
                  marginBottom: 10
                }}
              >
                <Ionicons name="calendar-clear-outline" size={25} color="#fff" style={{ marginRight: 10 }} />
                <Text style={{ color: '#fff', fontFamily: 'Inter-Bold' }}>{item.title}</Text>
              </TouchableOpacity>
            ))}
          </View>
        )}

        {/* Pesan jika tidak ada task hari ini */}
        {todayTasks.length === 0 && (
          <View style={{ paddingHorizontal: 20, paddingVertical: 20, marginVertical:10, }}>
            <View style={{ alignItems: 'center', marginTop: "40%", }}>
              <Ionicons name="rocket" size={100} color="#ccc" />
              <Text style={{ color: '#999', fontSize: 17, marginTop: 20, textAlign: 'center', maxWidth:"70%", fontFamily:'Inter-Bold' }}>
                No activity yet. Make your first move!
              </Text>
              <TouchableOpacity 
                style={{
                  backgroundColor: theme === "dark" ? "#1E1E1E" : "#fff",
                  padding: 20,
                  borderRadius: 50,
                  marginTop: 20
                }}
              >
                <Ionicons name="open-outline" size={30} style={{ color: theme === "dark" ? "#fff" : "#000000" }}/>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </ScrollView>




      {/* Search */}
      <View style={{ paddingHorizontal:20, position:'absolute', width:'100%', bottom:'2%' }}>
        <View style={{ backgroundColor:'#242525', borderRadius:50, paddingHorizontal:5, paddingVertical:5, flexDirection:'row', alignItems:'center' }}>
            <View style={{ backgroundColor:'#98E2F4', padding:15, borderRadius:50 }}>  
              <Svg width="25" height="25" viewBox="0 0 25 25" fill="none">
              <Path fill-rule="evenodd" clip-rule="evenodd" d="M10.9374 2.08335C11.5416 2.08335 12.1353 2.14377 12.7072 2.26044C12.9779 2.31541 13.2157 2.47569 13.3683 2.70601C13.5209 2.93633 13.5757 3.21782 13.5207 3.48856C13.4658 3.7593 13.3055 3.99712 13.0752 4.14969C12.8448 4.30225 12.5633 4.35708 12.2926 4.3021C10.9806 4.03446 9.61873 4.16184 8.37912 4.66813C7.13952 5.17442 6.07786 6.0369 5.32839 7.14651C4.57891 8.25612 4.17527 9.56304 4.1685 10.902C4.16172 12.241 4.55211 13.552 5.29032 14.6691C6.02853 15.7863 7.0814 16.6594 8.31581 17.1782C9.55023 17.6971 10.9108 17.8382 12.2254 17.5839C13.54 17.3295 14.7497 16.6911 15.7015 15.7493C16.6534 14.8075 17.3046 13.6046 17.5728 12.2927C17.6 12.1587 17.6534 12.0313 17.7298 11.9179C17.8063 11.8044 17.9043 11.7071 18.0184 11.6316C18.1324 11.5561 18.2602 11.5037 18.3945 11.4776C18.5288 11.4514 18.6669 11.452 18.8009 11.4792C18.935 11.5064 19.0624 11.5598 19.1758 11.6362C19.2893 11.7127 19.3865 11.8107 19.4621 11.9248C19.5376 12.0388 19.59 12.1666 19.6161 12.3009C19.6423 12.4351 19.6417 12.5733 19.6145 12.7073C19.3608 13.9496 18.8432 15.123 18.0968 16.1479L17.8916 16.4188L21.6957 20.2229C21.8845 20.41 21.9947 20.6621 22.0037 20.9277C22.0127 21.1933 21.9199 21.4523 21.7442 21.6517C21.5685 21.8511 21.3232 21.9757 21.0586 22.0002C20.794 22.0247 20.53 21.9471 20.3207 21.7834L20.2228 21.6959L16.4186 17.8917C15.3097 18.7656 14.0079 19.3617 12.6218 19.6301C11.2357 19.8986 9.80544 19.8317 8.45043 19.435C7.09542 19.0383 5.85493 18.3233 4.83244 17.3497C3.80995 16.3761 3.03511 15.1721 2.57258 13.8381C2.11005 12.5042 1.97324 11.0789 2.17355 9.68132C2.37387 8.28371 2.9055 6.95428 3.7241 5.80393C4.5427 4.65358 5.62453 3.71567 6.87933 3.06845C8.13413 2.42123 9.52552 2.08347 10.9374 2.08335ZM19.7916 1.04169C19.9864 1.04169 20.1774 1.09635 20.3428 1.19947C20.5081 1.30259 20.6412 1.45002 20.727 1.62502L20.777 1.7469L20.9124 2.14065C21.0553 2.55959 21.2856 2.94339 21.588 3.26663C21.8904 3.58987 22.2581 3.84518 22.6666 4.01565L22.8593 4.08856L23.253 4.22294C23.448 4.28946 23.6189 4.41231 23.7441 4.57595C23.8692 4.7396 23.9431 4.93668 23.9562 5.14229C23.9694 5.34789 23.9213 5.55278 23.818 5.73104C23.7147 5.90931 23.5609 6.05294 23.3759 6.14377L23.253 6.19377L22.8593 6.32919C22.4403 6.47211 22.0565 6.70239 21.7333 7.0048C21.4101 7.30722 21.1547 7.67485 20.9843 8.08335L20.9114 8.27606L20.777 8.66981C20.7103 8.86475 20.5874 9.03554 20.4237 9.16061C20.26 9.28567 20.0629 9.35939 19.8573 9.37243C19.6517 9.38548 19.4468 9.33727 19.2686 9.2339C19.0904 9.13052 18.9469 8.97663 18.8561 8.79169L18.8062 8.66981L18.6707 8.27606C18.5278 7.85712 18.2975 7.47332 17.9951 7.15008C17.6927 6.82684 17.3251 6.57153 16.9166 6.40106L16.7239 6.32815L16.3301 6.19377C16.1351 6.12725 15.9642 6.0044 15.8391 5.84075C15.7139 5.67711 15.6401 5.48002 15.6269 5.27442C15.6138 5.06881 15.6619 4.86393 15.7651 4.68566C15.8684 4.5074 16.0223 4.36377 16.2072 4.27294L16.3301 4.22294L16.7239 4.08752C17.1428 3.9446 17.5266 3.71431 17.8498 3.4119C18.1731 3.10949 18.4284 2.74186 18.5989 2.33335L18.6718 2.14065L18.8062 1.7469C18.8763 1.54126 19.0091 1.36271 19.1858 1.23626C19.3625 1.10981 19.5743 1.04177 19.7916 1.04169ZM19.7916 4.37085C19.5452 4.68096 19.2642 4.96194 18.9541 5.20835C19.2652 5.45488 19.5443 5.73405 19.7916 6.04585C20.0381 5.73474 20.3173 5.45558 20.6291 5.20835C20.319 4.96194 20.038 4.68096 19.7916 4.37085Z" fill="#242525"/>
              </Svg>
            </View>
            <TextInput placeholder="Find your tasks, page here..." placeholderTextColor='#646464' style={{ color:'#fff' }}/>
        </View>
      </View>
    </View>
  );
}

