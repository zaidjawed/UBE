import React from 'react';
import { TouchableHighlight, Text, StyleSheet, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default function BackButton(props) {
  const { title, navigation } = props;

  return (
    <TouchableHighlight
      style={styles.container} 
      underlayColor="rgba(0,0,0,0)"
      onPress={() => navigation.goBack(null)}
    >
      <AntDesign name="left" size={18} color="#30D5C8" >{title}</AntDesign>
    </TouchableHighlight>
  )
}


const styles = StyleSheet.create({
  container: {
    paddingLeft: 20
  }
});
