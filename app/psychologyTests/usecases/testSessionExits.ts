import { storage } from "../../library";

export function testSessionExists(testId: string) {
  const firstTest = storage.retrieve(`${testId}@1`, "string");
  return !!firstTest;
}
