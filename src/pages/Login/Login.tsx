import { useState } from "react";
import { usePage } from "../../context/PageContext";
import { PageEnum } from "../../enums/PageEnum";
import IglooButton from "../../components/IglooComponents/IglooButton/IglooButton";
import './login.scss'


const Login = () => {
    const { setPage } = usePage();
    const [isAuthenticated, setIsAuthenticated] = useState(false)

    const handleAuthentication = (e: React.ChangeEvent<HTMLInputElement>) => {
        setIsAuthenticated(e.target.checked)
    }

    const handleLogin = () => {
        if (isAuthenticated) {
            setPage(PageEnum.HOME)
        }
        else {
            alert('Please log in')
        }
    }
    
    return(
        <div className="login-page">
            <div className="login-container">
                <h1>KnockOut: MMA Fantasy</h1>
                <div>
                    <input type="checkbox" id="authenticator" checked={isAuthenticated} onChange={handleAuthentication}/>
                    <label htmlFor="authenticator">Login authenticator</label>
                </div>
                <br />
                <IglooButton
                    onClick={handleLogin}
                    >
                    Log In
                </IglooButton>
            </div>
        </div>
    )
}

export default Login