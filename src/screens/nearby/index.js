import { StyleSheet, Text, View, TextInput, ScrollView, Image } from 'react-native'
import React from 'react'
import { Location, SearchNormal } from 'iconsax-react-native'

const Nearby = () => {
  return (
    <ScrollView>
    <View style={{backgroundColor:'#faf0d4'}}>
      <Text style={{ fontSize: 32, fontWeight: 'bold', color: '#805e03', marginTop: 20, marginLeft: 20 }}>Pet Care Nearby</Text>
      <View style={{ flexDirection: 'row',gap: 15,justifyContent: "center",alignItems:'center',marginTop: 20 }}>
        <View
          style={{
            borderRadius: 30,
            backgroundColor: '#FEFEFE',
            paddingHorizontal: 20,
            paddingVertical: 10,
            elevation: 10,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: 300,
          }}>
          <TextInput placeholder='Search' placeholderTextColor='grey' />
          <SearchNormal size="32" color='grey' />
        </View>
        <View style={{
          backgroundColor: '#f5b405',
          height: 70, 
          width: 70, 
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 20}}>
          <SearchNormal size="32" color="#FEFEFE" />
        </View>
      </View>
      <ScrollView horizontal contentContainerStyle={{gap:10, paddingHorizontal:10,marginTop:12}}>
          <View style={{borderRadius: 30,
            backgroundColor: '#f5b405',
            paddingHorizontal: 20,
            paddingVertical:5,
            elevation: 5,
            justifyContent: 'space-between',
            alignItems: 'center',
            width: 175,}}>
          <Text
            style={{
              fontSize: 15,
              fontWeight: 'bold',
              color: '#805e03',
              alignItems: 'center',
            }}>
            DayCare
          </Text>
          </View>
          <View style={{
            borderRadius: 30,
            backgroundColor: '#ffffff',
            borderColor:'#f5b405',
            borderWidth:1.5,
            paddingHorizontal: 20,
            paddingVertical:5,
            elevation: 5,
            justifyContent: 'space-between',
            alignItems: 'center',
            width: 175,}}>
          <Text
            style={{
              fontSize: 15,
              fontWeight: 'bold',
              color: '#805e03',
              alignItems: 'center',
            }}>
            Groamming
          </Text>
          </View>
          <View style={{
            borderRadius: 30,
            backgroundColor: '#ffffff',
            borderColor:'#f5b405',
            borderWidth:1.5,
            paddingHorizontal: 20,
            paddingVertical:5,
            elevation: 5,
            justifyContent: 'space-between',
            alignItems: 'center',
            width: 175,}}>
          <Text
            style={{
              fontSize: 15,
              fontWeight: 'bold',
              color: '#805e03',
              alignItems: 'center',
            }}>
            Training
          </Text>
          </View>
          <View style={{
            borderRadius: 30,
            backgroundColor: '#f5b405',
            paddingHorizontal: 20,
            paddingVertical:5,
            elevation: 10,
            justifyContent: 'space-between',
            alignItems: 'center',
            width: 175,}}>
          <Text
            style={{
              fontSize: 15,
              fontWeight: 'bold',
              color: '#805e03',
              alignItems: 'center',
            }}>
            Walking
          </Text>
          </View>
      </ScrollView>
      <View style={{padding:10}}>
        <Text style={{fontSize: 22, fontWeight: 'bold', color: '#805e03', marginTop: 10, marginLeft: 5}}>LOOKING WEAR</Text>
        <View style={{
          marginTop:5,
          borderRadius: 10,
          backgroundColor: '#f5b405',
          paddingHorizontal: 20,
          paddingVertical: 12,
          elevation: 10,
          flexDirection: 'row',
          gap:15,
          alignItems: 'center',
          width: 385,
        }}>
          <Location size="32" color="#FFFFFF"/> 
          <Text>
              My Location
          </Text>
        </View>
      </View>
      <View style={{backgroundColor:'#ffffff',elevation:10, height:120, borderRadius:15, margin: 10, flexDirection: 'row'}}>
            <Image 
              style={{height: 100, width: 100, borderRadius:10,left:10,alignSelf: 'center' }}
              source={require('../../assets/images/people.jpg')}
            />
            <View style={{margin:20}}>
              <Text style={{fontSize:20,fontWeight:'bold',}}> Windy Kartika</Text>
              <View style={{ height:100, marginRight:100}}>
                <Text style={{fontSize:14}}>Jl. Anak Agung Gede Rai, Lodtunduh, Kecamatan Ubud, Kabupaten Gianyar, Bali 80571</Text>
              </View>
            </View>
        </View>
        <View style={{backgroundColor:'#ffffff',elevation:10, height:120, borderRadius:15, margin: 10, flexDirection: 'row'}}>
            <Image 
              style={{height: 100, width: 100, borderRadius:10,left:10,alignSelf: 'center' }}
              source={require('../../assets/images/people1.jpg')}
            />
            <View style={{margin:20}}>
              <Text style={{fontSize:20,fontWeight:'bold',}}>Putri Kaswari</Text>
              <View style={{ height:100, marginRight:100}}>
                <Text style={{fontSize:14}}>Bunga Mekar, Kec. Nusa Penida, Kabupaten Klungkung, Bali 80771</Text>
              </View>
            </View>
        </View>
        <View style={{backgroundColor:'#ffffff',elevation:10, height:120, borderRadius:15, margin: 10, flexDirection: 'row'}}>
            <Image 
              style={{height: 100, width: 100, borderRadius:10,left:10,alignSelf: 'center' }}
              source={require('../../assets/images/people2.jpg')}
            />
            <View style={{margin:20}}>
              <Text style={{fontSize:20,fontWeight:'bold',}}> Pitbull</Text>
              <View style={{ height:100, marginRight:100}}>
                <Text style={{fontSize:14}}>Jl. Pantai Kedungu, Desa Belalang, Belalang, Kediri, Tabanan Regency, Bali</Text>
              </View>
            </View>
        </View>
    </View>
    </ScrollView>
  )
}

export default Nearby

const styles = StyleSheet.create({})