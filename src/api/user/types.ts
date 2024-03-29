export type GetUserResponseType = CreateUserResponseType;

export type CreateUserRequestType = {
  NIF: string;
  name: string;
  middleName: string;
  surname: string;
  email: string;
  sex: string;
  birth_day: string;
  avatar?: string;
};

export type CreateUserResponseType = {
  NIF: string;
  name: string;
  surname: string;
  middleName: string;
  avatar: string;
  sex: string;
  birth_day: string;
  created_at: string;
};

export type NIFConsultingResponseType = {
  nome: string;
  tipo: string;
  estado: string;
  nif: string;
  regime_iva: string;
};

export type SaveProfilePictureResponseType = {
  url: string;
};
