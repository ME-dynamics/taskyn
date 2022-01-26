import { parseDate, toJalaaliDate, toString } from "../../../library";
import type { ITestHistory } from "../../types";
export function parseTestHistory(payload: any): ITestHistory {
  const createdAt = parseDate(payload?.createdAt);
  console.log({createdAt: createdAt ?  toJalaaliDate(createdAt): "no date defined"});
  return {
    id: toString(payload?.id),
    title: toString(payload?.structureId),
    description: toString(payload?.formName),
    createdAt: createdAt ? toJalaaliDate(createdAt) : "",
  };
}
