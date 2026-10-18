const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');

let win;

function createWindow() {
  win = new BrowserWindow({
    fullscreen: true,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true,   // keep these defaults
      nodeIntegration: false,
    },
  });
  win.loadFile('index.html');
  win.webContents.openDevTools()
}

// Listen for the close request from the website
ipcMain.on('window:close', () => {
  if (win) win.close();   // or app.quit() to exit the whole app
});

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  app.quit();
});