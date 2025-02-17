import React, { useState } from "react";
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
import { View, Switch, StyleSheet, TouchableOpacity, Image, Text, Alert, TextInput } from "react-native";
import Activity from "./src/components/Activity";
import { Divider } from "react-native-paper";
import { useNavigation, DrawerActions } from "@react-navigation/native"; // Import useNavigation
import Svg, { Path } from "react-native-svg";
import Calendar from "./src/components/Calendar";

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
        tabBarActiveTintColor: theme === "light" ? "#98E2F4" : "#98E2F4",
        tabBarInactiveTintColor: theme === "light" ? "#888" : "#fff",
        tabBarStyle: {
          backgroundColor: theme === "light" ? "#fff" : "#161616",
          height: 72,
          borderTopWidth: 0, 
          elevation: 5,
          paddingTop:"4%",
        },
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <View style={styles.iconContainer}>
              <Ionicons name="home" size={30} color={color} />
              {focused && <View style={styles.indicator} />}
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Activity"
        component={Activity}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <View style={styles.iconContainer}>
              <Ionicons name="flash" size={30} color={color} />
              {focused && <View style={styles.indicator} />}
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Calendar"
        component={Calendar}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <View style={styles.iconContainer}>
              <Ionicons name="calendar" size={30} color={color} />
              {focused && <View style={styles.indicator} />}
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="jdfbksg"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <View style={styles.iconContainer}>
              <Ionicons name="open" size={30} color={color} />
              {focused && <View style={styles.indicator} />}
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}
function CustomDrawerContent(props: any) {
  const { navigation } = props; 
  const [user, setUser] = useState({
    fullName: "",
    email: "",
    photoURL: "",
  });
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
      <View style={{ padding:10, flexDirection:'column' }}>
        <View style={{ flexDirection:'row', justifyContent:'center', gap:"70%", alignContent:'center', marginBottom:10 }}>
          <Image source={require('./assets/image/sidebar-logo.png')} style={{width:40, height:40}}/>
          <TouchableOpacity onPress={() => navigation.closeDrawer()} style={{ backgroundColor:'#242525', borderRadius:10, paddingHorizontal:10, paddingVertical:10 }}>
            <Svg width="30" height="30" viewBox="0 0 20 20" fill="none">
            <Path d="M15 2.5C15.6377 2.49996 16.2513 2.7436 16.7152 3.18107C17.1792 3.61854 17.4584 4.21676 17.4958 4.85333L17.5 5V15C17.5 15.6377 17.2564 16.2513 16.8189 16.7152C16.3815 17.1792 15.7832 17.4584 15.1467 17.4958L15 17.5H5C4.36232 17.5 3.74874 17.2564 3.28478 16.8189C2.82083 16.3815 2.54158 15.7832 2.50417 15.1467L2.5 15V5C2.49996 4.36232 2.7436 3.74874 3.18107 3.28478C3.61854 2.82083 4.21676 2.54158 4.85333 2.50417L5 2.5H15ZM12.5 4.16667H5C4.79589 4.16669 4.59889 4.24163 4.44636 4.37726C4.29383 4.5129 4.19638 4.69979 4.1725 4.9025L4.16667 5V15C4.16669 15.2041 4.24163 15.4011 4.37726 15.5536C4.5129 15.7062 4.69979 15.8036 4.9025 15.8275L5 15.8333H12.5V4.16667ZM9.75583 7.74417C9.89931 7.88766 9.98551 8.07858 9.99824 8.2811C10.011 8.48362 9.94938 8.68383 9.825 8.84417L9.75583 8.9225L8.67917 10L9.75583 11.0775C9.89931 11.221 9.98551 11.4119 9.99824 11.6144C10.011 11.817 9.94938 12.0172 9.825 12.1775L9.75583 12.2558C9.61234 12.3993 9.42142 12.4855 9.2189 12.4982C9.01638 12.511 8.81617 12.4494 8.65583 12.325L8.5775 12.2558L6.91083 10.5892C6.76735 10.4457 6.68116 10.2548 6.66843 10.0522C6.65569 9.84971 6.71729 9.6495 6.84167 9.48917L6.91083 9.41083L8.5775 7.74417C8.73377 7.58794 8.9457 7.50018 9.16667 7.50018C9.38764 7.50018 9.59956 7.58794 9.75583 7.74417Z" fill="#FF7E7E"/>
            </Svg>
          </TouchableOpacity>
        </View>
        <Text style={{ color:'#fff', opacity:0.5, fontWeight:'500', fontSize:13 }}>©2025 Flexido Labs, Inc</Text>
      </View>

      <View style={{ padding:10 }}>
        <View style={{ paddingVertical:5, backgroundColor:'#242525', paddingHorizontal:20, gap:20, borderRadius:10, flexDirection:'row', alignItems:'center' }}>
        <Svg width="25" height="25" viewBox="0 0 17 17" fill="none">
        <Path d="M7.43758 13.4583C10.7629 13.4583 13.4584 10.7628 13.4584 7.4375C13.4584 4.11223 10.7629 1.41666 7.43758 1.41666C4.11231 1.41666 1.41675 4.11223 1.41675 7.4375C1.41675 10.7628 4.11231 13.4583 7.43758 13.4583Z" stroke="#DADADA" stroke-width="1.58333" stroke-linejoin="round"/>
        <Path d="M9.44112 5.07981C9.17825 4.8164 8.86594 4.6075 8.52212 4.46509C8.1783 4.32269 7.80974 4.24959 7.4376 4.24999C7.06546 4.24959 6.69691 4.32269 6.35309 4.46509C6.00927 4.6075 5.69696 4.8164 5.43408 5.07981M11.7662 11.7661L14.7713 14.7712" stroke="#DADADA" stroke-width="1.58333" stroke-linecap="round" stroke-linejoin="round"/>
        </Svg>
        <TextInput placeholder="Find anything..." placeholderTextColor='#646464' style={{ color:'#fff' }}/>
        </View>
      </View>

      <View style={{ marginTop: 10, paddingHorizontal:10 }}>
        <Text style={{ color:'#646464', fontFamily:'Inter-Bold', fontSize:13, }}>OVERVIEW</Text>
        <DrawerItem
          icon={({ size, color }) => (
            <Svg width="21" height="22" viewBox="0 0 21 22" fill="none">
            <Path d="M1.75 11.187C1.75 9.08875 1.75 8.04008 2.205 7.17108C2.65825 6.30116 3.48862 5.76216 5.1485 4.68233L6.8985 3.54475C8.65287 2.4035 9.5305 1.83333 10.5 1.83333C11.4695 1.83333 12.3462 2.4035 14.1015 3.54475L15.8515 4.68233C17.5114 5.76216 18.3418 6.30116 18.7959 7.17108C19.25 8.041 19.25 9.08875 19.25 11.1861V12.5812C19.25 16.1562 19.25 17.9447 18.2245 19.0557C17.199 20.1667 15.5496 20.1667 12.25 20.1667H8.75C5.45038 20.1667 3.80012 20.1667 2.7755 19.0557C1.75087 17.9447 1.75 16.1572 1.75 12.5812V11.187Z" stroke="white" stroke-width="1.1875"/>
            <Path d="M7.875 14.6667C8.61875 15.2442 9.52437 15.5833 10.5 15.5833C11.4756 15.5833 12.3812 15.2442 13.125 14.6667" stroke="white" stroke-width="1.1875" stroke-linecap="round"/>
            </Svg>
          )}
          label="Days"
          onPress={() => navigation.navigate("Days")}
          style={getDrawerItemStyle("Days")}
          labelStyle={styles.drawerLabel}
        />
        <DrawerItem
          icon={({ size, color }) => (
            <Ionicons name="calendar-clear-outline" size={19} color="#fff" />
          )}
          label="Calendar"
          onPress={() => navigation.navigate("All Task")}
          style={[styles.drawerItem, getDrawerItemStyle("All Task")]}
          labelStyle={[
            styles.drawerLabel,
            activeRoute === "All Task" && styles.activeLabel,
          ]}
        />
        <DrawerItem
          icon={({ size, color }) => (
            <Svg width="10" height="18" viewBox="0 0 10 18" fill="none">
            <Path d="M6.208 5.468H7.997C8.24505 5.46818 8.48918 5.52987 8.70754 5.64756C8.9259 5.76524 9.11167 5.93523 9.24821 6.14232C9.38475 6.34941 9.4678 6.58713 9.48993 6.83419C9.51205 7.08125 9.47257 7.32994 9.375 7.558L5.415 16.801C5.3194 17.0223 5.15049 17.204 4.93668 17.3154C4.72288 17.4267 4.47723 17.4611 4.24107 17.4126C4.00491 17.3641 3.79265 17.2358 3.64002 17.0492C3.48738 16.8626 3.40368 16.6291 3.403 16.388V9.468L1.95 9.423C1.56091 9.41002 1.1921 9.24628 0.921517 8.96637C0.650937 8.68646 0.499784 8.31231 0.5 7.923V2C0.5 1.60218 0.658035 1.22064 0.93934 0.93934C1.22064 0.658035 1.60218 0.5 2 0.5L4.708 0.5C5.10582 0.5 5.48736 0.658035 5.76866 0.93934C6.04996 1.22064 6.208 1.60218 6.208 2V5.468Z" fill="#646464"/>
            </Svg>
          )}
          label="Activity"
          onPress={() => navigation.navigate("Calendar")}
          style={getDrawerItemStyle("Calendar")}
          labelStyle={styles.drawerLabel}
        />
      </View>

      <View style={{ marginTop: 3, paddingHorizontal:10 }}>
        <Text style={{ color:'#646464', fontFamily:'Inter-Bold', fontSize:13, }}>SERVICES</Text>
        <DrawerItem
          icon={({ size, color }) => (
            <Svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            <Path d="M12.3749 10.0833C13.2258 10.0833 14.0419 9.7453 14.6436 9.14362C15.2452 8.54194 15.5833 7.72589 15.5833 6.87499C15.5833 6.02409 15.2452 5.20803 14.6436 4.60636C14.0419 4.00468 13.2258 3.66666 12.3749 3.66666M12.0477 18.3333H3.5355C2.595 18.3333 1.83325 17.6302 1.83325 16.7622C1.83325 14.5924 3.739 12.8333 6.08934 12.8333H9.49384C10.4051 12.8301 11.2958 13.104 12.0477 13.6189M17.4166 12.8333V18.3333M20.1666 15.5833H14.6666M10.9999 6.87499C10.9999 7.72589 10.6619 8.54194 10.0602 9.14362C9.45854 9.7453 8.64249 10.0833 7.79159 10.0833C6.94068 10.0833 6.12463 9.7453 5.52295 9.14362C4.92127 8.54194 4.58325 7.72589 4.58325 6.87499C4.58325 6.02409 4.92127 5.20803 5.52295 4.60636C6.12463 4.00468 6.94068 3.66666 7.79159 3.66666C8.64249 3.66666 9.45854 4.00468 10.0602 4.60636C10.6619 5.20803 10.9999 6.02409 10.9999 6.87499Z" stroke="#646464" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </Svg>
          )}
          label="Collaboration"
          onPress={() => navigation.navigate("Days")}
          style={getDrawerItemStyle("Days")}
          labelStyle={styles.drawerLabel}
        />
        <DrawerItem
          icon={({ size, color }) => (
            <Svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            <Path fill-rule="evenodd" clip-rule="evenodd" d="M1.83325 6.28559C1.83325 5.10478 2.30233 3.97234 3.13729 3.13738C3.97224 2.30242 5.10469 1.83334 6.2855 1.83334H10.9999C11.243 1.83334 11.4762 1.92992 11.6481 2.10183C11.82 2.27374 11.9166 2.5069 11.9166 2.75001C11.9166 2.99313 11.82 3.22628 11.6481 3.39819C11.4762 3.5701 11.243 3.66668 10.9999 3.66668H6.2855C5.59092 3.66668 4.92479 3.9426 4.43365 4.43374C3.94251 4.92488 3.66659 5.59101 3.66659 6.28559V15.7144C3.66659 16.409 3.94251 17.0751 4.43365 17.5663C4.92479 18.0574 5.59092 18.3333 6.2855 18.3333H15.7143C16.4089 18.3333 17.075 18.0574 17.5662 17.5663C18.0573 17.0751 18.3333 16.409 18.3333 15.7144V11C18.3333 10.7569 18.4298 10.5237 18.6017 10.3518C18.7736 10.1799 19.0068 10.0833 19.2499 10.0833C19.493 10.0833 19.7262 10.1799 19.8981 10.3518C20.07 10.5237 20.1666 10.7569 20.1666 11V15.7144C20.1666 16.8952 19.6975 18.0277 18.8626 18.8626C18.0276 19.6976 16.8951 20.1667 15.7143 20.1667H6.2855C5.10469 20.1667 3.97224 19.6976 3.13729 18.8626C2.30233 18.0277 1.83325 16.8952 1.83325 15.7144V6.28559Z" fill="#646464"/>
            <Path fill-rule="evenodd" clip-rule="evenodd" d="M13.8756 12.1174L11.8543 13.3366L10.9074 11.7663L12.9287 10.5472L12.9314 10.5453C13.0089 10.4987 13.0803 10.4427 13.1441 10.3785L17.7366 5.76218C17.7826 5.7158 17.8269 5.6678 17.8695 5.61826C18.1729 5.26443 18.6221 4.5641 18.0785 4.01776C17.6192 3.55576 16.9611 3.9921 16.5348 4.36701C16.4205 4.46781 16.3104 4.57332 16.2048 4.68326L16.1737 4.71443L11.6453 9.26568C11.5378 9.37256 11.4535 9.50052 11.3978 9.64151L10.6425 11.5418C10.6282 11.5775 10.6255 11.6169 10.6348 11.6543C10.6441 11.6916 10.6649 11.7251 10.6944 11.75C10.7238 11.7748 10.7603 11.7898 10.7987 11.7927C10.8371 11.7957 10.8745 11.7864 10.9074 11.7663L11.8543 13.3366C10.1997 14.3339 8.22433 12.6583 8.93933 10.8634L9.69558 8.9641C9.84282 8.59294 10.0643 8.25574 10.3464 7.97318L14.8738 3.42101L14.9004 3.39443C15.0352 3.25693 15.488 2.7931 16.0371 2.45943C16.3368 2.27885 16.8153 2.0396 17.4066 1.99376C18.0849 1.93968 18.8091 2.15326 19.3774 2.72435C19.8124 3.15407 20.086 3.72062 20.152 4.32851C20.1974 4.80233 20.125 5.28003 19.9412 5.7191C19.6753 6.37635 19.2317 6.85943 19.0364 7.05468L14.4439 11.671C14.2728 11.8427 14.0834 11.9915 13.8756 12.1174ZM17.9575 5.58526C17.9575 5.58526 17.9538 5.58801 17.9456 5.59076L17.9575 5.58526Z" fill="#646464"/>
            </Svg>
          )}
          label="New Task & Page"
          onPress={() => navigation.navigate("Days")}
          style={getDrawerItemStyle("Days")}
          labelStyle={styles.drawerLabel}
        />
      </View>

      <View style={{ flex: 1, marginTop: 3, paddingHorizontal:10 }}>
        <Text style={{ color:'#646464', fontFamily:'Inter-Bold', fontSize:13, }}>OTHERS</Text>
        <DrawerItem
          icon={({ size, color }) => (
            <Svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            <Path d="M10.9541 16.5C11.2749 16.5 11.5463 16.3891 11.7681 16.1672C11.9899 15.9454 12.1005 15.6744 12.0999 15.3542C12.0993 15.0339 11.9887 14.7626 11.7681 14.5402C11.5475 14.3177 11.2761 14.2071 10.9541 14.2083C10.632 14.2095 10.361 14.3205 10.141 14.5411C9.921 14.7617 9.81009 15.0327 9.80825 15.3542C9.80642 15.6756 9.91734 15.9469 10.141 16.1682C10.3647 16.3894 10.6357 16.5 10.9541 16.5ZM10.1291 12.9708H11.8249C11.8249 12.4667 11.8824 12.0694 11.9973 11.7792C12.1121 11.4889 12.4366 11.0917 12.9708 10.5875C13.368 10.1903 13.6812 9.81198 13.9103 9.45265C14.1395 9.09332 14.2541 8.66187 14.2541 8.15832C14.2541 7.30276 13.9409 6.64582 13.3145 6.18748C12.6881 5.72915 11.9471 5.49998 11.0916 5.49998C10.2208 5.49998 9.51431 5.72915 8.97225 6.18748C8.4302 6.64582 8.05192 7.19582 7.83742 7.83748L9.34992 8.43332C9.42631 8.15832 9.59834 7.8604 9.866 7.53957C10.1337 7.21873 10.5422 7.05832 11.0916 7.05832C11.5805 7.05832 11.9471 7.19215 12.1916 7.45982C12.436 7.72748 12.5583 8.02143 12.5583 8.34165C12.5583 8.64721 12.4666 8.93382 12.2833 9.20148C12.0999 9.46915 11.8708 9.71726 11.5958 9.94582C10.9235 10.5417 10.511 10.9923 10.3583 11.2979C10.2055 11.6035 10.1291 12.1611 10.1291 12.9708ZM10.9999 20.1667C9.73186 20.1667 8.5402 19.9262 7.42492 19.4452C6.30964 18.9643 5.3395 18.311 4.5145 17.4854C3.6895 16.6598 3.03653 15.6897 2.55559 14.575C2.07464 13.4603 1.83386 12.2687 1.83325 11C1.83264 9.73132 2.07342 8.53965 2.55559 7.42498C3.03775 6.31032 3.69073 5.34018 4.5145 4.51457C5.33828 3.68896 6.30842 3.03598 7.42492 2.55565C8.54142 2.07532 9.73309 1.83454 10.9999 1.83332C12.2668 1.8321 13.4584 2.07287 14.5749 2.55565C15.6914 3.03843 16.6616 3.6914 17.4853 4.51457C18.3091 5.33773 18.9624 6.30787 19.4452 7.42498C19.9279 8.5421 20.1684 9.73376 20.1666 11C20.1648 12.2662 19.924 13.4579 19.4443 14.575C18.9645 15.6921 18.3116 16.6622 17.4853 17.4854C16.6591 18.3086 15.689 18.9618 14.5749 19.4452C13.4609 19.9286 12.2692 20.1691 10.9999 20.1667ZM10.9999 18.3333C13.0471 18.3333 14.7812 17.6229 16.202 16.2021C17.6228 14.7812 18.3333 13.0472 18.3333 11C18.3333 8.95276 17.6228 7.21873 16.202 5.7979C14.7812 4.37707 13.0471 3.66665 10.9999 3.66665C8.9527 3.66665 7.21867 4.37707 5.79784 5.7979C4.377 7.21873 3.66659 8.95276 3.66659 11C3.66659 13.0472 4.377 14.7812 5.79784 16.2021C7.21867 17.6229 8.9527 18.3333 10.9999 18.3333Z" fill="#646464"/>
            </Svg>
          )}
          label="Get Help"
          onPress={() => navigation.navigate("Days")}
          style={getDrawerItemStyle("Days")}
          labelStyle={styles.drawerLabel}
        />
        <DrawerItem
          icon={({ size, color }) => (
            <Svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            <Path d="M11.0001 0.916687L19.7084 5.95835V16.0417L11.0001 21.0834L2.29175 16.0417V5.95835L11.0001 0.916687ZM11.0001 3.0351L4.12508 7.01527V14.9848L11.0001 18.9649L17.8751 14.9848V7.01527L11.0001 3.0351ZM11.0001 14.6667C10.0276 14.6667 9.09499 14.2804 8.40736 13.5927C7.71972 12.9051 7.33342 11.9725 7.33342 11C7.33342 10.0276 7.71972 9.09493 8.40736 8.4073C9.09499 7.71966 10.0276 7.33335 11.0001 7.33335C11.9725 7.33335 12.9052 7.71966 13.5928 8.4073C14.2804 9.09493 14.6667 10.0276 14.6667 11C14.6667 11.9725 14.2804 12.9051 13.5928 13.5927C12.9052 14.2804 11.9725 14.6667 11.0001 14.6667ZM11.0001 12.8334C11.4863 12.8334 11.9526 12.6402 12.2964 12.2964C12.6403 11.9526 12.8334 11.4863 12.8334 11C12.8334 10.5138 12.6403 10.0475 12.2964 9.70366C11.9526 9.35984 11.4863 9.16669 11.0001 9.16669C10.5139 9.16669 10.0475 9.35984 9.70372 9.70366C9.3599 10.0475 9.16675 10.5138 9.16675 11C9.16675 11.4863 9.3599 11.9526 9.70372 12.2964C10.0475 12.6402 10.5139 12.8334 11.0001 12.8334Z" fill="#646464"/>
            </Svg>
          )}
          label="Settings"
          onPress={() => navigation.navigate("Days")}
          style={getDrawerItemStyle("Days")}
          labelStyle={styles.drawerLabel}
        />
      </View>

      <Divider/>


      <TouchableOpacity
        style={{
          flexDirection: "row",
          alignItems: "center",
          paddingHorizontal: 10,
          paddingVertical: 20,
          justifyContent: "space-between", // Menyusun secara horizontal dengan spasi di antara elemen
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image
            source={require('./assets/image/LogoFlexido.png')}
            style={{
              width: 50,
              height: 50,
              borderRadius: 40,
              borderWidth: 2,
            }}
          />
          <View style={{ marginLeft: 15 }}>
            <Text style={{ color: '#fff', fontFamily: 'Inter-Bold', fontSize: 17 }}>
              Keynatasha
            </Text>
            <Text style={{ color: '#D9D9D9', fontFamily: 'Inter-Bold', fontSize: 12 }}>
              tasha9472@gmail.com
            </Text>
          </View>
        </View>

        <View style={{ alignItems: "center" }}>
          <Ionicons name="chevron-up-outline" size={20} color="#fff" />
          <Ionicons name="chevron-down-outline" size={20} color="#fff" />
        </View>
      </TouchableOpacity>

    </DrawerContentScrollView>
  );
}


function DrawerNavigator() {
  return (
    <Drawer.Navigator drawerContent={(props) => <CustomDrawerContent {...props} />} 
      screenOptions={{
        headerShown: false,
        // headerRight: () => <ThemeToggleButton />, // Tambahkan tombol di header
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
          <Stack.Screen name="Activity" component={Activity} />
          <Stack.Screen name="Calendar" component={Calendar} />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}
const styles = StyleSheet.create({
  drawerItem: {
    marginVertical: 5,
  },
  iconContainer: {
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    position: "relative",
  },
  indicator: {
    position: "absolute",
    bottom: -25, // Menempatkan di paling bawah
    width: 40,
    height: 10,
    backgroundColor: "#98E2F4", // Warna indikator
    borderRadius: 10,
  },
  activeBackground: {
    backgroundColor: "#Ffd118",
    borderRadius: 10,
  },
  drawerLabel: {
    color: "#fff",
    fontSize: 16,
    fontFamily: "figtree-semibold",
  },
  activeLabel: {
    fontWeight: "bold",
    color: "#Ffd118",
  },
  drawerContainer: {
    flex: 1,
    backgroundColor: "#161616",
  },
  logo: {
    width: 40,
    height: 40,
  },
  appName: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#ffd118",
    marginBottom: 10,
  },
  profileImage: {
    width: 70,
    height: 70,
    marginTop: 10,
    borderRadius: 40,
    marginBottom: 10,
    borderWidth: 2,
  },
  userName: {
    fontSize: 18,
    fontWeight: "600",
    color: "#fff",
    fontFamily: "figtree-semibold",
  },
  userEmail: {
    fontSize: 14,
    color: "#ccc",
    marginBottom: 10,
    fontFamily: "figtree",
  },
  divider: {
    backgroundColor: "#333",
    height: 1,
    width: "100%",
  },
  logoutButton: {
    flexDirection: "row",
    margin: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  logoutText: {
    fontSize: 16,
    color: "#d3d3d3",
    marginLeft: 10,
    fontFamily: "figtree-semibold",
  },
  settingsText: {
    fontSize: 16,
    color: "#d3d3d3",
    marginLeft: 10,
    fontFamily: "figtree-semibold",
  },
  activeItem: {
    backgroundColor: "#F4AB05",
    borderRadius: 10,
  },
  inactiveBackground: {
    backgroundColor: "transparent",
  },
});