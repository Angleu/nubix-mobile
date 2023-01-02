import { Entypo } from '@expo/vector-icons';
import {
  Box,
  HStack,
  Icon,
  IconButton,
  Select,
  Text,
  theme,
  View,
} from 'native-base';
import React, { useMemo, useState } from 'react';
import { Dimensions } from 'react-native';
import {
  VictoryAxis,
  VictoryBar,
  VictoryChart,
  VictoryLabel,
  VictoryTheme,
} from 'victory-native';

import Container from '../components/layout/Container';
import Header from '../components/layout/Header';
import { formatMoney } from '../utils/formatter';
import { colorPallet } from '../utils/theme';

const FIRST_HALF = '1';

const Analytics = () => {
  const listOfYears = useMemo(
    () =>
      [
        { label: '2022 1ª Metade', value: '2022/1' },
        { label: '2022 2ª Metade', value: '2022/2' },
        { label: '2023 1ª Metade', value: '2023/1' },
        { label: '2023 2ª Metade', value: '2023/2' },
      ].reverse(),
    []
  );

  const [selectedYear, setSelectedYear] = useState(
    listOfYears[listOfYears.length - 1].value
  );

  const analyticsChartData = useMemo<{ month: string; amount: number }[]>(
    () =>
      selectedYear.endsWith(FIRST_HALF)
        ? [
            { month: 'Jan', amount: 138000 },
            { month: 'Feb', amount: 189300 },
            { month: 'Mar', amount: 238000 },
            { month: 'Abr', amount: 183400 },
            { month: 'Mai', amount: 121300 },
            { month: 'Jun', amount: 140300 },
          ]
        : [
            { month: 'Jul', amount: 121300 },
            { month: 'Ago', amount: 138000 },
            { month: 'Set', amount: 189300 },
            { month: 'Out', amount: 238000 },
            { month: 'Nov', amount: 183400 },
            { month: 'Dez', amount: 140300 },
          ],
    [selectedYear]
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
          placeholderTextColor="white"
          defaultValue={listOfYears[listOfYears.length - 1].value}
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
          {listOfYears.map(({ label, value }) => (
            <Select.Item key={value} label={label} value={value} />
          ))}
        </Select>
      </HStack>

      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#fff',
        }}
      >
        <VictoryChart
          width={Dimensions.get('screen').width}
          theme={VictoryTheme.material}
          animate
        >
          <VictoryAxis
            animate
            style={{
              axis: { stroke: 'transparent' },
              ticks: { stroke: 'transparent' },
              tickLabels: {
                fill: theme.colors.light[800],
                fontSize: 16,
                fontWeight: 'bold',
                fontFamily: 'Poppins_700Bold',
              },
            }}
          />
          <VictoryBar
            style={{
              data: {
                fill: colorPallet.primary[100],
              },
              labels: {
                fontSize: 12,
                fontWeight: 'bold',
                fontFamily: 'Poppins_700Bold',
              },
            }}
            data={analyticsChartData}
            x="month"
            y="amount"
            animate
            barWidth={30}
            cornerRadius={10}
            labelComponent={<VictoryLabel />}
            labels={analyticsChartData.map(({ amount }) =>
              formatMoney(amount, 'Kzs')
            )}
          />
        </VictoryChart>
      </View>

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
