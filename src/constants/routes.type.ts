import type { NativeStackScreenProps } from '@react-navigation/native-stack';

type User = {
  name: string;
  date: Date;
  amount: number;
  profilePic: string;
  number: number;
};

export type RootStackParamList = {
  home: undefined;
  detail: User;
};

export type PropsRoutes = NativeStackScreenProps<RootStackParamList, 'detail'>;
