// main.js
const { app, BrowserWindow, ipcMain } = require('electron'); // NEW: ipcMain added
const path = require('path');
const { OpenAI } = require('openai'); // NEW!

// NEW! Initialize OpenAI
const openai = new OpenAI({
  // IMPORTANT: Paste your secret API key between the quotes below
  apiKey: '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',
});

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 300,
    height: 400,
    frame: false,
    transparent: true,
    alwaysOnTop: true,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      // These next two lines are important for security
      contextIsolation: true,
      nodeIntegration: false,
    },
  });

  mainWindow.loadFile('index.html');
}

// NEW! This section listens for the 'ask-openai' message from the frontend.
ipcMain.handle('ask-openai', async (event, prompt) => {
  try {
    const response = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo', // You can use gpt-4 if you have access
      messages: [{ role: 'user', content: prompt }],
      max_tokens: 100, // Limit the response length to save on tokens
    });
    // We send back just the content of the AI's message.
    return response.choices[0].message.content;
  } catch (error) {
    console.error('OpenAI API Error:', error);
    return 'Sorry, I ran into an error. Please check the terminal.';
  }
});

app.whenReady().then(() => {
  createWindow();
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});