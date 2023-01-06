import React, { useState, useRef } from 'react';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { ScrollView, Text, View, Image, StyleSheet, TouchableHighlight, Dimensions } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { categoriesId, ingredientsData } from '../data';


export default function Recipes(props) {
  const { recipe } = props.route.params;
  const { navigation } = props;
  const carouselRef = useRef(null);
  const [currIndex, setCurrIndex] = useState(0);

  const getIngredient = function(ingredients){
    let res = [];

    for(let id of ingredients){
      for(let val of ingredientsData)
        if(val.ingredientId == id[0]) res.push({...val, quantity: id[1]})
    }

    return res;
  }

  const _renderItem = ({item, index}) => {
    return (
      <View style={styles.imageContainer}>
        <Image source={{uri: item}} style={styles.image} />
      </View>
    );        
  }

  return (
    <ScrollView style={{position: "relative"}}>
      <Carousel
        ref={carouselRef}
        layout={"default"}
        data={recipe.photosArray}
        renderItem={_renderItem}
        sliderWidth={Dimensions.get('window').width}
        itemWidth={Dimensions.get('window').width}
        onSnapToItem={(index) => setCurrIndex(index)}
      />
      <Pagination
        dotsLength={recipe.photosArray.length}
        activeDotIndex={currIndex}
        carouselRef={carouselRef}
        dotStyle={{
          width: 15,
          height: 15,
          borderRadius: 60,
          marginHorizontal: 0,
          backgroundColor: 'rgba(255, 255, 255, 1)',
        }}
        containerStyle={{
          marginTop: -80
        }}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
        tappableDots={true}
      />

      <View style={styles.backBtn}>
        <TouchableHighlight underlayColor="rgba(0,0,0,0)" onPress={() => navigation.goBack()}>
          <AntDesign name="left" size={24} color="#30D5C8" />
        </TouchableHighlight>
      </View>

      <View style={styles.detailsContainer}>
        <Text style={styles.title}>
          {recipe.title}
        </Text>
        <Text style={styles.category}>
          {categoriesId[recipe.categoryId]}
        </Text>
        <Feather name="clock" size={18} color="black" style={styles.time}> {recipe.time} minutes </Feather>
        <TouchableHighlight 
        style={styles.button} 
        underlayColor="rgba(0,0,0,0)"
        onPress={() => navigation.navigate("Ingredient", {ingredient: getIngredient(recipe.ingredients), header: recipe.title})}>
          <Text style={styles.buttonText}>View Ingregients</Text>
        </TouchableHighlight>
        <Text style={styles.desc}>
          {recipe.description}
        </Text>
      </View>
    </ScrollView>
  )
}


const styles = StyleSheet.create({
  detailsContainer: {
    padding: 20
  },
  imageContainer: {
    width: "100%"
  },
  image: {
    width: "100%",
    height: 350,
  },
  backBtn: {
    position: "absolute",
    top: 60,
    left: 12,
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 150,
  },
  title: {
    fontSize: 30,
    fontWeight: "700",
    textAlign: "center",
    margin: 20,
  },
  category: {
    fontSize: 20,
    fontWeight: "600",
    color: "#30D5C8",
    textAlign: "center"
  },
  time: {
    textAlign: "center",
    marginTop: 15,
    fontWeight: "600"
  },
  button: {
    alignItems: "center",
    justifyContent: "center"
  },
  buttonText: {
    color: "#30D5C8",
    fontWeight: "500",
    paddingVertical: 25,
    paddingHorizontal: 50,
    borderRadius: 50,
    fontSize: 18,
    borderColor: "#30D5C8",
    borderWidth: 2,
    marginTop: 25
  },
  desc: {
    textAlign: "center",
    marginTop: 25,
    fontSize: 16,
    color: "#555"
  }
});