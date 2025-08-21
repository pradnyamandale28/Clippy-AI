# Clippy AI 🖥️🤖

A floating desktop assistant built with **Electron.js** and powered by an **LLM** for Q&A and simple commands.  
Clippy AI is draggable, resizable, and runs cross-platform.

---

## 📹 Demo
**Video Demo:** [Google Drive Link Here]  

---

## 💻 Source Code
**GitHub Repository:** [https://github.com/pradnyamandale28/Clippy-AI](https://github.com/pradnyamandale28/Clippy-AI)  
**License:** MIT License  

---

## 🚀 Features
- 🤖 Conversational AI using OpenAI API (`gpt-4o-mini`)  
- 🌐 **Basic commands**:  
  - `open <website>` → Opens the given site in browser  
  - `summarize clipboard` → Summarizes copied text  
  - `calc <expression>` → Solves math expressions  
- 🪟 Floating, draggable, resizable widget  
- 💾 Chat history stored locally  
- 🎛 Minimal UI with toggle visibility & prompt style  

---

## 🛠 Tech Stack
- **Electron.js** – Desktop app framework  
- **JavaScript (ES6)** – App logic  
- **HTML/CSS** – UI  
- **OpenAI API** – LLM conversational responses  
- **Math.js** – Expression parsing and evaluation  
- **Node.js** – Runtime  

---

## ⏱ Time Taken
3 hrs  

---

## 🤖 AI Tool Used
- OpenAI API (`gpt-4o-mini`)  

---

## 📂 Project Structure
clippy-ai/
│
├── main.js          # Main process
├── preload.js       # Secure API bridge
├── renderer.js      # Chat UI & AI logic
├── index.html       # Frontend UI
├── styles.css       # Styling
├── package.json     # Dependencies & scripts
├── .gitignore       # Ignored files
├── README.md        
└── node_modules/    # Dependencies (ignored)
