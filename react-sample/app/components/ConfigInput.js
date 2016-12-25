const React = window.React;
const PropTypes = React.PropTypes;

const ConfigInput = ({ label, placeholder }) =>
    <div className="inputContainer">
        <div>{label}</div>
        <input placeholder= {placeholder}/>
    </div>;

ConfigInput.propTypes = {
    label: PropTypes.string,
    placeholder: PropTypes.string
};

export default ConfigInput;
