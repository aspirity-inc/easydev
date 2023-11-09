import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { routes } from './router/route';
import { Layout, Main } from '@aspirity/easydev';
import { StyledContent } from './styles';
import { Header } from './shared/components/Header/Header';
import { Sidebar } from './shared/components/Sidebar/Sidebar';

export const App = () => {
  return (
    <BrowserRouter>
      <Layout style={{ display: 'block', overflow: 'hidden' }}>
        <Header />
        <Main
          style={{
            display: 'flex',
            backgroundColor: 'red',
            alignItems: 'flex-start',
          }}
        >
          <Sidebar />
					<StyledContent>
            <Routes>
              {routes.map((source) => (
                <Route
                  key={source.path}
                  path={source.path}
                  element={source.component}
                />
              ))}
              <Route
                path="*"
                element={<Navigate to={routes[0].path} replace />}
              />
            </Routes>
          </StyledContent>
        </Main>
      </Layout>
    </BrowserRouter>
  );
};
