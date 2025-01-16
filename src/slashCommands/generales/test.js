module.exports = {
    name: 'test',
    description: 'Comando de prueba',
    async execute(interaction) {
        await interaction.reply('¡El bot está funcionando correctamente!');
    },
};
