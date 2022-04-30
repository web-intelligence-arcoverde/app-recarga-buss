import React, {useState} from 'react';

import {Picker} from '@react-native-picker/picker';

import Label from '../../components/atoms/Label';
import {Container, StyledContainer} from '../../components/atoms/Container';
import {COLORS} from '../../constants';

import {View, ScrollView} from 'react-native';

import Icon from '../../components/atoms/Icon';
import IconButton from '../../components/atoms/Button/Icon';

const HistoryPayments = [
  {
    id: 5450,
    status_payment: 'confirmation',
    payment_type: 'PIX',
    price: '39.90',
    date: '19/11/2021',
  },
  {
    id: 4922,
    status_payment: 'cancel',
    payment_type: 'Boleto',
    price: '39.90',
    date: '19/11/2021',
  },
  {
    id: 5021,
    status_payment: 'pending',
    payment_type: 'Cartão',
    price: '339.90',
    date: '19/11/2021',
  },
  {
    id: 5544,
    status_payment: 'pending',
    payment_type: 'Boleto',
    price: '139.90',
    date: '19/11/2021',
  },
];

const IconsPayment = {
  pending: {icon: 'pending-icon', color: COLORS['yellow-light']},
  cancel: {icon: 'cancel-payment-icon', color: COLORS['red-light']},
  confirmation: {
    icon: 'confirmation-payment-icon',
    color: COLORS['green-light'],
  },
};

const STATUS = [
  {label: 'Mais recentes', value: 'mais recentes'},
  {label: 'Mais antigos', value: 'mais antigos'},
  {label: 'Pendentes', value: 'pendentes'},
  {label: 'Aprovados', value: 'aprovados'},
  {label: 'Cancelados', value: 'cancelados'},
];

function Home({navigation}) {
  return (
    <Container>
      <Label color="green-dark" variant="h2">
        Historico
      </Label>

      <View style={{padding: 8}} />

      <HeaderPurchasesHistory />

      <View style={{padding: 8}} />

      <ShoppingListHistory />
    </Container>
  );
}

const ShoppingListHistory = () => {
  const ListPaymentsHistory = HistoryPayments.map((item) => {
    return (
      <>
        <CardItemHistoryShopping item={item} key={item.date} />
        <View style={{padding: 8}} />
      </>
    );
  });

  return <ScrollView>{ListPaymentsHistory}</ScrollView>;
};

const CardItemHistoryShopping = ({item}) => {
  return (
    <StyledContainer
      direction="row"
      padding={16}
      color="white-light"
      width={90}>
      <View
        style={{
          width: 64,
          height: 64,
          backgroundColor: IconsPayment[item.status_payment].color,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 6,
        }}>
        <Icon
          icon={IconsPayment[item.status_payment].icon}
          width={33}
          height={33}
        />
      </View>

      <View style={{padding: 12}} />

      <StyledContainer direction="row">
        <StyledContainer width={50}>
          <Label variant="body4" color="green-dark">
            #{item.id}
          </Label>
          <View style={{padding: 2}} />
          <Label variant="body2" color="green-dark">
            {item.payment_type}
          </Label>
          <View style={{padding: 2}} />
          <Label variant="body2" color="green-dark">
            R${item.price}
          </Label>
        </StyledContainer>

        <StyledContainer>
          <Label variant="body2" color="green-dark">
            {item.date}
          </Label>
        </StyledContainer>
      </StyledContainer>
    </StyledContainer>
  );
};

const HeaderPurchasesHistory = () => {
  const [selectedValue, setSelectedValue] = useState('mais recentes');

  const ListStatusOrders = STATUS.map((status) => {
    return <Picker.Item label={status.label} value={status.value} />;
  });
  return (
    <StyledContainer direction="row" align="flex-end" justify="space-between">
      <Label color="gray-100" variant="body2">
        40 transações
      </Label>
      <Picker
        selectedValue={selectedValue}
        style={{
          height: 40,
          width: 180,
          backgroundColor: COLORS['white-light'],
          borderRadius: 6,
          borderWidth: 1,
          borderColor: COLORS['white-dark'],
        }}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}>
        {ListStatusOrders}
      </Picker>
    </StyledContainer>
  );
};

export default Home;
