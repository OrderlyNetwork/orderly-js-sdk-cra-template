import { useMemo } from "react";
import { useLocation } from "react-router";

/**
 * Get the pathname without the language prefix
 * /en/perp/PERP_BTC_USDC => /perp/PERP_BTC_USDC
 * /en/markets => /markets
 */
export function usePathWithoutLang() {
  const location = useLocation();

  return useMemo(() => {
    return location.pathname.replace(/^\/[^/]+/, "");
  }, [location.pathname]);
}
