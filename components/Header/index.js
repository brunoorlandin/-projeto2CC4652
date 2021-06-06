import React from 'react';
import { Container, Image, Title } from './styles'

export default function Header(){
  return(
    <Container>
      <Image source={require('../../assets/logo.png')}></Image>
      <Title>Pressão Sanguinea</Title>
    </Container>
  );
}