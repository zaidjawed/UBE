import React from 'react';
import { Text, ScrollView, View, Image, StyleSheet } from 'react-native';
import { categoriesData, recipesData } from '../data';

export default function Categories() {

  const getTotalNumber = function(id){
    let res = 0;

    for(let val of recipesData)
      if(val.categoryId == id) res++;

    return res;
  }

  return (
    <ScrollView style={styles.container}>
      {categoriesData.map((val) => (
        <View style={styles.item} key={val.id}>
          <Image style={styles.image} source={{uri:val.photo_url}} />
          <View style={styles.textBox}>
            <Text style={styles.title}>{val.name}</Text>
            <Text style={styles.subtitle}>{getTotalNumber(val.id)} recipes</Text>
          </View>
        </View>
      ))}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 10
  },
  item: {
    width: "100%",
    marginBottom: 15,
    paddingBottom: 10,
  },
  image: {
    width: "100%",
    height: 180,
    marginBottom: 10,
    borderRadius: 10
  },
  textBox: {
    borderWidth: 1,
    borderRadius: 10,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderTopWidth: 0,
    paddingTop: 15,
    paddingBottom: 10,
    borderColor: "rgba(150,150,150,0.3)",
    marginTop: -15,
  },
  title: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 20,
    fontWeight: "600"
  },
  subtitle: {
    fontSize: 12,
    textAlign: "center",
  }
});