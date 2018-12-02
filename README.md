# Hello World API Docker 🐳 
An API that returns `Hello World!` when the `/` endpoint is called

![Whale Hello There](https://media.giphy.com/media/mW05nwEyXLP0Y/giphy.gif)

## Prerequisites
* Docker installed
* NPM installed

## Environment variables
The following environment variables need to be set before the application can be ran
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
