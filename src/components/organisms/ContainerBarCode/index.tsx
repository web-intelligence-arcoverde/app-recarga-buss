import React from 'react';
import {COLORS} from '../../../constants';
import {View} from 'react-native';
import Modal from 'react-native-modal';
import Label from '../../atoms/Label';
import Barcode from '@kichiyaki/react-native-barcode-generator';
import {Dimensions} from 'react-native';
import Button from '../../atoms/Button/Contained';

export default function ContainerBarCode({visible, onPess}) {
  return (
    <View>
      <Modal
        isVisible={visible}
        swipeDirection="down"
        style={{margin: 0}}
        propagateSwipe
        style={{
          justifyContent: 'flex-end',
          margin: 0,
          flex: 1,
        }}>
        <View
          style={{
            flex: 0.4,
            backgroundColor: COLORS['white-default'],
            justifyContent: 'center',
            borderTopLeftRadius: 32,
            borderTopRightRadius: 32,
            padding: 30,
          }}>
          <Label color="gray-800" variant="h3">
            Codigo de Barras
          </Label>

          <View style={{padding: 10}} />

          <Barcode
            format="codabar"
            value="0123456789012"
            text="0123456789012"
            style={{backgroundColor: COLORS['white-default']}}
            maxWidth={Dimensions.get('window').width}
          />

          <View style={{padding: 20}} />

          <Button onPress={onPess}>Copia código</Button>
        </View>
      </Modal>
    </View>
  );
}
