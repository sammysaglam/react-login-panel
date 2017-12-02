import React from 'react';
import reduce from 'object.reduce';

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
		const validationResult = validator(newVal , asyncCallback);

		// check if validator is async
		if ( typeof validationResult === 'object' ) {

			// set new validity state to 'pending'
			newState.customFields[fieldId].isValid = 'pending';

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

			return !reduce(asyncValidators , (failuresExist , state) => failuresExist || state.passed !== true , false);

		})();

		formFields.forEach(field => {

			// get current user input
			const fieldValue = this.state.customFields[field.id] && this.state.customFields[field.id].value ? this.state.customFields[field.id].value : '';

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
					const newStateAsync = {
						customFields:{
							...this.state.customFields ,
							[field.id]:{
								...this.state.customFields[field.id] ,
								isValid:response.isValid
							}
						}
					};
					this.setState(newStateAsync);

					// store validity response
					asyncValidators = {
						...asyncValidators ,
						[field.id]:{
							passed:response.value === fieldValue && response.isValid === true
						}
					};

					// if ready, then submit
					if ( passedValidation() ) {
						submitFn();
					}
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
		if ( passedValidation() ) {
			submitFn();
		}
	}

	onSubmit(event) {
		event.preventDefault();

		this.validateAllFieldsAndSubmit(() => {
			this.props.submitForm(this.state.customFields);
		});
	}

	render() {
		const {showFormTitles , lang , formFields , showSignupForm} = this.props;
		const {customFields} = this.state;
		const {onSubmit , onFieldChange} = this;

		const classNames = [
			'signup-form' ,
			showSignupForm ? 'show' : null
		].filter(className => className).join(' ');

		return (
			<div className={classNames}>
				{showFormTitles && <h2>{lang.signup}</h2>}
				<form onSubmit={onSubmit}>
					{
						formFields.map(({id , element , validator , errorFeedbackElement}) => {

							const validityPending = customFields[id] && customFields[id].isValid === 'pending';
							const hasErrors = !validityPending && customFields[id] && customFields[id].isValid !== true;
							const errorCode = hasErrors && customFields[id].isValid;

							const fieldClassNames = [
								validityPending ? 'pending' : null ,
								hasErrors ? 'error' : null
							].filter(className => className).join(' ');

							return (
								<React.Fragment key={id}>
									{

										typeof element === 'function' ?

											element({
												onChange:newVal => {
													onFieldChange(id , newVal , validator);
												}
											})

											:

											React.cloneElement(
												element ,
												{
													className:(
														(
															(element.props.className ? (element.props.className + ' ') : '') + fieldClassNames

														).trim()
													) ,
													onChange:event => {
														onFieldChange(id , event.target.value , validator);
														if ( typeof element.props.onChange === 'function' ) {
															element.props.onChange(event);
														}
													}
												}
											)
									}
									{
										hasErrors ? errorFeedbackElement(errorCode) : null
									}
								</React.Fragment>
							);
						})
					}
					<input type="submit" value={lang.signup}/>
				</form>
			</div>
		);
	}
}