[![Build Status](https://travis-ci.org/Abudu-Samuel/Events-Manager.svg?branch=develop)](https://travis-ci.org/Abudu-Samuel/Events-Manager)
[![Coverage Status](https://coveralls.io/repos/github/Abudu-Samuel/Events-Manager/badge.svg?branch=develop)](https://coveralls.io/github/Abudu-Samuel/Events-Manager?branch=develop)
[![Maintainability](https://api.codeclimate.com/v1/badges/b3764dff0e8fc2e3fcfd/maintainability)](https://codeclimate.com/github/Abudu-Samuel/Events-Manager/maintainability)

# EVENTS MANAGER 

> Events Manager provides a platform that helps manage creation and development of events such as conferences, ceremonies, weddings, formal parties, concerts, or conventions and as well provide centers to host these events. Suppose a user has an event coming up, He/She can post it on Events Manager and get a center. 

## Table Of Content
- [Features of the application](#features-of-the-application)
- [Technology used for development](#technology-used-for-development)
- [Getting Started](#getting-started)
- [Running Test](#running-test)
- [How to contribute](#how-to-contribute)

## Features of the application
* Users can sign up
* Users can sign in
* Users can view all centers in the app
* Users can view all events in the app
* Users can view detail of a single center
* Users can view detail of a single event
* Users can add event to a center
* Users can view events they created
* Users can edit events
* Users can delete events

## Technology used for development
Events Manager application leverages:
* Node,
* ExpressJs
* PostgreSql
* Sequelize orm
* ReactJs
* Redux


## Getting Started
- Install  `node` and `postgres` 
- Clone the repository: 
```sh
> $ git clone https://github.com/Abudu-Samuel/Events-Manager
```
- Change directory into events-manager directory
```sh
> $ cd events-manager
```
- Install dependencies 
```sh
> $ npm install
```
- Once installation is done, create a `.env` file and fill it with the neccessary environment variables (**see `.env.example` for the neccessary environment variables required**)
- Create a database to be used with the application
- Migrate database by running
```sh
> $ sequelize db:migrate
```
- Start app
```sh
> $ npm start:dev
```

## Running Test
### Server-side test 
- Run
```sh
> $ npm run test
```

## API Docs
To use the API, a good place to start would be here: [Events manger](https://abudu-samuel.github.io/slate/) doc.
## How to contribute
* Fork the repository
* Create a feature branch with a feature.md file
* Write tests and make them pass
* Open a pull request

## Additional information regarding how to contribute
#### New contributions to the application are welcome, but we ask that you please follow these guidelines:
* Check that your code will pass `eslint` code standards, `hound` will review your code and ensure you act accordingly.
* Check that your code will pass tests: `npm run test` will run tests for you.
* Keep pull requests concise, and document new functionality in PRs. Follow the pull request format below
* Avoid breaking changes unless they are very essential. We encourage people to care a lot about backwards compatibility.

## Joining the Project

Active committers and contributors are invited. If you think you can help, we'd love to have you!

## Bugs and Issues

Please report by creating an Issue for feature and support requests. Well structured, detailed bug reports are hugely valuable for the project.

#### Guidelines for reporting bugs:
* Check the issue search to see if it has already been reported
* Isolate the problem to a simple test case
* Please include a demonstration of the bug on a website such as JS [Bin](http://jsbin.com), [JS Fiddle](https://jsfiddle.net/), or [Codepen](https://codepen.io/pen).

Please provide any additional details associated with the bug.