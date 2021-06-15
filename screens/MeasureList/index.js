import React, {useState, useEffect} from 'react';
import { Wrapper, Title } from '../../styles';
import {View, Button, Text, Alert, ScrollView} from 'react-native';
import { SafeAreaProvider, SafeAreaView  } from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Header from '../../components/Header';
import estilos from './styles';

let lista = [];

function useForceUpdate(){
    const [value, setValue] = useState(0); // integer state
    return () => setValue(value => value + 1); // update the state to force render
}

export default function MeasureListScreen(){
  const [list] = useState();
  const [tamanho] = useState();

  const load = async () => {
    try{
      let jsonValue = await AsyncStorage.getItem('lista');
      let tamanhoLista = await AsyncStorage.getItem('tamanho');

      if(jsonValue != null){
        lista = JSON.parse(jsonValue);
        this.list = lista;
        this.tamanho = tamanhoLista;

      }
    }catch(err){
      alert(err);
    }
  };

  useEffect(() => {
    load();
  });

  var myloop = [];

  for (let i = 0; i < this.tamanho; i++) {
  myloop.push(
    
    <View key={this.list[i]}>

      <View style={estilos.card}>
        <View style={estilos.linha}>
          <Text style={estilos.texto}>Sistolica: {this.list[i].sistolica}</Text>
          <Text style={estilos.texto}>Diastolica: {this.list[i].diastolica}</Text>
        </View>
        <View style={estilos.linha}>
          <Text style={estilos.texto}>BPM: {this.list[i].bpm} </Text>
          <Text style={estilos.texto}>data: {this.list[i].data} </Text>
        </View>
      </View>

    </View>

  );
  }
    return(
        <Wrapper>
        <ScrollView>
          <Header/>
          <Title>Listagem</Title>
          <View style={estilos.botao}>
          
            <Button
              title="ler"
              onPress={useForceUpdate()}
            />
          </View>

            <View>
              {myloop}
            </View>
          </ScrollView>
        </Wrapper>
    );
}