import { Button, StyleSheet, Text, TouchableOpacity, View, Image, TextInput } from 'react-native'
import React, { useState } from 'react'
import { Ionicons } from '@expo/vector-icons';
import Svg, { Path } from 'react-native-svg';

const ResetPassword = ({navigation}:any) => {
  const nextHome = () => {
    navigation.navigate("Flexido");
  };
  const nextForgot = () => {
    navigation.navigate("ForgotPassword")
  }
  const backStarted = () => {
    navigation.navigate("StartedPage")
  }

  const [confirmPassword, setConfirmPassword] = useState(false);
  const [newPassword, setNewPassword] = useState(false)
  return (
    <View style={{ flex: 1, backgroundColor: '#161616', paddingHorizontal: 20, paddingVertical: 50, position:'relative' }}>
    <Image source={require('../../assets/icon/iconlogin.png')} style={{ width: 200, height: 200, position:'absolute' }} />

    <View style={{ alignItems: 'center', marginBottom: 40, marginTop:'20%' }}>
        <View style={{ backgroundColor:'#fff', borderRadius:50, padding:20, marginBottom:20 }}>
            <Svg width="26" height="26" viewBox="0 0 26 26" fill="none">
                <Path d="M8.66675 11.9167V7.58333C8.66675 6.43406 9.12329 5.33186 9.93595 4.5192C10.7486 3.70655 11.8508 3.25 13.0001 3.25C14.1494 3.25 15.2516 3.70655 16.0642 4.5192C16.8769 5.33186 17.3334 6.43406 17.3334 7.58333V11.9167M16.2501 17.3333H16.2609M13.0109 17.3333H13.0217M9.77175 17.3333H9.78258M5.41675 14.0833C5.41675 13.5087 5.64502 12.9576 6.05135 12.5513C6.45768 12.1449 7.00878 11.9167 7.58341 11.9167H18.4167C18.9914 11.9167 19.5425 12.1449 19.9488 12.5513C20.3551 12.9576 20.5834 13.5087 20.5834 14.0833V20.5833C20.5834 21.158 20.3551 21.7091 19.9488 22.1154C19.5425 22.5217 18.9914 22.75 18.4167 22.75H7.58341C7.00878 22.75 6.45768 22.5217 6.05135 22.1154C5.64502 21.7091 5.41675 21.158 5.41675 20.5833V14.0833Z" stroke="#161616" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </Svg>
        </View>
        <Text style={{ color: '#fff', fontSize: 25, fontWeight: 'bold', marginTop: 20 }}>Reset password</Text>
        <Text style={{ color: 'rgba(255, 255, 255, 0.5)', textAlign: 'center', maxWidth: '80%', marginTop: 10 }}>
        This password should be different from the previous password.
        </Text>
    </View>

    <View style={{ flex: 1, justifyContent: 'center' }}>
        {/* password */}
        <View style={{ marginBottom: 20 }}>
        <Text style={{ color: '#fff', fontWeight: '500', marginBottom: 10 }}>New Password</Text>
        <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: '#242525', padding: 10, borderRadius: 20 }}>
            <Ionicons name='lock-closed-outline' size={30} color='rgba(255, 255, 255, 0.5)' style={{ marginRight: 10 }} />
            <TextInput secureTextEntry={newPassword} placeholder='New Password' placeholderTextColor='rgba(255, 255, 255, 0.5)' style={{ flex: 1, color: '#fff' }} />
            <TouchableOpacity onPress={() => setNewPassword(!newPassword)} style={{ position: 'absolute', right: 20 }}>
            <Ionicons name={newPassword ? 'eye-off-outline' : 'eye-outline'} size={24} color='rgba(255, 255, 255, 0.5)' />
            </TouchableOpacity>
        </View>
        </View>

        {/* confirm Password */}
        <View style={{ marginBottom: 30 }}>
        <Text style={{ color: '#fff', fontWeight: '500', marginBottom: 10 }}>Confirm Password</Text>
        <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: '#242525', padding: 10, borderRadius: 20, position: 'relative' }}>
            <Ionicons name='lock-closed-outline' size={24} color='rgba(255, 255, 255, 0.5)' style={{ marginRight: 10 }} />
            <TextInput placeholder='Confirm Password' placeholderTextColor='rgba(255, 255, 255, 0.5)' style={{ flex: 1, color: '#fff' }} secureTextEntry={confirmPassword} />
            <TouchableOpacity onPress={() => setConfirmPassword(!confirmPassword)} style={{ position: 'absolute', right: 20 }}>
            <Ionicons name={confirmPassword ? 'eye-off-outline' : 'eye-outline'} size={24} color='rgba(255, 255, 255, 0.5)' />
            </TouchableOpacity>
        </View>
        </View>

        {/* Forgot Password */}
        <View style={{ alignSelf: 'flex-start', marginBottom: 40, flexDirection:'column', gap:5 }}>
        <View style={{ flexDirection:'row', alignItems:'center',gap:5,  }}>
            <Ionicons name='checkmark-circle' size={25} color='#98E2F4'/>
            <Text style={{ color: '#fff', fontWeight:'500' }}>At least 8 characters</Text>
        </View>
        <View style={{ flexDirection:'row', alignItems:'center',gap:5 }}>
            <Ionicons name='checkmark-circle' size={25} color='#98E2F4'/>
            <Text style={{ color: '#fff', fontWeight:'500' }}>At least 1 number</Text>
        </View>
        <View style={{ flexDirection:'row', alignItems:'center',gap:5 }}>
            <Ionicons name='checkmark-circle' size={25} color='#98E2F4'/>
            <Text style={{ color: '#fff', fontWeight:'500' }}>Both upper and lower case letters</Text>
        </View>
        </View>

        {/* Button Reset Password */}
        <TouchableOpacity style={{ backgroundColor: '#98E2F4', padding: 15, borderRadius: 20, alignItems: 'center', marginBottom: 40 }}>
        <Text style={{ fontWeight: '600', fontSize: 17 }}>Reset Password</Text>
        </TouchableOpacity>

    </View>
    </View>
  )
}

export default ResetPassword

const styles = StyleSheet.create({})