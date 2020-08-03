const puppeteer = require('puppeteer');

const BASE_URL = 'https://www.linkedin.com/';
const NET_URL = 'https://www.linkedin.com/mynetwork/';

const linkedin = {
    browser: null,
    page: null,

    // Initialinzing the browser and going to linkedin home page
    initialize: async () => {
        linkedin.browser = await puppeteer.launch({
            headless: false
        });

        linkedin.page = await linkedin.browser.newPage();

        linkedin.page.setViewport({
            width: 1200,
            height: 800
        });
    },

    // Login to user Account
    login: async (username, password) => {
        await linkedin.page.goto(BASE_URL, { waitUntil: 'networkidle2' });

        await linkedin.page.waitFor(1000);

        //Writing the username and password
        await linkedin.page.type('input[name="session_key"]', username, { delay: 50 });
        await linkedin.page.type('input[name="session_password"]', password, { delay: 50 });

        //Click on the login url button
        let loginButton = await linkedin.page.$x('//button[contains(text(), "Sign in")]');
        await loginButton[0].click();

        await linkedin.page.waitFor(7000);

        //check if it is connected 
        await linkedin.page.waitFor('div[data-control-name="identity_welcome_message"]');

        //check if aside messaging is open
        let asideMsg = await linkedin.page.waitFor('aside > div[class="msg-overlay-list-bubble  msg-overlay-list-bubble--expanded mh4"]');

        if (asideMsg) { // If it is opened it will close
            let headerAside = await linkedin.page.waitFor('aside > div[class="msg-overlay-list-bubble  msg-overlay-list-bubble--expanded mh4"] > header');
            await headerAside.click();
        }

    },

    // Connect to people
    connectionProcess: async () => {
        await linkedin.page.goto(NET_URL, { waitUntil: 'networkidle2' });

        await linkedin.page.waitFor(5000);

        for (let i = 0; i < 5; i++) { //Here change how many time it will scrolldown, it will change the total of the users to connect.

            await linkedin.page.evaluate(_ => {
                window.scrollBy(0, window.innerHeight);
            });

            await linkedin.page.waitFor(3000);
        }

        await linkedin.page.waitFor(7000);

        //Searching for the section "More Suggestions for you" 
        let person = await linkedin.page.$$('div[data-launchpad-scroll-anchor="pymk"] > section > section > ul > li > div > section > div[class="discover-entity-type-card__bottom-container"] > footer > button');

        for (let x = 0; x < person.length; x++) {
            let eachPerson = person[x];

            /* Click on the post */
            await eachPerson.click();
            // let modalFullInv = await linkedin.page.$$('div[aria-labelledby="ip-fuse-limit-alert__header"]');
            // if (modalFullInv) {
            //     break;
            // }
            await linkedin.page.waitFor(3000);
        }

        await linkedin.page.close();
        await linkedin.browser.close();

        debugger;
    }

};

module.exports = linkedin;