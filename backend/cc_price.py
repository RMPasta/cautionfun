import json
import requests
import os

def price():
    print(os.environ.get('REMOTE_VERUS_SERVER'))
    # Set up the RPC server connection settings
    url = "http://3.90.45.83/"
    username = "user2440744724"
    password = "pass0f10a612e92173c85ec9703822ca3f34280977ee1116c6a9f3ca85a9a1a7a378d6"

    # Construct the JSON-RPC request payload
    payload = {
        "jsonrpc": "1.0",
        "id": "getnewaddress",
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
