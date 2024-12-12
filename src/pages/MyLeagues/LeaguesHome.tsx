import IglooButton from "../../components/IglooComponents/IglooButton/IglooButton"
import IglooPage from "../../components/IglooComponents/IglooPage/IglooPage"
import { usePage } from "../../context/PageContext"
import { PageEnum } from "../../enums/PageEnum"

const MyLeagues = () => {
    const { setPage } = usePage()

    const handleHomeButton = () => {
        setPage(PageEnum.HOME)
    }
    return(
        <IglooPage>
            <div>
                My Leagues!
                <br />
                <IglooButton
                    onClick={handleHomeButton}
                >
                    Home
                </IglooButton>
            </div>
        </IglooPage>
    )
}

export default MyLeagues