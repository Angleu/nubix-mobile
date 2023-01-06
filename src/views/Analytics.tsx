import { Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import {
  Button,
  HStack,
  Icon,
  IconButton,
  Pressable,
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
import { MainStackNavigationProps } from '../routes/types';
import { formatMoney } from '../utils/formatter';
import { colorPallet } from '../utils/theme';
import { androidRippleEffect } from '../utils/theme/style';

const Analytics = () => {
  const currentMonth = new Date().getMonth();
  const currentYear = new Date().getFullYear().toString();
  const { navigate } =
    useNavigation<MainStackNavigationProps<'AnalyticsExpense'>>();

  const listOfYears = useMemo(
    () =>
      [
        { label: '2022', value: '2022' },
        { label: '2023', value: '2023' },
      ].reverse(),
    []
  );
  const [selectedYear, setSelectedYear] = useState(
    listOfYears[listOfYears.length - 1].value
  );
  const [isFirstHalf, setFirstHalf] = useState(true);
  const analyticsChartData = useMemo<{ month: string; amount: number }[]>(
    () =>
      isFirstHalf
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
    [isFirstHalf]
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
          flex={1}
          _text={{
            fontFamily: 'body',
            fontSize: 'xs',
          }}
          _ios={{
            py: '4',
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
      <HStack my="2">
        <Button
          bg={isFirstHalf ? 'primary.100' : 'white'}
          _text={{
            color: isFirstHalf ? 'white' : 'primary.100',
            fontFamily: 'body',
          }}
          borderWidth={isFirstHalf ? 0 : 1}
          borderColor="primary.100"
          borderRadius={0}
          borderLeftRadius="lg"
          flex={1}
          variant="unstyled"
          onPress={() => setFirstHalf(true)}
        >
          Janeiro - Junho
        </Button>
        <Button
          bg={!isFirstHalf ? 'primary.100' : 'white'}
          _text={{
            color: !isFirstHalf ? 'white' : 'primary.100',
            fontFamily: 'body',
          }}
          borderWidth={!isFirstHalf ? 0 : 1}
          borderColor="primary.100"
          borderRadius={0}
          borderRightRadius="lg"
          flex={1}
          variant="unstyled"
          onPress={() => setFirstHalf(false)}
        >
          Julho - Dezembro
        </Button>
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
              },
              grid: {
                stroke: 'transparent',
              },
            }}
          />
          <VictoryAxis
            dependentAxis
            animate
            style={{
              axis: { stroke: 'transparent' },
              ticks: { stroke: 'transparent' },
              tickLabels: {
                fill: 'transparent',
              },
              grid: {
                stroke: colorPallet.primary[50],
                opacity: '0.4',
              },
            }}
          />
          <VictoryBar
            style={{
              data: {
                fill: (d) => d.datum.fill,
              },
              labels: {
                fontSize: 12,
                fontWeight: 'bold',
                fill: (d) => d.datum.fill,
              },
            }}
            data={analyticsChartData.map((value, index) =>
              (currentMonth === index &&
                isFirstHalf &&
                currentYear === selectedYear) ||
              (currentMonth === index + 6 &&
                !isFirstHalf &&
                currentYear === selectedYear)
                ? { ...value, fill: colorPallet.primary[100] }
                : { ...value, fill: theme.colors.muted[300] }
            )}
            x="month"
            y="amount"
            animate
            barWidth={40}
            cornerRadius={10}
            labelComponent={<VictoryLabel />}
            labels={analyticsChartData.map(({ amount }) =>
              formatMoney(amount, 'Kzs')
            )}
          />
        </VictoryChart>
      </View>

      <HStack mt="9" space="5">
        <Pressable
          shadow="9"
          onPress={() => navigate('AnalyticsIncome')}
          android_ripple={androidRippleEffect}
          bg="primary.50"
          p="5"
          borderRadius="2xl"
          flex="1"
        >
          <Text color="white" fontSize="sm" fontFamily="body" mb="2">
            Total de Ganhos
          </Text>
          <Text color="white" fontWeight="bold" fontSize="lg" fontFamily="body">
            {formatMoney(188290, 'Kzs')}
          </Text>
        </Pressable>
        <Pressable
          shadow="9"
          onPress={() => navigate('AnalyticsExpense')}
          android_ripple={androidRippleEffect}
          bg="light.800"
          p="5"
          borderRadius="2xl"
          flex="1"
        >
          <Text color="white" fontSize="sm" fontFamily="body" mb="2">
            Total de Gastos
          </Text>
          <Text color="white" fontWeight="bold" fontSize="lg" fontFamily="body">
            {formatMoney(18290, 'Kzs')}
          </Text>
        </Pressable>
      </HStack>
    </Container>
  );
};

export default Analytics;
