import React, {useState} from 'react';
import {View} from 'react-native';
import {ContainerCardPaymentMethods} from './style';
import {StyledContainer} from '../../atoms/Container';
import Icon from '../../atoms/Icon';
import Label from '../../atoms/Label';

import ContainerBarCode from '../../organisms/ContainerBarCode';

const CardPaymentMethod = ({
  icon,
  text,
  selected,
  changerSelected,
  visibleModal,
}) => {
  console.log(visibleModal);

  const [isModalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <ContainerCardPaymentMethods
      onPress={() => {
        changerSelected(text);
        toggleModal();
      }}>
      <>
        <StyledContainer
          width={100}
          color={selected ? 'green-default' : 'white-light'}
          radius={6}
          padding={24}
          justify="center"
          align="center">
          <Icon icon={icon} width={30} height={30} />
          <View style={{padding: 4}} />
          <Label
            color={selected ? 'white-default' : 'gray-800'}
            variant="body2">
            {text}
          </Label>
        </StyledContainer>

        {visibleModal === true && (
          <ContainerBarCode visible={isModalVisible} onPess={toggleModal} />
        )}
      </>
    </ContainerCardPaymentMethods>
  );
};

CardPaymentMethod.defaultProps = {
  visibleModal: false,
};

export default CardPaymentMethod;
