import * as types from '../actions/types';

const getDefaultMenu = () => {
  return {
    items: [
      {
        label: 'Power',
        id: '0d3d5338-8a6c-43b6-9699-39b42bba216a',
        icon: 'gs45.png'
      },
      {
        label: 'Water',
        id: 'd45ca378-e683-4c36-b643-00c3d530d749',
        icon: 'gs39.png'
      },
      {
        label: 'Windows',
        id: 'ea861e40-4479-4240-b689-08229b5a588d',
        icon: 'gs2.png'
      },
      {
        label: 'Shutters',
        id: 'd45c15d2-2401-4c90-ac59-dd3c839d093b',
        icon: 'gs3.png'
      },
      {
        label: 'Cars',
        id: 'ca90a54b-c717-49ea-90b1-567eb0b0dd78',
        icon: 'gs10.png'
      }
    ],
    selectedItem: '0d3d5338-8a6c-43b6-9699-39b42bba216a'
  }
}

const menu = (state = getDefaultMenu(), action) => {
    switch (action.type) {
        case types.SELECT:
            return {...state, selectedItem: action.item}
        default:
            return state;
    }
};
export default menu;
