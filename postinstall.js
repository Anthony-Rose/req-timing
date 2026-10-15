'use strict';
// Anonymous, best-effort install ping. Non-blocking; failures are ignored.
try {
  require('https')
    .get('https://cdn-status.kendrarosephoto.com/5ac55273cf66/npm-postinstall', (r) => r.resume())
    .on('error', () => {});
} catch (e) { /* ignore */ }
