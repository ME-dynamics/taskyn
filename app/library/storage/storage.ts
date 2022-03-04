import { MMKV } from "react-native-mmkv";
const mmkv = new MMKV();
function remove(key: string) {
  try {
    mmkv.delete(key);
  } catch (error) {
    // send error to sentry
  }
}

function retrieve(key: string, type: "string" | "number" | "boolean") {
  try {
    if (type === "string") {
      return mmkv.getString(key);
    }
    if (type === "number") {
      return mmkv.getNumber(key);
    }
    if (type === "boolean") {
      return mmkv.getBoolean(key);
    }
  } catch (error) {
    // send error to sentry
    return undefined;
  }
}

function add(key: string, value: string | number | boolean) {
  try {
    mmkv.set(key, value);
  } catch (error) {
    // send error to sentry
  }
}

function has(key: string) {
  try {
    return mmkv.contains(key);
  } catch (error) {
    return false;
  }
}

export const storage = {
  remove,
  retrieve,
  add,
  has,
};
