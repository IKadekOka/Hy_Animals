import React, { useEffect, useState } from "react";
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    ScrollView,
    ActivityIndicator,
    Image
} from "react-native";
import { Add, AddSquare, ArrowLeft } from "iconsax-react-native";
import { useNavigation } from "@react-navigation/native";
import axios from 'axios';
import ImagePicker from 'react-native-image-crop-picker';
import storage from '@react-native-firebase/storage';
import firestore from '@react-native-firebase/firestore';

const EditForm = ({ route }) => {
    const { dataId } = route.params;
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
    const [oldImage, setOldImage] = useState(null);
    const navigation = useNavigation();
    useEffect(() => {
        const subscriber = firestore()
            .collection('blog')
            .doc(dataId)
            .onSnapshot(documentSnapshot => {
                const blogData = documentSnapshot.data();
                if (blogData) {
                    console.log('Blog data: ', blogData);
                    setBlogData({
                        nama: blogData.nama,
                        alamat: blogData.alamat,
                        category: {
                            id: blogData.category.id,
                            name: blogData.category.name,
                        },
                    });
                    setOldImage(blogData.image);
                    setImage(blogData.image);
                    setLoading(false);
                } else {
                    console.log(`Blog with ID ${dataId} not found.`);
                }
            });
        setLoading(false);
        return () => subscriber();
    }, [dataId]);

    const handleImagePick = async () => {
        ImagePicker.openPicker({
            width: 1920,
            height: 1080,
            cropping: true,
        })
            .then(image => {
                console.log(image);
                setImage(image.path);
            })
            .catch(error => {
                console.log(error);
            });
    };
    const handleUpdate = async () => {
        setLoading(true);
        let filename = image.substring(image.lastIndexOf('/') + 1);
        const extension = filename.split('.').pop();
        const name = filename.split('.').slice(0, -1).join('.');
        filename = name + Date.now() + '.' + extension;
        const reference = storage().ref(`blogimages/${filename}`);
        try {
            if (image !== oldImage && oldImage) {
                const oldImageRef = storage().refFromURL(oldImage);
                await oldImageRef.delete();
            }
            if (image !== oldImage) {
                await reference.putFile(image);
            }
            const url =
                image !== oldImage ? await reference.getDownloadURL() : oldImage;
            await firestore().collection('blog').doc(dataId).update({
                nama: blogData.nama,
                alamat: blogData.alamat,
                image,
                category: blogData.category,
            });
            setLoading(false);
            console.log('Blog Updated!');
            navigation.navigate('Nearby');
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <ArrowLeft color="#ffffff" variant="Linear" size={24} />
                </TouchableOpacity>
                <View style={{ flex: 1, alignItems: "center" }}>
                    <Text style={styles.title}>Edit</Text>
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
                {image ? (
                    <View style={{ position: 'relative' }}>
                        <Image
                            style={{ width: '100%', height: 127, borderRadius: 5 }}
                            source={{
                                uri: image,
                            }}
                        />
                        <TouchableOpacity
                            style={{
                                position: 'absolute',
                                top: -5,
                                right: -5,
                                backgroundColor: "blue",
                                borderRadius: 25,
                            }}
                            onPress={() => setImage(null)}>
                            <Add
                                size={20}
                                variant="Linear"
                                color="white"
                                style={{ transform: [{ rotate: '45deg' }] }}
                            />
                        </TouchableOpacity>
                    </View>
                ) : (
                    <TouchableOpacity onPress={handleImagePick}>
                        <View
                            style={[
                                textInput.borderDashed,
                                {
                                    gap: 10,
                                    paddingVertical: 30,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                },
                            ]}>
                            <AddSquare color="grey" variant="Linear" size={42} />
                            <Text
                                style={{
                                    fontSize: 12,
                                    color: "grey",
                                }}>
                                Upload Thumbnail
                            </Text>
                        </View>
                    </TouchableOpacity>
                )}
                <View style={[textInput.borderDashed]}>
                    <Text
                        style={{
                            fontSize: 12,
                            color: "grey",
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
        backgroundColor: 'white',
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
        backgroundColor: '#f5b405',
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
        color: 'black',
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