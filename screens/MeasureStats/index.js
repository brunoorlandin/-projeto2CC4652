import React from 'react';
import { Wrapper, Title } from '../../styles'
import { SafeAreaProvider, SafeAreaView  } from 'react-native-safe-area-context';

export default function MeasureStatsScreen(){
    return(
    <SafeAreaProvider>
      <SafeAreaView>
        <Wrapper>
          <Title>Estatisticas</Title>
        </Wrapper>
      </SafeAreaView>
  </SafeAreaProvider>
    );
}