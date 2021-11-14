import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LoginPage, OrganizationPage } from "./pages";
import { DetailComponent, ListComponent } from "./pages/components";

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="organization" element={<OrganizationPage />}>
          <Route path=":loginSlug" element={<DetailComponent />} />
        </Route>
      </Routes>
    </Router>
  );
};
