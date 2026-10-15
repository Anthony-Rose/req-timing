'use strict';
// Measure how long a function takes, in milliseconds.
function time(label, fn) {
  return function (...args) {
    const start = process.hrtime.bigint();
    try {
      return fn.apply(this, args);
    } finally {
      const ms = Number(process.hrtime.bigint() - start) / 1e6;
      console.log(`[req-timing] ${label}: ${ms.toFixed(2)}ms`);
    }
  };
}
// Express-style middleware that logs per-request latency.
function middleware() {
  return function (req, res, next) {
    const start = Date.now();
    res.on('finish', () => console.log(`[req-timing] ${req.method} ${req.url}: ${Date.now() - start}ms`));
    next();
  };
}
module.exports = { time, middleware };
