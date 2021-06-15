import React, {useState, useEffect} from 'react';
import { Wrapper, Title } from '../../styles'
import { SafeAreaProvider, SafeAreaView  } from 'react-native-safe-area-context';
import Header from '../../components/Header';
import {View, Button, Text} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

let lista = [];

function useForceUpdate(){
    const [value, setValue] = useState(0); // integer state
    return () => setValue(value => value + 1); // update the state to force render
}

export default function MeasureStatsScreen(){
  const [list] = useState();
  const [tamanho] = useState();
  
  let media = 0;
  let mediaDis = 0;
  let mediaBpm = 0;
  let maior;
  let maiorDis;
  let maiorBpm;
  let menor;
  let menorDis;
  let menorBpm;

  const load = async () => {
    try{
      let jsonValue = await AsyncStorage.getItem('lista');
      let tamanhoLista = await AsyncStorage.getItem('tamanho');
      
      if(jsonValue != null){
        lista = JSON.parse(jsonValue);
        this.list = lista;
      }
    }catch(err){
      alert(err);
    }
  };

   useEffect(() => {
    load();
  });

  menor = this.list[0].sistolica;
  menorDis = this.list[0].diastolica;
  menorBpm = this.list[0].bpm;

  maior = this.list[0].sistolica;
  maiorDis = this.list[0].diastolica;
  maiorBpm = this.list[0].bpm;
  
  for (let i = 0; i < this.tamanho; i++) {
    
    media += parseInt(this.list[i].sistolica);
    mediaDis += parseInt(this.list[i].diastolica);
    mediaBpm += parseInt(this.list[i].bpm);

    if(this.list[i].sistolica > maior){
      maior = this.list[i].sistolica;
    }
    if(this.list[i].diastolica > maiorDis){
      maiorDis = this.list[i].diastolica;
    }
    if(this.list[i].bpm > maiorBpm){
      maiorBpm = this.list[i].bpm;
    }

    if(this.list[i].sistolica < menor){
      menor = this.list[i].sistolica;
    }
    if(this.list[i].diastolica < menorDis){
      menorDis = this.list[i].diastolica;
    }
    if(this.list[i].bpm < menorBpm){
      menorBpm = this.list[i].bpm;
    }
  }

  media = media/this.tamanho;
  mediaDis = mediaDis/this.tamanho;
  mediaBpm = mediaBpm/this.tamanho;

    return(
        <Wrapper>
          <Header/>
          <Title>Estatisticas</Title>
          <View>
          
            <Button
              title="ler"
               onPress={useForceUpdate()}
            />
          </View>
      
            <View>
              <Title>Média das pressões</Title>
              <Text>Sistólica: {media}</Text>
              <Text>Diastólica: {mediaDis}</Text>
              <Text>BPM: {mediaBpm}</Text>
            </View>

            <View>
              <Title>Máximos e Mínimos</Title>
                <Text>Pico Sistólica: {maior}</Text>
                <Text>Pico Diastólica: {maiorDis}</Text>
                <Text>Pico BPM: {maiorBpm}</Text>
                <Text>menor Sistólica: {menor}</Text>
                <Text>menor Diastólica: {menorDis}</Text>
                <Text>menor BPM: {menorBpm}</Text>
            </View>
        </Wrapper>
    );
}