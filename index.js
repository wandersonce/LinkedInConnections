const lkin = require('./linkedin');

(async () => {
    await lkin.initialize();

    await lkin.login('yourUsername', 'yourPassword');

    await lkin.connectionProcess();

    debugger;
})();