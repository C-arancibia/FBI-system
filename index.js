import express from 'express';
import bodyParser from 'body-parser';
import jwt from 'jsonwebtoken';
import { results as agents } from './data/agents.js';
import path from 'path';
import { fileURLToPath } from 'url';
import router from './routes/fbiRoutes.js';

const app = express();
const PORT = 3000;
const SECRET_KEY = 'your_secret_key';

// Middlewares
app.use(bodyParser.json());
app.use(express.static('views'));
app.use('/', router);

// Helper to get __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve the HTML file
app.get('/', (req, res) => {
res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.listen(PORT, () => {
console.log(`Server running on http://localhost:${PORT}`);
});
