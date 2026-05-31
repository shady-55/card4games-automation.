const { defineConfig } = require("cypress");
module.exports = defineConfig({
  video: true,
  projectId: "v2122y",
  e2e: {
    baseUrl: "https://dev.card4games.com/en",
    viewportHeight:900,
    viewportWidth:1440,
    setupNodeEvents(on, config) {
      const http = require("http");
      const server = http.createServer((req, res) => {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
        res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
        
        if (req.method === 'OPTIONS') {
          res.writeHead(200);
          res.end();
          return;
        }

        if (req.method === 'POST') {
          let body = '';
          req.on('data', chunk => { body += chunk; });
          req.on('end', () => {
            console.log(body);
            res.writeHead(200);
            res.end();
          });
        } else {
          res.writeHead(404);
          res.end();
        }
      });

      server.listen(22123, '127.0.0.1');

      return config;
    }
  },
  env: {
    email: "vilalo@fxzig.com",
    password: "Shady112200#"
  }
  
});
