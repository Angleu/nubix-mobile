import { AlertDialog, Button } from 'native-base';
import { FC } from 'react';

type Props = {
  show: boolean;
  onClose: () => void;
};

const SuccessfulRegister: FC<Props> = ({ show, onClose }) => (
  <AlertDialog isOpen={show} onClose={onClose} leastDestructiveRef={undefined}>
    <AlertDialog.Content>
      <AlertDialog.CloseButton />
      <AlertDialog.Header
        borderBottomWidth={0}
        _text={{
          color: 'primary.100',
        }}
      >
        Conta Criada
      </AlertDialog.Header>
      <AlertDialog.Body>
        Parabéns! Já possui uma conta na Nubix. Faça o login para continuar
      </AlertDialog.Body>
      <AlertDialog.Footer borderTopWidth={0}>
        <Button
          variant="unstyled"
          _text={{
            color: 'primary.100',
          }}
          onPress={onClose}
        >
          Ok
        </Button>
      </AlertDialog.Footer>
    </AlertDialog.Content>
  </AlertDialog>
);

export default SuccessfulRegister;
