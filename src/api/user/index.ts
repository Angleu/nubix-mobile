import axios from '../config';
import {
  CreateUserRequestType,
  CreateUserResponseType,
  GetUserResponseType,
  NIFConsultingResponseType,
} from './types';

export async function getUser(email: string) {
  try {
    const response = await axios.get<GetUserResponseType>(`/user/${email}`);
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function createUserWithPersonalData(user: CreateUserRequestType) {
  try {
    const response = await axios.post<CreateUserResponseType>('/user', user);
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function checkFiscalNumber(fiscalNumber: string) {
  try {
    const response = await axios.get<NIFConsultingResponseType>(
      `/user/consulting/${fiscalNumber}`
    );
    const data = {
      name: response.data.nome,
      type: response.data.tipo,
      state: response.data.estado,
      nif: response.data.nif,
    };
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function saveProfilePicture(imageData: FormData, email: string) {
  throw new Error('Not implemented');
}