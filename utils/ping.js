//const http = require("http");
const https = require("https");

async function ping() {
    setInterval(() => {
        https.get("https://correctify-yp9u.onrender.com/status", (res) => {
            console.log(`Pinged. Status code: ${res.statusCode}`);
        }).on("error", (e) => {
            console.error(`Ping failed: ${e.message}`);
        });
    }, 11*60*1000); // every 11 minutes

}

module.exports = { ping };
