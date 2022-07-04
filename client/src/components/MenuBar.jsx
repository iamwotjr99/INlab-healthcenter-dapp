import '../css/Menubar.css';

function MenuBar({setState}) {
const menu = [

  { icon: "fa fa-solid fa-file-medical", name: "My Records"},
  { icon: "fa fa-solid fa-address-card", name: "My transactions"},
  { icon: "fa fa-solid fa-chart-line", name: "Predictions"}
  ]
  const onClickBtn = (event, key) => {
    setState(key);
}
  return(
    <div className='side_menu'>
      <nav className="main-menu">
      
        <ul>
          {menu.map((item, index) => {
           
            return (
              <li key={index} onClick={e => onClickBtn(e, index)}>
                <a href="#!">
                  <i className={item.icon} ></i>
                  <span className='nav-text'>
                  {item.name}
                  
                  </span>
                </a>
              </li>
            )
          })}
        </ul>
      </nav>
    </div>
  )
}


export default MenuBar;
