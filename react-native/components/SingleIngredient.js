import React, { useEffect, useState } from 'react';
import { Text, Image, ScrollView, View, TouchableHighlight, StyleSheet } from 'react-native';
import { categoriesId, recipesData } from '../data';

export default function SingleIngredient(props) {
  const { ingredient } = props.route.params;
  const { navigation } = props;
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    let res = [];

    for(let rec of recipesData){
      for(let val of rec.ingredients){
        if(val[0] == ingredient.ingredientId) {
          res.push(rec);
          break;
        }
      }
    }
    setRecipes(res);
  }, [ingredient]);

  return (
    <ScrollView style={{backgroundColor: "#fff"}}>
      <Image style={styles.headImage} source={{uri: ingredient.photo_url}} />
      <Text style={styles.headText}>Recipes with {ingredient.name} :</Text>
      <View style={styles.container}>
        {recipes.map(val=> 
          <TouchableHighlight 
          style={styles.item} 
          underlayColor="rgba(0,0,0,0)"
          onPress={() => navigation.navigate("Recipes", {recipe: val})}
          >
            <View>
              <Image style={styles.image} source={{uri: val.photo_url}} />
              <View style={styles.textBox}>
                <Text style={styles.title}>{val.title}</Text>
                <Text style={styles.subtitle}>{categoriesId[val.categoryId]}</Text>
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
  headImage: {
    width: "100%",
    height: 230,
  },
  headText: {
    paddingLeft: 20,
    fontSize: 20,
    fontWeight: "600",
    paddingTop: 20,
    marginBottom: 10,
    borderTopWidth: 0.4,
    borderTopColor: "rgba(0,0,0,0.3)"
  },
  item: {
    width: "45%",
    margin: 5,
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
    color: "rgb(150,150,150)",
    fontWeight: "600"
  }
});