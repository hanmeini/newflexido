import { Button, StyleSheet, Text, TouchableOpacity, View, Image, TextInput } from 'react-native'
import React, { useState } from 'react'
import { Ionicons } from '@expo/vector-icons';
import Svg, { Path } from 'react-native-svg';

const LoginScreen = ({navigation}:any) => {
  const nextHome = () => {
    navigation.navigate("Flexido");
  };
  const nextForgot = () => {
    navigation.navigate("ForgotPassword")
  }
  const backStarted = () => {
    navigation.navigate("StartedPage")
  }

  const [secureText, setSecureText] = useState(false);
  return (
<View style={{ flex: 1, backgroundColor: '#161616', paddingHorizontal: 20, paddingVertical: 50, position:'relative' }}>
  <TouchableOpacity onPress={backStarted} style={{ borderColor: '#fff', borderWidth: 1, borderRadius: 50, padding: 10, position: 'absolute', top: '7%', left: '7%', alignItems: 'center', justifyContent: 'center', zIndex: 10 }}>
    <Ionicons name='chevron-back-outline' size={30} color='#fff' />
  </TouchableOpacity>
  <Image source={require('../../assets/icon/iconlogin.png')} style={{ width: 200, height: 200, position:'absolute' }} />

  <View style={{ alignItems: 'center', marginBottom: 40, marginTop:'20%' }}>
    <View style={{ backgroundColor:'#fff', borderRadius:50, padding:20, marginBottom:20 }}>
          <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <Path d="M12 9C13.933 9 15.5 7.433 15.5 5.5C15.5 3.567 13.933 2 12 2C10.067 2 8.5 3.567 8.5 5.5C8.5 7.433 10.067 9 12 9Z" fill="#161616" stroke="#161616" stroke-width="1.83333" stroke-linecap="round" stroke-linejoin="round"/>
            <Path d="M2 20.5C2 16.0815 6.0295 12.5 11 12.5" stroke="#161616" stroke-width="1.83333" stroke-linecap="round" stroke-linejoin="round"/>
            <Path d="M13.5 15.5H20.5V20.5H13.5V15.5Z" fill="#161616" stroke="#161616" stroke-width="1.83333" stroke-linecap="round" stroke-linejoin="round"/>
            <Path d="M18.5 15.5V14C18.5 13.6022 18.342 13.2206 18.0607 12.9393C17.7794 12.658 17.3978 12.5 17 12.5C16.6022 12.5 16.2206 12.658 15.9393 12.9393C15.658 13.2206 15.5 13.6022 15.5 14V15.5" stroke="#161616" stroke-width="1.83333" stroke-linecap="round" stroke-linejoin="round"/>
          </Svg>
        </View>
    <Text style={{ color: '#fff', fontSize: 25, fontWeight: 'bold', marginTop: 20 }}>Account Access</Text>
    <Text style={{ color: 'rgba(255, 255, 255, 0.5)', textAlign: 'center', maxWidth: '80%', marginTop: 10 }}>
      Enter your credentials to access the features! 🚀
    </Text>
  </View>

  <View style={{ flex: 1, justifyContent: 'center' }}>
    {/* Email */}
    <View style={{ marginBottom: 20 }}>
      <Text style={{ color: '#fff', fontWeight: '500', marginBottom: 10 }}>Email Address</Text>
      <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: '#242525', padding: 10, borderRadius: 20 }}>
        <Ionicons name='mail-outline' size={30} color='rgba(255, 255, 255, 0.5)' style={{ marginRight: 10 }} />
        <TextInput placeholder='example@gmail.com' placeholderTextColor='rgba(255, 255, 255, 0.5)' style={{ flex: 1, color: '#fff' }} />
      </View>
    </View>

    {/* Password */}
    <View style={{ marginBottom: 30 }}>
      <Text style={{ color: '#fff', fontWeight: '500', marginBottom: 10 }}>Password</Text>
      <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: '#242525', padding: 10, borderRadius: 20, position: 'relative' }}>
        <Ionicons name='lock-closed-outline' size={24} color='rgba(255, 255, 255, 0.5)' style={{ marginRight: 10 }} />
        <TextInput placeholder='min. 8 characters' placeholderTextColor='rgba(255, 255, 255, 0.5)' style={{ flex: 1, color: '#fff' }} secureTextEntry={secureText} />
        <TouchableOpacity onPress={() => setSecureText(!secureText)} style={{ position: 'absolute', right: 20 }}>
          <Ionicons name={secureText ? 'eye-off-outline' : 'eye-outline'} size={24} color='rgba(255, 255, 255, 0.5)' />
        </TouchableOpacity>
      </View>
    </View>

    {/* Forgot Password */}
    <TouchableOpacity style={{ alignSelf: 'flex-end', marginBottom: 40 }}>
      <Text style={{ color: 'rgba(246, 236, 236, 0.77)' }}>Forgot Password?</Text>
    </TouchableOpacity>

    {/* Button Sign In */}
    <TouchableOpacity onPress={nextForgot} style={{ backgroundColor: '#98E2F4', padding: 15, borderRadius: 20, alignItems: 'center', marginBottom: 40 }}>
      <Text style={{ fontWeight: '600', fontSize: 17 }}>Sign In</Text>
    </TouchableOpacity>

    {/* Sign In via Google */}
    <View style={{ alignItems: 'center', marginBottom:10 }}>
      <Text style={{ color: '#fff', fontSize: 16, fontWeight: '500', opacity: 0.5 }}>Or Sign In via</Text>
    </View>

    <TouchableOpacity style={{ alignItems: 'center', alignSelf:'center', justifyContent: 'center', borderColor:'#fff', borderWidth:1, borderRadius:50, padding:15}}>
        <Svg width="30" height="30" viewBox="0 0 30 30" fill="none">
          <Path d="M27.2569 12.5519H26.25V12.5H15V17.5H22.0644C21.0338 20.4106 18.2644 22.5 15 22.5C10.8581 22.5 7.5 19.1419 7.5 15C7.5 10.8581 10.8581 7.5 15 7.5C16.9119 7.5 18.6513 8.22125 19.9756 9.39937L23.5112 5.86375C21.2787 3.78312 18.2925 2.5 15 2.5C8.09688 2.5 2.5 8.09688 2.5 15C2.5 21.9031 8.09688 27.5 15 27.5C21.9031 27.5 27.5 21.9031 27.5 15C27.5 14.1619 27.4137 13.3438 27.2569 12.5519Z" fill="#FFC107"/>
          <Path d="M3.94116 9.18187L8.04804 12.1937C9.15929 9.4425 11.8505 7.5 14.9999 7.5C16.9118 7.5 18.6512 8.22125 19.9755 9.39937L23.5112 5.86375C21.2787 3.78312 18.2924 2.5 14.9999 2.5C10.1987 2.5 6.03491 5.21062 3.94116 9.18187Z" fill="#FF3D00"/>
          <Path d="M15 27.5C18.2287 27.5 21.1625 26.2644 23.3806 24.255L19.5118 20.9813C18.2149 21.9682 16.6297 22.5018 15 22.5C11.7487 22.5 8.98808 20.4269 7.94808 17.5338L3.87183 20.6744C5.94058 24.7225 10.1418 27.5 15 27.5Z" fill="#4CAF50"/>
          <Path d="M27.2569 12.5519H26.25V12.5H15V17.5H22.0644C21.5714 18.8853 20.6833 20.0957 19.51 20.9819L19.5119 20.9806L23.3806 24.2544C23.1069 24.5031 27.5 21.25 27.5 15C27.5 14.1619 27.4137 13.3438 27.2569 12.5519Z" fill="#1976D2"/>
        </Svg>
      </TouchableOpacity>
  </View>
</View>
  )
}

export default LoginScreen

const styles = StyleSheet.create({})