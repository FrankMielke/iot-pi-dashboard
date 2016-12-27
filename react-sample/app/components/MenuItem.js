const {PropTypes} = window.React;

const MenuItem = (props) => {
  let className = "menuItem"
  if (props.selected) {
    className = "menuItem selectedItem"
  }
  return (
    <div className={className} onClick={() => props.onSelect(props.target)}>
      <img src={'../app/resources/' + props.icon}/>
      <div>
        {props.label}
      </div>
    </div>
  )
}

MenuItem.propTypes = {
    label: PropTypes.string,
    target: PropTypes.string,
    icon: PropTypes.string,
    onSelect: PropTypes.func,
    selected: PropTypes.bool
};

export default MenuItem;
