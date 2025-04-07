# Shopping List API (NODE)

## Overview

The **Shopping List API** is a simple web service that allows users to manage a shopping list through the internet. Built with **Node.js** and **Express**, this API enables users to add, view, update, and delete items from their shopping list. All the data is stored in a JSON file called `list.json`, making it easy to keep track of what you need to buy.

## Key Features

1. **CRUD Operations**: You can perform four essential actions:
   - **Create**: Add new items to your shopping list.
   - **Read**: View all items currently on your list.
   - **Update**: Change the details (like name or quantity) of existing items.
   - **Delete**: Remove items from your list that you no longer need.

2. **Persistent Storage**: Your shopping list is saved in a JSON file, ensuring that your data is kept even when the server is not running.

3. **Simple and Lightweight**: The API is easy to set up and use, making it beginner-friendly.

4. **Error Handling**: If there are problems with your requests (like trying to delete an item that doesn’t exist), the API will give you clear error messages.

## Technologies Used

To build this API, a few key technologies were employed:

- **Node.js**: This is the platform that runs the server-side code.
- **Express**: A framework that simplifies the process of handling web requests and routing.
- **body-parser**: A tool that helps the server read data sent in requests.
- **fs-extra**: A file system module for managing files and directories more easily.
- **JSON**: The format used to store and send data.

## Getting Started

### Prerequisites

Before you can run the API, you need to have a couple of things set up on your computer:

1. **Node.js** (version 14 or higher).
2. **npm**: This usually comes with Node.js and helps you manage packages.

### Installation Steps

1. **Clone the Repository**: Download the API source code from GitHub. Open your terminal and type:
  
   git clone https://github.com/eungobs/node-shopping-list-manager.git
  

2. **Navigate to the Project Directory**: Change to the folder containing the project by typing:
  
   cd shopping-list-manager
  

3. **Install Dependencies**: This step will download and install all the tools your API needs to operate. Type:

   npm install
 

### Running the Server

To start the API server, simply run the following command in your terminal:

node index.js

Once the server is running, you should see a message like this in your terminal:

Server is running on http://localhost:3000


You can now access the API via your web browser or other tools.

## API Endpoints

The API has different endpoints (or URLs) where you can access various functionalities:

1. **Get All Items**:
   - **Endpoint**: `GET /shopping-list`
   - **Description**: Retrieves all items in your shopping list.

2. **Add a New Item**:
   - **Endpoint**: `POST /shopping-list`
   - **Description**: Adds a new item to the shopping list.
   - **Request Body** (must include):
     ```json
     { "name": "Milk", "quantity": 2 }
     ```

3. **Update an Item**:
   - **Endpoint**: `PUT /shopping-list/:id`
   - **Description**: Update an existing item using its index.
   - **Request Body** (must include):
     ```json
     { "name": "Almond Milk", "quantity": 1 }
     ```

4. **Delete an Item**:
   - **Endpoint**: `DELETE /shopping-list/:id`
   - **Description**: Deletes an item by its index.
   - **Response**: No content (204).

## Example Requests

You can interact with the API using curl commands (which you can run in your terminal):

- **Get All Items**:
 
  curl http://localhost:3000/shopping-list
 

- **Add a New Item**:

  curl -X POST http://localhost:3000/shopping-list \
  -H "Content-Type: application/json" \
  -d '{"name": "Bread", "quantity": 1}'
 

- **Update an Item**:

  curl -X PUT http://localhost:3000/shopping-list/0 \
  -H "Content-Type: application/json" \
  -d '{"name": "Whole Wheat Bread", "quantity": 2}'
 

- **Delete an Item**:
  
  curl -X DELETE http://localhost:3000/shopping-list/0


## Folder Structure

Here’s a quick look at how the project files are organized:


shopping-list-api/
├── shopping-list/             # Directory for storing the shopping list 
│   └── list.json             # JSON file containing the shopping list data
├── index.js                   # Entry point for the application 
├── package.json               # Project dependencies and scripts 
├── README.md                  # Documentation 
└── .gitignore                 # Files and directories to ignore in Git 
```

## Contributing

If you'd like to help improve the API, contributions are welcome! You can follow these steps:

1. **Fork the Repository**: Make a copy of the project in your GitHub account.
2. **Create a New Branch**: Work on your changes in a separate branch.
3. **Commit Your Changes**: Save your changes.
4. **Push Your Branch**: Send your changes back to the original repository with a pull request.


