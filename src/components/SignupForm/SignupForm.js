import React from 'react';
import PropTypes from 'prop-types';

const runOrPrint = value => (typeof value === 'function' ? value() : value);

export default class SignupForm extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			validating: false,
			fieldValues: {}
		};

		this.onFieldChange = this.onFieldChange.bind(this);
		this.validateField = this.validateField.bind(this);
		this.validateAllFieldsAndSubmit = this.validateAllFieldsAndSubmit.bind(this);
	}

	onFieldChange(fieldId, newVal, validator) {
		const { fieldValues } = this.state;

		// save new value to state and mark isValid as pending
		const newState = {
			fieldValues: {
				...fieldValues,
				[fieldId]: {
					...fieldValues[fieldId],
					value: newVal,
					isValid: 'pending'
				}
			}
		};
		this.setState(newState);

		// validate field value
		this.validateField({
			fieldId,
			value: newVal,
			validator,
			done: response => {
				this.setState({
					...newState,
					fieldValues: {
						...newState.fieldValues,
						[fieldId]: {
							...newState.fieldValues[fieldId],
							isValid: response
						}
					}
				});
			}
		});
	}

	validateField({ fieldId, value, validator, done }) {
		const generateValidationId = ({ fieldId: field }) => {
			if (!this.mostRecentValidationId) {
				this.mostRecentValidationId = {};
			}

			// increment the validation id tracker
			if (this.mostRecentValidationId[field]) {
				this.mostRecentValidationId[field]++;
			} else {
				this.mostRecentValidationId[field] = 1;
			}

			return this.mostRecentValidationId[field];
		};

		const hasValidationExpired = ({ fieldId: field, validationId }) => validationId !== this.mostRecentValidationId[field];

		const validationId = generateValidationId({ fieldId });

		// run user-defined validation function
		const validationResult = validator(value, response => {
			if (
				!hasValidationExpired({
					fieldId,
					validationId
				})
			) {
				done(response);
			}
		});

		// if not async, return validation result to done callback
		if (!validationResult.then) {
			if (
				!hasValidationExpired({
					fieldId,
					validationId
				})
			) {
				done(validationResult);
			}
		}
	}

	validateAllFieldsAndSubmit() {
		const { formFields, onSubmitForm } = this.props;
		const { fieldValues } = this.state;

		const numberOfFields = formFields.length;
		let validFieldsCount = 0;
		let parsedFieldsCount = 0;
		let newState = {
			validating: true,
			fieldValues
		};
		this.setState(newState);

		formFields.forEach(({ id: fieldId, validator }) => {
			const fieldValue = fieldValues[fieldId] && fieldValues[fieldId].value ? fieldValues[fieldId].value : '';

			// validate field value
			this.validateField({
				fieldId,
				value: fieldValue,
				validator,
				done: response => {
					newState = {
						...newState,
						fieldValues: {
							...newState.fieldValues,
							[fieldId]: {
								...newState.fieldValues[fieldId],
								isValid: response
							}
						}
					};

					// response is valid
					if (response === true) {
						validFieldsCount++;
					}

					// increment parsed fields
					parsedFieldsCount++;

					// check if finished
					const validationFinished = parsedFieldsCount === numberOfFields;

					if (validationFinished) {
						this.setState({
							...newState,
							validating: false
						});

						const allAreValid = validFieldsCount === parsedFieldsCount;
						if (allAreValid) {
							onSubmitForm(newState.fieldValues);
						}
					}
				}
			});
		});
	}

	render() {
		const { areFormTitlesVisible, lang, formFields, isSignupFormVisible, signingUp } = this.props;
		const { validating, fieldValues } = this.state;
		const { onFieldChange } = this;

		const classNames = [
			'react-login-panel__form',
			'react-login-panel__form--signup',
			isSignupFormVisible ? 'react-login-panel__form--show' : null
		]
			.filter(isNotEmpty => isNotEmpty)
			.join(' ');

		return (
			<div className={classNames}>
				{areFormTitlesVisible && <h2>{runOrPrint(lang.signup)}</h2>}
				<form
					onSubmit={event => {
						event.preventDefault();
						this.validateAllFieldsAndSubmit();
					}}
				>
					{formFields.map(({ id: fieldId, element, validator, errorFeedbackElement }) => {
						const validityPending = fieldValues[fieldId] && fieldValues[fieldId].isValid === 'pending';
						const hasErrors = !validityPending && fieldValues[fieldId] && fieldValues[fieldId].isValid !== true;
						const errorCode = hasErrors && fieldValues[fieldId].isValid;

						const fieldClassNames = [
							'react-login-panel__input',
							validityPending ? 'react-login-panel__input--pending' : null,
							hasErrors ? 'react-login-panel__input--error' : null
						]
							.filter(className => className)
							.join(' ');

						return (
							<React.Fragment key={fieldId}>
								{typeof element === 'function'
									? element({
											onChange: newVal => {
												onFieldChange(fieldId, newVal, validator);
											},
											pendingValidation: validityPending,
											disabled: validating || signingUp
									  })
									: React.cloneElement(element, {
											className: ((element.props.className ? element.props.className + ' ' : '') + fieldClassNames).trim(),
											onChange: event => {
												onFieldChange(fieldId, event.target.value, validator);
												if (typeof element.props.onChange === 'function') {
													element.props.onChange(event);
												}
											},
											disabled: validating || signingUp
									  })}
								{hasErrors ? errorFeedbackElement(errorCode) : null}
							</React.Fragment>
						);
					})}
					<input type="submit" value={runOrPrint(lang.signup)} />
				</form>
			</div>
		);
	}
}

SignupForm.propTypes = {
	areFormTitlesVisible: PropTypes.bool,
	formFields: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.string.isRequired,
			element: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
			validator: PropTypes.func.isRequired,
			errorFeedbackElement: PropTypes.func.isRequired
		})
	).isRequired,
	isSignupFormVisible: PropTypes.bool.isRequired,
	lang: PropTypes.shape({
		signup: PropTypes.string.isRequired
	}).isRequired,
	onSubmitForm: PropTypes.func.isRequired,
	signingUp: PropTypes.bool.isRequired
};

SignupForm.defaultProps = {
	areFormTitlesVisible: true
};
