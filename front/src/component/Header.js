import donggukLogo from '../image/Logo.png';
function Header({ userType, userAddr }) {
    return (
        <div className="header">
            <img src={donggukLogo} alt="logo"/>
            <div className="name">INLAB Health Center</div>
            <div className="sign_in">{userType}</div>
        </div>
    )
}

export default Header;