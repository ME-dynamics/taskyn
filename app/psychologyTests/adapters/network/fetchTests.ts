import { request, toString } from "../../../library";
import { IFetchTests, ITest } from "../../types";

export async function fetchTests(): Promise<IFetchTests> {
  const { success, error, httpStatus, payload } = await request({
    endpoint: "/tests",
    method: "GET",
    body: undefined,
  });
  if (!success) {
    return {
      error,
      tests: [],
    };
  }
  if (Array.isArray(payload)) {
    const tests: ITest[] = [];
    for (let index = 0; index < payload.length; index++) {
      const test = payload[index];
      const title = Object(test.title);
      const fa = toString(title.fa);
      const en = toString(title.en);
      tests.push({
        id: toString(test?.id),
        title: {
          fa,
          en,
        },
        description: toString(test?.description),
      });
    }
    return {
      error: "",
      tests,
    };
  }
  return {
    error,
    tests: [],
  };
}
