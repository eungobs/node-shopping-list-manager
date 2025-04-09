# Shopping List API (Node)

## Overview

The **Shopping List API** is like a digital helper that allows you to manage a shopping list over the internet. Built using **Node.js** and **Express**, this API lets you do everything you need with your shopping list—like adding, viewing, updating, and removing items. All of the information is saved in a simple JSON file called `list.json`, making it super easy for you to keep track of what you need to buy!

## Key Features

1. **CRUD Operations**: This API lets you do four important things with your shopping list:
   - **Create**: Add new items to your shopping list.
   - **Read**: See all items that are currently on your list.
   - **Update**: Change the details (like the name or how many you want) of things already on your list.
   - **Delete**: Remove items from your list that you no longer need.

2. **Persistent Storage**: Your shopping list is saved in the `list.json` file. This means that even if the computer is turned off, your list isn't lost!

3. **Simple and Lightweight**: This API is easy to set up and use, which makes it perfect for beginners.

4. **Error Handling**: If something goes wrong (like trying to delete an item that isn’t on the list), the API will give you helpful error messages to let you know what happened.

## Technologies Used

To build this API, we used some important tools:

- **Node.js**: This is like a superhero that runs the server-side code.
- **Express**: This is a helpful framework that makes handling web requests easier.
- **body-parser**: This lets the server read and understand data that comes in from your requests.
- **fs-extra**: This is a tool that makes working with files and folders easier.
- **JSON**: This is how we store and send data back and forth!

## Getting Started

### Prerequisites

Before you can run the Shopping List API, you need to have a few things ready on your computer:

1. **Node.js**: Make sure you have version **14** or higher installed.
2. **npm**: This comes with Node.js and helps manage packages (like getting your toys in order).

### Installation Steps

Now let’s set up the API step by step, like following a recipe!

#### Step 1: Clone the Repository

First, we need to download the source code for the API from GitHub. This is like copying a recipe from a book. Open your terminal (the command center for your computer), and type this:

git clone https://github.com/eungobs/node-shopping-list-manager.git

This will create a copy of the shopping list code on your computer.

#### Step 2: Navigate to the Project Directory

Next, we need to go into the folder where the API code is kept. Type this in your terminal:

cd node-shopping-list-manager


#### Step 3: Install Dependencies

Now, we need to download all the tools (or packages) that the API needs to run. Type this command:

npm install


### Running the Server

To start the API server, run this command in your terminal:

node index.js

When the server is running, you should see a message like this:

Server is running on http://localhost:3000

Now you can access the API using your web browser or other tools you might like!

## API Endpoints

The API has different places (or endpoints) you can visit to do different actions:

1. **Get All Items**:
   - **Endpoint**: `GET /shopping-list`
   - **Description**: This lets you see all items in your shopping list.

2. **Add a New Item**:
   - **Endpoint**: `POST /shopping-list`
   - **Description**: This lets you add a new item to your shopping list.
   - **Request Body**: You must include the name and quantity for the new item, like this:
     ```json
     { "name": "Milk", "quantity": 2 }
    

3. **Update an Item**:
   - **Endpoint**: `PUT /shopping-list/:id`
   - **Description**: This updates an item using its index (like its position on the list).
   - **Request Body**: You must include the new name and quantity, like this:
     ```json
     { "name": "Almond Milk", "quantity": 1 }
    

4. **Delete an Item**:
   - **Endpoint**: `DELETE /shopping-list/:id`
   - **Description**: This removes an item from your list by its index.
   - **Response**: There will be no content (204) sent back.

## Example Requests

You can test the API using **curl** commands (which are like asking the server questions from your terminal):

1. **Get All Items**:
  
   curl http://localhost:3000/shopping-list
  

2. **Add a New Item**:
  
   curl -X POST http://localhost:3000/shopping-list -H "Content-Type: application/json" -d '{"name": "Bread", "quantity": 1}'
  

3. **Update an Item**:
  
   curl -X PUT http://localhost:3000/shopping-list/0 -H "Content-Type: application/json" -d '{"name": "Whole Wheat Bread", "quantity": 2}'
  

4. **Delete an Item**:
  
   curl -X DELETE http://localhost:3000/shopping-list/0
 

## Folder Structure

Let’s take a look at how the files in this project are organized, which is like knowing where your toys are:


shopping-list-api/
├── shopping-list/            # Directory for storing the shopping list data
│   └── list.json            # JSON file containing the shopping list
├── index.js                  # This is the main entry point for the application
├── package.json              # Lists project dependencies and scripts
├── README.md                 # Documentation about the project
└── .gitignore                # Tells Git which files to ignore


