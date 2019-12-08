const electron = require('electron');

const app = electron.app;
const browserWindow = electron.BrowserWindow;

let win;

const createWindow = () => {
    win = new browserWindow({
        width: 800,
        height: 600
    });
    win.loadFile('index.html');
    // remove this for prod
    win.webContents.openDevTools();
    win.on('closed', () => {
        win = null;
    });
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (win === null) {
        createWindow();
    }
});