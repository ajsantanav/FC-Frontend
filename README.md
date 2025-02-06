
# D&D Companion App

This project is a dnd companion app that introduces people easily to character creation of DnD. The application do not have a lot as of yet. You can simply see your user profile, characters that you have created, give them stats and delete. while request everything from a database.

the backend creates, reads, updated and deletes email accounts. Utilizes cors to allow others to use the api. reads, creates and deletes characters.


## Lessons Learned

As a recent learner of MERN Fullstack. This project was a huge learning experience, as it require a lot of continuous testing. One of the learning lessons I got from this was in MongoDB unlike SQL if you want a user to be relate to an object or own an object, it has to be nested within the user as a unique object with its own ID. 

As for front-end to back-end. A lot of testing is required. My initial user to the database was injected vs being created with the same criteria that I used for the routes. 
jwt, and tokens are a huge part of user login/creation information, which was missed through injection of the seed.

Never the less, I do not feel discouraged. I will come back to this project and make sure I add the other features I wanted, and this has inspired me to create more MERN Fullstack projects. 

## Tech Stack

**Client:** React, HTML, CSS

**Server:** Node, Express, CORS, MongoDB, Mongoose [Check package.json for more]


## Acknowledgements

 - [D&D 5e SRD API](https://5e-bits.github.io/docs/)


## Features

- Races and Classes with image and short description
- Profile and tracker of your characters
- Character Creation
- WIP Dice Features


## Deployment

To deploy this project run

```bash
  npm run dev
```

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`MONGO_URI`

`PORT`

`jwtSecret`


## Demo

- [Front end](https://67a4c309f4500d00c25b43fc--gentle-truffle-42eb7a.netlify.app/)
- [Back end](https://fc-backend-65yq.onrender.com/api/users/)

## API Reference

This can be test while using postman and should not give any trouble

**Read**

```http
  GET /api/users/
```
```http
  GET /api/users/${id}/
```
```http
  GET /api/users/${id}/characters
```
```http
  GET /api/users/${id}/characters/${id}
```

**Post**

```http
  POST /api/users/
```
```http
  POST /api/users/${id}/characters
```

**Update**

```http
  PUT /api/users/${id}
```

**Delete**

```http
  DELETE /api/users/${id}
```

```http
  DELETE /api/users/${userid}/characters/${characterId}
```
## Repositories

- [Back end](https://github.com/ajsantanav/FC-Backend)
- [Front end](https://github.com/ajsantanav/FC-Frontend)