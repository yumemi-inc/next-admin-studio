export const artistPathMapping = {
  pathToId: (path: string) => path.match(/\/artists\/(.+)/)?.[1],
  idToPath: (id: string) => `/artists/${id}`,
  indexPath: "/artists",
};
