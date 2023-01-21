export type ContactType = {
  telephone: string;
  User: {
    name: string;
    middleName: string;
    surname: string;
    Account: Array<{
      IBAN: string;
      coin: string;
    }>;
  };
};
