import axios from '../config';
import {
  CreateUserRequestType,
  CreateUserResponseType,
  GetUserResponseType,
  NIFConsultingResponseType,
  SaveProfilePictureResponseType,
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

export async function saveProfilePicture(imageUri: string) {
  try {
    const imageData = new FormData();
    imageData.append(
      'avatar',
      imageUri,
      imageUri.substring(imageUri.lastIndexOf('/') + 1)
    );
    const response = await axios.put<SaveProfilePictureResponseType>(
      '/user/avatar',
      imageData,
      {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'multipart/form-data',
        },
      }
    );
    return response.data;
  } catch (error) {
    throw new Error('Não é possível enviar a imagem');
  }
}