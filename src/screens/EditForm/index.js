import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import { ArrowLeft } from "iconsax-react-native";
import { useNavigation } from "@react-navigation/native";
import axios from 'axios';


const EditForm = ({route}) => {
    const {dataId} = route.params;
  const [loading, setLoading] = useState(false);
  const dataCategory = [
    { id: 1, name: "DayCare" },
    { id: 2, name: "Groamming" },
    { id: 3, name: "Training" },
    { id: 4, name: "Walking" },
  ];
  const [blogData, setBlogData] = useState({
    nama: "",
    alamat: "",
    category: {},
  });
  const handleChange = (key, value) => {
    setBlogData({
      ...blogData,
      [key]: value,
    });
  };
  const [image, setImage] = useState(null);
  const navigation = useNavigation();

  useEffect(() => {
    getBlogById();
  }, [dataId]);

  const getBlogById = async () => {
    try {
      const response = await axios.get(
        `https://657577feb2fbb8f6509d1e36.mockapi.io/Hy_animal/blog/${dataId}`,
      );
      setBlogData({
        nama: response.data.nama,
        alamat : response.data.alamat,
        category : {
            id : response.data.category.id,
            name : response.data.category.name
        }
      })
      setImage(response.data.image)
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };
  const handleUpdate = async () => {
    setLoading(true);
    try {
      await axios
        .put(`https://657577feb2fbb8f6509d1e36.mockapi.io/Hy_animal/blog/${dataId}`, {
            nama: blogData.nama,
            alamat: blogData.alamat,
            image,
            category: blogData.category,
        })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
      setLoading(false);
      navigation.navigate('Profile');
    } catch (e) {
      console.log(e);
    }
  };
  
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <ArrowLeft color="#ffffff" variant="Linear" size={24} />
        </TouchableOpacity>
        <View style={{ flex: 1, alignItems: "center" }}>
          <Text style={styles.title}>Add</Text>
        </View>
      </View>
      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: 24,
          paddingVertical: 10,
          gap: 10,
        }}
      >
        <View style={textInput.borderDashed}>
          <TextInput
            placeholder="Nama"
            value={blogData.nama}
            onChangeText={(text) => handleChange("nama", text)}
            placeholderTextColor="grey"
            multiline
            style={textInput.nama}
          />
        </View>
        <View style={[textInput.borderDashed, { minHeight: 100 }]}>
          <TextInput
            placeholder="Alamat"
            value={blogData.alamat}
            onChangeText={(text) => handleChange("alamat", text)}
            placeholderTextColor="grey"
            multiline
            style={textInput.alamat}
          />
        </View>
        <View style={[textInput.borderDashed]}>
          <TextInput
            placeholder="Image"
            value={image}
            onChangeText={(text) => setImage(text)}
            placeholderTextColor="grey"
            style={textInput.content}
          />
        </View>
        <View style={[textInput.borderDashed]}>
          <Text
            style={{
              fontSize: 12,
              color : "grey",
            }}
          >
            Category
          </Text>
          <View style={category.container}>
            {dataCategory.map((item, index) => {
              const bgColor =
                item.id === blogData.category.id
        
              const color =
                item.id === blogData.category.id
              return (
                <TouchableOpacity
                  key={index}
                  onPress={() =>
                    handleChange("category", { id: item.id, name: item.name })
                  }
                  style={[category.item, { backgroundColor: bgColor }]}
                >
                  <Text style={[category.name, { color: color }]}>
                    {item.name}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
      </ScrollView>
      <View style={styles.bottomBar}>
        <TouchableOpacity style={styles.button} onPress={handleUpdate}>
          <Text style={styles.buttonLabel}>Upload</Text>
        </TouchableOpacity>
      </View>
      {loading && (
        <View style={styles.loadingOverlay}>
          <ActivityIndicator size="large" color='grey' />
        </View>
      )}
    </View>
  );
};

export default EditForm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  loadingOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    paddingHorizontal: 24,
    flexDirection: "row",
    alignItems: "center",
    height: 52,
    elevation: 8,
    paddingTop: 8,
    paddingBottom: 4,
  },
  title: {
    fontSize: 16,
    color: 'black',
  },
  bottomBar: {
    backgroundColor:'white',
    alignItems: "flex-end",
    paddingHorizontal: 24,
    paddingVertical: 10,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor:'#f5b405',
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonLabel: {
    fontSize: 14,
    color: 'white',
  },
});
const textInput = StyleSheet.create({
  borderDashed: {
    // borderStyle: "dashed",
    borderWidth: 1,
    borderRadius: 20,
    padding: 10,
    borderColor: 'black',
  },
  nama: {
    fontSize: 16,
    color:'black',
    padding: 0,
  },
  alamat: {
    fontSize: 12,
    color: 'black',
    padding: 0,
  },
});
const category = StyleSheet.create({
  title: {
    fontSize: 12,
    color: 'grey',
  },
  container: {
    flexWrap: "wrap",
    flexDirection: "row",
    gap: 10,
    marginTop: 10,
  },
  item: {
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 25,
  },
  name: {
    fontSize: 10,
  },
});