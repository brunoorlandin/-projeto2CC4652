import React from 'react';
import { Wrapper, Title } from '../../styles';
import { SafeAreaProvider, SafeAreaView  } from 'react-native-safe-area-context';;

export default function MeasureListScreen(){
    return(
    <SafeAreaProvider>
      <SafeAreaView>
        <Wrapper>
          <Title>Listagem</Title>
        </Wrapper>
      </SafeAreaView>
</SafeAreaProvider>
    );
}