const fs = require('fs');

module.exports = (client) => {
    client.handleEvents = async () => {
        const eventFolders = fs.readdirSync('./src/eventos');
        for (const folder of eventFolders) {
            const eventFiles = fs.readdirSync(`./src/eventos/${folder}`).filter(file => file.endsWith('.js'));
            for (const file of eventFiles) {
                const event = require(`../../eventos/${folder}/${file}`);
                if (event.once) {
                    client.once(event.name, (...args) => event.execute(...args));
                } else {
                    client.on(event.name, (...args) => event.execute(...args));
                }
            }
        }
    };
};
