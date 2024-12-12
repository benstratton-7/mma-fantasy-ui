import React from "react"
import './index.scss'
import IglooButton from '../IglooButton/IglooButton';
import { usePage } from "../../../context/PageContext";
import { PageEnum } from "../../../enums/PageEnum";

type PageProps = {
    children: React.ReactNode
}

const IglooPage: React.FC<PageProps> = ({ children }) => {
    const { setPage } = usePage()
    const handleLogout = () => {
        setPage(PageEnum.LOGIN)
    }
    return (
        <div className="igloo-page-container">
            <header className="igloo-page-header">
                <h1>MMA Fantasy App</h1>
                <IglooButton
                    onClick={handleLogout}
                    variant="secondary"
                >
                    Logout
                </IglooButton>
            </header>
            <main className="igloo-page-content">{children}</main>
            <footer className="igloo-page-footer">
                © 2024 Stratton Technologies
            </footer>
        </div>
    )
}

export default IglooPage