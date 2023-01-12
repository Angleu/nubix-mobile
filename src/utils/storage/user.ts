import AsyncStorage from '@react-native-async-storage/async-storage';

export async function storeUser(emailOrPhoneNumber: string, password: string) {
  try {
    const serializedUser = JSON.stringify({
      emailOrPhoneNumber,
      password,
    });
    await AsyncStorage.setItem('@nubix/user', serializedUser);
  } catch (error) {
    throw Error('Ocorreu um erro na autenticação do utilizador');
  }
}

export async function getUser() {
  try {
    const serializedUser = await AsyncStorage.getItem('@nubix/user');
    return !serializedUser
      ? undefined
      : (JSON.parse(serializedUser) as {
          emailOrPhoneNumber: string;
          password: string;
        });
  } catch (error) {
    throw Error('Ocorreu um erro na autenticação. Faça novamente');
  }
}

export async function clearUser() {
  try {
    await AsyncStorage.removeItem('@nubix/user');
  } catch (error) {
    throw Error('Ocorreu um erro no logout da aplicação. Tente novamente');
  }
}
