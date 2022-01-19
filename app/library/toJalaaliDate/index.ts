import { toJalaali } from "jalaali-js";
import { digitsEnToFa } from "@persian-tools/persian-tools";

export function parseDate(date: string): Date | undefined {
  const parsedDate = Date.parse(date);
  if (isNaN(parsedDate)) {
    return undefined;
  }
  return new Date(parsedDate);
}

export function toJalaaliDate(date: Date) {
  const { jd, jm, jy } = toJalaali(date);
  return `${digitsEnToFa(jy)}/${digitsEnToFa(jm)}/${digitsEnToFa(jd)}`;
}
