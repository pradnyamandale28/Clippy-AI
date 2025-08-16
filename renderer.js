// renderer.js
const chatContainer = document.getElementById('chat-container');
const userInput = document.getElementById('user-input');

// This function adds a message to the chat window.
function addMessage(sender, message) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('message', sender); // Add classes for styling
    messageElement.innerHTML = message; // Use innerHTML to render formatted text
    chatContainer.appendChild(messageElement);
    // Scroll to the bottom to see the new message
    chatContainer.scrollTop = chatContainer.scrollHeight;
}

// Listen for the 'Enter' key press in the input box
userInput.addEventListener('keypress', async (e) => {
    if (e.key === 'Enter' && userInput.value.trim() !== '') {
        const prompt = userInput.value;
        addMessage('user', `<strong>You:</strong> ${prompt}`);
        userInput.value = ''; // Clear the input box

        // Add a temporary "thinking..." message
        addMessage('assistant', `<strong>Clippy:</strong> Thinking...`);

        // Send the prompt to the main process via the preload bridge
        const response = await window.electronAPI.askOpenAI(prompt);
        
        // Remove the "thinking..." message
        chatContainer.removeChild(chatContainer.lastChild);

        // Add the AI's real response to the chat
        addMessage('assistant', `<strong>Clippy:</strong> ${response}`);
    }
});