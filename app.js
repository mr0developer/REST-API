//import Express:
const express = require('express');

// set up Express to create an app and configure it to parse requests with JSON payloads.
const app = express ();

app.use(express.json());

// Define a route that listens to requests
const PORT = process.env.PORT || 3000;


app.get("/status", (request, response) => {  
    try {  
      const status = {  
        "status": "running"  
      };  
      
      response.status(200).send(status);  
    } catch (error) {  
      console.error(error);  
      response.status(500).send({ "error": "internal server error" });  
    }  
});

// set up the server to listen on the specified port:
app.listen(PORT, () => {
  console.log("Server Listening on PORT:", PORT);
});
