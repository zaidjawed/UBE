import React from 'react';
import { Text, ScrollView, View, Image, StyleSheet, TouchableHighlight  } from 'react-native';
import { categoriesId, recipesData } from '../data';

export default function Home({ navigation }) {
  return (
    <ScrollView>
      <View style={styles.container}>
        {recipesData.map((val) => (
          <TouchableHighlight 
          style={styles.item} 
          underlayColor="rgba(0,0,0,0)"
          onPress={() => navigation.navigate("Recipes", {recipe: val})}
          >
            <View>
              <Image style={styles.image} source={{uri:val.photo_url}} />
              <View style={styles.textBox}>
                <Text style={styles.title}>{val.title}</Text>
                <Text style={styles.subtitle}>{categoriesId[val.categoryId]}</Text>
              </View>
            </View>
          </TouchableHighlight>
        ))}
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
  item: {
    width: "45%",
    marginBottom: 15,
    paddingBottom: 10,
  },
  image: {
    width: "100%",
    height: 180,
    borderRadius: 10
  },
  textBox: {
    borderWidth: 1,
    borderRadius: 10,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderTopWidth: 0,
    paddingTop: 20,
    height: 110,
    borderColor: "rgba(150,150,150,0.3)",
    marginTop: -8
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