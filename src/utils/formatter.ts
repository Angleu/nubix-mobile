import { CurrencyLiteral } from '../models/Account';

export const formatMoney = (
  amount: number | string,
  currency: CurrencyLiteral
) => {
  const sign = amount < 0 ? '-' : '';
  let value = String(amount);
  value = (Number(value) / 100).toLocaleString(
    currency === 'Kzs' ? 'pt-AO' : 'en-US',
    {
      style: 'currency',
      currency: currency === 'Kzs' ? 'AOA' : 'USD',
    }
  );

  return sign + value;
};

type ShareableMessageParamType = {
  name: string;
  phoneNumber: string;
  iban: string;
};

export function createShareableMessage(userInfo: ShareableMessageParamType) {
  return `Nome: ${userInfo.name}\nIBAN: ${userInfo.iban}\nNúmero de Telefone: ${userInfo.phoneNumber}`;
}

export function createShareableAccountDetails(
  beneficiary: string,
  iban: string
) {
  return `Nome: ${beneficiary}\nIBAN: ${iban}`;
}
