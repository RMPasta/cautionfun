import json
import requests

def ccinfo():
    url = "http://3.80.122.208:80/"
    username = "user2440744724"
    password = "pass0f10a612e92173c85ec9703822ca3f34280977ee1116c6a9f3ca85a9a1a7a378d6"

    # Construct the JSON-RPC request payload
    payload = {
        "jsonrpc": "1.0",
        "id": "cc_info",
        "method": "getcurrency",
        "params": ['cc'],
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
        final = result['result']['bestcurrencystate']['supply']
        print(final)
        return final
