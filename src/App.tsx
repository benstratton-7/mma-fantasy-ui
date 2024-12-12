import { PageProvider } from './context/PageContext';
import AppRouter from './router/AppRouter';

const App = () => {
    return (
        <PageProvider>
            <AppRouter />
        </PageProvider>
    );
};

export default App;