import React, {useState} from 'react';

import {View} from 'react-native';

import Label from '../../components/atoms/Label';
import {Container, StyledContainer} from '../../components/atoms/Container';

import TextInput from '../../components/atoms/Input';
import Button from '../../components/atoms/Button/Contained';

import ListContainerCardPaymentMethods from '../../components/organisms/ListContainerCardPaymentMethods';
import ContainerBarCode from '../../components/organisms/ContainerBarCode';

function Home({navigation}) {
  const [user, setUser] = useState('Lucas');
  const [currentBalance, setCurrentBalance] = useState(390);
  const [ticket, setTicket] = useState(30);

  return (
    <Container padding={30}>
      <Label color="green-dark">Olá {user}</Label>
      <View style={{padding: 10}} />
      <StyledContainer direction="row" justify="space-between">
        <Card text="Saldo atual" type="money" value={currentBalance} />
        <Card text="Quantidade de passes" value={ticket} />
      </StyledContainer>
      <View style={{padding: 16}} />
      <Label color="gray-800" variant="h3">
        Deseja realizar uma recarga?
      </Label>
      <View style={{padding: 16}} />
      <TextInput
        label="Quantidade de passes"
        onChangeText={(text) => console.log(text)}
        text="EX: 40"
      />

      <View style={{padding: 10}} />

      <ListContainerCardPaymentMethods />

      <View style={{padding: 10}} />

      <StyledContainer
        direction="column"
        justify="space-between"
        color={'white-light'}
        padding={14}>
        <ContainerPaymentInformation text="Quantidade de passes" value={40} />
        <View style={{padding: 2}} />
        <ContainerPaymentInformation text="Valor do passe" value={40} />
        <View
          style={{
            padding: 3,
            borderBottomWidth: 1,
            width: '100%',
            borderBottomColor: '#E9F0EB',
          }}
        />
        <ContainerPaymentInformation text="Valor total" value={52} />
      </StyledContainer>

      <View style={{padding: 10}} />

      <Button onPress={() => console.log('exemple')}>Recarregar</Button>
    </Container>
  );
}

const Card = ({text, value, type}: any) => {
  return (
    <StyledContainer width={48} color="green-default" radius={6} padding={12}>
      <Label color="white-default" variant="body2">
        {text}
      </Label>
      <View style={{padding: 4}} />
      <Label color="white-default" variant="h2">
        {type === 'money' ? `R$${value}` : value}
      </Label>
    </StyledContainer>
  );
};

const ContainerPaymentInformation = ({text, value}) => {
  return (
    <StyledContainer
      direction="row"
      justify="space-between"
      color={'white-light'}>
      <Label variant="body2" color="gray-400">
        {text}
      </Label>
      <Label variant="body2" color="gray-800">
        {value}
      </Label>
    </StyledContainer>
  );
};

export default Home;
