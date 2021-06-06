import React from 'react';
import { Wrapper, Title } from '../../styles';
import { SafeAreaProvider, SafeAreaView  } from 'react-native-safe-area-context';
import Header from '../../components/Header';

export default function MeasureListScreen(){
    return(
        <Wrapper>
          <Header/>
          <Title>Listagem</Title>
        </Wrapper>
    );
}