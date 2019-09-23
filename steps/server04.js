// In order to the user to be able to communicate with the server, your application should implemented an endpoint for each HTTP method you want to treat
// There are several HTTP methods but the most used are:

//    GET: requests a representation of the specified resource, sould only retrieve data (e.g. html pages, json content)
//    POST: creates or modify a resource within the aplication (e.g. new user, login)
//    PUT: to modify an existing resource (e.g. update user infos)
//    DELETE: to remove an resource from the server (e.g. clear todos tasks)

// Now let's try to create a endpoint for the users to communicate with the application usign the GET method
// The app instance has a method for each HTTP method with tha same name
// We want the user to be able to get information from the server in the root URL

// Try to create the pattern that print a message on the console when user access 'http://localhost:3000/'
// P.S.: the app http method receives and callback function

const express = require('express');
const app = express();
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
