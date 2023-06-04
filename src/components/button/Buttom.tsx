import { Button } from 'native-base';
import React from 'react';
import { GestureResponderEvent } from 'react-native';

import { androidRippleEffect } from '../../utils/theme/style';

// import { Container } from './styles';
interface IButtom {
    text: string;
    outline?: boolean;
    onPress?: ((event: GestureResponderEvent) => void)
  }
  function Buttom({ outline, text, onPress }: IButtom) {
    return (
      <Button
        android_ripple={androidRippleEffect}
        _pressed={{
          bg: 'primary.100',
        }}
        bg={outline ? 'white' : 'primary.100'}
        rounded="xl"
        shadow={6}
        _text={{
          fontFamily: 'body',
          fontSize: 'lg',
          fontWeight: 'bold',
          color: `${outline ? 'primary.100' : 'white'}`,
        }}
  
        borderWidth={1}
        borderColor={'primary.100'}
        onPress={onPress}
      >
        {text}
      </Button>
    );
  }
export default Buttom;