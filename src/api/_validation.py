import functools

from flask import request

from src.api.constants import API_KEY_HEADER
from src.api.exceptions import APIKeyNotSpecifiedError, APIKeyNotAuthorizedError, NoFileAttachedError, \
    NoFileSelectedError
from src.api.test.constants import INVALID_API_KEY


def needs_authentication(f):
    @functools.wraps(f)
    def wrapper(*args, **kwargs):
        if API_KEY_HEADER not in request.headers:
            raise APIKeyNotSpecifiedError

        if request.headers[API_KEY_HEADER] == INVALID_API_KEY:
            raise APIKeyNotAuthorizedError

        return f(*args, **kwargs)

    return wrapper


def needs_attached_file(f):
    @functools.wraps(f)
    def wrapper(*args, **kwargs):
        if 'file' not in request.files:
            raise NoFileAttachedError

        file = request.files['file']
        if file.filename == '':
            raise NoFileSelectedError

        return f(*args, **kwargs)

    return wrapper
