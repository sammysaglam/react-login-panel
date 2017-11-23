import * as ReactLoginPanelRedux from '../src/ReactLoginPanel.redux';

describe('ReactLoginPanel Redux Reducer' , () => {
	it('should return the initial state' , () => {
		expect(ReactLoginPanelRedux.reducer(undefined , {})).toEqual({
			showLoginForm:false ,
			showSignupForm:false
		});
	});

	it('should increment "integerValue" by 1' , () => {

		const mockInitialState = {
			integerValue:92
		};

		const mockAction = {
			type:ReactLoginPanelRedux.ACTIONS.INCREMENT
		};

		expect(ReactLoginPanelRedux.reducer(mockInitialState , mockAction)).toEqual({
			integerValue:93
		});
	});
});

describe('Library action creators' , () => {
	it('should create an action to increment the value by 1' , () => {

		const expectedAction = {
			type:ReactLoginPanelRedux.ACTIONS.INCREMENT
		};

		expect(ReactLoginPanelRedux.actionCreators().increment()).toEqual(expectedAction);
	});
});