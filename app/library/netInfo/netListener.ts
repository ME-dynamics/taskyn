import NetInfo from "@react-native-community/netinfo";
import { netInfoState } from "./netInfoState";
// use net info
NetInfo.configure({
  // reachabilityUrl: 'https://clients3.google.com/generate_204',
  // reachabilityTest: async (response) => response.status === 204,
  // reachabilityLongTimeout: 60 * 1000, // 60s
  // reachabilityShortTimeout: 5 * 1000, // 5s
  // reachabilityRequestTimeout: 15 * 1000, // 15s
  // reachabilityShouldRun: () => true,
  shouldFetchWiFiSSID: false // met iOS requirements to get SSID. Will leak memory if set to true without meeting requirements.
});

export function registerNetInfo() {
  const unsubscribe = NetInfo.addEventListener(function stateListener(state) {
    const { isConnected, isInternetReachable } = state;
    netInfoState.setConnection(!!isConnected);
    netInfoState.setInternet(!!isInternetReachable);
    if (state.type === "wifi") {
      const {
        bssid,
        frequency,
        ipAddress,
        isConnectionExpensive,
        ssid,
        strength,
        subnet,
      } = state.details;
      // write to database;
    }
    if (state.type === "cellular") {
      const { carrier, cellularGeneration, isConnectionExpensive } =
        state.details;
    }
    if (state.type === "vpn") {
      netInfoState.setVpn(true);
    }
    if (state.type !== "vpn") {
      netInfoState.setVpn(false);
    }
    if (
      state.type === "bluetooth" ||
      state.type === "ethernet" ||
      state.type === "wimax" ||
      state.type === "other"
    ) {
      // save state type
      // write to database
      const { isConnectionExpensive } = state.details;
    }
  });
  return unsubscribe;
}
