const React = window.React;
const PropTypes = React.PropTypes;

const App = ({ children }) =>
    <div>
        { children }
    </div>;

App.propTypes = {
    children: PropTypes.object
};

export default App;
