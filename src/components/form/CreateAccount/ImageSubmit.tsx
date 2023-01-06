import * as ImagePicker from 'expo-image-picker';
import { Center, FormControl, Image, Pressable, Text } from 'native-base';
import React, { FC, useState } from 'react';

import { SavePictureSVG } from '../../svg';

type Props = {
  onImageChange: (imageUri: string) => void;
};

const ImageSubmit: FC<Props> = ({ onImageChange }) => {
  const [image, setImage] = useState('');

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });
    if (!result.canceled) {
      setImage(result.assets[0].uri);
      onImageChange(result.assets[0].uri);
    }
  };
  return (
    <Pressable mb="4" onPress={pickImage}>
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
          {image ? (
            <Image
              source={{ uri: image }}
              w={24}
              h={24}
              borderRadius="full"
              alt="Profile Picture"
            />
          ) : (
            <SavePictureSVG />
          )}
        </Center>
      </FormControl>
    </Pressable>
  );
};

export default ImageSubmit;
