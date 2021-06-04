import React from 'react';
import { Wrapper, Title, Container } from '../../styles'
import { SafeAreaProvider, SafeAreaView  } from 'react-native-safe-area-context';

export default function AddMesureScreen(){
    return(
      <SafeAreaProvider>
        <SafeAreaView>
          <Wrapper>
            <Title>Adicionar</Title>
          </Wrapper>
        </SafeAreaView>
      </SafeAreaProvider>
    );
}