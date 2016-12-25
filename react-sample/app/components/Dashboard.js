const React = window.React;
const IoTFComponents = window.IoTFComponents;
const IoTFDashboard = IoTFComponents.Dashboard;
import DashboardConfig from '../PiDashboardConfig.json';
import nlsData from '@watson-iot/dashboard/nls/react-modules/messages-en.json';

const DashboardProps = {
    auth: {
        roleAuthService: {isAllowed: () => {return true;}}, // No role checking for standalone
    },
    nls: {resolve: (key) => {return key;}},
    emitter: {
        emit: function(key, value) {
            console.log('emitter.emit', key, value);
        }
    },
    dashboardConfig: DashboardConfig,
    selectedDashboard: null,
    experimental: false,
    remoteContent: [],
    orgUsers: [{id: 'm:orgid:markus.juettner@de.ibm.com', email: 'markus.juettner@de.ibm.com'}, {id: 'm:orgid:mielke@de.ibm.com', email: 'mielke@de.ibm.com'}, {id: 'm:orgid:robter.thosssssssssssssssssssssssssssssssssssssssssssssssssssssss@de.ibm.com', email: 'robert.thosssssssssssssssssssssssssssssssssssssssssssssssssssssss@de.ibm.com'}]// add a set of custom card urls (array of "name" and "url" entries)
};

// NLS //////////////////////////////////////////
// For nls flatten
const flatten = function(data) {
    const res = {};
    const rec = function(cur, prop) {
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

const format = function(form) {
    const args = Array.prototype.slice.call(arguments, 1);
    return form.replace(/{(\d+)}/g, function(match, number) {
        return typeof args[number] !== 'undefined' ? args[number] : match;
    });
};

const NLS = function() {
    const self = this;

    self.resolve = function(key) {
        let ret = null;
        if (self.cache['react-modules.' + key]) {
            ret = format.apply(self, [self.cache['react-modules.' + key]].concat(Array.prototype.slice.call(arguments, 1)));
        } else {
            ret = key;
        }
        return ret;
    };
    self.cache = flatten(nlsData);
};

DashboardProps.nls = new NLS();
// NLS END ////////////////////////////////////////////

const Dashboard = () =>
    <div>
        <IoTFDashboard auth={DashboardProps.auth} nls={DashboardProps.nls} selectedDashboard={DashboardProps.selectedDashboard} orgUsers={DashboardProps.orgUsers} dashboardConfig={DashboardProps.dashboardConfig} emitter={DashboardProps.emitter}/>
    </div>;


export default Dashboard;
