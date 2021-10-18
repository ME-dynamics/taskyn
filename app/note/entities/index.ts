import { configure } from "mobx";
import { NoteState } from "./note";
configure({ useProxies: "never" });
export const note = new NoteState();
