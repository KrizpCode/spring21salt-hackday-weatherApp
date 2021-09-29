# Weather Application

My hackday-project at </salt>-bootcamp.
We had 24hrs to make an app that uses both front- & back-end.
I chose to do a neat weather-app where you can search for any city in the world and get the Daily/Hourly weather information for that city in a nice card.

This was my first time working with an 3rd-party API, and it was a blast, I learnt so much during this hackday.

The API I'm using is [OpenWeather](https://openweathermap.org/api).

## Instructions to run application locally

Clone this repo and create a .env-file in the root-folder with following values.
````
API_KEY=YOUR_OPENWEATHER_API_KEY
````

Open a new terminal and run the following commands.
````
npm install
npm run start
````

Open a second terminal and run the following commands.
````
cd client
npm install
npm run start
````

Server is now running on port http://localhost:8080/ and the frontend on http://localhost:3000/

## Link to hosted application
https://weather-application-hackday.herokuapp.com/

## Frameworks & Libraries

- React
- Express/Node
