import { toString } from "../../../library";
import { ITestResult } from "../../types";

export function parseTestResult(payload: any): ITestResult {
  const title = Object(payload?.title);
  return {
    type: toString(payload?.type),
    faName: toString(title.fa),
    enName: toString(title.en),
    variable: toString(payload?.variable),
    rawScore: parseInt(payload?.rawScore, 10),
    baseRate: parseInt(payload?.baseRate, 10),
    interpret: toString(payload?.interpret),
  };
}
