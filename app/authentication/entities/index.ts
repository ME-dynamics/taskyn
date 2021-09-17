import { configure } from "mobx";

// Or "ifavailable".
import { Auth } from "./auth";
import { Input } from "./input";
configure({ useProxies: "never" });
export const auth = new Auth();
export const input = new Input();
