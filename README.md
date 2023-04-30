# City Pilot

## Description
City Pilot is a React Native app that allows users to create a customized audio guide for any city they choose. The app is designed to be user-friendly and intuitive, making it easy for anyone to use.

## Features

- Audio Guide Creation: Users can create a personalized audio guide for any city they choose based on their interests and preferences.

- City Exploration: The app offers a variety of routes to explore the city, including popular tourist destinations and off-the-beaten-path neighborhoods.

- Personalized Recommendations: Users can customize their audio guide based on their interests, including food, culture, history, and more.

- Offline Access: The app can be used offline, making it easy to access the audio guide even when traveling without a data connection.

- User Profiles: Users can create a profile to save their favorite cities and routes, making it easy to access their personalized audio guides at any time.

## Tech Stack

City Pilot is a mobile application built using React Native, which is a popular framework for building cross-platform applications. React Native allows the app to be developed for both iOS and Android platforms simultaneously.

The app also uses Google Maps API to provide location-based services, such as map displays, route planning, and point of interest (POI) recommendations. Google Maps API is a popular and widely-used API for location-based services.

To ensure secure authentication and user data management, the app uses Google Authenticator, which is a two-factor authentication app developed by Google. It provides an additional layer of security to user accounts, helping to prevent unauthorized access.

City Pilot also incorporates the use of OpenAI, a natural language processing (NLP) platform that allows the app to generate personalized tours for users. By analyzing user preferences and behavior, the app is able to create custom tours that cater to individual interests and needs.

## How to use it

### Dependencies

The app its public for now but it will be private from June 2023. You will need to get your own Google and Openai keys and include them into .env file with those keys
- OPENAI_API_KEY
- OPENAI_ORGANIZATION
- GOOGLE_API_KEY
In addition you will need to download Xcode or Android Studio.

### Line commands
```
    npm install 
    npm run ios
```

## Screenshots
<img alt="home image" src="https://github.com/lucasgiuri-pspdfkit/city-pilot-app/blob/main/screenshots/home.png" width="200"/>
<img alt="tour image" src="https://github.com/lucasgiuri-pspdfkit/city-pilot-app/screenshots/tour.png"  width="200"/>
<img alt="settings image" src="https://github.com/lucasgiuri-pspdfkit/city-pilot-app/screenshots/settings.png" width="200"/>



## License

City Pilot is licensed under the MIT License. See LICENSE.txt for more information.