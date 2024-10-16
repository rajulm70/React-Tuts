// backend/server.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3001; // Adjust this port if necessary

app.use(cors()); // Enable CORS
app.use(bodyParser.json()); // Parse JSON request bodies

// Function to summarize text (basic example)
const summarizeText = (text) => {
    const sentences = text.split('. ');
    if (sentences.length <= 2) {
        return text; // Return the original text if it's short
    }
    return sentences.slice(0, 2).join('. ') + '.'; // Return the first two sentences
};

// Endpoint for summarizing text
app.post('/summarize-text', (req, res) => {
    const { text } = req.body;

    if (!text) {
        return res.status(400).json({ error: "Text is required" });
    }

    const summary = summarizeText(text);
    res.json({ summary });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
