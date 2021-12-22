import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import HomePage from './HomePage';
import MagnetPage from './MagnetPage';
import ResumePage from './ResumePage';
import TierListPage from './TierListPage';

function Page() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/MagnetPage" element={<MagnetPage />} />
          <Route path="/ResumePage" element={<ResumePage />} />
          <Route exact path="/TierLists" element={<TierListPage />} >
            <Route path=":listType" element={<TierListPage />} />
          </Route>
        </Routes>
      </Router>
    );
}

export default Page;