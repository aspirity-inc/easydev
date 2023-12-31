import { Routes, Route, Navigate } from 'react-router-dom';
import { routes } from './routes/routes';
import { Layout, Main } from '@aspirity/easydev';
import { StyledContent } from './styles';
import { Header } from './shared/components/Header/Header';
import { Sidebar } from './shared/components/Sidebar/Sidebar';

export const App = () => {
  return (
    <Layout style={{ overflowX: 'clip' }}>
      <Header />
      <Main style={{ display: 'flex' }}>
        <Sidebar />
        <StyledContent>
          <Routes>
            {routes.map((source) => (
              <Route key={source.path} path={source.path} element={source.component} />
            ))}
            <Route path="*" element={<Navigate to={routes[0].path} replace />} />
          </Routes>
        </StyledContent>
      </Main>
    </Layout>
  );
};
