import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Box, Heading, HStack, Icon, IconButton } from 'native-base';
import React, { FC } from 'react';

type Props = {
  heading: string;
  RightIcon?: JSX.Element;
  canGoBack?: boolean;
};

const Header: FC<Props> = ({ heading, RightIcon, canGoBack = true }) => {
  const { goBack } = useNavigation();
  return (
    <HStack justifyContent="space-between" alignItems="center">
      {canGoBack ? (
        <IconButton
          borderRadius="full"
          _pressed={{
            bg: 'light.50',
          }}
          icon={<Icon as={<AntDesign name="arrowleft" />} />}
          _icon={{
            color: 'dark.50',
            size: 'lg',
          }}
          onPress={goBack}
        />
      ) : (
        <Box width={12}></Box>
      )}
      <Heading
        fontFamily="heading"
        fontSize="xl"
        color="primary.100"
        fontWeight="bold"
      >
        {heading}
      </Heading>
      {RightIcon ?? <Box width={12}></Box>}
    </HStack>
  );
};

export default Header;
