import json
import requests

def testrpc():
    # Set up the RPC server connection settings
    url = "http://192.168.1.156:18299"
    username = "verusdesktop"
    password = "g52bCKWjB19Joe6TwDwBvCea7yqWUt4ozpJKNlIKxfM"

    # Construct the JSON-RPC request payload
    payload = {
        "jsonrpc": "1.0",
        "id": "getnewaddress",
        "method": "getnewaddress",
        "params": [],
    }

    # print('-----------> testrpc function <-----------')
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
    else:
        # Parse the JSON response from the server
        result = json.loads(response.text)
        final = result['result']
        print(final)
        return {'final': final}

print(testrpc())
