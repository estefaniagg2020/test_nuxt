import { useData, useVars } from "@/plugins/00.load-site-config.server";

export const useConfigSite = () => {
  const appConfig = useAppConfig();
  const vars = useVars();
  const data = useData();

  const urlSite = vars?.value.urlSite;
  const staticsUrl = vars?.value.staticsUrl;
  

  return {
    urlSite,
    staticsUrl,   
  };
};
