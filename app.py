from flask import Flask, Response, url_for
from flask_cors import CORS 
import threading
app = Flask(__name__)

CORS(app)

from routes import *

if __name__ == '__main__':

    app.run(debug=True)
    