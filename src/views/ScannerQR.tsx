import { MaterialCommunityIcons } from '@expo/vector-icons';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { Heading, Icon, IconButton, Stack, Text, VStack } from 'native-base';
import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';

import { RootStackParamListType } from '../constants/routes';

type Props = NativeStackScreenProps<RootStackParamListType, 'scannerQr'>;

export default function ScannerQR({ navigation: { goBack } }: Props) {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    };
    getBarCodeScannerPermissions();
  }, []);

  const handleBarCodeScanned = ({ data }) => {
    setScanned(true);
    alert(`${data} has been scanned!`);
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <VStack flex={1} safeArea>
      <IconButton
        icon={
          <Icon
            as={MaterialCommunityIcons}
            name="close-circle-outline"
            size={12}
          />
        }
        _icon={{ color: '_primary.400' }}
        justifyContent="flex-start"
        m="1.5"
        onPress={() => goBack()}
      />
      <VStack space="1/3" flex={1} alignItems="center" my={'1.5'} px="1">
        <Heading>Ler Código QR</Heading>
        <Text fontFamily={'body'} fontSize="lg" textAlign="center">
          Leia o código QR para obter a informação da pessoa onde irá transferir
          o dinheiro
        </Text>
      </VStack>
      <Stack width="full" height="xl" alignItems="center">
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          style={StyleSheet.absoluteFill}
        />
      </Stack>
    </VStack>
  );
}
