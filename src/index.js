const { Client, Intents } = require('discord.js');
const fs = require('fs');
const config = require('./json/client/bot.json');
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.once('ready', () => {
    console.log('Ready!');
});

client.on('interactionCreate', async interaction => {
    if (!interaction.isCommand()) return;

    const command = client.commands.get(interaction.commandName);

    if (!command) return;

    try {
        await command.execute(interaction);
    } catch (error) {
        console.error(error);
        await interaction.reply({ content: 'Hubo un error ejecutando este comando!', ephemeral: true });
    }
});

require('./handlers/all/builder')(client);
require('./handlers/all/eventos')(client);

client.login(config.token);
