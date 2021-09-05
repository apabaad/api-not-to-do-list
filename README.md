# Not to do task list api

This the backend project build with Node, Express and MongoDB for our React frontend application.

## How to run

- clone the project
- run `npm install`
- run `npm start`
- Make sure your system has nodemon prior to running this application, If you don't then run `npm i -g nodemon`

## APIs

All the api will follow the `{rootUrl}/api/v1/` patterns

| #   | Method   | Path   | Description                                                                                                          |
| --- | -------- | ------ | -------------------------------------------------------------------------------------------------------------------- |
| 1.  | `GET`    | `/_id` | `@_id` is optional parameter, if task id is sent, it will return a single task otherwise it will return all the task |
| 2.  | `POST`   | `/`    | Expects task object stores tas in the database and return the stored data or null if unable to store the data        |
| 3.  | `PATCH`  | `/`    | Expects id and the instruction on what to update in the database                                                     |
| 4.  | `DELETE` | `/`    | Expects id and deletes data from the database and returns success or unsuccess information                           |
