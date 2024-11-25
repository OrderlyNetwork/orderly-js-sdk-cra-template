import { FC } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router";
import PerpPage from "./pages/perp/page";
import { DEFAULT_SYMBOL } from "./storage";
import PortfolioLayout from "./pages/portfolio/layout";
import APIKeyPage from "./pages/portfolio/api-key/page";
import FeeTierPage from "./pages/portfolio/fee/page";
import PositionsPage from "./pages/portfolio/positions/page";
import OrdersPage from "./pages/portfolio/orders/page";
import SettingsPage from "./pages/portfolio/setting/page";
import MarketsPage from "./pages/markets/page";
import PortfolioPage from "./pages/portfolio/page";
import PageTitle from "./components/pageTitle";

const AppRoute: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageTitle />}>
          <Route index element={<Navigate to={`perp/${DEFAULT_SYMBOL}`} />} />

          <Route path="perp">
            <Route path=":symbol" element={<PerpPage />} />
          </Route>

          <Route path="portfolio" element={<PortfolioLayout />}>
            <Route index element={<PortfolioPage />} />
            <Route path="api-key" element={<APIKeyPage />} />
            <Route path="fee" element={<FeeTierPage />} />
            <Route path="positions" element={<PositionsPage />} />
            <Route path="orders" element={<OrdersPage />} />
            <Route path="setting" element={<SettingsPage />} />
          </Route>

          <Route path="markets" element={<MarketsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoute;
