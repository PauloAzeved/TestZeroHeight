const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 8080;

// Serve repo root so pages/hello.html and src/css/* are reachable
app.use(express.static(path.join(__dirname)));

// Redirect root to the hello page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'pages', 'hello.html'));
});

app.listen(port, () => {
  console.log(`Static site server running at http://localhost:${port}/pages/hello.html`);
});