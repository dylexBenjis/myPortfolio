import slider1 from '../../Images/forecast_mockup.png'

export const apps =  [
    {id:1,title:'forecastApp', src: slider1,
    descc:'This is a single page, weather forecast, web application. It uses the Visual Crossing forecast api and ipgeolocation api. The application provides data for, the current weather condition(temperature, wind speed, humidity, etc), and forecast for 1 day with hourly weather conditions. ', 
    technologies:'API, react.js, styled-components, cloudflare pages',
    webLink: 'https://forecastapp.pages.dev',githubLink:'https://github.com/dylexBenjis/weatherApp'},

    {id:2,title:'solarEnergy-Estimator', src: slider1,
    descc:'This is a single page, solar energy estimator, web application. It estimates the time for charge and discharge, number of solar-panels, and batteries you need for your solar electricity set-up (not taking into account geographical solar radiance). Every calculation is done on the client-side. This makes the webpage very fast and responsive. ', 
    technologies:'react.js, styled-components, cloudflare pages',
    webLink: 'https://solar-energy-estimator.pages.dev',githubLink:'https://github.com/dylexBenjis/solar-calc'},

]