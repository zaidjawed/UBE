import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

export default function SearchInput() {
  return (
    <TextInput style={styles.input} placeholder="&#128269; Search" />
  )
}

const styles = StyleSheet.create({
  input: {
    width: 250,
    backgroundColor: "rgba(0,0,0,0.1)",
    borderRadius: 5,
    paddingVertical: 5,
    paddingHorizontal: 20
  }
});