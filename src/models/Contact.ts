export type ContactType = {
  name: string;
  telephone: string;
  avatar: string;
  account: Array<{
    IBAN: string;
    coin: string;
  }>;
};
