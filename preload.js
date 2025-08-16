// preload.js
const { contextBridge, ipcRenderer } = require('electron');

// This creates a secure bridge between the renderer process (frontend)
// and the main process (backend).
contextBridge.exposeInMainWorld('electronAPI', {
  // We are creating a function called 'askOpenAI' that the frontend can call.
  // When called, it will safely send a message ('ask-openai') to the main process.
  askOpenAI: (prompt) => ipcRenderer.invoke('ask-openai', prompt)
});