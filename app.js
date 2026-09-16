import express from 'express';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import { projects, experiences, skills, bootcamps } from './data/portfolio.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();

// Sajikan file statis dari folder public (img)
app.use(express.static(path.join(__dirname, 'public')));

// API endpoints untuk React client
app.get('/api/projects', (req, res) => res.json(projects));
app.get('/api/experiences', (req, res) => res.json(experiences));
app.get('/api/bootcamps', (req, res) => res.json(bootcamps));
app.get('/api/skills', (req, res) => res.json(skills));
app.use('/api', (req, res) => res.status(404).json({ error: 'Not found' }));

// Sajikan hasil build React (client -> dist)
const distDir = path.join(__dirname, 'dist');
if (fs.existsSync(distDir)) {
    app.use(express.static(distDir));

    // Fallback: semua route lain dikembalikan ke index.html
    app.use((req, res) => {
        res.sendFile(path.join(distDir, 'index.html'));
    });
} else {
    app.get('/', (req, res) => {
        res.status(503).send('Client belum di-build. Jalankan "npm run build" terlebih dahulu.');
    });
}

// Listener untuk lokal
if (process.env.NODE_ENV !== 'production') {
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => console.log(`Server: http://localhost:${PORT}`));
}

export default app;
