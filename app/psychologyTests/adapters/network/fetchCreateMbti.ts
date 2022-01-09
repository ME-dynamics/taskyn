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
}
