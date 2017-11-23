import React from 'react';
import PropTypes from 'prop-types';
import each from 'object-each';

export default class SignupForm extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			customFields:{}
		};

		this.onFieldChange = this.onFieldChange.bind(this);
		this.validateAllFieldsAndSubmit = this.validateAllFieldsAndSubmit.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}

	onFieldChange(fieldId , newVal , validator) {

		// save field's new value to state
		const newState = {
			customFields:{
				...this.state.customFields ,
				[fieldId]:{
					...this.state.customFields[fieldId] ,
					value:newVal
				}
			}
		};

		// create callback if validator is async
		const asyncCallback = jsonResponse => {

			const currentValue = this.state.customFields[fieldId] && this.state.customFields[fieldId].value ? this.state.customFields[fieldId].value : '';

			if ( jsonResponse.value === currentValue ) {
				this.setState({
					customFields:{
						...this.state.customFields ,
						[fieldId]:{
							...this.state.customFields[fieldId] ,
							isValid:jsonResponse.isValid
						}
					}
				});
			}
		};

		// run user-defined validation function
		const validationResult = validator(newVal,asyncCallback);

		console.log(typeof validationResult);

		// check if validator is async
		if ( typeof validationResult === 'object' ) {

			// set new validity state to 'pending'
			newState.customFields[fieldId].isValid = 'pending';

		// if a promise was returned, then handle
		/*if ( validationResult.then ) {

			// set new validity state to 'pending'
			newState.customFields[fieldId].isValid = 'pending';

			// handle async response only if field value of response is equal to input's current value (or else it means the promise has expired for an old value, and promise can be safely ignored)
			validationResult.then(response => response.json()).then(response => {

				const currentValue = this.state.customFields[fieldId] && this.state.customFields[fieldId].value ? this.state.customFields[fieldId].value : '';

				if ( response.value === currentValue ) {
					this.setState({
						customFields:{
							...this.state.customFields ,
							[fieldId]:{
								...this.state.customFields[fieldId] ,
								isValid:response.isValid
							}
						}
					});
				}
			});*/

		} else {

			// no async, so we can safely update the state immediately
			newState.customFields[fieldId].isValid = validationResult;
		}

		this.setState(newState);
	}

	validateAllFieldsAndSubmit(submitFn) {

		const {formFields} = this.props;
		let booleanValidators = true;
		let asyncValidators = {};
		let newState = {
			customFields:{...this.state.customFields}
		};

		// a function to check if ready to submit
		const passedValidation = () => booleanValidators && (() => {

			let failuresExist = false;

			each(asyncValidators , state => {
				failuresExist = failuresExist || state.passed !== true
			});

			return !failuresExist;
		})();

		formFields.forEach(field => {

			// get current user input
			const fieldValue = this.state.customFields[field.id] && this.state.customFields[field.id].value ? this.state.customFields[field.id].value : "";

			// run validation function
			const validationResult = field.validator(fieldValue);

			// check if validationResult is a promise
			if ( validationResult.then ) {

				// add async validator to list
				asyncValidators = {
					...asyncValidators ,
					[field.id]:{
						value:fieldValue
					}
				};

				// save response to list when ready
				validationResult.then(response => response.json()).then(response => {

					// update state to display errors to user
					const newState = {
						customFields:{
							...this.state.customFields ,
							[field.id]:{
								...this.state.customFields[field.id] ,
								isValid:response.isValid
							}
						}
					};
					this.setState(newState);

					// store validity response
					asyncValidators = {
						...asyncValidators ,
						[field.id]:{
							passed:response.value === fieldValue && response.isValid === true
						}
					};

					// if ready, then submit
					if ( passedValidation() ) submitFn();
				});

			} else {
				booleanValidators = booleanValidators && validationResult === true;

				// update state to display errors to user
				newState = {
					customFields:{
						...newState.customFields ,
						[field.id]:{
							value:fieldValue ,
							isValid:validationResult
						}
					}
				};
			}
		});

		// save new state
		this.setState(newState);

		// if ready, then submit
		if ( passedValidation() ) submitFn();
	}

	onSubmit(event) {
		event.preventDefault();

		this.validateAllFieldsAndSubmit(() => {
			this.props.submitForm(this.state.customFields)
		});
	}

	render() {
		const {lang , formFields , showSignupForm} = this.props;
		const {customFields} = this.state;
		const {onSubmit , onFieldChange} = this;

		const classNames = [
			'signup-form' ,
			showSignupForm ? 'show' : null
		].filter(className => className).join(' ');

		return (
			<div className={classNames}>
				<h2>{lang.signup}</h2>
				<form onSubmit={onSubmit}>
					{
						formFields.map(field => {

							const validityPending = customFields[field.id] && customFields[field.id].isValid === 'pending';
							const hasErrors = !validityPending && customFields[field.id] && customFields[field.id].isValid !== true;
							const errorCode = hasErrors && customFields[field.id].isValid;

							const fieldClassNames = [
								validityPending ? 'pending' : null ,
								hasErrors ? 'error' : null
							].filter(className => className).join(' ');

							return [
								React.cloneElement(
									field.element ,
									{
										key:field.id ,
										className:(
											(
												(field.element.props.className ? (field.element.props.className + ' ') : '') + fieldClassNames

											).trim()
										) ,
										onChange:event => {
											onFieldChange(field.id , event.target.value , field.validator);
											if ( typeof field.element.props.onChange === 'function' ) {
												field.element.props.onChange(event);
											}
										}
									}
								) ,
								hasErrors ? field.errorFeedbackElement(errorCode) : null
							]
						})
					}
					<input type="submit" value={lang.signup}/>
				</form>
			</div>
		);
	}
}