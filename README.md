# Get started

## Installing environments with Docker

### Create a Docker network
To start, from the project root, run the following command to create the Docker network that will allow containers to communicate with each other:

```
yarn docker-network
```

### Start database mongodb Docker environment

```
docker-compose up
```

### Start the client Docker environment
To start the client Docker environment, navigate to the `app_client` directory and run the following commands:

```
yarn build-docker
yarn run-docker
```


### Start the server Docker environment
To start the server Docker environment, navigate to the `app_server` directory and run the following commands:

```
yarn build-docker
yarn run-docker
```


#### Note
The `yarn start:docker` and `yarn stop:docker` commands are also available. Note that the container is automatically launched after the `yarn run-docker` command.
