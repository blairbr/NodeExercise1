"use strict";
const http = require("http");

http
  .createServer((req, res) => {
    res.writeHead(200, { "content-type": "text/plain" });
    res.write(randomQuoteGenerator());
    res.end();
  })
  .listen(3000);

function randomQuoteGenerator() {
  const quotes = [
    "Kites rise highest against the wind - not with it.",
    "Life is very interesting... in the end, some of your greatest pains become your greatest strengths.",
    "A hero is an ordinary individual who finds the strength to persevere and endure in spite of overwhelming obstacles.",
  ];
  let randomNum = Math.floor(Math.random() * 3 + 1);
  return quotes[randomNum];
}
