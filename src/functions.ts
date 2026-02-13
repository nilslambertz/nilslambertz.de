export const getAnchorIdByTitle = (title: string) =>
  title.replace(/ |\./g, "-");
