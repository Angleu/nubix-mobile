import { Center, FormControl, Pressable, Text } from 'native-base';
import React from 'react';

import { SavePictureSVG } from '../../svg';

const ImageSubmit = () => {
  return (
    <Pressable mb="4">
      <Text fontSize="sm" color="light.500">
        Submeter Foto
      </Text>
      <FormControl
        borderWidth={1}
        borderColor="light.300"
        borderRadius="md"
        height="40"
      >
        <Center h="full">
          <SavePictureSVG />
        </Center>
      </FormControl>
    </Pressable>
  );
};

export default ImageSubmit;
