import { ipcRenderer, contextBridge } from "electron";

const WINDOW_API = {
  GetVersion: () => ipcRenderer.invoke("get/version"),
};

// window.api
contextBridge.exposeInMainWorld("api", WINDOW_API);
