import { request } from "../../../library";
import { parseTest } from "../utils";

export async function fetchBeckDepressionII() {
  const { success, error, httpStatus, payload } = await request({
    endpoint: "/tests/beckDepressionII",
    method: "GET",
    body: undefined,
  });
  if (!success || !payload) {
    return {
      error,
      beckDepressionII: {
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
    beckDepressionII: parseTest(payload),
  };
}
