import { PropTypes, Component } from 'react';
const IoTFCommon = window.IoTFCommon;
const Button = IoTFCommon.Button;
const SimpleDialog = IoTFCommon.SimpleDialog;
const InputField = IoTFCommon.InputField;
const Label =IoTFCommon.Label;
const $ = window.jQuery;

class CredentialDialog extends Component {
  static propTypes = {
    nls: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
    onCloseDialog: PropTypes.func.isRequired,
    onCancelDialog: PropTypes.func.isRequired,
    onSetAuth: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequried
  }

  constructor(props) {
    super(props);

    this.state = {
      apiKey: props.auth.apiKey,
      org: props.auth.org,
      apiToken: props.auth.apiToken,
      ltpaToken: props.auth.ltpa,
      domain: props.auth.domain,
      user: props.auth.id
    };
  }

  updateField = (field, value) => {
    const state = Object.assign({}, this.state);
    state[field] = value;
    this.setState(state);
  }

  onSaveIoTP = () => {
    const payload = {
      org: this.state.org,
      ltpa: this.state.ltpaToken,
      domain: this.state.domain,
      id: this.state.user,
      apiKey: this.state.apiKey,
      apiToken: this.state.apiToken
    }
     $.ajax({
       method: "POST",
       dataType: "json",
       cache: false,
       url: "/setauth",
       data: payload,
       crossDomain: true,
       timeout: 30000
     });

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
