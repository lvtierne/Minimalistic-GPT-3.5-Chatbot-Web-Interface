# 🤖 Minimalistic GPT-3.5 Chatbot Web Interface

This project provides a minimalistic web interface to interact with OpenAI's GPT-3.5 model. Users can ask questions through a simple form, and the chatbot provides answers based on the input.

## 🚀 Features

- **Minimalistic UI**: Clean and easy-to-use interface.
- **Real-time Interaction**: Get instant responses from the AI.
- **Integration with GPT-3.5**: Harness the power of OpenAI's language model.

## 💻 Technologies Used

<div style="display: flex; justify-content: center; gap: 20px;">
    <a href="https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5" target="_blank" style="text-decoration: none;"><img src="https://img.shields.io/badge/HTML-5-orange?style=for-the-badge&amp;logo=html5&amp;logoColor=white" alt="HTML5" height="28" style="border-radius: 7px;"></a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank" style="text-decoration: none;"><img src="https://img.shields.io/badge/CSS-3-blue?style=for-the-badge&amp;logo=css3&amp;logoColor=white" alt="CSS3" height="28" style="border-radius: 7px;"></a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" style="text-decoration: none;"><img src="https://img.shields.io/badge/JavaScript-ES6-yellow?style=for-the-badge&amp;logo=javascript&amp;logoColor=white" alt="JavaScript ES6" height="28" style="border-radius: 7px;"></a>
    <a href="https://nodejs.org/" target="_blank" style="text-decoration: none;"><img src="https://img.shields.io/badge/Node.js-14.x-green?style=for-the-badge&amp;logo=node.js&amp;logoColor=white" alt="Node.js" height="28" style="border-radius: 7px;"></a>
    <a href="https://expressjs.com/" target="_blank" style="text-decoration: none;"><img src="https://img.shields.io/badge/Express.js-4.x-lightgrey?style=for-the-badge&amp;logo=express&amp;logoColor=white" alt="Express.js" height="28" style="border-radius: 7px;"></a>
    <a href="https://platform.openai.com/" target="_blank" style="text-decoration: none;"><img src="https://img.shields.io/badge/OpenAI%20API-Integration-yellowgreen?style=for-the-badge" alt="OpenAI API" height="28" style="border-radius: 7px;"></a>
</div>

   ```rust
   Frontend <-> Backend (Node.js/Express) <-> OpenAI API
   ```

## 🔧 Prerequisites

Before running this project, ensure you have the following installed:

- **Node.js**: Install from [nodejs.org](https://nodejs.org/).
- **npm (Node Package Manager)**: Typically comes with Node.js.
- **OpenAI API Key**: Obtain from [OpenAI Platform](https://platform.openai.com/).

Create a `.env` file in the root directory and add your API key:

```plaintext
API_KEY=your_openai_api_key_here
```

## 🛠️ Installation

1. Clone the repository:
   
   ```bash
   git clone https://github.com/lvtierne/Minimalistic-GPT-3.5-Chatbot-Web-Interface.git
   cd Minimalistic-GPT-3.5-Chatbot-Web-Interface
   ```
   
2. Install dependencies:

   ```bash
   npm install
   ```
   
## 🚀 Usage
1. Start the server:

   ```bash
   node script.js
   ```
   
2. Open your web browser and go to http://localhost:3000. 
3. Type a question into the input field and press "Submit".
4. The chatbot will process the question using GPT-3.5 and display the answer below.

## 📝 License [![License](https://img.shields.io/github/license/lvtierne/Minimalistic-GPT-3.5-Chatbot-Web-Interface)](https://github.com/lvtierne/Minimalistic-GPT-3.5-Chatbot-Web-Interface/blob/main/LICENSE)

This project is licensed under the MIT License - see the LICENSE file for details.

### How to Use

To use this project:
1. **Clone the Repository:**
   
   ```bash
   git clone https://github.com/lvtierne/Minimalistic-GPT-3.5-Chatbot-Web-Interface.git
   .git
   cd Minimalistic-GPT-3.5-Chatbot-Web-Interface
   ```
   
2. Install Dependencies:
   
   ```bash
   npm install
   ```
   
3. Set Up Environment Variables:
   - Create a .env file in the root directory and add your OpenAI API key:
  
   ```makefile
   API_KEY=your_openai_api_key_here
   ```
   
4. Start the Server:
   
   ```bash
   node script.js
   ```
   
5. Interact with the Chatbot:
   - Open your web browser and go to http://localhost:3000.
   - Type a question into the input field and press "Submit".
   - The chatbot will process the question using GPT-3.5 and display the answer below.
     
<p align="center">
  <kbd>
    <img src="https://github.com/lvtierne/Minimalistic-GPT-3.5-Chatbot-Web-Interface/assets/136281319/0eee296d-1fb8-419d-bfb2-9f511238fc3b" alt="Screenshot" width="650" height="500">
  </kbd>
</p>

6. Shutdown:
- To stop the server, press Ctrl + C in your terminal.

## 📂 Git Repository Setup
To manage this project with Git:

1. Initialize Git Repository:
   
   ```bash
   git init
   ```

2. Create .gitignore:
   - Create a .gitignore file in the root directory:
   
   ```bash
   node_modules/
   .env
   ```
   
3. Add and Commit Files:
   
   ```bash
   git add .
   git commit -m "Initial commit: Add minimalistic GPT-3.5 chatbot web interface"
   ```
   
4. Connect to a Remote Repository (Optional):
   - If you have a remote Git repository (e.g., GitHub), connect your local repository to it:

   ```bash
   git remote add origin https://github.com/lvtierne/Minimalistic-GPT-3.5-Chatbot-Web-Interface.git
   git push -u origin master
   ```

   - Replace origin with your remote repository name and master with your branch name.

This README.md provides a comprehensive guide for installing, using, and setting up your minimalistic GPT-3.5 chatbot web interface project with Git version control. Adjust the URLs and specifics based on your actual repository and project details.





   
