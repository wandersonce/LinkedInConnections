# LinkedInConnections
#### A bot that will connect you to new people on Linkedin, increasing your network.

### :warning: This BOT will work manipulating the browser HTML and acting on that. LinkedIn can check the abused use of that and block you after some time. I used for testing propose many times and the only thing that happened was I reach the limit of connections in one day.



<b>:arrow_down_small: Install  dependencies:</b> <br>
On your terminal navigate to the repo folder and execute: <br>
`` npm install `` or `` yarn install ``

<b>:closed_lock_with_key: To change your username and passowrd go to ``index.js`` and look for the line with the code 
``await lkin.login('yourUsername', 'yourPassword');`` and change it with your credentials.</b>

<b>:heavy_exclamation_mark: This Bot will work when you start your debbug on your IDE.</b><br>
<b> :diamonds: The right configuration to debbug that I used on VS Code is:</b><br>
```
{
    "version": "0.2.0",
    "configurations": [
        {
            "name": "Launch Program",
            "program": "${workspaceFolder}/index.js",
            "request": "launch",
            "skipFiles": [
                "<node_internals>/**"
            ],
            "type": "pwa-node"
        }
    ]
}
```
<br>
and launch Program.

#### :heavy_plus_sign: The quantity that you will be connected is based on how many times the scroll will go down, and it can be changed changing the 'for' loop on the ``linkedin.js``, on the following code:

```
        for (let i = 0; i < 5; i++) { //Here change how many time it will scrolldown, it will change the total of the users to connect.

            await linkedin.page.evaluate(_ => {
                window.scrollBy(0, window.innerHeight);
            });

            await linkedin.page.waitFor(3000);
        }
```

## Contributing

Thank you for being interested on making this code better. Everyone is welcome to help improving this project with some new features, 
bug fixes and performance issues. 
Please take a little bit of your time to read our guides, so this process can be faster and easier.
