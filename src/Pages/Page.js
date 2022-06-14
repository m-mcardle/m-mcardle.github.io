import React from 'react';
import { HashRouter as Router, Route, Routes } from "react-router-dom";

import { init, trackPages } from "insights-js"

import HomePage from './HomePage';
import MagnetPage from './MagnetPage';
import ResumePage from './ResumePage';
import TierListPage from './TierListPage';

import { drivers } from '../Data/Drivers';
import { fighters } from '../Data/Fighters';
import { food } from '../Data/FastFood';

function Page() {
  init('ozovfH7OXe0GoXN4');
  trackPages();
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/MagnetPage" element={<MagnetPage />} />
        <Route path="/ResumePage" element={<ResumePage />} />
        <Route exact path="/TierLists/F1" element={<TierListPage data={drivers} paramPage={"F1"} />} />
        <Route exact path="/TierLists/UFC" element={<TierListPage data={fighters} paramPage={"UFC"} />} />
        <Route exact path="/TierLists/Food" element={<TierListPage data={food} paramPage={"Food"} />} />          
      </Routes>
    </Router>
  );
}

export default Page;