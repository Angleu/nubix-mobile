import { MaterialIcons } from '@expo/vector-icons';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
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
import { RootStackParamListType } from '../constants/routes';
import data from '../utils/mocks/activities';
import { colorPallet } from '../utils/theme';

type Props = NativeStackScreenProps<RootStackParamListType, 'receiveMoney'>;

export default function ReceiveMoney({ navigation: { goBack } }: Props) {
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
            icon={<Icon as={MaterialIcons} name="share" size={38} />}
            _icon={{ color: '_primary.400' }}
            onPress={onShare}
          />
        </HStack>
        <Text textAlign="center" fontSize="lg" fontWeight="bold">
          Read this code to get my information
        </Text>
        <Flex alignItems="center">
          <QRCode
            value="http://www.google.com"
            logoBackgroundColor="#fff"
            color={colorPallet._primary[500]}
            size={340}
          />
        </Flex>
        <Text textAlign="center" fontSize="md" opacity="30">
          This Information is public you can share them without fair
        </Text>
        <Button
          py={4}
          mb={3}
          background="_primary.400"
          fontSize="lg"
          fontWeight="bold"
          borderRadius={10}
          shadow="6"
          onPress={() => goBack()}
        >
          Done
        </Button>
      </VStack>
    </Container>
  );
}
