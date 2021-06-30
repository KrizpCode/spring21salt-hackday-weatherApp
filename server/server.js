const express = require('express');

const app = express();

app.get('/api/cities', (req, res) => {
  const cities = [
    {
      id: 1,
      region: 'Europe',
      country: 'Sweden',
      city: 'Stockholm'
    },
    {
      id: 2,
      region: 'Europe',
      country: 'Norway',
      city: 'Oslo'
    },
    {
      id: 3,
      region: 'Europe',
      country: 'Germany',
      city: 'Berlin'
    }
  ];

  res.json(cities);
});

const port = 8080;

app.listen(port, () => console.log(`Server started on port ${port}`));