import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Storage from './src/presenters/Views/Storage';


export default function App() {
  return (
    <View style={styles.container}>
      <Storage/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  }
});