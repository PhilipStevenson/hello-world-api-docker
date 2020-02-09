# Hello World API Docker 🐳 
An API that returns the following JSON when the `/` endpoint is called
```json
{"message":"Hello World!"}
```

![Whale Hello There](https://media.giphy.com/media/mW05nwEyXLP0Y/giphy.gif)

## Prerequisites
* Docker installed
* NPM installed

## Environment variables
The following environment variables need to be set before the application can be run
```shell
export HELLO_WORLD_API_PORT=3000
```

## Running the application
### Using NPM
Install dependencies
```shell
npm install
```
Start the server
```shell
npm start
```
Go to the following URL
`localhost:<HELLO_WORLD_API_PORT>` e.g. `localhost:3000`

### Docker 🐳
Build the image and run the container using Docker compose
```shell
npm run docker
```
Go to the following URL
`localhost:<HELLO_WORLD_API_PORT>` e.g. `localhost:3000`

## Running the unit tests
```shell
npm test
```
