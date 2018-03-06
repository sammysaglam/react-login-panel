import React from 'react';
import PropTypes from 'prop-types';
import reduce from 'object.reduce';

const runOrPrint = value => (typeof value === 'function' ? value() : value);

export default class LoginForm extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			fieldValues: reduce(
				props.formFields,
				(concatenated, { id, defaultValue }) => ({
					...concatenated,
					[id]: defaultValue ? defaultValue : ''
				}),
				{}
			)
		};

		this.onFieldChange = this.onFieldChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}

	onFieldChange(fieldId, newVal) {
		const { fieldValues } = this.state;

		// save field's new value to state
		this.setState({
			fieldValues: {
				...fieldValues,
				[fieldId]: newVal
			}
		});
	}

	onSubmit(event) {
		event.preventDefault();

		const { onSubmitForm } = this.props;
		const { fieldValues } = this.state;

		onSubmitForm(fieldValues);
	}

	render() {
		const { areFormTitlesVisible, lang, formFields, isLoginFormVisible, loggingIn, loginFailed } = this.props;
		const { fieldValues } = this.state;
		const { onSubmit, onFieldChange } = this;

		const classNames = [
			'react-login-panel__form',
			'react-login-panel__form--login',
			isLoginFormVisible ? 'react-login-panel__form--show' : null,
			loggingIn ? 'react-login-panel__form--logging-in' : null,
			loginFailed ? 'react-login-panel__form--login-failed' : null
		]
			.filter(className => className)
			.join(' ');

		return (
			<div className={classNames}>
				{areFormTitlesVisible && <h2>{runOrPrint(lang.login)}</h2>}
				{loginFailed ? runOrPrint(lang.loginFailedMessage) : null}
				<form onSubmit={onSubmit}>
					{formFields.map(({ id, element }) => (
						<React.Fragment key={id}>
							{typeof element === 'function'
								? element({
										onChange: newVal => {
											onFieldChange(id, newVal);
										},
										value: fieldValues[id],
										disabled: loggingIn
								  })
								: React.cloneElement(element, {
										value: fieldValues[id],
										onChange: event => {
											onFieldChange(id, event.target.value);
											if (typeof element.props.onChange === 'function') {
												element.props.onChange(event);
											}
										},
										disabled: loggingIn
								  })}
						</React.Fragment>
					))}
					<input disabled={loggingIn} type="submit" value={loggingIn ? runOrPrint(lang.loggingIn) : runOrPrint(lang.login)} />
				</form>
			</div>
		);
	}
}

LoginForm.propTypes = {
	areFormTitlesVisible: PropTypes.bool,
	formFields: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.string.isRequired,
			element: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired
		})
	).isRequired,
	isLoginFormVisible: PropTypes.bool.isRequired,
	lang: PropTypes.shape({
		loggingIn: PropTypes.string.isRequired,
		login: PropTypes.string.isRequired
	}).isRequired,
	loggingIn: PropTypes.bool.isRequired,
	loginFailed: PropTypes.bool.isRequired,
	onSubmitForm: PropTypes.func.isRequired
};

LoginForm.defaultProps = {
	areFormTitlesVisible: true
};
