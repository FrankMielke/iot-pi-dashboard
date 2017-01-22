const {Component, PropTypes} = window.React;
import { connect } from 'react-redux';
import MenuItem from '../components/MenuItem'
import * as actions from '../actions'
import { bindActionCreators } from 'redux'

class Menu extends Component {

  constructor(props) {
    super(props)
  }

  render = () => {
    const {items, selectedItem, onSelect, showSettings} = this.props
      return (
        <div className="menu">
          {items.map(item => {
            return (
              <MenuItem
                label={item.label}
                target={item.id}
                icon={item.icon}
                onSelect={onSelect}
                selected={selectedItem && selectedItem === item.id}
              />
            )
          })}
          <MenuItem
            label='Settings'
            target='###SETTINGS###'
            icon='gs48.png'
            onSelect={showSettings}
            selected={false}
          />
        </div>
      )
  }
}

Menu.propTypes = {
   items: PropTypes.array,
   selectedItem: PropTypes.string,
   onSelect: PropTypes.func,
   showSettings: PropTypes.func
};

const mapStateToProps = (state) => {
    return {...state.menu}
};

const mapDispatchToProps = (dispatch) => {
  const actionCreators = bindActionCreators(actions, dispatch)
  return {
    onSelect: actionCreators.onSelect,
    showSettings: actionCreators.showSettings
  }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Menu);
