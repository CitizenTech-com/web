import React from 'react';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import { PageRoutes } from './lib/constants';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path={PageRoutes.HOME} element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
