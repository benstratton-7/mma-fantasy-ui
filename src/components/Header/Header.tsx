import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import Logo from '../../../public/logo.svg'
import './index.css';

const Header = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className='header'>
      <img src={Logo} alt="logo" width="55" />
      <h1 className="appTitle">Fantasy MMA</h1>
      <button className='logoutButton' onClick={handleLogout}>Log Out</button>
    </div>
  );
};

export default Header;
