const express = require('express');

const PORT = process.env.PORT || 3000;
const app = express();

app.get('/products', (req, res) => {
  res.send('Server working');
});

app.listen(PORT, () =>
  console.log(`Server started normally on port: http://localhost:${PORT}`)
);
