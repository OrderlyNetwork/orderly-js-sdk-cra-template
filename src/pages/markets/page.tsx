import { Scaffold } from "@orderly.network/ui-scaffold";
import { MarketsHomePage } from "@orderly.network/markets";
import config from "../../config";
import { useNav } from "../../hooks/useNav";

export default function MarketsPage() {
  const { onRouteChange } = useNav();

  return (
    <Scaffold
      mainNavProps={{
        ...config.scaffold.mainNavProps,
        initialMenu: "/markets",
      }}
      footerProps={config.scaffold.footerProps}
      routerAdapter={{
        onRouteChange,
      }}
    >
      <MarketsHomePage />
    </Scaffold>
  );
}
