const lkin = require('./linkedin');

(async () => {
  await lkin.initialize();

  await lkin.login('YOUR LOGIN', 'YOUR PASSWORD');

  await lkin.connectionProcess();

  debugger;
})();
