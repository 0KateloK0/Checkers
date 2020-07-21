

/*class Player extends React.PureComponent {
	render () {
		let {player: {
			state,
			user: {FIO}
		}, ...rest} = this.props;
		return (
			<li {...rest}>
				<Fio FIO={FIO} />
			</li>
			)
	}
}

class PlayersList extends React.PureComponent {
	render () {
		return (
			<div className="players">
				<ul className="players-list">
				{this.props.players.map(
					(a, i) => <Player key={i} className="players-list__info" player={a}></Player>
					)}
				</ul>
			</div>
			)
	}
}

class Message extends React.PureComponent {
	render () {
		return (
			<div className="message">
				<div className="message-author-av-container">
					<img src={this.props.author.src} alt="" className="message-author-av"/>
				</div>
				<div className="message-body-container">
					<div className="author-name-container">
						<Fio FIO={this.props.author.name} />
					</div>
					<p className="message-body">
						{this.props.body}
					</p>
				</div>
			</div>
			)
	}
}

class Chat extends React.PureComponent {
	render () {
		return (
			<div className="chat">
				<div className="messages-container">
					<div className="messages">
						{
							this.props.messages.map(a => 
								<div className="message-container" key={a.id}>
									<Message body={a.body} author={a.author}/>
								</div>
							)
						}
					</div>
				</div>
				<div className="messages-form-container">
					<div className="messages-form">
						<input type="text"/>
						<input type="submit"/>
					</div>
				</div>
			</div>
			)
	}
}*/


					{/*<div className="chat-container">
						<Chat messages={[{
							author: {
								name: 'Artem Katelkin',
								src: 'Artem.jpg'
							},
							body: 'Privet!',
							id: 1
						}]}/>
					</div>
					<div className="players-list-container">
						<PlayersList players={this.state.players}/>
					</div>*/}