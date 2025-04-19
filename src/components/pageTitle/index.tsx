import { useEffect } from "react";
import { formatSymbol, generatePageTitle } from "../../utils";
import { Outlet, useParams } from "react-router";
import { PageTitleMap, PathEnum } from "../../constant";
import { usePathWithoutLang } from "../../hooks/usePathWithoutLang";

export default function PageTitle() {
  const params = useParams();

  const path = usePathWithoutLang();

  useEffect(() => {
    let title = PageTitleMap[path as keyof typeof PageTitleMap];

    const symbol = params.symbol;
    if (path.startsWith(PathEnum.Perp) && symbol) {
      title = generatePageTitle(formatSymbol(symbol));
    }

    document.title = generatePageTitle(title);
  }, [params, path]);

  return <Outlet />;
}
