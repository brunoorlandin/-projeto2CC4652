import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import styled from 'styled-components/native';

const Text = styled.Text`
  font-size: 18px;
  color: blue;
  font-weight: 500;
`;

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Componente criado com Styled Components</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
