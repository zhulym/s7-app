import React, { FC } from 'react';
import { Route, Routes } from 'react-router-dom';

import { ROUTES } from 'constants/routes';

import Layout from 'components/layout/Layout';

const App: FC = () => {
  return (
    <Layout>
      <Routes>
        {ROUTES.map(route => (
          <Route
            key={route.path}
            path={route.path}
            element={route.component}
          />
        ))}
      </Routes>
    </Layout>
  );
};

export default App;
