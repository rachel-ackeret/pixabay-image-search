import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';

import { DataProvider } from './DataContext';
import Home from './pages/Home/Home';
import ImagePreview from './pages/ImagePreview/ImagePreview';
import Theme from './Theme';

function App() {
  return (
    <BrowserRouter>
      <DataProvider>
        <Routes>
          <Route element={<Theme />}>
            <Route path="/" element={<Home />} />
            <Route path="/image/:id" element={<ImagePreview />} />
          </Route>
        </Routes>
      </DataProvider>
    </BrowserRouter>
  );
}

export default App;
