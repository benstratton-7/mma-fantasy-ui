/* eslint-disable react-refresh/only-export-components */
import { createContext, useState, useContext, ReactNode } from 'react';
import { PageEnum } from '../enums/PageEnum';

type PageContextType = {
    currentPage: PageEnum;
    setPage: (page: PageEnum) => void;
};

const PageContext = createContext<PageContextType | undefined>(undefined);

export const PageProvider = ({ children }: { children: ReactNode }) => {
    const [currentPage, setCurrentPage] = useState<PageEnum>(PageEnum.LOGIN);

    const setPage = (page: PageEnum) => {
        setCurrentPage(page);
    };

    return (
        <PageContext.Provider value={{ currentPage, setPage }}>
            {children}
        </PageContext.Provider>
    );
};

export const usePage = (): PageContextType => {
    const context = useContext(PageContext);
    if (!context) {
        throw new Error('usePage must be used within a PageProvider');
    }
    return context;
};
