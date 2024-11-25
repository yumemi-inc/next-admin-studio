export const administratorPathMapping = {
  pathToId: (path: string) => path.match(/\/administrators\/(.+)/)?.[1],
  idToPath: (id: string) => `/administrators/${id}`,
  indexPath: "/administrators",
};
