import React from 'react';
import { Wrapper, Title } from '../../styles'
import { SafeAreaProvider, SafeAreaView  } from 'react-native-safe-area-context';
import Header from '../../components/Header';

export default function MeasureStatsScreen(){
    return(
        <Wrapper>
          <Header/>
          <Title>Estatisticas</Title>
        </Wrapper>
    );
}