import { PropTypes, Component } from 'react';
const IoTFCommon = window.IoTFCommon;
const Button = IoTFCommon.Button;
const SimpleDialog = IoTFCommon.SimpleDialog;
const InputField = IoTFCommon.InputField;
const Label =IoTFCommon.Label;

class CredentialDialog extends Component {
  static propTypes = {
    nls: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
    onCloseDialog: PropTypes.func.isRequired,
    onCancelDialog: PropTypes.func.isRequired,
    onSetAuth: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props);

    this.state = {
      apiKey: global.localStorage.getItem('Dashboard_ApiKey')?global.localStorage.getItem('Dashboard_ApiKey'):undefined,
      org: global.localStorage.getItem('Dashboard_Org')?global.localStorage.getItem('Dashboard_Org'):undefined,
      apiToken: global.localStorage.getItem('Dashboard_Token')?global.localStorage.getItem('Dashboard_Token'):undefined,
      ltpaToken: global.localStorage.getItem('Dashboard_Ltpa')?global.localStorage.getItem('Dashboard_Ltpa'):undefined,
      domain: global.localStorage.getItem('Dashboard_Domain')?global.localStorage.getItem('Dashboard_Domain'):undefined,
      user: global.localStorage.getItem('Dashboard_User')?global.localStorage.getItem('Dashboard_User'):undefined
    };
  }

  updateField = (field, value) => {
    const state = Object.assign({}, this.state);
    state[field] = value;
    this.setState(state);
  }

  onSaveIoTP = () => {
    if (this.state.org !== undefined) {
      global.localStorage.setItem('Dashboard_Org', this.state.org);
    }
    if (this.state.apiKey !== undefined) {
      global.localStorage.setItem('Dashboard_ApiKey', this.state.apiKey);
    }
    if (this.state.apiToken !== undefined) {
      global.localStorage.setItem('Dashboard_Token', this.state.apiToken);
    }
    if (this.state.ltpaToken !== undefined) {
      global.localStorage.setItem('Dashboard_Ltpa', this.state.ltpaToken);
    }
    if (this.state.domain !== undefined) {
      global.localStorage.setItem('Dashboard_Domain', this.state.domain);
    }
    if (this.state.user !== undefined) {
      global.localStorage.setItem('Dashboard_User', this.state.user);
    }

    this.props.onSetAuth(this.state);
    this.props.onCloseDialog();
  }

  render = () => {
    return (
      <SimpleDialog theme={this.props.theme} onCancel={this.props.onCancelDialog} height={400}>
        <div>
          <div style={{width: "540px"}}>
              <table className='credentialTable'>
                <tbody>
                  <tr>
                    <td>
                      <Label label="User" theme={this.props.theme}>
                        <InputField name="user" type='text' onChange={(value) => this.updateField("user", value)} value={this.state.user} initialValue={this.state.user} theme={this.props.theme}/>
                      </Label>
                    </td>
                    <td>
                      <Label label="Ltpa token" theme={this.props.theme}>
                        <InputField name="ltapToken" type='text' onChange={(value) => this.updateField("ltpaToken", value)} value={this.state.ltpaToken} initialValue={this.state.ltpaToken} theme={this.props.theme}/>
                      </Label>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <Label label="Organization" theme={this.props.theme}>
                        <InputField name="org" type='text' onChange={(value) => this.updateField("org", value)} value={this.state.org} initialValue={this.state.org} theme={this.props.theme}/>
                      </Label>
                    </td>
                    <td>
                      <Label label="Api key" theme={this.props.theme}>
                        <InputField name="apiKey" type='text' onChange={(value) => this.updateField("apiKey", value)} value={this.state.apiKey} initialValue={this.state.apiKey} theme={this.props.theme}/>
                      </Label>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <Label label="Domain" theme={this.props.theme}>
                        <InputField name="domain" type='text' onChange={(value) => this.updateField("domain", value)} value={this.state.domain} initialValue={this.state.domain} theme={this.props.theme}/>
                      </Label>
                    </td>
                    <td>
                      <Label label="Api token" theme={this.props.theme}>
                        <InputField name="apiToken" type='text' onChange={(value) => this.updateField("apiToken", value)} value={this.state.apiToken} initialValue={this.state.apiToken} theme={this.props.theme}/>
                      </Label>
                    </td>
                  </tr>
                </tbody>
              </table>
          </div>
          <div style={{textAlign: "center"}}><div style={{display: "inline-block"}}><Button onClick={this.onSaveIoTP} text='Save'/><Button onClick={this.props.onCloseDialog} text='Cancel'/></div></div>
        </div>
      </SimpleDialog>
    )
  }
}

export default CredentialDialog;
