/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import type {PropsWithChildren} from 'react';
import {
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

function App(): React.JSX.Element {

  const [ipva, setIpva] = useState('');
  const [resultado, setResultado] = useState(''); 

  const calcularIPVA = () => {
    const tempIpva = parseFloat(ipva);
    const ipvaValue = 0.04
    const result = tempIpva * ipvaValue;
    setResultado(result.toString())
  };

  return (
    <ImageBackground style={{height: '100%', width: '100%', justifyContent: 'center', alignItems: 'center'}} source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTx-D_98dL2lXS8xLEjq46DHru_HYjSQpV2Jw&s'}}>
      <Text style={{color: '#000', fontSize: 30, fontWeight: 'bold'}}>IPVA 2024 SP</Text>
      <Text style={{color: '#000', fontSize: 16, fontWeight: 'bold', textAlign: 'center', marginTop: 20}}>Calcule o IPVA 2024 do seu carro de passeio</Text>

      <TextInput textAlign='center' onChangeText={(value) => setIpva(value)} placeholder='00000.00' keyboardType='numeric' style={{backgroundColor:"#fff", width: '90%', marginVertical: 10}}/>

      <TouchableOpacity onPress={calcularIPVA}>
        <Text  style={{color: '#000', fontSize: 30, fontWeight: 'bold'}}>Calcular IPVA</Text>
      </TouchableOpacity>

      <Text style={{color: '#000', fontSize: 16, fontWeight: 'bold', textAlign: 'center', marginTop: 20}}>Valor</Text>
      <Text style={{color: '#000', fontSize: 30, fontWeight: 'bold'}}>R$ {resultado}</Text>
    </ImageBackground >
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
