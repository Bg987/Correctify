const http = require("http");
const https = require("https");

async function ping() {
    setInterval(() => {
        http.get("http://localhost:5000/status", (res) => {
            console.log(`Pinged. Status code: ${res.statusCode}`);
        }).on("error", (e) => {
            console.error(`Ping failed: ${e.message}`);
        });
    }, 2* 1000); // every 11 minutes

}

module.exports = { ping };