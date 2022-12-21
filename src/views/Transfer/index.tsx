import { MaterialIcons } from '@expo/vector-icons';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Center, Icon, IconButton, Text } from 'native-base';
import React from 'react';

import ContactsSearch from '../../components/ContactsSearch';
import Container from '../../components/layout/Container';
import Header from '../../components/layout/Header';
import { RootStackParamListType } from '../../constants/routes';

type Props = NativeStackScreenProps<RootStackParamListType, 'transfer'>;

export default function Transfer({ navigation: { navigate } }: Props) {
  return (
    <Container>
      <Header
        heading="Transferência"
        LeftIcon={
          <IconButton
            icon={<Icon as={<MaterialIcons name="qr-code" />} />}
            _icon={{
              color: '_primary.500',
              size: '4xl',
            }}
            onPress={() => {
              navigate('scannerQr');
            }}
          />
        }
      />

      <Center my={8}>
        <Text
          fontFamily="body"
          fontWeight="medium"
          color="_primary.500"
          fontSize="2xl"
          mb={6}
        >
          Balanço Total
        </Text>
        <Text
          fontFamily="body"
          color="_primary.500"
          fontWeight="bold"
          fontSize="xl"
          style={{
            textShadowColor: 'rgba(0, 0, 0, 0.25)',
            textShadowOffset: { width: 0, height: 4 },
            textShadowRadius: 10,
          }}
        >
          188 290.90 Kzs
        </Text>
      </Center>

      <ContactsSearch />
    </Container>
  );
}
