import { makeObservable, observable, action, computed } from "mobx";

class NetInfo {
  constructor() {
    makeObservable(this, {
      isConnected: observable,
      internetAvailable: observable,
      vpn: observable,
      setConnection: action,
      setInternet: action,
      setVpn: action,
    });
  }
  isConnected: boolean = true;
  internetAvailable: boolean = true;
  vpn: boolean = false;
  get hasAccess(): boolean {
    return this.isConnected && this.internetAvailable;
  }
  setConnection(status: boolean) {
    this.isConnected = status;
  }
  setInternet(status: boolean) {
    this.internetAvailable = status;
  }
  setVpn(status: boolean) {
    this.vpn = status;
  }
}

export const netInfoState = new NetInfo();
