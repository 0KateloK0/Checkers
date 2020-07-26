# Checkers

This is my checkers

To run server on new platform you need (only for Windows):
  1. install python
  2. open command line
  install virtual environment into your working directory using command (instead of virt may be your name):
    python -m venv virt
  if this wouldn't work, probably you don't have installed virtualenv package
  3. acitvate virtual environment using command:
    virt\scripts\activate
  4. install other needed packages using:
    pip install flask flask_sqlalchemy flask_migrate flask_login flask_socketio flask-wtf email_validator
  5. use command:
    set flask_app=checkers.py
  6. run the app using:
    flask run
    App will be running on localhost:5000
