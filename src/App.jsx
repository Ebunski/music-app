import { useState, useEffect } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import SharedLayout from "./components/SharedLayout";
import ErrorBoundary from "./components/utilities/ErrorBoundary";
import Album from './pages/Album'

export default function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <Routes>
          <Route element={<SharedLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/tomorrowstunes" element={<Album />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ErrorBoundary>
  );
}
