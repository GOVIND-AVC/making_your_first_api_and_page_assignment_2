// Boilerplate Code for HTTP Status Code API
const express = require('express')
const app = express()

app.get('/status-info',(req,res)=>{
  const code = req.query.code

  let status;
  let message;

  switch(code){
    case 200:
      status=200;
      message="OK: The request has succeeded. The meaning of this status depends on the HTTP method used.";
      break;
    case 404:
      status=404;
      message="Not Found: The server has not found anything matching the request URI. This is often caused by a missing page or resource.";
      break;
    case 500:
      status=500;
      message="Internal Server Error: The server encountered an unexpected condition that prevented it from fulfilling the request.";
      break;
    case 400:
      status=400;
      message="Bad Request: The server cannot process the request due to client-side errors (e.g., malformed syntax).";
      break;
    case 201:
      status=201;
      message="the request was successfully fulfilled and resulted in one or possibly multiple new resources being created.";
      break;
    case 204:
      status=204;
      message=" the server successfully processed the client's request but does not need to return any content.";
      break;
    case 401:
      status=401;
      message="the request lacks valid authentication credentials for the requested resource."
      break;
    case 403:
      status=403;
      message="access to the requested resource is forbidden"
      break;
    case 405:
      status=405;
      message=" the server has received a request method that is not supported for the target resource."
      break;
    case 429:
      status=429;
      message="Too Many Requests "
      break;
    case 502:
      status=502;
      message=" the server acting as a gateway or proxy was unable to connect to the upstream server or received an invalid response from it."
      break;
    case 503:
      status=503;
      message=" the server is currently unable to handle the incoming requests"
      break;
    case 504:
      status=504;
      message="gateway timeout"  
      break;
    default:
      message="status code not recognized"

  }

  res.json({
    status:status,
    message:message

  });

})



const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Status Code API is running on http://localhost:${PORT}`);
});


/*
Task:
You need to create an API that helps users understand different HTTP status codes and their meanings.

Requirements:
1. Create a GET endpoint at "/status-info".
2. The endpoint should accept a "code" as a query parameter (e.g., /status-info?code=200).
3. Based on the status code provided, the API should respond with:
   a. The status code.
   b. A description of the status code.

Example Responses:
- For 200 (OK):
  Request: /status-info?code=200
  Response:
  {
    "status": 200,
    "message": "OK: The request has succeeded. The meaning of this status depends on the HTTP method used."
  }

- For 404 (Not Found):
  Request: /status-info?code=404
  Response:
  {
    "status": 404,
    "message": "Not Found: The server has not found anything matching the request URI. This is often caused by a missing page or resource."
  }

- For 500 (Internal Server Error):
  Request: /status-info?code=500
  Response:
  {
    "status": 500,
    "message": "Internal Server Error: The server encountered an unexpected condition that prevented it from fulfilling the request."
  }

- For 400 (Bad Request):
  Request: /status-info?code=400
  Response:
  {
    "status": 400,
    "message": "Bad Request: The server cannot process the request due to client-side errors (e.g., malformed syntax)."
  }

List of Status Codes to Handle:
200, 201, 204, 400, 401, 403, 404, 405, 429, 500, 502, 503, 504
*/