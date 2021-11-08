import { request, toString, toJalaaliDate } from "../../../library";

import { IFetchCreateNote, IFetchCreateNotePayload } from "../../types";

export async function fetchCreateNote(
  args: IFetchCreateNote
): Promise<IFetchCreateNotePayload> {
  const { content, customerId, imageIds, title } = args;
  const { success, error, payload, httpStatus } = await request({
    endpoint: "/provider/notes",
    method: "POST",
    body: {
      customerId,
      title,
      content,
      imageIds,
    },
  });
  if (!success) {
    return {
      error: error ? error : "",
      note: {
        id: "",
        title: "",
        content: "",
        imageIds: [],
        createdAt: "",
      },
    };
  }
  const ids = payload?.imageIds;
  const images: string[] = [];
  if (Array.isArray(ids)) {
    for (let index = 0; index < ids.length; index++) {
      const id = ids[index];
      images.push(toString(id));
    }
  }
  const createdAt = toString(payload?.createdAt);
  return {
    error: "",
    note: {
      id: toString(payload?.id),
      title: toString(payload?.title),
      content: toString(payload?.content),
      imageIds: images,
      createdAt:
        Date.parse(createdAt) !== NaN ? toJalaaliDate(new Date(createdAt)) : "",
    },
  };
}
