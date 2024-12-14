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
    const handleHomeNav = () => {
        setPage(PageEnum.HOME)
    }
    const handleRosterNav = () => {
        setPage(PageEnum.MYROSTER)
    }
    const handleDataNav = () => {
        setPage(PageEnum.DATA)
    }
    return (
        <div className="igloo-page-container">
            <header className="igloo-page-header">
                <h1>KnockOut: MMA Fantasy</h1>
                <IglooButton
                    onClick={handleLogout}
                    variant="secondary"
                >
                    Logout
                </IglooButton>
            </header>
            <div className="igloo-page-wrapper">
                <aside className="igloo-page-sidebar">
                        <IglooButton onClick={handleHomeNav}>Home</IglooButton>
                        {/* <IglooButton onClick={handleLeaguesNav}>My Leagues</IglooButton> */}
                        <IglooButton onClick={handleRosterNav}>MyRoster</IglooButton>
                        <IglooButton onClick={handleDataNav}>Data</IglooButton>
                </aside>
                <main className="igloo-page-content">
                    {children}
                </main>
            </div>
            <footer className="igloo-page-footer">
                <p>© 2024 Stratton Technologies</p>
            </footer>
        </div>
    )
}

export default IglooPage