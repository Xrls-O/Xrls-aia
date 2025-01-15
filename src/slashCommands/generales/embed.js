const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('embed')
        .setDescription('Envía un mensaje incrustado'),
    async execute(interaction) {
        await interaction.reply({ content: 'Aquí tienes un embed!', embeds: [{ title: 'Título del Embed', description: 'Descripción del Embed' }] });
    },
};
