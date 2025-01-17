// Import required modules
const express = require('express'); // Express framework for building the API
const bodyParser = require('body-parser'); // Middleware to parse incoming request bodies
const fs = require('fs-extra'); // Enhanced file system module for managing files and directories
const path = require('path'); // Utility module for handling file paths

// Initialize the Express app
const app = express();
const PORT = 3000; // Port on which the server will run

// Define paths for the shopping list directory and JSON file
const directoryPath = path.join(__dirname, 'shopping-list'); // Path to the shopping-list directory
const filePath = path.join(directoryPath, 'list.json'); // Path to the list.json file inside the shopping-list directory

// Middleware to parse JSON request bodies
app.use(bodyParser.json());

// Create the shopping-list directory if it doesn't already exist
fs.ensureDirSync(directoryPath);

// Create the list.json file if it doesn't already exist
if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, JSON.stringify([])); // Initialize with an empty array
}

// Root route to welcome users
app.get('/', (req, res) => {
    res.send('Welcome to the Shopping List API! Use /shopping-list to manage your items.');
});

// Utility function to read the shopping list from the JSON file
const readShoppingList = () => {
    return fs.readJsonSync(filePath); // Read and parse the JSON file
};

// Utility function to write the shopping list to the JSON file
const writeShoppingList = (data) => {
    fs.writeJsonSync(filePath, data, { spaces: 2 }); // Write data to the file with pretty-printing (2 spaces)
};

// CRUD operations for the shopping list

// 1. Get all shopping list items
app.get('/shopping-list', (req, res) => {
    const shoppingList = readShoppingList(); // Read the current shopping list
    res.json(shoppingList); // Send the shopping list as a JSON response
});

// 2. Add a new item to the shopping list
app.post('/shopping-list', (req, res) => {
    const newItem = req.body; // Get the new item from the request body

    // Validate that the item has a name
    if (!newItem.name) {
        return res.status(400).json({ error: 'Item name is required' }); // Return an error if the name is missing
    }

    const shoppingList = readShoppingList(); // Read the current shopping list
    shoppingList.push(newItem); // Add the new item to the list
    writeShoppingList(shoppingList); // Save the updated list to the file
    res.status(201).json(newItem); // Return the newly added item with a 201 status (Created)
});

// 3. Update an existing item in the shopping list
app.put('/shopping-list/:id', (req, res) => {
    const id = parseInt(req.params.id); // Get the item ID from the URL parameters
    const updatedItem = req.body; // Get the updated item data from the request body
    const shoppingList = readShoppingList(); // Read the current shopping list

    // Check if the item exists
    if (!shoppingList[id]) {
        return res.status(404).json({ error: 'Item not found' }); // Return an error if the item doesn't exist
    }

    shoppingList[id] = updatedItem; // Update the item in the list
    writeShoppingList(shoppingList); // Save the updated list to the file
    res.json(updatedItem); // Return the updated item
});

// 4. Delete an item from the shopping list
app.delete('/shopping-list/:id', (req, res) => {
    const id = parseInt(req.params.id); // Get the item ID from the URL parameters
    const shoppingList = readShoppingList(); // Read the current shopping list

    // Check if the item exists
    if (!shoppingList[id]) {
        return res.status(404).json({ error: 'Item not found' }); // Return an error if the item doesn't exist
    }

    shoppingList.splice(id, 1); // Remove the item from the list
    writeShoppingList(shoppingList); // Save the updated list to the file
    res.status(204).send(); // Return a 204 status (No Content) to indicate success
});

// Start the server and listen on the specified port
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
