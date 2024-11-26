export const artworkPathMapping = {
  pathToId: (path: string) => path.match(/\/artworks\/(.+)/)?.[1],
  idToPath: (id: string) => `/artworks/${id}`,
  indexPath: "/artworks",
};
