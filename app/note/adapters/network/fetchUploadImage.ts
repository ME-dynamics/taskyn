import { uploadFile, toString } from "../../../library";

import { IUploadImagePayload } from "../../types";

export async function fetchUploadImage(
  path: string
): Promise<IUploadImagePayload> {
  try {
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
  } catch (error: any) {
    return {
      error: toString(error?.message),
      payload: {
        id: "",
      },
    };
  }
}
