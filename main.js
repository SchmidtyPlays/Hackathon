const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');

let win;

function createWindow() {
  win = new BrowserWindow({
    fullscreen: true,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true,
      nodeIntegration: false,
      devTools: false
    },
  });
  win.loadFile('index.html');
}

ipcMain.on('window:close', () => {
  if (win) win.close();
});

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  app.quit();
});