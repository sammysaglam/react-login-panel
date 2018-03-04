import { connect } from 'react-redux';
import { actionCreators } from '../ReactLoginPanel.redux';
import ReactLoginPanel from '../ReactLoginPanel';

// react-redux connection
const mapStateToProps = state => ({
	integerValue: state.reactLoginPanel.integerValue
});
const mapDispatchToProps = dispatch => ({
	increment: () => {
		dispatch(actionCreators.increment());
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(ReactLoginPanel);
