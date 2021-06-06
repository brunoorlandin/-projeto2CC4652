import React from 'react';
import { Wrapper, Title, Container } from '../../styles';
import { SafeAreaProvider, SafeAreaView  } from 'react-native-safe-area-context';
import Header from '../../components/Header';

export default function AddMesureScreen(){
    return(
          <Wrapper>
            <Header/>
            <Title>Adicionar</Title>
          </Wrapper>
    );
}