import { app, BrowserWindow, ipcMain } from "electron";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const isDev = !app.isPackaged;

app.whenReady().then(main);

function main() {
  const window = new BrowserWindow({
    width: 800,
    height: 600,
    show: false,
    webPreferences: {
      preload: join(__dirname, "./preload.js"),
    },
  });
  window.loadFile(join(__dirname, "../public/index.html"));
  window.on("ready-to-show", () => window.show());

  if (isDev) window.webContents.openDevTools();
}

ipcMain.handleOnce("get/version", () => app.getVersion());
