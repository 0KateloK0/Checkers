import React from 'react';

export default class App extends React.Component {
	render () {
		return (
			<form action="/">
				<label>
					email:
					<input type="text" name="email"/>
				</label>
				<br/>
				<label>
					password:
					<input type="text" name="password"/>
				</label>
				<input type="submit"/>
			</form>
			)
	}
}