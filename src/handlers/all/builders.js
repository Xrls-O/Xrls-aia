const fs = require('fs');

module.exports = (client) => {
    client.commands = new Map();
    const commandFiles = fs.readdirSync('./src/slashCommands/generales').filter(file => file.endsWith('.js'));

    for (const file of commandFiles) {
        const command = require(`../slashCommands/generales/${file}`);
        client.commands.set(command.name, command);
    }
};
