import { BottomSheetModal, useBottomSheetModal } from '@gorhom/bottom-sheet';
import { Box, Button, Heading, TextArea, VStack } from 'native-base';
import React, { FC, useState } from 'react';

type Props = {
  reference: React.Ref<BottomSheetModal>;
  onConfirm: (description: string) => void;
};

const TransferDescriptionBottomSheet: FC<Props> = ({
  reference,
  onConfirm,
}) => {
  const [description, setDescription] = useState('');

  const snapPoints = ['40%'];

  const { dismiss } = useBottomSheetModal();

  const descriptionConfirmationHandler = () => {
    dismiss();
    onConfirm(description);
  };

  return (
    <BottomSheetModal
      ref={reference}
      snapPoints={snapPoints}
      backdropComponent={() => (
        <Box
          position="absolute"
          top={0}
          left={0}
          w="full"
          h="full"
          bg="rgba(0, 0, 0, 0.7)"
        />
      )}
      enablePanDownToClose
    >
      <VStack p={6} space={6}>
        <Heading textAlign="center">Descrição da Transferência</Heading>
        <TextArea
          onChangeText={setDescription}
          value={description}
          autoCompleteType=""
          placeholder="Coloque a sua descrição aqui..."
          borderRadius="xl"
          fontFamily="body"
          fontSize="md"
          h="24"
          borderColor="primary.100"
          _focus={{
            borderColor: '_primary.400',
            bg: 'white',
          }}
        />
        <VStack space={3}>
          <Button
            onPress={() => dismiss()}
            variant="outline"
            borderColor="primary.100"
            _text={{
              fontFamily: 'body',
              fontSize: 'md',
              color: 'primary.100',
            }}
          >
            Cancelar
          </Button>
          <Button
            onPress={descriptionConfirmationHandler}
            android_ripple={{
              radius: 10,
            }}
            _pressed={{
              bg: 'primary.50',
            }}
            variant="solid"
            bg="primary.100"
            _text={{
              fontFamily: 'body',
              fontSize: 'md',
              color: 'white',
            }}
          >
            Confirmar
          </Button>
        </VStack>
      </VStack>
    </BottomSheetModal>
  );
};

export default TransferDescriptionBottomSheet;
