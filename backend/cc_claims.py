import json
import requests
import os

def claimsleft():
    url = os.environ.get('REMOTE_VERUS_SERVER_URL')
    username = os.environ.get('REMOTE_VERUS_SERVER_UN')
    password = os.environ.get('REMOTE_VERUS_SERVER_PASS')

    # Construct the JSON-RPC request payload
    payload = {
        "jsonrpc": "1.0",
        "id": "remaining_claims",
        "method": "getaddressbalance",
        "params": ['{"addresses": ["claim@"]}'],
    }

    # Send the HTTP request to the Verus RPC server
    response = requests.post(
        url,
        headers={"Content-Type": "application/json"},
        data=json.dumps(payload),
        auth=requests.auth.HTTPBasicAuth(username, password),
    )

    if response.status_code != 200:
        print("Error: HTTP status code ", response.status_code)
        print(response.text)
    else:
        # Parse the JSON response from the server
        result = json.loads(response.text)
        final = result['result']['currencybalance']['iAPgLHjmWZBA4wpfesNT81vMjSoTacgwuU']
        # print(final)
        return final
