import { StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native'
import React, { useRef } from 'react'
import { More } from 'iconsax-react-native'
import ActionSheet from 'react-native-actions-sheet';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';

const ItemNearby = ({item}) => {

    const actionSheetRef = useRef(null);

  const openActionSheet = () => {
    actionSheetRef.current?.show();
  };

  const closeActionSheet = () => {
    actionSheetRef.current?.hide();
  };
  const navigateEdit = () => {
    closeActionSheet()
    navigation.navigate('EditForm', {dataId : item.id})
  }
  const handleDelete = async () => {
    try {
        await firestore()
          .collection('blog')
          .doc(item.id)
          .delete()
          .then(() => {
            console.log('Blog deleted!');
          });
        if (item?.image) {
          const imageRef = storage().refFromURL(item?.image);
          await imageRef.delete();
        }
        console.log('Blog deleted!');
        closeActionSheet();
        setLoading(false)
        navigation.navigate('Profile');
      } catch (error) {
        console.error(error);
      }
  }

  const navigation = useNavigation();
  return (
    <View
    style={{
      backgroundColor: '#ffffff',
      elevation: 10,
      height: 120,
      borderRadius: 15,
      margin: 10,
      flexDirection: 'row',
    }}>
    <Image
      style={{
        height: 100,
        width: 100,
        borderRadius: 10,
        left: 10,
        alignSelf: 'center',
      }}
      source={{uri: item.image}}
    />
    <View style={{margin: 20}}>
      <Text style={{fontSize: 20, fontWeight: 'bold'}}> {item.nama}</Text>
      <View style={{height: 100, marginRight: 100}}>
        <Text style={{fontSize: 14}}>
          {item.alamat}
        </Text>
      </View>
    </View>
    <TouchableOpacity style={{alignItems:'center',justifyContent:'center'}} onPress={openActionSheet}> 
        <More color="#000000" size={20}/>
    </TouchableOpacity>
    <ActionSheet
        ref={actionSheetRef}
        containerStyle={{
          borderTopLeftRadius: 25,
          borderTopRightRadius: 25,
        }}
        indicatorStyle={{
          width: 100,
        }}
        gestureEnabled={true}
        defaultOverlayOpacity={0.3}>
        <TouchableOpacity
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            paddingVertical: 15,
          }}
          onPress={navigateEdit}
          >
          <Text
            style={{
              color: '#000000',
              fontSize: 18,
            }}>
            Edit
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            paddingVertical: 15,
          }}
          onPress={handleDelete}
          >
          <Text
            style={{
              color: '#000000',
              fontSize: 18,
            }}>
            Delete
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            paddingVertical: 15,
          }}
          onPress={closeActionSheet}>
          <Text
            style={{
              color: 'red',
              fontSize: 18,
            }}>
            Cancel
          </Text>
        </TouchableOpacity>
      </ActionSheet>
  </View>
  )
}

export default ItemNearby

const styles = StyleSheet.create({})