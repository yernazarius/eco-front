import path from 'path';
import dotenv from 'dotenv';

// Load the .env file from the root directory
dotenv.config({ path: path.resolve(__dirname, '../../.env') });

const config = {
    MODE: process.env.NEXT_PUBLIC_MODE,
    BASE_URL: process.env.NEXT_PUBLIC_BASE_URL,
};

export default config;