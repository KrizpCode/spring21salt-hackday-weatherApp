const express = require('express');
const fetch = require('node-fetch');

const path = require('path');

require('dotenv').config();

const apiKey = process.env.API_KEY;

const apiCall = (location) => {
	return `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${apiKey}`;
};

apiCallExtra = (lat, lon) => {
	return `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,alerts&units=metric&appid=${apiKey}`;
};

const app = express();

app.get('/api/coords/:coords', (req, res) => {
	const coords = req.params.coords.split('&');
	const apiUri = apiCallExtra(coords[0], coords[1]);

	fetch(apiUri)
		.then((res) => res.json())
		.then((data) => res.send(data));
});

app.get('/api/cityname/:location', (req, res) => {
	const location = req.params.location;
	const apiUri = apiCall(location);

	fetch(apiUri)
		.then((res) => res.json())
		.then((data) => res.send(data));
});

app.use('/', express.static(path.join(__dirname, './client/build')));

const port = process.env.PORT || 4000;

app.listen(port, () => console.log(`Server started on port ${port}`));
