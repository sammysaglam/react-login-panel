import React from 'react';

export default class LoginForm extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			customFields:{}
		};

		this.onFieldChange = this.onFieldChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}

	onFieldChange(fieldId , newVal) {

		// save field's new value to state
		this.setState({
			customFields:{
				...this.state.customFields ,
				[fieldId]:newVal
			}
		});
	}

	onSubmit(event) {
		event.preventDefault();

		this.props.submitForm(this.state.customFields);
	}

	render() {

		const {showFormTitles , lang , formFields , showLoginForm , loggingIn , loginFailed , loginFailedMessage} = this.props;
		const {onSubmit , onFieldChange} = this;

		const classNames = [
			'login-form' ,
			showLoginForm ? 'show' : null ,
			loggingIn ? 'logging-in' : null ,
			loginFailed ? 'login-failed' : null
		].filter(className => className).join(' ');

		return (
			<div className={classNames}>
				{showFormTitles && <h2>{lang.login}</h2>}
				{loginFailed && loginFailedMessage ?

					(typeof loginFailedMessage === 'function' ? loginFailedMessage() : loginFailedMessage)
					:
					null
				}
				<form onSubmit={onSubmit}>
					{
						formFields.map(({id , element}) => (

								<React.Fragment key={id}>
									{

										typeof element === 'function' ?

											element({
												onChange:newVal => {
													onFieldChange(id , newVal);
												} ,
												disabled:loggingIn
											})

											:

											React.cloneElement(
												element ,
												{
													onChange:event => {
														onFieldChange(id , event.target.value);
														if ( typeof element.props.onChange === 'function' ) {
															field.element.props.onChange(event);
														}
													} ,
													disabled:loggingIn
												}
											)
									}
								</React.Fragment>
							)
						)
					}
					<input
						type="submit"
						value={loggingIn ? lang.loggingIn : lang.login}
						disabled={loggingIn}
					/>
				</form>
			</div>
		);
	}
}