require('dotenv').config();
const imap = require('imap-simple');
const {email} = require('./conf.js');

(async function () {
    try {
        const client = await imap.connect(email);

        await client.openBox('INBOX');

        const searchCriteria = [['SINCE', new Date(Date.now() - 24 * 3600 * 1000)]];

        const options = {
            markseen: false,
            bodies: ['HEADER.FIELDS (SUBJECT DATE)']
        };

        const results = await client.search(searchCriteria, options);

        console.log(results.map(r => r.parts.map(p => JSON.stringify(p.body, null, 4))));
    } catch (e) {
        console.error(e);
    } finally {

    }
})();