require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Маршрут API
app.get('/api/message', (req, res) => {
    res.json({ message: "Hello from backend! MUTHERFUCKER!!!!" });
});

// Запуск сервера
app.listen(PORT, () => {
    console.log(`🚀 Server is running on http://localhost:${PORT}`);
});

