const lkin = require('./linkedin');

(async () => {
    await lkin.initialize();

    await lkin.login('youUsername', 'yourPassword');

    await lkin.connectionProcess();

    debugger;
})();