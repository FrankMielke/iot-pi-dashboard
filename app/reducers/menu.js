import * as types from '../actions/types';
import DashboardConfig from '../PiDashboardConfig.json';

const getDefaultMenu = () => {
  return {
    ...DashboardConfig.settings.menu,
    settingsVisible: false
  }
}

const menu = (state = getDefaultMenu(), action) => {
    switch (action.type) {
        case types.SELECT:
            return {...state, selectedItem: action.item}
        case types.SHOW_SETTINGS:
            return {...state, settingsVisible: true}
        case types.HIDE_SETTINGS:
            return {...state, settingsVisible: false}
        default:
            return state;
    }
};


export default menu;
