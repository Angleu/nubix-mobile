import { Modal, Spinner, Text } from 'native-base';
import React, { FC } from 'react';

type Props = {
  text?: string;
  isOpen: boolean;
};

const LoadingModal: FC<Props> = ({ isOpen, text = 'Processando...' }) => {
  return (
    <Modal isOpen={isOpen}>
      <Modal.Content>
        <Modal.Body py="8">
          <Text textAlign="center" fontSize="lg" fontFamily="body" mb="4">
            {text}
          </Text>
          <Spinner color="primary.100" />
        </Modal.Body>
      </Modal.Content>
    </Modal>
  );
};

export default LoadingModal;
