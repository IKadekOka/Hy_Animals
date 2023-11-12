import { StyleSheet, Text, View,Image, TouchableOpacity } from 'react-native'
import React from 'react'
import {Location, Heart} from 'iconsax-react-native';

const Detail = () => {
  return (
    <View>
        <Image 
              style={{height: "40%", width: '100%',alignSelf: 'center' }}
              source={{uri:'https://www.dictio.id/uploads/db3342/original/3X/2/9/29da1897d406ea84691edf38917b4500c301adbe.jpeg',}}
        />
        <View style={{
            backgroundColor:'#faf0d4', height:450, borderRadius:15, marginTop: -10,
        }}>
          <View style={{margin:15, flexDirection:'row',gap:260}}>
            <Text style={{fontSize:25,fontWeight:'bold',}}>Pitbull</Text>
            <Heart size="32" color="#FF8A65"/>
          </View>
          <View style={{flexDirection:'row', margin:10}}>
          <Location size="32" color="#FF8A65"/>
          <Text style={{fontSize:15, margin:5}}>Gianyar,Bali</Text>
          </View>
          <View style={{flexDirection:'row',gap:10}}>
          <View style={{backgroundColor:'#faf0d4',height:80, borderRadius:8,left:15, width:120, elevation: 10,padding: 10}}>
            <Text style={{}}>Age</Text>
            <Text style={{fontSize:20,fontWeight:'bold', }}>04 Month </Text>
          </View>
          <View style={{backgroundColor:'#faf0d4',height:80, borderRadius:8,left:15, width:170, elevation: 10,padding: 10}}>
            <Text style={{}}>Type</Text>
            <Text style={{fontSize:20,fontWeight:'bold', }}>American Bully</Text>
          </View>
          <View style={{backgroundColor:'#faf0d4',height:80, borderRadius:8,left:15, width:80, elevation: 10,padding: 10}}>
            <Text style={{}}>Heavy</Text>
            <Text style={{fontSize:20,fontWeight:'bold', }}>8.5 Kg </Text>
          </View>
          </View>
          <View style={{left:10, margin:10}}>
            <Text>
            American Bully adalah jenis anjing modern yang dikembangkan sebagai anjing pendamping , 
            dan awalnya distandarisasi dan diakui sebagai ras pada tahun 2004 oleh American Bully Kennel Club (ABKC). 
            </Text>
          </View>
          <TouchableOpacity style={{backgroundColor:'#f5b405', justifyContent:'center',alignItems:'center', height:50, borderRadius:15, margin: 10,}}>
            <Text style={{fontSize:18, fontWeight:'bold'}}>AdoPet Me</Text>
          </TouchableOpacity>
        </View>
    </View>
  )
}

export default Detail

const styles = StyleSheet.create({})