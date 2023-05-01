from flask import Flask, render_template, request
from cc_price import price
from cc_info import ccinfo
from cc_claims import claimsleft
from new_address import get_address
from check_address import check_new_address
from flask_cors import CORS

app = Flask(__name__)
CORS(app, origins=['http://localhost:3000'])

@app.route('/getaddress')
def getaddress():
    data = get_address()
    return str(data)

@app.route('/checkaddress', methods=["POST"])
def checkaddress():
    response = request.get_json()
    address = response['data']
    data = check_new_address(address)
    if data != "oops":
        balance = int(data) / 100000000
        return str(balance)
    else:
        return "0"

@app.route('/price')
def getprice():
    data = price()
    return str(data)

@app.route('/ccinfo')
def getccinfo():
    data = ccinfo()
    return str(data)

@app.route('/claimsleft')
def getclaimleft():
    data = claimsleft()
    return str(data)
