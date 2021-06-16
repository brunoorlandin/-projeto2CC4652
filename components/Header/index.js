import React, { useRef, useEffect } from 'react';
import { Container, Title } from './styles';
import { Animated, Text, View, Image } from 'react-native';

function FadeInImage(props){
  const fadeAnim = useRef(new Animated.Value(0)).current 

  React.useEffect(() => {
    Animated.timing(
      fadeAnim,
      {
        toValue: 1,
        duration: 5000,
        useNativeDriver: true
      }
    ).start();
  })

  return (
    <Animated.Image                 
      source={require('../../assets/logo.png')}
      style={{
        ...props.style,
        opacity: fadeAnim,         
      }}
    >
    </Animated.Image>
  );
}

export default function Header(){
  return(
    <Container>
      <FadeInImage style={{width: '10%', height: 30, backgroundColor: 'lightblue', padding: 40, borderRadius:50}}></FadeInImage>
      <Title>Pressão Sanguinea</Title>
    </Container>
  );
}