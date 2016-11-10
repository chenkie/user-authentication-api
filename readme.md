# HapiJS Authentication Sample

This repo goes along with Auth0's tutorial on [HapiJS authentication](https://auth0.com/blog/2016/03/07/hapijs-authentication-secure-your-api-with-json-web-tokens/). It shows how to implement user creation, authentication, and access control with Hapi and MongoDB.

## Installation and Running the App

Clone the repo, then: 

```bash
npm install
node server.js
```

The app will be served at `localhost:3000`.

## Available Routes

#### **POST** `/api/users`
* Accepts `username`, `email`, and `password` to create a user. Returns a JWT.

#### **POST** `/api/users/authenticate`
* Accepts `username` or `email` and `password` to authenticate a user. Returns a JWT.

#### **GET** `/api/users`
* Returns all users in the database. Requires `admin` scope.

#### **PATCH** `/api/user/{id}`
* Updates a user. Requires `admin` scope.
 
## What is Auth0?

Auth0 helps you to:

* Add authentication with [multiple authentication sources](https://docs.auth0.com/identityproviders), either social like **Google, Facebook, Microsoft Account, LinkedIn, GitHub, Twitter, Box, Salesforce, amont others**, or enterprise identity systems like **Windows Azure AD, Google Apps, Active Directory, ADFS or any SAML Identity Provider**.
* Add authentication through more traditional **[username/password databases](https://docs.auth0.com/mysql-connection-tutorial)**.
* Add support for **[linking different user accounts](https://docs.auth0.com/link-accounts)** with the same user.
* Support for generating signed [Json Web Tokens](https://docs.auth0.com/jwt) to call your APIs and **flow the user identity** securely.
* Analytics of how, when and where users are logging in.
* Pull data from other sources and add it to the user profile, through [JavaScript rules](https://docs.auth0.com/rules).

## Create a Free Auth0 Account

1. Go to [Auth0](https://auth0.com) and click Sign Up.
2. Use Google, GitHub or Microsoft Account to login.

## Issue Reporting

If you have found a bug or if you have a feature request, please report them at this repository issues section. Please do not report security vulnerabilities on the public GitHub issue tracker. The [Responsible Disclosure Program](https://auth0.com/whitehat) details the procedure for disclosing security issues.

## Author

[Auth0](auth0.com)

## License

This project is licensed under the MIT license. See the [LICENSE](LICENSE) file for more info.
