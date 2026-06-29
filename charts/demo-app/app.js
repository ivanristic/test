const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/health', (req, res) => {
    res.status(200).json({ status: "UP", message: "Application is healthy" });
});

app.get('/api/v1/data', (req, res) => {
    res.status(200).json({
        success: true,
        version: "1.0.0",
        environment: process.env.NODE_ENV || "production"
    });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
