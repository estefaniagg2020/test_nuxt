


const processEnv = typeof process !== "undefined" && process?.env != undefined ? process.env : {};
const media = processEnv?.NUXT_PUBLIC_MEDIA ?? "media1";
const env = processEnv?.NUXT_PUBLIC_ENV ?? "dev";
const hash = processEnv?.NUXT_HASH_FILES ?? "[contenthash]";

const data = () => {
  return {
    name: "nameProject"
  }
}


const vars = () => {
  return {
    name: "nameProject",
    urlSite: "url1",
    staticsUrl: "www.staticurl.com"
  }
}


export const useData = () => useState<any>("data", () => data());
export const useVars = () => useState<any>("vars", () => vars());
export const useEnv = () => useState<string>("env", () => env);
export const useHashFiles = () => useState<string>("hashFiles", () => hash);

export default defineNuxtPlugin((nuxtApp) => {
  const data = useData();
  const env = useEnv();
  const vars = useVars();
  const hashFiles = useHashFiles();
});
