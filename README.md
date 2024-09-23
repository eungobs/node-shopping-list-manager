Shopping List API
This is a simple Shopping List API built using Node.js, Express, and fs-extra for file management. It allows you to perform basic CRUD (Create, Read, Update, Delete) operations on a shopping list stored as a JSON file.

Features
Get all shopping list items: Retrieve the entire shopping list.
Add a new item: Add a new item to the shopping list.
Update an item: Modify an existing item by its index.
Delete an item: Remove an item from the shopping list by its index.
Requirements
To run this API, you need to have the following installed:

Node.js (v12.x or newer)
npm (Node package manager)
Getting Started
Installation
Clone the repository:

https://github.com/eungobs/node-shopping-list-manager.git
Navigate to the project directory:

cd shopping-list-manager
Install the dependencies:

npm install
Start the Server
To start the server, run the following command:


npm start
The server will start at http://localhost:3000.

API Endpoints
1. Root Route
URL: /
Method: GET
Description: Displays a welcome message and basic usage instructions.
2. Get All Items
URL: /shopping-list
Method: GET
Description: Fetches all items in the shopping list.
Response: A JSON array of all shopping list items.
3. Add a New Item
URL: /shopping-list
Method: POST
Description: Adds a new item to the shopping list.
Request Body:
name (string, required): The name of the item to be added.

4. Update an Item
URL: /shopping-list/:id
Method: PUT
Description: Updates an item in the shopping list by its index.
Request Body:
name (string, required): The new name of the item.

5. Delete an Item
URL: /shopping-list/:id
Method: DELETE
Description: Deletes an item from the shopping list by its index.
Response: Status 204 (No Content) if successful.
Folder Structure
graphql
Copy code
shopping-list-api/
│
├── shopping-list/         # Directory that contains the shopping list JSON file
│   └── list.json          # JSON file that stores the shopping list
├── server.js              # Main server file
├── package.json           # Project metadata and dependencies
└── README.md              # Project documentation
Error Handling
If an item is not found, a 404 response will be returned with an error message.
If an invalid request is made (e.g., missing name in the request body), a 400 response with an error message will be returned.
How It Works
Data Storage: The shopping list is stored in list.json, located in the shopping-list directory. The file is created if it doesn't exist.
File Operations:
The fs-extra library is used to ensure the directory and file exist before performing any operations.
All CRUD operations are performed on the list.json file, which is read and written synchronously using fs.readJsonSync() and fs.writeJsonSync().
Dependencies
express: Web framework for handling routes and requests.
body-parser: Middleware for parsing JSON request bodies.
fs-extra: File system operations with additional features (e.g., ensureDirSync, readJsonSync, writeJsonSync).
path: Utility for handling file paths.
