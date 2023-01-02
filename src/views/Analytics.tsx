import { Entypo } from '@expo/vector-icons';
import { Box, HStack, Icon, IconButton, Select, Text } from 'native-base';
import React, { useState } from 'react';

import Container from '../components/layout/Container';
import Header from '../components/layout/Header';
import { formatMoney } from '../utils/formatter';

const listYears = ['2020', '2021', '2022', '2023'];

const Analytics = () => {
  const [selectedYear, setSelectedYear] = useState<string>(
    new Date().getFullYear().toString()
  );

  return (
    <Container>
      <Header
        canGoBack={false}
        heading="Análise"
        RightIcon={
          <IconButton
            borderRadius="full"
            _pressed={{
              bg: 'light.50',
            }}
            icon={<Icon as={<Entypo />} name="dots-three-horizontal" />}
            _icon={{
              color: 'black',
              size: '2xl',
            }}
          />
        }
      />

      <HStack justifyContent="flex-end" mt="8">
        <Select
          selectedValue={selectedYear}
          minWidth="1/2"
          _text={{
            fontFamily: 'body',
            fontSize: 'xs',
          }}
          borderRadius="xl"
          color="white"
          accessibilityLabel="Escolhe o ano"
          placeholder="Escolhe o ano"
          onValueChange={setSelectedYear}
          bg="primary.100"
          dropdownIcon={
            <Icon
              as={Entypo}
              name="chevron-down"
              mr="4"
              size="xl"
              color="white"
            />
          }
        >
          {listYears.map((year) => (
            <Select.Item key={year} label={'Ano - ' + year} value={year} />
          ))}
        </Select>
      </HStack>

      {/* TODO: Add chart here */}

      <HStack mt="9" space="5">
        <Box bg="primary.50" p="6" borderRadius="2xl" flex="1">
          <Text color="white" fontSize="sm" fontFamily="body" mb="2">
            Total Income
          </Text>
          <Text color="white" fontWeight="bold" fontSize="lg" fontFamily="body">
            {formatMoney(188290, 'Kzs')}
          </Text>
        </Box>
        <Box bg="light.800" p="6" borderRadius="2xl" flex="1">
          <Text color="white" fontSize="sm" fontFamily="body" mb="2">
            Total Expense
          </Text>
          <Text color="white" fontWeight="bold" fontSize="lg" fontFamily="body">
            {formatMoney(18290, 'Kzs')}
          </Text>
        </Box>
      </HStack>
    </Container>
  );
};

export default Analytics;
