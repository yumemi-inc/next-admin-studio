export default {
  files: ["*"],
  helpers: [
    {
      // model名をパスから抜き出す
      extractModel: (_context, value) => {
        const match = value.match(/model\/([^\/]+)\//);
        return match ? match[1] : "";
      },
    },
  ],
};
