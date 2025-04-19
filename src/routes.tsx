import {
  Navigate,
  createBrowserRouter,
  RouterProvider,
  RouteObject,
} from "react-router";
import { getSymbol } from "./storage";
import PageTitle from "./components/pageTitle";
import PerpPage from "./pages/perp/page";
import { PortfolioLayout, TradingRewardsLayout } from "./components/layout";
import PortfolioPage from "./pages/portfolio/page";
import PositionsPage from "./pages/portfolio/positions/page";
import OrdersPage from "./pages/portfolio/orders/page";
import FeeTierPage from "./pages/portfolio/fee/page";
import APIKeyPage from "./pages/portfolio/api-key/page";
import SettingsPage from "./pages/portfolio/setting/page";
import MarketsPage from "./pages/markets/page";
import LeaderboardPage from "./pages/leaderboard/page";
import TradingRewardsPage from "./pages/rewards/trading/page";
import AffiliatePage from "./pages/rewards/affiliate/page";
import {
  getLocalePathFromPathname,
  i18n,
  parseI18nLang,
} from "@orderly.network/i18n";

const AppRoute = () => {
  // console.log("browser language", i18n?.language);
  let currentLocale = parseI18nLang(i18n?.language);

  const pathname = window.location.pathname;
  let localePath = getLocalePathFromPathname(pathname);

  // console.log("currentLocale", currentLocale);
  // console.log("localePath", localePath);

  if (!localePath) {
    window.history.replaceState({}, "", `/${currentLocale}${pathname}`);
    return;
  }

  if (localePath && localePath !== currentLocale) {
    currentLocale = localePath;
    i18n.changeLanguage(localePath);
  } else if (currentLocale !== i18n?.language) {
    i18n.changeLanguage(currentLocale);
  }

  const baseRoutes: RouteObject[] = [
    {
      path: "perp",
      children: [
        {
          index: true,
          element: <Navigate to={getSymbol()} />,
        },
        {
          path: ":symbol",
          element: <PerpPage />,
        },
      ],
    },
    {
      path: "portfolio",
      element: <PortfolioLayout />,
      children: [
        {
          index: true,
          element: <PortfolioPage />,
        },
        {
          path: "positions",
          element: <PositionsPage />,
        },
        {
          path: "orders",
          element: <OrdersPage />,
        },
        {
          path: "fee",
          element: <FeeTierPage />,
        },
        {
          path: "api-key",
          element: <APIKeyPage />,
        },
        {
          path: "setting",
          element: <SettingsPage />,
        },
      ],
    },
    {
      path: "markets",
      element: <MarketsPage />,
    },
    {
      path: "leaderboard",
      element: <LeaderboardPage />,
    },
    {
      path: "rewards",
      element: <TradingRewardsLayout />,
      children: [
        {
          path: "trading",
          element: <TradingRewardsPage />,
        },
        {
          path: "affiliate",
          element: <AffiliatePage />,
        },
      ],
    },
  ];

  const router = createBrowserRouter([
    {
      path: "/",
      element: <PageTitle />,
      children: [
        {
          index: true,
          element: <Navigate to={currentLocale} />,
        },
        {
          path: ":lang",
          children: [
            {
              index: true,
              element: <Navigate to="perp" />,
            },
            ...baseRoutes,
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRoute;
