# Project Description: "angular-ngrx"

The "angular-ngrx" project is an application developed using the Angular framework and the NgRx state management pattern. This project provides a user interface to interact with the real-world API provided by the [RealWorld](https://github.com/gothinkster/realworld) project.

## Installation

To get started with the project, follow these steps:

1. Make sure you have Node.js and npm installed on your machine.
2. Clone this repository to your local device.
3. In the terminal, navigate to the project directory and run the command `npm install` to install all project dependencies.

## Commands

The project includes the following commands:

- `npm start`: Launches the local development server using Angular CLI, allowing you to view the application in your browser at `http://localhost:4200`.
- `npm run build`: Builds the project for deployment. The generated files will be located in the `dist/` folder.
- `npm run watch`: Runs the project build in watch mode with the "development" configuration.
- `npm test`: Executes unit tests for the project.
- `npm run lint`: Runs ESLint to check code style and fix some errors.
- `npm run format:write`: Applies Prettier to format the code and save the changes.

## Dependencies

The project uses the following core dependencies:

- `@angular/animations`, `@angular/common`, `@angular/compiler`, `@angular/core`, `@angular/forms`, `@angular/platform-browser`, `@angular/platform-browser-dynamic`, `@angular/router` - Version "^16.1.3" of the Angular framework.
- `@ngrx/effects`, `@ngrx/store`, `@ngrx/store-devtools` - Version "^16.0.1" for state management and side effects using NgRx.
- `rxjs` - Version "~7.8.0" for handling asynchronous operations and data streams.
- `prettier` - Version "^3.0.0" for code formatting.

## Dev Dependencies

Additionally, the project uses the following dev dependencies for development and testing:

- `@angular-devkit/build-angular`, `@angular/cli`, `@angular/compiler-cli`, `@typescript-eslint/eslint-plugin`, `@typescript-eslint/parser`, `eslint`, `husky`, `jasmine-core`, `karma`, `karma-chrome-launcher`, `karma-coverage`, `karma-jasmine`, `karma-jasmine-html-reporter`, `typescript`, and others.

## RealWorld API

To fetch data and interact with the backend, the project relies on the API provided by the RealWorld project. The API offers various endpoints for retrieving, creating, updating, and deleting data such as articles, comments, users, and tags.
