# GitHub Repositories Explorer

## Overview

GitHub Repositories Explorer is a React Native application developed with Expo that allows users to explore GitHub repositories. The app leverages several popular libraries and tools to provide a smooth and efficient experience.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Scripts](#scripts)
- [Dependencies](#dependencies)
- [Development](#development)
- [License](#license)

## Features

- Explore repositories from GitHub using a modern interface.
- Supports viewing repositories on Android, iOS, and web platforms.
- Utilizes React Navigation for smooth navigation and Apollo Client for GraphQL data management.

## Installation

To get started with GitHub Repositories Explorer, follow these steps:

1. Clone the repository from GitHub:

   `git clone https://github.com/AAndrys/githubrepositoriesexplorer.git`

2. Navigate to the project directory:

   `cd githubrepositoriesexplorer`

3. Install dependencies:

   `npm install`

## Usage

Once you have the dependencies installed, you can start the development server with Expo. The project can be run on different platforms as follows:

- Start the project using `npm start`.
- Run on an Android emulator or device using `npm run android`.
- Run on an iOS simulator or device using `npm run ios`.
- Run on a web browser using `npm run web`.

## Scripts

This project includes several npm scripts for development and maintenance:

- `start`: Starts the Expo development server.
- `android`: Starts the project on an Android emulator or device.
- `ios`: Starts the project on an iOS simulator or device.
- `web`: Starts the project on a web browser.
- `check`: Runs code style checks using gts.
- `clean`: Cleans code style issues.
- `fix`: Fixes code style issues.
- `compile`: Compiles TypeScript code and runs checks.
- `pre`: Runs the `compile` script before committing code.

## Dependencies

### Runtime Dependencies

- `@apollo/client`: ^3.11.4
- `@babel/plugin-proposal-export-namespace-from`: ^7.18.9
- `@expo/vector-icons`: ^14.0.2
- `@react-navigation/native`: ^6.1.18
- `@react-navigation/native-stack`: ^6.11.0
- `@tanstack/react-query`: ^5.51.23
- `axios`: ^1.7.3
- `expo`: ~51.0.26
- `expo-status-bar`: ~1.12.1
- `globals`: ^15.9.0
- `gts`: ^5.3.1
- `lodash`: ^4.17.21
- `react`: 18.2.0
- `react-native`: 0.74.5
- `react-native-reanimated`: ~3.10.1
- `react-native-safe-area-context`: 4.10.5
- `react-native-screens`: 3.31.1

### Development Dependencies

- `@babel/core`: ^7.20.0
- `@eslint/compat`: ^1.1.1
- `@eslint/eslintrc`: ^3.1.0
- `@eslint/js`: ^9.9.0
- `@types/lodash`: ^4.17.7
- `@types/react`: ~18.2.45
- `@typescript-eslint/eslint-plugin`: ^8.1.0
- `eslint-plugin-n`: ^17.10.2
- `eslint-plugin-react`: ^7.35.0
- `eslint-plugin-react-hooks`: ^4.6.2
- `eslint-plugin-simple-import-sort`: ^12.1.1
- `pre-commit`: ^1.2.2
- `typescript`: ^5.3.3

## Development

For development, this project uses TypeScript and ESLint. Make sure to follow the coding style and run the linting checks before committing any changes.

To run the linter, use the `npm run check` command. To fix any linting issues, use the `npm run fix` command.

## License

This project is private and not licensed for public distribution. For any usage or distribution inquiries, please contact the repository owner.
