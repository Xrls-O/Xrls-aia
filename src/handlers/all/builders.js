const { REST, Routes } = require('discord.js');
const fs = require('fs');

module.exports = (client) => {
    client.handleCommands = async () => {
        const commandFiles = fs.readdirSync('./src/slashCommands/generales').filter(file => file.endsWith('.js'));

        const commands = [];
        for (const file of commandFiles) {
            const command = require(`../../slashCommands/generales/${file}`);
            commands.push(command.data.toJSON());
            client.commands.set(command.data.name, command);
        }

        const rest = new REST({ version: '10' }).setToken(process.env.TOKEN);

        (async () => {
            try {
                console.log('Recargando comandos de aplicación (/)');

                await rest.put(
                    Routes.applicationCommands(process.env.CLIENT_ID),
                    { body: commands },
                );

                console.log('Comandos recargados exitosamente');
            } catch (error) {
                console.error(error);
            }
        })();
    };
};
