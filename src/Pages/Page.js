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
          <Route path="/TierLists" element={<TierListPage />} />
        </Routes>
      </Router>
    );
}

export default Page;