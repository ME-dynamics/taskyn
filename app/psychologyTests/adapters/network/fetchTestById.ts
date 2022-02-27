import { request } from "../../../library";
import { parseTest } from "../utils";

export async function fetchTestById(testId:string) {
  const { success, error, httpStatus, payload } = await request({
    endpoint: `/tests/${testId}`,
    method: "GET",
    body: undefined,
  });
  if (!success || !payload) {
    return {
      error,
      tests: {
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
    tests: parseTest(payload),
  };
}
