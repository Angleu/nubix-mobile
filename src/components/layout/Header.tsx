import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Heading, HStack, Icon, IconButton } from 'native-base';
import React, { FC } from 'react';

type Props = {
  heading: string;
};

const Header: FC<Props> = ({ heading }) => {
  const { goBack, navigate } = useNavigation();
  return (
    <HStack pt={5} justifyContent="space-between" alignItems="center">
      <IconButton
        icon={<Icon as={<Ionicons name="arrow-back-circle-outline" />} />}
        _icon={{
          color: '_neutral.500',
          size: '4xl',
        }}
        onPress={goBack}
      />
      <Heading
        fontFamily="heading"
        fontSize="xl"
        color="_neutral.500"
        fontWeight="bold"
      >
        {heading}
      </Heading>
      <IconButton
        icon={<Icon as={<MaterialIcons name="qr-code" />} />}
        _icon={{
          color: '_primary.500',
          size: '4xl',
        }}
        // TODO: Add navigation to QR code scanner screen
        onPress={() => {
          navigate('scannerQr');
        }}
      />
    </HStack>
  );
};

export default Header;
