import { StyleSheet, Text, View, Image, Button, TouchableOpacity } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'; // Gunakan library Ionicons untuk ikon

const Startedpage = ({navigation}:any) => {
  const nextlogin = () => {
    navigation.navigate("Login");
  };
  const nextHome = () => {
    navigation.navigate("Flexido");
  };
  return (
    <View style={{ padding:20, backgroundColor:'#161616', flex:1, alignItems:'center', }}>
    {/* logo */}
      <View style={{ display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center',marginBottom:'25%', marginTop:'30%', }}>
        <Image 
        source={require('../../assets/image/LogoFlexido.png')}
        style={{ width:80, marginBottom:50 }} />
        <Text style={{ fontSize:40, color:'#fff', fontWeight:'500', fontFamily:'Inter-Regular' }}>Take the </Text>
        <Text style={{ fontSize:40, color:'#fff', fontWeight:'500', fontFamily:'Inter-Regular' }}>First Step!</Text>
      </View>
    {/* linkaran */}
      <View style={{ display:'flex',gap:45,flexDirection:'row', alignItems:'center', marginBottom:70, }}>
        <View style={{ display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center',maxWidth:'30%' }}>
            <View style={{ height:55, width:55, backgroundColor:'#fff', borderRadius:50, marginBottom:20,justifyContent:'center', alignItems:'center' }}>
              <Image source={require('../../assets/icon/logoflexible.png')} style={{width:20}}/>
            </View>
            <Text style={{ color:'#fff',width:'auto', fontWeight:'500',textAlign:'center',fontSize:13, fontFamily:'Inter-Regular' }}>Flexibility and Customization</Text>
        </View>
        <View style={{ display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center',maxWidth:'30%' }}>
            <View style={{ height:55, width:55, backgroundColor:'#fff', borderRadius:50, marginBottom:20,justifyContent:'center', alignItems:'center' }}>
              <Image source={require('../../assets/icon/modernlogo.png')} style={{width:24}}/>
            </View>
            <Text style={{ color:'#fff',width:'auto', fontWeight:'500',textAlign:'center',fontSize:13, fontFamily:'Inter-Regular' }}>Modern Interface</Text>
        </View>
        <View style={{ display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center',maxWidth:'30%' }}>
            <View style={{ height:55, width:55, backgroundColor:'#fff', borderRadius:50, marginBottom:20,justifyContent:'center', alignItems:'center' }}>
            <Image source={require('../../assets/icon/gaminglogo.png')} style={{width:24}}/>
            </View>
            <Text style={{ color:'#fff', width:'auto', fontWeight:'500', textAlign:'center',fontSize:13, fontFamily: "Inter-Regular" }}>Gamification Features</Text>
        </View>
      </View>
    {/* button */}
      <View style={{ display:'flex', flexDirection:'column', justifyContent:'center', alignContent:'center', gap:10, }}>
        <TouchableOpacity onPress={nextlogin} style={{ display:'flex', flexDirection:'row', justifyContent:'center', alignItems:'center',gap:10, backgroundColor:'#98E2F4', paddingVertical:15, paddingHorizontal:90, borderRadius:10, }}>
          <Ionicons name='mail-outline' size={25}/>
          <Text style={{ fontWeight:'600', fontSize:15, fontFamily:'Inter-Regular' }}>Continue With Email</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={nextHome} style={{ display:'flex', flexDirection:'row', justifyContent:'center', alignItems:'center',gap:10, backgroundColor:'transparent', paddingVertical:15, paddingHorizontal:90, borderRadius:10, borderWidth:1, borderColor:'#fff', marginBottom:20 }}>
        <Image 
        source={require('../../assets/icon/googlelogo.png')}
        style={{ width:25, height:25, }} />
          <Text style={{ fontWeight:'600', fontSize:15, color:'#fff', fontFamily:'Inter-Regular' }}>Continue With Google</Text>
        </TouchableOpacity>
        <Text style={{ color:'#fff', opacity:0.6, textAlign:'center',justifyContent:'center', alignContent:'center', padding:30,fontFamily:'Inter-Regular'}}>By signing in you agree to our Terms of Condition and our Privacy Policy</Text>
      </View>
    </View>
  )
}

export default Startedpage

const styles = StyleSheet.create({})