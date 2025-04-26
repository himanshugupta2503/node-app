const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the public directory
app.use(express.static('public'));

// Define routes
app.get('/', (req, res) => {
  res.send('Hello from Docker container! This is a simple Node.js application.');
});

app.get('/api/info', (req, res) => {
  res.json({
    app: 'Simple Node.js Application',
    version: '1.0.0',
    container: true,
    timestamp: new Date()
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log('Press Ctrl+C to stop the server');
});
