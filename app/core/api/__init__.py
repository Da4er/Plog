from flask import Blueprint

api = Blueprint('api', __name__)

from . import register
from . import errors
from . import login
from . import article
