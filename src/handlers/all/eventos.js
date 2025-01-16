const fs = require('fs');

module.exports = (client) => {
    const eventFiles = fs.readdirSync('./src/eventos/client').filter(file => file.endsWith('.js'));

    for (const file of eventFiles) {
        const eventName = file.split('.')[0];
        const event = require(`../eventos/client/${file}`);
        client.on(eventName, event.bind(null, client));
    }
};
