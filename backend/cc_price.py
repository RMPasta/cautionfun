import json
import requests
import os

def price():
    # print(os.environ.get('REMOTE_VERUS_SERVER'))
    # Set up the RPC server connection settings

    url = os.environ.get('REMOTE_VERUS_SERVER_URL')
    username = os.environ.get('REMOTE_VERUS_SERVER_UN')
    password = os.environ.get('REMOTE_VERUS_SERVER_PASS')

    # Construct the JSON-RPC request payload
    payload = {
        "jsonrpc": "1.0",
        "id": "estimateconversion",
        "method": "estimateconversion",
        "params": ['{"currency":"cc","convertto":"vrsctest","amount":1,"via":"CC-VRSC Pool"}'],
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
        verus = result['result']['estimatedcurrencystate']['currencies']['iJhCezBExJHvtyH3fGhNnt2NhU4Ztkf2yq']['viaconversionprice']
        cc = result['result']['estimatedcurrencystate']['currencies']['iAPgLHjmWZBA4wpfesNT81vMjSoTacgwuU']['viaconversionprice']
        final = verus / cc
        # print(final)
        return final
print(price())
