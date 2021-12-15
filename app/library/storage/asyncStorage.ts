import AsyncStorage from "@react-native-async-storage/async-storage";

async function remove(key: string): Promise<void> {
  try {
    await AsyncStorage.removeItem(key);
  } catch (error) {
    // send error to sentry
  }
}

async function retrieve(key: string): Promise<string | undefined> {
  try {
    const result = await AsyncStorage.getItem(key);
    return result ? result : undefined;
  } catch (error) {
    // send error to sentry
    return undefined;
  }
}

async function add(key: string, value: string): Promise<void> {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (error) {
    // send error to sentry
  }
}

export const asyncStorage = {
  remove,
  retrieve,
  add,
};
