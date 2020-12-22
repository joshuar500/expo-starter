# expo-starter

## Setup

- Install the expo-cli with `npm install --global expo-cli`
- Create an account on Expo.io and `expo login`
- `expo install`
- `expo start`

For additional information on getting started with expo: https://docs.expo.io/

## Tech Decisions

This starter project is a barebones Javascript project with some additional libraries to help jump start the development process.

[React Navigation](https://reactnavigation.org/) is the standard router library for React Native to switch between screens.

[Prettier](https://prettier.io/) standardizes code formatting in order to keep code clean with little effort.

The file structure is currently as follows:

- _components_ - shared components folder for screens (Buttons, Headers, ListItems)
- _navigation_ - global navigation folder to keep App.js clean
- _screens_ - the screen are the container views that utilize the components to display UI/UX
- _services_ - the services utilized by the rest of the app (APIs, etc)
