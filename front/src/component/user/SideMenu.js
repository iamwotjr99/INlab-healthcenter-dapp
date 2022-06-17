function SideMenu({setState}) {
    const menu = [
        {icon: "fa fa-soild fa-file-circle-check", name: "Patients"},
        {icon: "fa fa-solid fa-file-import", name: "Send PHR"},
        {icon: "fa fa-solid fa-gear", name: "Setting"}
    ]

    const onClickBtn = (event, key) => {
        console.log(event);
        console.log(key);
        setState(key);
    }

    return(
        <div className='side_menu'>
            <nav className="main-menu">
                <ul>
                    {menu.map((item, index) => {
                        return (
                            <li key={index} onClick={e => onClickBtn(e, index)}>
                                <a href="#">
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

export default SideMenu;