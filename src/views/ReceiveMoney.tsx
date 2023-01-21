import { MaterialIcons } from '@expo/vector-icons';
import {
  Avatar,
  Button,
  Flex,
  HStack,
  Icon,
  IconButton,
  Text,
  VStack,
} from 'native-base';
import { Share } from 'react-native';
import QRCode from 'react-native-qrcode-svg';

import Container from '../components/layout/Container';
import { MainStackScreenProps } from '../routes/types';
import { createShareableMessage } from '../utils/formatter';
import { colorPallet } from '../utils/theme';

export default function ReceiveMoney({
  navigation: { goBack },
  route: {
    params: { accountToReceive },
  },
}: MainStackScreenProps<'Receive'>) {
  const valueToShare = {
    // name: userLoggedIn.name,
    // phoneNumber: userLoggedIn.phoneNumber,
    name: 'userLoggedIn.name',
    phoneNumber: '',
    iban: accountToReceive.iban,
  };

  const onShare = async () => {
    await Share.share(
      {
        title: 'Detalhes de Conta',
        message: createShareableMessage(valueToShare),
      },
      { dialogTitle: 'Detalhes de Conta' }
    );
  };

  return (
    <Container>
      <VStack flex={1} justifyContent="space-between">
        <HStack py={4} justifyContent="space-between">
          <HStack space={4} alignItems="center">
            <Avatar
              // source={{ uri: userLoggedIn.profilePictureURL }}
              size={68}
              shadow="6"
            />
            <VStack>
              {/* <Heading>{userLoggedIn.name}</Heading> */}
              {/* <Text>{userLoggedIn.phoneNumber}</Text> */}
            </VStack>
          </HStack>
          <IconButton
            borderRadius="full"
            _pressed={{
              bg: 'light.50',
            }}
            icon={<Icon as={MaterialIcons} name="share" size={38} />}
            _icon={{ color: '_primary.400' }}
            onPress={onShare}
          />
        </HStack>
        <Text textAlign="center" fontSize="lg" fontWeight="bold">
          Leia este código para obter o meu terminal bancário
        </Text>
        <Flex alignItems="center">
          <QRCode
            value={JSON.stringify(valueToShare)}
            logoBackgroundColor="#fff"
            color={colorPallet.primary[100]}
            size={340}
          />
        </Flex>
        <Text textAlign="center" fontSize="md" opacity="30">
          Esta informação é pública. Pode partilhar sem receio
        </Text>
        <Button
          py={4}
          mb={3}
          background="primary.100"
          fontSize="lg"
          fontWeight="bold"
          borderRadius={10}
          shadow="6"
          onPress={() => goBack()}
        >
          Terminar
        </Button>
      </VStack>
    </Container>
  );
}
