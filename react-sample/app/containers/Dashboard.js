const {Component, PropTypes} = window.React;
import { connect } from 'react-redux';
import * as actions from '../actions'
import { bindActionCreators } from 'redux'
const IoTFComponents = window.IoTFComponents;
const IoTFDashboard = IoTFComponents.Dashboard;
import DashboardConfig from '../PiDashboardConfig.json';
import nlsData from '../@watson-iot/dashboard/nls/react-modules/messages-en.json';
import Menu from './Menu.js';
import CredentialDialog from '../components/CredentialDialog';

const DashboardProps = {
    auth: {
        roleAuthService: {isAllowed: () => {return true;}}, // No role checking for standalone
    },
    nls: {resolve: (key) => {return key;}},
    emitter: {
        emit: (key, value) => {
            console.log('emitter.emit', key, value);
        }
    },
    dashboardConfig: DashboardConfig,
    selectedDashboard: null,
    experimental: false,
    remoteContent: DashboardConfig.settings.remoteContent,
    orgUsers: [{id: 'm:orgid:markus.juettner@de.ibm.com', email: 'markus.juettner@de.ibm.com'}, {id: 'm:orgid:mielke@de.ibm.com', email: 'mielke@de.ibm.com'}, {id: 'm:orgid:robter.thosssssssssssssssssssssssssssssssssssssssssssssssssssssss@de.ibm.com', email: 'robert.thosssssssssssssssssssssssssssssssssssssssssssssssssssssss@de.ibm.com'}]// add a set of custom card urls (array of "name" and "url" entries)
};

const flatten = (data) => {
    const res = {};
    const rec = (cur, prop) => {
        if (Object(cur) !== cur) {
            res[prop] = cur;
        } else if (Array.isArray(cur)) {
            for(let i = 0; i < cur.length; i++ ) {
                rec(cur[i], prop + '[' + i + ']');
            }
            if (cur.length === 0) {
                res[prop] = [];
            }
        } else {
            let isEmpty = true;
            for (const p in cur) {
                if ({}.hasOwnProperty.call(cur, p)) {
                    isEmpty = false;
                    rec(cur[p], prop ? prop + '.' + p : p);
                }
            }
            if (isEmpty && prop) {
                res[prop] = {};
            }
        }
    };
    rec(data, '');
    return res;
};

const format = (form) => {
    const args = Array.prototype.slice.call(arguments, 1);
    return form.replace(/{(\d+)}/g, (match, number) => {
        return typeof args[number] !== 'undefined' ? args[number] : match;
    });
};

class NLS {
    constructor() {
        this.cache = flatten(nlsData);
    }

    resolve = (key) => {
        let ret = null;
        if (this.cache['react-modules.' + key]) {
            ret = format.apply(this, [this.cache['react-modules.' + key]].concat(Array.prototype.slice.call(arguments, 1)));
        } else {
            ret = key;
        }
        return ret;
    }
}

class Dashboard extends Component {

  constructor(props) {
    super(props)
  }

  componentDidUpdate = (prevProps) => {
    if (this.props.selectedItem !== prevProps.selectedItem) {
      IoTFDashboard.callAction("LOAD_BOARD", this.props.selectedItem)
    }
    document.body.style.overflow = "hidden"
  }

  render = () => {
    return (
      <div className="dashboardContainer">
          <Menu/>
          {
            this.props.settingsVisible?
            <CredentialDialog
              nls={DashboardProps.nls}
              theme={{}}
              onCloseDialog={this.props.hideSettings}
              onCancelDialog={this.props.hideSettings}
              onSetAuth={auth => {DashboardProps.auth = auth}}
            />
            :
            <div className="dashboard">
              <IoTFDashboard remoteContent={DashboardProps.remoteContent} auth={DashboardProps.auth} nls={DashboardProps.nls} selectedDashboard={this.props.selectedItem} orgUsers={DashboardProps.orgUsers} dashboardConfig={DashboardProps.dashboardConfig} emitter={DashboardProps.emitter}/>
            </div>
          }
      </div>
    )
  }
}

DashboardProps.nls = new NLS();

Dashboard.propTypes = {
   selectedItem: PropTypes.string,
   settingsVisible: PropTypes.bool,
   hideSettings: PropTypes.hideSettings
};

const mapStateToProps = (state) => {
    return {
      selectedItem: state.menu.selectedItem,
      settingsVisible: state.menu.settingsVisible
    }
};

const mapDispatchToProps = (dispatch) => {
  const actionCreators = bindActionCreators(actions, dispatch)
  return {
    onSelect: actionCreators.onSelect,
    hideSettings: actionCreators.hideSettings
  }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Dashboard);
