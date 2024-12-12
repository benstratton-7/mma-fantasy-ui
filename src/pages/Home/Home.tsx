import IglooButton from "../../components/IglooComponents/IglooButton/IglooButton"
import IglooPage from "../../components/IglooComponents/IglooPage/IglooPage"
import { usePage } from "../../context/PageContext"
import { PageEnum } from "../../enums/PageEnum"

const Home = () => {
    const { setPage } = usePage()

    const handleLeaguesButton = () => {
        setPage(PageEnum.MYLEAGUES)
    }
    return(
        <IglooPage>
            <div>
                Home!
                <br />
                <IglooButton
                    onClick={handleLeaguesButton}
                >
                    My Leagues
                </IglooButton>
            </div>
        </IglooPage>
    )
}

export default Home