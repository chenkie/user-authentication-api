# HapiJS Authentication Sample

This sample project demonstrates how to set up a user authentication API with Hapi.js using JSON Web Tokens. There are several endpoints exposed in the sample, including user login and signup, along with an example of a protected `instructors` resource.

## Installation and Running the App

Clone the repo, then: 

```bash
npm install
node server.js
```

The app will be served at `localhost:3001`.

## Local Setup

To setup the API locally, you will need to run MongoDB or have an MLab instance. Create a `.env` file and populate it with the following values:

```bash
SECRET_KEY=<secret_key>
MLAB_USER=<mlab_user>
MLAB_PASSWORD=<secret_key>
MLAB_DOMAIN=<domain>
MLAB_DB=<database>
```

## Available Routes

#### **POST** `/api/users`
* Used for signing up a user. Accepts `username`, `email`, and `password` to create a user. Returns a JWT.

#### **POST** `/api/users/authenticate`
* Used for logging a user in. Accepts `username` or `email` and `password` to authenticate a user. Returns a JWT.

#### **GET** `/api/users`
* Returns all users in the database. Requires a valid JWT with an `admin` scope.

#### **PATCH** `/api/user/{id}`
* Updates a user. Requires a valid JWT with an `admin` scope.

#### **GET** `/api/instructors`
* Returns all `instructors` in the database. Requires a valid JWT.

#### **GET** `/api/instructors/{id}`
* Returns a specific `instructor` in the database. Requires a valid JWT.

#### **POST** `/api/instructors`
* Saves a new `instructor` in the database. Requires a valid JWT with an `admin` scope.

#### **DELETE** `/api/instructors/{id}`
* Deletes an instructor with a specific `id`. Requires a valid JWT with an `admin` scope.

#### **POST** `/api/users/check`
* Checks whether a user already exists or not. Useful for doing async form validation.