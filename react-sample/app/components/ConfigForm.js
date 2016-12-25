const React = window.React;
const PropTypes = React.PropTypes;
import ConfigInput from './ConfigInput';

const inputs = [
  { id: 'user', label: 'UserID', placeholder: 'e.g. john.doe@us.ibm.com'},
  { id: 'org', label: 'Org', placeholder: 'e.g. 44whrd'},
  { id: 'domain', label: 'Domain', placeholder: 'e.g. internetofthings.ibmcloud.com'},
  { id: 'apiKey', label: 'API-Key', placeholder: 'e.g. a-org-xxx'},
  { id: 'apiToken', label: 'API-Token', placeholder: ''},
  { id: 'ltpa', label: 'LTPA token', placeholder: ''}
];

const ConfigForm = ({ filter }) => {
    let rows = filter ? [] : []; // Ignore this

    inputs.forEach((i) => {
        rows.push(
                <ConfigInput id={i.id} label={i.label} placeholder={i.placeholder} key={i.id}/>
            );
    });

    return <div className="formContainer"> {rows} </div>;
};

ConfigForm.propTypes = {
    filter: PropTypes.string
};

export default ConfigForm;
