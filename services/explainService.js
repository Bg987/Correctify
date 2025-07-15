require('dotenv').config();
const axios = require('axios');

const COHERE_API_KEY = process.env.COHERE_API_KEY;

async function explainCorrection(original, corrected) {
    const prompt = `
You are a friendly grammar teacher. 
Your job is to explain clearly and simply what grammar corrections were made.

ORIGINAL:
${original}

CORRECTED:
${corrected}

EXPLAIN:
`;

    try {
        const response = await axios.post(
            'https://api.cohere.ai/v1/generate',
            {
                model: 'command-r-plus',
                prompt: prompt,
                max_tokens: 300,
                temperature: 0.3,
                p: 1,
                k: 0,
                stop_sequences: ["\n\n"]
            },
            {
                headers: {
                    Authorization: `Bearer ${COHERE_API_KEY}`,
                    'Content-Type': 'application/json',
                },
            }
        );
        //console.log("2.Response from Cohere API:", response.data);
        const output = response.data.generations[0].text;
        return output;
    } catch (err) {
        console.error("❌ Cohere API error:", err.response?.data || err.message);
        return "⚠️ Error explaining correction.";
    }
}

module.exports = { explainCorrection };
