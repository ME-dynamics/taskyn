import { uploadFile } from "../../../library";

import { IUploadImagePayload } from "../../types";

export async function fetchUploadImage(
  path: string
): Promise<IUploadImagePayload> {
  const { error, httpStatus, payload, success } = await uploadFile({
    path,
    type: "image",
  });
  if (!success) {
    return {
      error: error ? error : "",
      payload: {
        id: "",
      },
    };
  }
  return {
    error: "",
    payload: {
      id: String(payload?.id),
    },
  };
}
