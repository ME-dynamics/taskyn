import { toString } from "../../../library";
import { ICustomerRequest } from "../../types";

export function parseRequest(
  payload: Record<string, unknown>
): ICustomerRequest[] {
  if (!Array.isArray(payload)) {
    return [];
  }
  const parsedPayload: ICustomerRequest[] = [];
  for (let index = 0; index < payload.length; index++) {
    const request = payload[index];
    parsedPayload.push({
      customerId: toString(request.customerId),
      providerId: toString(request.providerId),
      name: toString(request.name),
      description: toString(request.description),
      profilePictureUrl: toString(request.profilePictureUrl),
      requestConfirmed: Boolean(request.requestConfirmed),
    });
  }
  return parsedPayload;
}
