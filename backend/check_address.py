import json
import requests
import os
# from dotenv import load_dotenv

def check_new_address(address):
    # load_dotenv()
    # var = os.getenv("REMOTE_VERUS_SERVER")
    # print(var)
    # Set up the RPC server connection settings
    # url = "http://192.168.1.156:18299"
    # password = "g52bCKWjB19Joe6TwDwBvCea7yqWUt4ozpJKNlIKxfM"

    # url = "http://127.0.0.1:18299"
    # password = "hy4ta1owGydtKevfh0BLyRBe9tRoGIW0wZA_8zNbKFM"

    url = "http://3.90.45.83/"
    password = "pass0f10a612e92173c85ec9703822ca3f34280977ee1116c6a9f3ca85a9a1a7a378d6"
    username = "user2440744724"
    # Construct the JSON-RPC request payload
    payload = {
        "jsonrpc": "1.0",
        "id": "getaddressbalance",
        "method": "getaddressbalance",
        # "params": json.loads('{"addresses": ["{address}"]}'.format(address=address)),
        "params": [{"addresses": [address]}],
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
        print(result)
        print(address)
        if not result['error']:
            balance = result['result']['balance']
            return balance
        else:
            print("problem checking address...")
            return "oops"
