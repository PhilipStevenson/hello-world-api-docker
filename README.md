# Hello World API Docker 🐳 
An API that returns `Hello World!` when the `/` endpoint is called

![Whale Hello There](https://media.giphy.com/media/mW05nwEyXLP0Y/giphy.gif)

## Environment variables
The following environment variables needs to be set before the application can be ran
`export HELLO_WORLD_API_PORT=3000`

## Running the application
### Using NPM
Install dependencies
`npm install` or `npm i`
Start the server
`npm start`
Go to the following URL
`localhost:<HELLO_WORLD_API_PORT>` e.g. `localhost:3000`

### Docker 🐳
Build the image and run the container using Docker compose
`npm run docker`
Go to the following URL
`localhost:<HELLO_WORLD_API_PORT>` e.g. `localhost:3000`

## Running the unit tests
`npm test`