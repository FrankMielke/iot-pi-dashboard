const React = window.React;
// const PropTypes = React.PropTypes;
import { connect } from 'react-redux';
// import { filterTable } from '../actions';
import ConfigForm from '../components/ConfigForm';

const Config = () => {
    return (
        <div className="configWrapper">
            <ConfigForm />
        </div>
    );
};

// Config.propTypes = {
//    filter: PropTypes.string,
//    onFilter: PropTypes.func
// };

const mapStateToProps = () => {
    return {
//      filter: state.filter
    };
};

const mapDispatchToProps = () => {
    return {
//      onFilter: filterText => dispatch(filterTable(filterText))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Config);
