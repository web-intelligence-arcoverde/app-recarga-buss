import React, {useState} from 'react';
import {StyledContainer} from '../../atoms/Container';
import CardPaymentMethod from '../../molecules/CardPaymentMethods';

const methodsPayments = [
  {icon: 'pix-icon', text: 'PIX'},
  {icon: 'card-icon', text: 'Cartão'},
  {icon: 'ticket-icon', text: 'Boleto', openBarCode: true},
];

const ListContainerCardPaymentMethods = () => {
  const [selectedCard, setSelectedCard] = useState(false);

  const ListCardsPaymentsMethods = methodsPayments.map((method) => {
    return (
      <CardPaymentMethod
        icon={method.icon}
        text={method.text}
        key={method.icon}
        selected={selectedCard === method.text}
        changerSelected={setSelectedCard}
        visibleModal={method?.openBarCode}
      />
    );
  });

  return (
    <StyledContainer direction="row" justify="space-between">
      {ListCardsPaymentsMethods}
    </StyledContainer>
  );
};

export default ListContainerCardPaymentMethods;
