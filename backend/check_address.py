import json
import requests
import os
# from dotenv import load_dotenv

def check_new_address(address):

    url = os.environ.get('REMOTE_VERUS_SERVER_URL')
    username = os.environ.get('REMOTE_VERUS_SERVER_UN')
    password = os.environ.get('REMOTE_VERUS_SERVER_PASS')

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
