import { MaterialIcons } from '@expo/vector-icons';
import {
  Avatar,
  Button,
  Flex,
  Heading,
  HStack,
  Icon,
  IconButton,
  Text,
  VStack,
} from 'native-base';
import { Share } from 'react-native';
import QRCode from 'react-native-qrcode-svg';

import Container from '../components/layout/Container';
import { useUser } from '../hooks';
import { MainStackScreenProps } from '../routes/types';
import { createShareableMessage } from '../utils/formatter';
import { colorPallet } from '../utils/theme';

export default function ReceiveMoney({
  navigation: { goBack },
  route: {
    params: { accountToReceive },
  },
}: MainStackScreenProps<'Receive'>) {
  const { firstName, lastName, phoneNumber, avatarImageURL } = useUser().user;
  const valueToShare = {
    name: `${firstName} ${lastName}`,
    phoneNumber: phoneNumber,
    iban: accountToReceive.IBAN,
    avatar: avatarImageURL,
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
            <Avatar source={{ uri: avatarImageURL }} size={68} shadow="6" />
            <VStack>
              <Heading>{valueToShare.name}</Heading>
              <Text>{phoneNumber}</Text>
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
