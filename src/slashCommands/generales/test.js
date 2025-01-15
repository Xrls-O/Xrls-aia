const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('test')
        .setDescription('Un comando de prueba'),
    async execute(interaction) {
        await interaction.reply('¡Prueba exitosa!');
    },
};
