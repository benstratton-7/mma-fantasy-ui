import { usePage } from '../../../context/PageContext';
import { PageEnum } from '../../../enums/PageEnum';

export const DrawerConfig = () => {
    const { setPage } = usePage();

    const items = [
            {
                text: 'Home',
                navigate: setPage(PageEnum.HOME),
            },
            {
                text: 'Fights',
                navigate: setPage(PageEnum.DATA),
            },
        ]

    return items;
};
