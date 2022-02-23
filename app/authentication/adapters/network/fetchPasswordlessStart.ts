import { request, toString } from "../../../library";
import { adapterTypes } from "../../types";
import * as Device from "expo-device";
import { Platform } from "react-native";
import { v4 as uuid } from "uuid";
export async function fetchPasswordlessStart(
  phoneNumber: string
): Promise<adapterTypes.IFetchPasswordlessStartResult> {
  const { success, httpStatus, payload, error } = await request({
    endpoint: "/authnz/passwordless/start",
    method: "POST",
    body: {
      phoneNumber,
      deviceUniqueId: uuid(), ////
      isDevice: Device.isDevice,
      platform: Platform.OS, ////
      brand: Device.brand,
      manufacturer: Device.manufacturer,
      model: Device.modelName,
      modelId: Device.modelId,
      designName: Device.designName,
      productName: Device.productName,
      deviceYearClass: Device.deviceYearClass,
      supportedCpuArch: Device.supportedCpuArchitectures,
      os: Device.osName,
      osVersion: Device.osVersion,
      osBuildId: Device.osBuildId,
      osInternalBuildId: Device.osInternalBuildId,
      androidApiLevel: Device.platformApiLevel,
      deviceName: Device.deviceName,
    },
  });
  if (!success) {
    return {
      error: error || "",
      otpToken: "",
    };
  }
  return {
    otpToken: toString(payload?.otpToken),
    error: "",
  };
}
