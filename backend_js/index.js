const express = require('express');
const axios = require('axios');

const app = express();
const port = 3000;

// Set up the RPC server connection settings
const url = 'http://127.0.0.1:18299/';
const username = 'verusdesktop';
const password = 'hy4ta1owGydtKevfh0BLyRBe9tRoGIW0wZA_8zNbKFM';
const chain = 'VRSCTEST';

app.get('/getnewaddress', (req, res) => {
  // Set up the RPC method and parameters
  const rpc_method = 'getnewaddress';
  const params = [];

  // Construct the JSON-RPC request payload
  const payload = {
    jsonrpc: '1.0',
    id: 'getaddress',
    method: rpc_method,
    params: params,
  };

  // Send the HTTP request to the Verus RPC server
  axios.post(url, payload, {
    headers: {
      'Content-Type': 'application/json',
    },
    auth: {
      username: username,
      password: password,
    },
  })
    .then((response) => {
      if (response.status !== 200) {
        console.error(`Error: HTTP status code ${response.status}`);
        console.error(response.data);
        return res.status(500).send('Error: Failed to get new address');
      }
      // Parse the JSON response from the server
      const result = response.data.result;
      console.log(result);
      return res.status(200).send(result);
    })
    .catch((error) => {
      console.error('Error: ', error.message);
      return res.status(500).send('Error: Failed to get new address');
    });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
