import * as ImagePicker from 'expo-image-picker';
import {
  Center,
  FormControl,
  Image,
  Pressable,
  Spinner,
  Text,
  VStack,
} from 'native-base';
import React, { FC, useState } from 'react';

import { SavePictureSVG } from '../../svg';

type Props = {
  onImageChange: (imageUri: string) => void;
};

const ImageSubmit: FC<Props> = ({ onImageChange }) => {
  const [image, setImage] = useState('');
  const [isLoading, setLoading] = useState(false);

  const pickImage = async () => {
    setLoading(true);
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
    setLoading(false);
  };
  return (
    <Pressable mb="4" onPress={pickImage}>
      <Text fontSize="sm" color="light.500">
        Foto de Perfil
      </Text>
      <FormControl
        borderWidth={1}
        borderColor="light.300"
        borderRadius="md"
        height="40"
      >
        <Center h="full">
          {isLoading ? (
            <Spinner color="primary.100" size="lg" />
          ) : image ? (
            <Image
              source={{ uri: image }}
              w={24}
              h={24}
              borderRadius="full"
              alt="Profile Picture"
            />
          ) : (
            <VStack alignItems="center" space="2">
              <SavePictureSVG />
              <Text fontSize="xs" color="primary.100">
                Pressione para submeter a foto de perfil
              </Text>
            </VStack>
          )}
        </Center>
      </FormControl>
    </Pressable>
  );
};

export default ImageSubmit;
