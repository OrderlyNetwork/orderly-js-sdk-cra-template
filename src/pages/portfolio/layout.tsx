"use client";
import { useMemo } from "react";
import { PortfolioLayoutWidget } from "@orderly.network/portfolio";
import config from "../../config";
import { useNav } from "../../hooks/useNav";
import { Outlet, useLocation } from "react-router";

export default function PortfolioLayout() {
  const location = useLocation();
  const pathname = location.pathname;

  const { onRouteChange } = useNav();

  const currentPath = useMemo(() => {
    if (pathname.endsWith("/portfolio")) return "/portfolio";
    if (pathname.endsWith("/portfolio/fee")) return "/portfolio/feeTier";
    if (pathname.endsWith("/portfolio/api-key")) return "/portfolio/apiKey";
    return pathname;
  }, [pathname]);

  return (
    <PortfolioLayoutWidget
      footerProps={config.scaffold.footerProps}
      mainNavProps={{
        ...config.scaffold.mainNavProps,
        initialMenu: "/portfolio",
      }}
      routerAdapter={{
        onRouteChange,
      }}
      leftSideProps={{
        current: currentPath,
      }}
    >
      <Outlet />
    </PortfolioLayoutWidget>
  );
}
