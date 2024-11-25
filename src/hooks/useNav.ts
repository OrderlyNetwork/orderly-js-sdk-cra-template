import { useCallback } from "react";
import { useNavigate } from "react-router";
import { RouteOption } from "@orderly.network/ui-scaffold";
import { getSymbol } from "../storage";

export function useNav() {
  const navigate = useNavigate();

  const onRouteChange = useCallback(
    (option: RouteOption) => {
      if (option.target === "_blank") {
        window.open(option.href);
        return;
      }

      if (option.href === "/") {
        const symbol = getSymbol();
        navigate(`/perp/${symbol}`);
        return;
      }

      const routeMap = {
        //   "/portfolio": "/portfolio",
        "/portfolio/feeTier": "/portfolio/fee",
        "/portfolio/apiKey": "/portfolio/api-key",
        //   "/portfolio/positions": "/portfolio/positions",
        //   "/portfolio/orders": "/portfolio/orders",
        //   "/portfolio/setting": "/portfolio/setting",
      } as Record<string, string>;

      const path = routeMap[option.href] || option.href;

      navigate(path);
    },
    [navigate]
  );

  return { onRouteChange };
}
