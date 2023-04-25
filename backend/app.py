from flask import Flask, render_template
from testrpc import testrpc

app = Flask(__name__)

print('----------->landing page route<-----------')
@app.route("/")
def landing_page():
    # Run the testrpc.py script and retrieve the value of the final variable
    data = testrpc()
    print(data)
    # Extract the final value from the dictionary
    final = data['final']
    # Render the landing page and pass the final variable to the template
    return render_template('landing_page.html', final=final)
