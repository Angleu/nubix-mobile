import { VStack } from 'native-base';
import { FC, ReactNode } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

type Props = {
  children: ReactNode;
};

const Container: FC<Props> = ({ children }) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <VStack px={7} flex={1}>
        {children}
      </VStack>
    </SafeAreaView>
  );
};

export default Container;
