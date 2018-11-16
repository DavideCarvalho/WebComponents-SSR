require("@skatejs/ssr/register");
const util = require('util')
const render = require("@skatejs/ssr");
const Hapi = require("hapi");
const fs = require("fs");
const { define } = require('hybrids');
const server = new Hapi.Server({ port: 3000, host: 'localhost', routes: { cors: true } });
//Home route

server.route({
  method: 'GET',
  path: '/',
  handler: function (request, h) {
    return 'hello world';
  }
});

server.route({
  method: "GET",
  path: "/hello",
  handler(request, response) {
    const hello = `./pages/hello.js`;
    const Hello = fs.existsSync(hello)
      ? require(hello)
      : require("./pages/404.js");
    return render(Object.assign(new Hello(), request.params));
  }
});

server.route({
  method: "GET",
  path: "/skate",
  handler(request, response) {
    const skate = `./pages/skate.js`;
    console.log(skate);
    const Skate = fs.existsSync(skate)
      ? require(skate)
      : require("./pages/404.js");
    return render(Object.assign(new Skate(), request.query));
  }
});

server.route({
  method: "GET",
  path: "/hybrids",
  handler(request, response) {
    const hybrids = `./pages/hybrids.js`;
    const Hybrids = fs.existsSync(hybrids)
      ? require(hybrids)
      : require("./pages/404.js");
    return render(Object.assign(new Hybrids(), request.params));
  }
});
server.route({
  method: "GET",
  path: "/polymer",
  handler(request, response) {
    const polymer = `./pages/polymer.js`;
    const Polymer = fs.existsSync(polymer)
      ? require(polymer)
      : require("./pages/404.js");
    return render(Object.assign(new Polymer(), request.params));
  }
});

// Start Server
server.start(err => {
    if (err) {
        // Fancy error handling here
        console.error(err);
        throw err;
    }
    console.log(`Server started at ${ server.info.uri }`);
});