# Automated Accessibility Testing with JavaScript

A Parcel and React demo application for the Automated Accessibility Testing with JavaScript workshop by Marcy Sutton.

## Setup

This repo requires Git, Yarn and Node to be installed.

To set up the project, run these commands in your terminal:
```
git clone git@github.com:marcysutton/automated-a11y-testing-js.git
cd automated-a11y-testing-js
yarn
```

## Run the application locally

```
yarn start
```
Once you've installed dependencies, you should be able to open the app in your browser: `http://localhost:1234`.

### Run automated tests

Run the Jest unit tests:
```
yarn test
```

Run the end-to-end tests with Cypress:

```
yarn run test:e2e
```
