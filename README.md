[![Build Status](https://travis-ci.org/Abudu-Samuel/Events-Manager.svg?branch=develop)](https://travis-ci.org/Abudu-Samuel/Events-Manager)
[![Coverage Status](https://coveralls.io/repos/github/Abudu-Samuel/Events-Manager/badge.svg?branch=develop)](https://coveralls.io/github/Abudu-Samuel/Events-Manager?branch=develop)
[![Maintainability](https://api.codeclimate.com/v1/badges/b3764dff0e8fc2e3fcfd/maintainability)](https://codeclimate.com/github/Abudu-Samuel/Events-Manager/maintainability)


# EVENTS MANAGER 

Events Manager provides a platform that helps manage creation and development of events such as conferences, ceremonies, weddings, formal parties, concerts, or conventions and as well provide centers to host these events. Suppose a user has an event coming up, He/She can post it on Events Manager and get a center. 

## Development
Events Manager application leverages:
*  Node,
* Express and
* Sequelize for Orm

## Installation
- Install  `node` and `postgres` 
- Clone the repository: git clone https://github.com/Abudu-Samuel/Events-Manager
- Install dependencies `npm install`
- Test `npm test:dev:ed`
- Start app `npm start:dev`
- Test via postman

## Endpoints

### Users
- User Signup                - api/v1/users                      - Register a user
- User Signin                - api/v1/users/login                - Logs a user
- Get Event                  - api/v1/events                     - Allows a user to view all events


### Admin
- User Signin               - api/v1/users                       - Logs an admin in
- Create Center             - api/v1/centers                     - Allows admin create center
- Modify Center             - api/v1/centers/<:eventId>          - Allows admin modify center

## Verbs
- GET
- PUT
- DELETE
- POST