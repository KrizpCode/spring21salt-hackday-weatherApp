const express = require('express');
const fetch = require('node-fetch');

const apiCall = (location) => {
  const apiKey = '9a2eec831aadfc869414b1ff2e8fe472';
  return `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`;
}

const app = express();

app.get('/api/:location', (req, res) => {
  const location = req.params.location;
  const apiUri = apiCall(location);

  fetch(apiUri)
    .then(res => res.json())
    .then(data => {
      console.log(`fetched data..`, data)
      return res.send(data)
    });
});

const port = 8080;

app.listen(port, () => console.log(`Server started on port ${port}`));