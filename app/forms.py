from app import app, db
from flask_wtf import FlaskForm
from wtforms import StringField, SubmitField, PasswordField, BooleanField
from wtforms.validators import Email, DataRequired, EqualTo

class LoginForm(FlaskForm):
	email = StringField('Email', validators=[DataRequired(), Email()])
	password = PasswordField('Password', validators=[DataRequired()])
	rem = BooleanField('Remember Me')
	submit = SubmitField('Sign In')

class RegisterForm(FlaskForm):
	email = StringField('Email', validators=[DataRequired(), Email()])
	password = PasswordField('Password', validators=[DataRequired()])
	password2 = PasswordField('Password repeat', validators=[DataRequired(), EqualTo('password')])
	first_name = StringField('First name', validators=[DataRequired()])
	second_name = StringField('Second name', validators=[DataRequired()])
	submit = SubmitField('Sign Up')
	def get_FIO (self):
		return '{} {}'.format(self.first_name.data, self.second_name.data)