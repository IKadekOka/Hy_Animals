import { StyleSheet, Text, View, TextInput,Image } from 'react-native'
import React from 'react'
import { ArrowRight, CloseCircle, HambergerMenu } from 'iconsax-react-native'

const Profile = () => {
  return (
    <View style={{backgroundColor:'#faf0d4', flex: 1}}>
      <View style={{
        alignItems:'flex-end',
        marginRight:20,
        marginTop: 13
    }}>
      <HambergerMenu size="32" color="black"/>
      </View>
      <View>
        <Text style={{fontSize:23,fontWeight:'bold', marginTop: 30, marginLeft:20, color:'#805e03'}}>Choose your pets</Text>
      </View>
      <View style={{flexDirection:'row'}}>
      <View style={{
        width:120,
        height:170,
        backgroundColor:'#f2ba1b',
        elevation:4,
        borderRadius:5,
        marginLeft:20,
        marginTop:10,
        flexWrap:'wrap',
        paddingVertical:25,
        paddingHorizontal:5,
        }}>
          <Image 
              style={{height: 120, width: 110, borderRadius:10,left:10,alignSelf: 'center' }}
              source={require('../../assets/images/dog.jpg')}
          />
      </View>
      <View style={{
        width:120,
        height:170,
        backgroundColor:'#f2ba1b',
        elevation:4,
        borderRadius:5,
        marginLeft:5,
        marginTop:10,
        flexWrap:'wrap',
        paddingVertical:25,
        paddingHorizontal:5,
        }}>
          <Image
            style={{height: 120, width: 110, borderRadius:10,left:10,alignSelf: 'center' }}
            source={require('../../assets/images/cat.jpg')}
          />
          
      </View>
      <View style={{
        width:120,
        height:170,
        backgroundColor:'#f2ba1b',
        elevation:4,
        borderRadius:5,
        marginLeft:5,
        marginTop:10,
        paddingVertical:25,
        paddingHorizontal:5,
        flexWrap:'wrap'
        }}>
          <Image
            style={{height: 120, width: 110, borderRadius:10,left:10,alignSelf: 'center' }}
            source={require('../../assets/images/bird.jpg')}
          />
      </View>
      </View>
      
      <View style={{
        borderRadius:10,
        elevation:5,
        backgroundColor:'#d1d1cf',
        width:370,
        marginLeft:20,
        marginTop:10,
        justifyContent:'space-between',
        flexDirection:'row',
        alignItems: 'center',
        paddingHorizontal:20,
      }}>
        <TextInput placeholder='Pet Name' placeholderTextColor={'grey'}/>
        <ArrowRight size="32" color="#FF8A65"/>
      </View>
      <View style={{
        backgroundColor:'#f2ba1b',
        borderRadius:15,
        width:360,
        height:150,
        marginTop: 20,
        marginLeft:30
      }}>
        <Text style={{marginLeft:35,marginTop:10,fontWeight:'bold'}}>Your pets</Text>
        <View style={{
          backgroundColor:'#edede8',
          width:300,
          height:40,
          elevation:5,
          borderRadius:9,
          marginLeft:35,
          marginTop:10,
          justifyContent:'space-between',
          flexDirection:'row',
          alignItems:'center',
          paddingHorizontal:10
        }}>
          <TextInput placeholder='Milo, Dog' placeholderTextColor={'black'} />
          <View style={{backgroundColor:'#f2ba1b', borderRadius:200}}>
            <CloseCircle size="32" color="#EEEEEE"/>
          </View>

        </View>
        <View style={{
          backgroundColor:'#edede8',
          width:300,
          height:40,
          elevation:5,
          borderRadius:9,
          marginLeft:35,
          marginTop:10,
          justifyContent:'space-between',
          paddingHorizontal:10,
          flexDirection:'row',
          alignItems:'center'
        }}>
          <TextInput placeholder='Milo, Dog' placeholderTextColor={'black'} />
          <View style={{backgroundColor:'#f2ba1b', borderRadius:200}}>
            <CloseCircle size="32" color="#EEEEEE"/>
          </View>
        </View>
      </View>
      <View style={{
        width:370,
        backgroundColor:'#f2ba1b',
        height:40,
        marginTop:100,
        marginLeft:20,
        borderRadius:7,
        paddingVertical:10,
        alignItems:'center'
      }}> 
        <Text style={{fontWeight:'bold', fontSize:15}}>
          CONTINUE
        </Text>
      </View>
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({})