import { Drawer } from "@mui/material"
import IglooPage from "../../../components/IglooComponents/IglooPage/IglooPage"
import KnockoutAppBar from "../../../components/IglooComponents/knockoutAppBar/KnockoutAppBar"

const ComponentShowcase = () => {
    return(
        <IglooPage>
            <div>
                All the mui components
                <KnockoutAppBar />
                <Drawer />
            </div>
        </IglooPage>
    )
}

export default ComponentShowcase