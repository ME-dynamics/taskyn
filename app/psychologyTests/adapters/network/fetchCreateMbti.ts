import { request } from "../../../library";
import { tMbtiAnswers } from "../../types";

export async function fetchCreateMbti(mbtiAnswers: tMbtiAnswers) {
  const { success, error, httpStatus, payload } = await request({
    endpoint: "/tests/mbti",
    method: "POST",
    body: {
      fields: mbtiAnswers,
    },
  });
  if (!success) {
    return {
      error,
      mbtiResult: {},
    };
  }
  // TODO: parse mbti result
  return {
    error: "",
    mbtiResult: payload,
  };
}
