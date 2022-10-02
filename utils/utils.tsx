export const formatArray = (item: any[]) => {
  return <span>{item.join(", ")}</span>;
};

export const formatString = (string: string, maxLength: number) =>
  string.length > maxLength ? `${string.substring(0, maxLength)} …` : string;

export const colors = {
  lilla: "#a350a3",
  hotPink: "#c1436d",
  dark: "#161137",
  light: "#f3f2f0",
};
