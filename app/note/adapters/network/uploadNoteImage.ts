import { uploadAsync, FileSystemUploadType } from "expo-file-system";
import { getJWT } from "../../../authentication";
const serverUrl = "https://foolish-dragon-50.loca.lt/api/v1";

export async function uploadNoteImage(path: string) {
  const { body, headers, mimeType, status } = await uploadAsync(
    `${serverUrl}/images/upload`,
    path,
    {
      fieldName: "imageFile",
      httpMethod: "POST",
      uploadType: FileSystemUploadType.MULTIPART,
      headers: {
        Authorization: getJWT() || "no-token",
        "Content-type": "multipart/form-data",
        Accept: "application/json",
        "Accept-Encoding": "gzip",
        "x-jwt-payload":
          "eyJjdXN0b21lciI6dHJ1ZSwiaXNzIjoiaHR0cHM6Ly90YXNreW4uaXIiLCJzdWIiOiI5MzBhMGZhOS1jODUwLTQ0MzQtYTZiMS02Mjk1NmE0Y2VjODUiLCJhdWQiOiJ0YXNreW4iLCJqdGkiOiJYZVlyazgiLCJpYXQiOjE2MzQ2NjcxNjksIm5iZiI6MTYzNDY2NzE2OSwiZXhwIjoxNjQwNjY3MTY5fQ",
      },
      parameters: {
        access: "private",
        transform: "note",
      },
    }
  );
  const data = JSON.parse(body);
}
