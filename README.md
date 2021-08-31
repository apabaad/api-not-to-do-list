# Not to do task list api

This is the backend project build with Node, Express and MongoDB for React frontend application

# How to run

- clone the project
- run `npm install`
- run `npm start`
- make sure your system has nodemon prior to running this application. If you don't, run `npm i -g nodemon`

# APIs

All the api will follow the `{routerUrl}/api/v1` patterns

| #   | Method   | Path | Description                                                                                              |
| --- | -------- | ---- | -------------------------------------------------------------------------------------------------------- |
| 1.  | `GET`    | `/`  | Return all the tasks                                                                                     |
| 2.  | `POST`   | `/`  | Expects task object stores task in the DB and returns stored data or null if unable to store the data    |
| 3.  | `PATCH`  | `/`  | Expects id and the instruction on what to update in the DB.                                              |
| 4.  | `DELETE` | `/`  | Expects id and the instruction on what to delete in the DB and returns success or unsuccess information. |
