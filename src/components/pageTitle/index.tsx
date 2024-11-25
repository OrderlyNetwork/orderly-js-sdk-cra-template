import { useEffect, useMemo } from "react";
import { formatSymbol, generatePageTitle } from "../../utils";
import { Outlet, useLocation, useParams } from "react-router";

export default function PageTitle() {
  const params = useParams();

  const location = useLocation();
  const pathname = location.pathname;

  const titleMap = useMemo(() => {
    return {
      "/portfolio": "Portfolio",
      "/portfolio/fee": "Fee tier",
      "/portfolio/api-key": "API keys",
      "/portfolio/orders": "Orders",
      "/portfolio/positions": "Positions",
      "/portfolio/setting": "Settings",
      "/markets": "Markets",
    } as Record<string, string>;
  }, []);

  useEffect(() => {
    let title = titleMap[pathname];

    const symbol = params.symbol;
    if (pathname.startsWith("/perp/") && symbol) {
      title = generatePageTitle(formatSymbol(symbol));
    }

    document.title = generatePageTitle(title);
  }, [titleMap, params, pathname]);

  return <Outlet />;
}
