import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class AddTodo extends Component {
	state = {
		title: '',
		disabled: true
	};

	onSubmit = (e) => {
		e.preventDefault();
		this.props.addTodo(this.state.title);
		this.setState({ title: '', disabled: true });
	};

	onChange = (e) =>
		this.setState({
			[e.target.name]: e.target.value,
			disabled: e.target.value.length > 0 ? false : true
		});

	render() {
		return (
			<form onSubmit={this.onSubmit} style={{ display: 'flex' }}>
				<input
					type='text'
					name='title'
					style={{ flex: '10', padding: '5px' }}
					placeholder='Add Todo ...'
					value={this.state.title}
					onChange={this.onChange}
				/>
				<input
					type='submit'
					value='Submit'
					className='btn'
					style={{ flex: '1' }}
					disabled={this.state.disabled}
				/>
			</form>
		);
	}
}

// PropTypes
AddTodo.propTypes = {
	addTodo: PropTypes.func.isRequired
};

export default AddTodo;
