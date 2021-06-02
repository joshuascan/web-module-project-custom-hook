import useLocalStorage from "./useLocalStorage";

const useDarkMode = () => {
  const [enabledState, setEnabledState] = useLocalStorage("dark");
  const prefersDarkMode = usePrefersDarkMode();
  const enabled =
    typeof enabledState !== "undefined" ? enabledState : prefersDarkMode;

  return [enabled, setEnabledState];
};

const useMedia = (queries, values, defaultValue) => {
  const mediaQueryLists = queries.map((q) => window.matchMedia(q));
  const getValue = () => {
    const index = mediaQueryLists.findIndex((mql) => mql.matches);
    return typeof values[index] !== "undefined" ? values[index] : defaultValue;
  };
  return getValue();
};

const usePrefersDarkMode = () => {
  return useMedia(["(prefers-color-scheme: dark)"], [true], false);
};

export default useDarkMode;
