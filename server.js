const fs = require('fs').promises;
const path = require('path');
const express = require('express');

const PORT = process.env.PORT || 3000;

const app = express();
app.get('/products', getProductsList);

async function getProductsList(req, res) {
  const productsFile = path.join(__dirname, './products.json');

  try {
    const products = await fs.readFile(productsFile);
    res.json(JSON.parse(products));
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
app.listen(PORT, () => {
  console.log(
    `The server started successfully on port: http://localhost:${PORT}`
  );
});
