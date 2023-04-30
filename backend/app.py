from flask import Flask, render_template
from cc_price import price
from cc_info import ccinfo
from cc_claims import claimsleft
from testrpc import testrpc
from flask_cors import CORS

app = Flask(__name__)
CORS(app, origins=['http://localhost:3000'])

@app.route('/getaddress')
def getaddress():
    data = testrpc()
    return str(data)

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
