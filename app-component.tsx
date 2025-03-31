import React from 'react';
import NovoNordiskDashboard from './NovoNordiskDashboard';
import { DataProvider } from './DataContextProvider';

const App = () => {
  return (
    <DataProvider>
      <NovoNordiskDashboard />
    </DataProvider>
  );
};

export default App;
