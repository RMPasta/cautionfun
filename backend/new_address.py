import json
import requests
import os

def get_address():
    # Set up the RPC server connection settings
    url = os.environ.get('REMOTE_VERUS_SERVER_URL')
    username = os.environ.get('REMOTE_VERUS_SERVER_UN')
    password = os.environ.get('REMOTE_VERUS_SERVER_PASS')


    # Construct the JSON-RPC request payload
    payload = {
        "jsonrpc": "1.0",
        "id": "getnewaddress",
        "method": "getnewaddress",
        "params": [],
    }

    # Send the HTTP request to the Verus RPC server
    response = requests.post(
        url,
        headers={"Content-Type": "application/json"},
        data=json.dumps(payload),
        auth=requests.auth.HTTPBasicAuth(username, password),
    )
    # print("------> got response<-------")
    if response.status_code != 200:
        print("Error: HTTP status code ", response.status_code)
        print(response.text)
        return response.text
    else:
        # Parse the JSON response from the server
        result = json.loads(response.text)
        address = result['result']
        # print(result)
        return address
