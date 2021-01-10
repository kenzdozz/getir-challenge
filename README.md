# getir-challenge
A RESTful API with a single endpoint that fetches the data in a MongoDB collection

## Features

- User can fetch records filtered by `startDate`, `endDate`, `minCount` and `maxCount`.

## API Endpoints

- Base URL: https://getir-challenge1.herokuapp.com/v1

### Response codes

Every response has a `code` which can be one of the following:

- 0   - Success
- 400 - Bad request
- 404 - Not Found
- 500 - Internal Server Error

### Records

- POST: `/records`

  - Request Body

  ``` 
    {
      "startDate": "2016-01-21",  // Date 'YYYY-MM-DD`
      "endDate": "2019-01-21",    // Date 'YYYY-MM-DD`
      "minCount": 200,            // number
      "maxCount": 2000            // number
    }
  ```
  - Sample response
  ```
    {
      "code": 0,
      "msg": "Success",
      "records": [
        {
            "key": "TAKwGc6Jr4i8Z487",
            "createdAt": "2017-01-28T01:22:14.398Z",
            "totalCount": 310
        },
        ...
      ]
    }
  ```

- GET: `/records`

  The records can also be retrieved by making a GET request and passing the parameters in the query string

  - Request Query

  ``` 
    ?minCount=0&maxCount=1000&startDate=2015-12-22&endDate=2021-01-10
  ```
  - Sample response
  ```
    {
      "code": 0,
      "msg": "Success",
      "records": [
        {
            "key": "TAKwGc6Jr4i8Z487",
            "createdAt": "2017-01-28T01:22:14.398Z",
            "totalCount": 310
        },
        ...
      ]
    }
  ```

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.


### Prerequisites

What things you need to install the software and how to install them
To get the project up and running, you need to have mongodb, nodejs and npm installed on your local machine.
- [Download and install Nodejs here](https://nodejs.org/en/download/)
- [Download and install MongoDB](https://www.mongodb.com/)

Run the following commands to confirm installations.
```
node -v
```
 - should display Node version
```
npm -v
```
 - should display npm version
```
mongo --version
```
 - should display mongdb version


### Installing

 - Clone the repository `git clone https://github.com/kenzdozz/getir-challenge.git`
 - Navigate to the location of the folder
 - Run `npm install` to install dependencies
 - Run `npm start` to get the app started on your local machine

### Set Environment Variables
Rename `.env.example` to `.env` and update the variables accordingly


## Running the tests

To run the tests, run the command
```
npm run test
```
The tests, test the api endpoints to ensure that it works and returns the required data.


## Built With

* [Nodejs](https://nodejs.org/en/) - Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine
* [Express](https://expressjs.com/) - Fast, unopinionated, minimalist web framework for Node.js
* [MongoDB](https://www.mongodb.org/) - MongoDB is a cross-platform document-oriented database program

## Authors

* **Onah Kenneth** - *Initial work* - [getir-challenge](https://github.com/kenzdozz/getir-challenge)

## License

This project is licensed under the MIT License
