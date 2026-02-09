const url = require('url');

const myURL = new URL('https://www.example.com:8080/path/name?search=query#hash');
console.log("Protocol:", myURL.protocol);
console.log("Hostname:", myURL.hostname);
console.log("Port:", myURL.port);
console.log("Pathname:", myURL.pathname);
console.log("Search Params:", myURL.searchParams.get("search")
);
console.log("Hash:", myURL.hash);