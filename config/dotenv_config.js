import { configDotenv } from 'dotenv';

configDotenv();

export const apiKey = process.env.AI_API_KEY;
export const port = process.env.PORT || 8500;
