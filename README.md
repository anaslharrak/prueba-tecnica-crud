# TECHINCAL CALLENGE NODE.JS AND REACT

The objective of this challenge is to create a web application to display a list of users and display more details about the user if the user has been clicked. The app has a backend developed with Node.js and MongoDB as the data base. In the other hand the frontend has been made using React. For the testing I've used Jest and supertest, the only tests the app has is on the backend, to test the api endpoints.

In order to make a more friendly development on this project, the frontend and the backend are in the same repository, so I did a monorepository. Also I tried to handle the errors using the sonner library (to get the toasts).

The styles has been made by me, using styled-components as the framework css.

The icons are from [heroicons](heroicons.com).

## Commands to use the app

### These commands should be run from the root of the project

* `npm run dev`: starts all the workspaces, at the moment there is only two, *frontend*  and *backend*.

* `npm run dev:frontend`: starts only the workspace of the *frontend*.

* `npm run dev:backend`: starts only the workspace of the *backend*.

* `npm run build`: builds all the workspaces.

* `npm run build:backend`: buillds only the workspace of the *backend*.

* `npm run build:frontend`: builds only the workspace of the *frontend*.

* `npm run test`: runs the tests in all the workspaces.

* `npm run test:backend`: runs the tests only for the workspace of the *backend*.

* `npm run test:frontend`: runs the tests only for the workspace of the *frontend* (there isn't any test on the frontend at the moment ).

* `npm run lint`: runs the linter for all the files on the workspaces.

## API endpoints

* With the method ``GET`` and the endpoint ``(HOST)/api/users`` the user should get a body with the array of users, every user is an object.
* With the method ``GET`` and the endpoint ``(HOST)/api/user/:id`` the user should get a body with the user object inside.
* With the method ``POST`` and the endpoint ``(HOST)/api/user`` the user will create a new user and it should return the created object user (without body).
* With the method ``PUT`` and the endpoint ``(HOST)/api/user/:id`` the user will update a existing user, and it should return a body with a message and the updated user object.
* With the method ``DELETE`` and the endpoint ``(HOST)/api/user/:id`` the user will delete the user and it should return a body with a message and the deleted user.
