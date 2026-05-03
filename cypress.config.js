const { defineConfig } = require("cypress");
module.exports = defineConfig({
  video: true,
  projectId: "v2122y",
  e2e: {
    baseUrl: "https://dev.card4games.com/en",
    viewportHeight:900,
    viewportWidth:1440,
  },
  env: {
    email: "vilalo@fxzig.com",
    password: "Shady112200#"
  }
  
});
