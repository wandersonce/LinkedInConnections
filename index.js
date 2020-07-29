const lkin = require('./linkedin');

(async () => {
    await lkin.initialize();

    await lkin.login('wandersonce1@hotmail.com', '100492');

    await lkin.connectionProcess();

    debugger;
})();