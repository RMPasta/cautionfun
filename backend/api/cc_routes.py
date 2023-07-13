from flask import Blueprint, request, abort
from app import db
# from cc_helpers.cc_price import price
# from cc_helpers.cc_info import ccinfo
# from cc_helpers.cc_claims import claimsleft
# from cc_helpers.testrpc import testrpc

cc_routes = Blueprint('cc_routes', __name__)


# @app.route('/getaddress')
# def getaddress():
#     data = testrpc()
#     return str(data)

# @app.route('/price')
# def getprice():
#     data = price()
#     return str(data)

# @app.route('/ccinfo')
# def getccinfo():
#     data = ccinfo()
#     return str(data)

# @app.route('/claimsleft')
# def getclaimleft():
#     data = claimsleft()
#     return str(data)
