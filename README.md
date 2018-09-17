# User crud application

# Requirements

- MySQL installed(MySQL server must be running on 3306 port!!)
- A database called user_crud created
- Maven installed
- Java 8+ installed
- yarn or npm installed

# How to?

- Create a database with name 'user_crud'
- MySQL server must be running on 3306 port or changes the configurations on: /server/src/main/resources/application.properties
- Run this command: mvn spring-boot:run
- This server will running on 8080 port!

- Browse to main path (/client)
- Run this command `yarn && yarn start` or `npm install && npm run start`
- Your application is runnning on localhost:3000 !!

# Server routes

- GET /api/v1/user/ (get all users)
- GET /api/v1/user/{searchParam} (get users by param, search by name, username or email)
- POST /api/v1/user/generate/{countUser} (generate random users, if countUser = 0 only returns all users)
- POST /api/v1/user/save (create or edit user)
- DELETE /api/v1/user/delete/{userId} (delete user by id)

# Libraries(or tecnologies) used

- Java 8
- Spring boot
- Spring data(jpa)
- Spring rest
- Project lombok
- MySQL database connector
- Javascript/ES6
- React JS
- Material-ui
- Recompose(for HOC components)
- moment.js
- React router

# Disclaimer

This project is created for tests and studies porposes
