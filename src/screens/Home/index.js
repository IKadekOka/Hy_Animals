import React,{useState} from 'react';
import {View, Text, StyleSheet, ScrollView, Dimensions,Image,TouchableOpacity} from 'react-native';
import {Scissor, Profile, Pet, ProfileCircle, Link2} from 'iconsax-react-native';
import {useNavigation} from '@react-navigation/native';



const width = Dimensions.get("window").width;
export default function Home() {
const navigation = useNavigation();
  const [dog, setDog] = useState('Pitbull');
  const[dog1, setDog1] = useState('Husky');
  return (
    <ScrollView style={{flex: 1, backgroundColor: '#fffacd'}}>
    <View >
      <View
        style={{
          flexDirection: 'row',
          marginTop: 30,
          paddingHorizontal: 20,
          justifyContent: 'space-between',
        }}>
        <View>
          <Text style={{fontSize: 32, fontWeight: 'bold', color: '#383838'}}>
            Hello,Jhon!!
          </Text>
          <Text style={{color: '#383838'}}>What, Would you like to do?</Text>
        </View>
        <ProfileCircle color="#000000" variant="Bold" size={50} />
      </View>
      <Chill props={
      <View style={styles.header}>
        <View style={category.title}>
          <View
            style={{backgroundColor: '#ffffff', borderRadius: 10, padding: 8}}>
            <Profile color="#000000" variant="Linear" size={35} />
          </View>
          <Text style={{fontSize: 20, marginTop: 10}}>DayCare</Text>
        </View>
        <View style={category.title}>
          <View
            style={{backgroundColor: '#ffffff', borderRadius: 10, padding: 8}}>
            <Scissor color="#000000" variant="Linear" size={35} />
          </View>
          <Text style={{fontSize: 20, marginTop: 10}}>Grooming</Text>
        </View>
        <View style={category.title}>
          <View
            style={{backgroundColor: '#ffffff', borderRadius: 10, padding: 8}}>
            <Pet color="#000000" variant="Linear" size={35} />
          </View>
          <Text style={{fontSize: 20, marginTop: 10}}>Training</Text>
        </View>
        <View style={category.title}>
          <View style={{backgroundColor: '#ffffff', borderRadius: 10, padding: 8}}>
            <Link2 color="#000000" variant="Linear" size={35} />
          </View>
          <Text style={{fontSize: 20}}>Walking</Text>
        </View>
      </View>}/>
      <ScrollView horizontal contentContainerStyle={{gap:10, paddingHorizontal:10}}>
        <View style={category.blogs}>
          <Text
            style={{
              fontSize: 35,
              fontWeight: 'bold',
              color: '#00ced1',
              alignItems: 'center',
            }}>
            30%off
          </Text>
          <Text style={{fontSize: 14, fontWeight: 'bold', color: '#00ced1'}}>
            Spa & Treatment
          </Text>
        </View>
        <View style={category.blogs}>
          <Text
            style={{
              fontSize: 35,
              fontWeight: 'bold',
              color: '#00ced1',
              alignItems: 'center',
            }}>
            90%off
          </Text>
          <Text style={{fontSize: 14, fontWeight: 'bold', color: '#00ced1'}}>
            Spa & Treatment
          </Text>
        </View>
      </ScrollView>
        <View>
          <Text style={{fontSize: 32, fontWeight: 'bold', color: '#383838', left:10}}>blogs</Text>
        </View>
        <TouchableOpacity style={{backgroundColor:'#ffd700', height:120, borderRadius:15, margin: 10, flexDirection: 'row'}} onPress={() => navigation.navigate('Detail')}>
            <Image 
              style={{height: 100, width: 100, borderRadius:10,left:10,alignSelf: 'center' }}
              source={{uri:'https://www.dictio.id/uploads/db3342/original/3X/2/9/29da1897d406ea84691edf38917b4500c301adbe.jpeg',}}
            />
            <View style={{margin:20}}>
              <Text style={{fontSize:20,fontWeight:'bold',}}>{dog}</Text>
              <View style={{ height:100, marginRight:100}}>
                <Text style={{fontSize:14}}>Doberman Pitbull mix is a hybrid buddy which has designed by crossing American Pit bull terrier and</Text>
              </View>
            </View>
        </TouchableOpacity>
        <TouchableOpacity style={{backgroundColor:'#ffd700', height:120, borderRadius:15, margin: 10, flexDirection: 'row'}} onPress={() => navigation.navigate('Detail')}>
            <Image 
              style={{height: 100, width: 100, borderRadius:10,left:10,alignSelf: 'center',backgroundColor: 'white' }}
              source={{uri:'https://www.akc.org/wp-content/uploads/2018/08/Siberian-Husky-Mom-and-Puppy.jpg',}}
            />
            <View style={{margin:18}}>
              <Text style={{fontSize:20,fontWeight:'bold',}}>{dog1}</Text>
              <View style={{ height:100, marginRight:100}}>
                <Text style={{fontSize:14}}>They are high-energy, independent thinkers with a knack for escaping and a love of running, so they’re not the breed for everyone.</Text>
              </View>
            </View>
        </TouchableOpacity>
    </View>
    </ScrollView>
  );
}


export function Chill({props}) {
  return (
    <View>
      {props}
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 25,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 4,
    color: '#0fffff',
    flexWrap: 'wrap',
    gap: 10,
  },
});
const category = StyleSheet.create({
  item: {
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 25,
    alignItems: 'center',
    marginHorizontal: 5,
  },
  title: {
    lineHeight: 18,
    paddingVertical: 30,
    width: 110,
    backgroundColor: '#ffd700',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  blogs: {
    height: 100,
    backgroundColor: '#2f4f4f',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width : width-20,
    marginTop: 10,
  },
});
