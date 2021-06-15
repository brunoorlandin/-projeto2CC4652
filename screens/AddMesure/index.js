import React, {useState, useEffect} from 'react';
import { Wrapper, Title, Container } from '../../styles';
import { SafeAreaProvider, SafeAreaView  } from 'react-native-safe-area-context';
import {View, TextInput, Text, Button, Alert} from 'react-native';
import Header from '../../components/Header';
import estilos from './styles';
import AsyncStorage from '@react-native-async-storage/async-storage';

let lista = [];
let listSize = 0;
export default function AddMesureScreen(){
  const [sistolica, setSistolica] = useState();
  const [diastolica, setDiastolica] = useState();
  const [bpm, setBpm] = useState();

  let diaAtual = new Date().getDate();
  let mesAtual = new Date().getMonth()+1;
  let anoAtual = new Date().getFullYear();

  let pressao = {
    sistolica: sistolica,
    diastolica: diastolica,
    bpm: bpm,
    data: diaAtual + '/' + mesAtual + '/' + anoAtual
  }

  const save = async () => {
    try{
      lista.push(pressao);
      await AsyncStorage.setItem('lista', JSON.stringify(lista));
      
      listSize += 1;
      await AsyncStorage.setItem('tamanho', JSON.stringify(listSize));
      
    }catch(err){
      alert(err);
    }
  };
  
    return(
          <Wrapper>
          
            <Header/>
            <Title>Adicionar</Title>
            <View>
              <Text style={estilos.texto}>Pressão Sistólica</Text>
              <TextInput style={estilos.input}
                keyboardType="numeric"
                onChangeText={(text) => setSistolica(text)}
              />
            </View>

            <View>
              <Text style={estilos.texto}>Pressão Diastólica</Text>
              <TextInput style={estilos.input}
                keyboardType="numeric"
                onChangeText={(text) => setDiastolica(text)}
              />
            </View>

            <View>
              <Text style={estilos.texto}>Batimento Cardiaco (BPM)</Text>
              <TextInput style={estilos.input}
                keyboardType="numeric"
                onChangeText={(text) => setBpm(text)}
              />
            </View>

            <View style={estilos.botao}>
              <Button
                title="Adicionar"
                onPress={() => save()}
              />
            </View>

          </Wrapper>
    );
}