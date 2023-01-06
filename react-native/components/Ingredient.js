import React from 'react';
import { Text, View, Image, ScrollView, StyleSheet, TouchableHighlight } from 'react-native';

export default function Ingredient(props) {
  const { ingredient } = props.route.params;
  const { navigation } = props;

  return (
    <ScrollView style={{backgroundColor: "#fff"}}>
      <View style={styles.container}>
        {ingredient.map(val=> 
          <TouchableHighlight 
          style={styles.item} 
          underlayColor="rgba(0,0,0,0)"
          onPress={() => navigation.navigate("Single Ingredient", { ingredient: val, header: val.name })}
          >
            <View>
              <Image style={styles.image} source={{uri: val.photo_url}} />
              <View>
                <Text style={styles.title}>{val.name}</Text>
                <Text style={styles.subtitle}>{val.quantity}</Text>
              </View>
            </View>
          </TouchableHighlight>
        )}
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
    width: "30%",
    margin: 5,
    marginBottom: 15,
    paddingBottom: 10,
  },
  image: {
    width: "100%",
    height: 100,
    marginBottom: 30
  },
  title: {
    fontSize: 14,
    textAlign: "center",
    marginBottom: 20,
    fontWeight: "600"
  },
  subtitle: {
    fontSize: 12,
    textAlign: "center",
    color: "rgb(150,150,150)",
    fontWeight: "600"
  }
});