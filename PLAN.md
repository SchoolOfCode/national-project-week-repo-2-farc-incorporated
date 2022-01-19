# TITLE

## Objective

## Functionalities

Bootcampers will be able to interact with the database by:

- Searching by keyword

## Technical requirements

For this project, We will be using Node.js (ES Module), which requires change on the import package to comply with the ES Module, such as replace required to import/export and add the module:type to the pachage.json on the files.

<details>
<summary>Third-party Libraries</summary>

- Express (wireframes) or Express-generator (create files like public and routes)
- dotenv (enviroment variables)
- nodemon (automatically start and stop the server)
- pg (postgres database)

</details>

<details>
<summary>Languages</summary>

- JavaScript (Back-End)
- SQL (Database)

</details>

<details>
<summary>Database</summary>
- Heroku (host the database on the cloud)

</details>

<details>
<summary>Testing</summary>

- Postman application (Test API in isolation)
- Localhost

</details>

## Implementation Plan

### Set up the APP

- Initialise and install Node.js
- Install third-party libraries
- Make the amends for the ES Module scope
- Test installation

### Set up the Database

- create files according to convention (Db folder) on the the node-postgress documentation.
- create Db > index.js to add the pool configurations

Note: If you have any script to run you can create a sub-folder to add db and populate db.

- create/add db credentials to .env (environment variables) file
- create git.ignore to hide files on gitHub for security reasons and reduce irrelevant/huge files to be upload to gitHub)
- create/update the config.js to incorporate process.env.
- follow the dotenv README and Preload dotenv on the package.json script (So, you don't need to require and load dotenv in your application code)
- Test database connection

### Create GET/POST request

- create the functions described on the APP functionalities at Models > index.js
- create GET/POST requests invoking the function at routes > index.js
- Interact with the DOM (document.querySelector), Fetch the results using an async and await function and add event listener at public > javascripts > index.js.
