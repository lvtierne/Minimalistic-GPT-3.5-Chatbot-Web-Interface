// Load environment variables from .env file
import { config } from 'dotenv';
config();

// Import required modules
import { OpenAI } from 'openai'; // OpenAI API client
import express from 'express'; // Express framework
import bodyParser from 'body-parser'; // Middleware to parse request bodies
import path from 'path'; // Utility for handling file and directory paths
import { fileURLToPath } from 'url'; // Utility to convert URL to file path

// Get the directory name of the current module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Initialize OpenAI client with the API key from environment variables
const openai = new OpenAI({ apiKey: process.env.API_KEY });

// Initialize Express app
const app = express();

// Middleware to parse URL-encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Route to serve the main HTML page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

// Route to handle form submission and interact with OpenAI API
app.post('/ask', (req, res) => {
    const userQuestion = req.body.question; // Get the question from the request body
    openai.chat.completions.create({
        model: "gpt-3.5-turbo", // Specify the AI model
        messages: [{ role: "user", content: userQuestion }] // Pass the user question to the API
    }).then(response => {
        const answer = response.choices[0].message.content; // Extract the AI response
        res.send({ question: userQuestion, answer: answer }); // Send back the question and answer
    }).catch(error => {
        if (error.status === 429) {
            res.status(429).send("Rate limit exceeded. Please check your OpenAI plan and billing details."); // Handle rate limit errors
        } else {
            res.status(500).send("An error occurred: " + error.message); // Handle other errors
        }
    });
});

// Start the Express server
app.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});
