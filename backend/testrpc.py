import json
import requests

def testrpc():
    # Set up the RPC server connection settings
    # url = "http://192.168.1.156:18299"
    # password = "g52bCKWjB19Joe6TwDwBvCea7yqWUt4ozpJKNlIKxfM"

    url = "http://127.0.0.1:18299"
    password = "hy4ta1owGydtKevfh0BLyRBe9tRoGIW0wZA_8zNbKFM"

    # url = "http://3.80.122.208:80/"
    # password = "pass0f10a612e92173c85ec9703822ca3f34280977ee1116c6a9f3ca85a9a1a7a378d6"

    username = "user2440744724"

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
        print(result)
        # final = result['result']
        # print(final)
        return {'final': result}

print(testrpc())
