const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3020; // change this to the port you want to use

const apiKey = 'fSooHmbib5eONFVnahTsxEfzPZD3s7QR9PsYziYuOunO9QICJRBXLkq6wa7w'; // Replace this with your actual API key' 

const corsOptions = {
  origin: '*',
  methods: [ 'POST'],
  allowedHeaders: ['Content-Type'],
};

app.use(cors(corsOptions));
app.use(bodyParser.json());

app.post('/api/v3/text2img', async (req, res) => {
  const formData = req.body;
  console.log(formData); // add this line to log the request body data
  try {
    const response = await fetch('https://stablediffusionapi.com/api/v3/text2img', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData),
    });
    const data = await response.json();
    console.log(data); // log the response data
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).send('An error occurred');
  }
});

// add the Access-Control-Allow-Headers header
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.listen(port, () => {
  console.log(`Proxy server listening at http://localhost:${port}`);
});



app.post('/api/v3/fetch', async (req, res) => {
  const formData = req.body;
  console.log(formData); // add this line to log the request body data
  try {
    const response = await fetch('https://stablediffusionapi.com/api/v3/fetch/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData),
    });
    const data = await response.json();
    console.log(data); // log the response data
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).send('An error occurred');
  }
});

// add the Access-Control-Allow-Headers header
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.listen(port, () => {
  console.log(`Proxy server listening at http://localhost:${port}`);
});
