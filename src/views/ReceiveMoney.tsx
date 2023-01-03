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
import { MainStackScreenProps } from '../routes/types';
import { colorPallet } from '../utils/theme';

export default function ReceiveMoney({
  navigation: { goBack },
}: MainStackScreenProps<'Receive'>) {
  const onShare = async () => {
    await Share.share({ url: 'http://www.google.com' });
  };
  return (
    <Container>
      <VStack flex={1} justifyContent="space-between">
        <HStack py={4} justifyContent="space-between">
          <HStack space={4} alignItems="center">
            <Avatar source={{ uri: data[0].profilePic }} size={68} shadow="6" />
            <VStack>
              <Heading>{data[0].name}</Heading>
              <Text>{data[0].number}</Text>
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
            value="http://www.google.com"
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
