Shopping List API(NODE)


The Shopping List API is a simple RESTful API built with Node.js and Express. It allows users to manage a shopping list by performing CRUD (Create, Read, Update, Delete) operations on items. The data is stored in a JSON file (list.json) within a shopping-list directory.

Table of Contents
Features

Technologies Used

Getting Started

Prerequisites

Installation

Running the Server

API Endpoints

Get All Items

Add a New Item

Update an Item

Delete an Item

Example Requests

Folder Structure

Contributing


Features
CRUD Operations: Create, read, update, and delete shopping list items.

Persistent Storage: Data is stored in a JSON file (list.json).

Simple and Lightweight: Built with Node.js and Express for easy setup and use.

Error Handling: Proper error responses for invalid requests.

Technologies Used
Node.js: JavaScript runtime for building the server.

Express: Web framework for handling HTTP requests and routing.

body-parser: Middleware for parsing incoming request bodies.

fs-extra: Enhanced file system module for managing files and directories.

JSON: Data storage format for the shopping list.

Getting Started
Prerequisites
Before running the project, ensure you have the following installed:

Node.js (v14 or higher)

npm (comes with Node.js)

Installation
Clone the repository:

git clone https://github.com/eungobs/node-shopping-list-manager.git



cd shopping-list-manager
Install dependencies:

npm install
Running the Server
To start the server, run:

node index.js
The server will start on http://localhost:3000. You should see the following message in the terminal:


Server is running on http://localhost:3000
API Endpoints
Get All Items
Endpoint: GET /shopping-list

Description: Retrieve all items in the shopping list.

Response: Array of shopping list items.

Add a New Item
Endpoint: POST /shopping-list

Description: Add a new item to the shopping list.

Request Body:

json
Copy
{
  "name": "Milk",
  "quantity": 2
}
Response: The newly added item.

Update an Item
Endpoint: PUT /shopping-list/:id

Description: Update an existing item by its index (id).

Request Body:

{
  "name": "Almond Milk",
  "quantity": 1
}
Response: The updated item.

Delete an Item
Endpoint: DELETE /shopping-list/:id

Description: Delete an item by its index (id).

Response: No content (204).

Get All Items

To start the Node.js server, run:

node index.js

curl http://localhost:3000/shopping-list
Add a New Item

curl -X POST http://localhost:3000/shopping-list \
  -H "Content-Type: application/json" \
  -d '{"name": "Bread", "quantity": 1}'
Update an Item

curl -X PUT http://localhost:3000/shopping-list/0 \
  -H "Content-Type: application/json" \
  -d '{"name": "Whole Wheat Bread", "quantity": 2}'
Delete an Item

curl -X DELETE http://localhost:3000/shopping-list/0

Folder Structure

shopping-list-api/
├── shopping-list/          # Directory for storing the shopping list
│   └── list.json           # JSON file containing the shopping list data
├── index.js                # Entry point for the application
├── package.json            # Project dependencies and scripts
├── README.md               # Documentation
└── .gitignore              # Files and directories to ignore in Git

Contributing
Contributions are welcome! If you'd like to contribute, please follow these steps:

Fork the repository.

Create a new branch for your feature or bugfix.

Commit your changes.

Push your branch and submit a pull request.

Acknowledgments
Built with ❤️ using Node.js and Express.