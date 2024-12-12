import { useState } from "react";
import { usePage } from "../../context/PageContext";
import { PageEnum } from "../../enums/PageEnum";


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
        <div>
            Login!
            <button
                onClick={handleLogin}
            >
                go to Home
            </button>
            <br />
            <input type="checkbox" id="authenticator" checked={isAuthenticated} onChange={handleAuthentication}/>
            <label htmlFor="authenticator">Login authenticator</label>
        </div>
    )
}

export default Login