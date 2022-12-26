import { CurrencyLiteral } from '../models/Account';

export const formatMoney = (amount: number, currency: CurrencyLiteral) => {
  const sign = amount < 0 ? '-' : '';
  let value = String(amount).replace(/\D/g, '');
  value = (Number(value) / 100).toLocaleString(
    currency === 'Kzs' ? 'pt-ao' : 'en-us',
    {
      style: 'currency',
      currency: currency === 'Kzs' ? 'AOA' : 'USD',
    }
  );

  return sign + value + ' ' + currency;
};
