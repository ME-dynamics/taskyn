import { request } from "../../../library";
import { parseTest } from "../utils";
import { IFetchMBTI } from "../../types";

export async function fetchMBTI(): Promise<IFetchMBTI> {
  const { success, error, httpStatus, payload } = await request({
    endpoint: "/tests/mbti",
    method: "GET",
    body: undefined,
  });
  if (!success || !payload) {
    return {
      error,
      mbti: {
        id: "",
        title: {
          fa: "",
          en: "",
        },
        description: "",
        fields: {},
      },
    };
  }
  return {
    error: "",
    mbti: parseTest(payload),
  };
}
