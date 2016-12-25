const React = window.React;
const PropTypes = React.PropTypes;

const App = ({ children }) =>
    <div>
        <h2 className="mainHeader">Pi Kiosk</h2>
        { children }
    </div>;

App.propTypes = {
    children: PropTypes.object
};

export default App;
