import 'dotenv/config';
import { runCLI } from './src/cli.js';

const apiKey = process.env.GEMINI_API_KEY;

if (!apiKey) {
  console.error(
    'Error: GEMINI_API_KEY is not set.\n' +
    'Copy .env.example to .env and add your Gemini API key.\n' +
    'Get a key at: https://aistudio.google.com/app/apikey'
  );
  process.exit(1);
}

runCLI(apiKey);
