import { usePage } from '../context/PageContext';
import { PageEnum } from '../enums/PageEnum';
import LoginPage from '../pages/Login/Login';
import HomePage from '../pages/Home/Home';
import MyLeagues from '../pages/Home/MyLeagues/LeaguesHome';
import MyRoster from '../pages/Home/MyRoster/MyRoster';
import DataPage from '../pages/Home/DataPage/DataPage';

const AppRouter = () => {
    const { currentPage } = usePage();

    switch (currentPage) {
        case PageEnum.LOGIN:
            return <LoginPage />;
        case PageEnum.HOME:
            return <HomePage />;
        case PageEnum.MYLEAGUES:
            return <MyLeagues />
        case PageEnum.MYROSTER:
            return <MyRoster />
        case PageEnum.DATA:
            return <DataPage />
        default:
            return <div>Page not found</div>;
    }
};

export default AppRouter;
