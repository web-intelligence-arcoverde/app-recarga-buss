import React from 'react';
import {COLORS} from '../../../constants';
import {View} from 'react-native';
import Modal from 'react-native-modal';
import Label from '../../atoms/Label';

import Button from '../../atoms/Button/Contained';

import QRCode from 'react-native-qrcode-svg';

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
            QrCode
          </Label>

          <View style={{padding: 10}} />

          <QRCode
            value={'NA'}
            size={250}
            color="black"
            backgroundColor="white"
            logoSize={30}
            logoMargin={2}
            logoBorderRadius={15}
            logoBackgroundColor="yellow"
          />

          <View style={{padding: 20}} />

          <Button onPress={onPess}>Copia código</Button>
        </View>
      </Modal>
    </View>
  );
}
