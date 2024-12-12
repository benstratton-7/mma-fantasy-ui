import React from 'react';
import { usePage } from '../context/PageContext';
import { PageEnum } from '../enums/PageEnum';
import LoginPage from '../pages/Login/Login';
import HomePage from '../pages/Home/Home';
import MyLeagues from '../pages/MyLeagues/LeaguesHome';

const AppRouter = () => {
    const { currentPage } = usePage();

    switch (currentPage) {
        case PageEnum.LOGIN:
            return <LoginPage />;
        case PageEnum.HOME:
            return <HomePage />;
        case PageEnum.MYLEAGUES:
            return <MyLeagues />
        default:
            return <div>Page not found</div>;
    }
};

export default AppRouter;
