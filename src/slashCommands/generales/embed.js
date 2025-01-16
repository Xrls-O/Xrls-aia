module.exports = {
    name: 'embed',
    description: 'Envía un mensaje embed',
    async execute(interaction) {
        const embed = {
            color: 0x0099ff,
            title: 'Título del Embed',
            description: 'Descripción del Embed',
            fields: [
                {
                    name: 'Campo 1',
                    value: 'Este es el valor del campo 1',
                    inline: true,
                },
                {
                    name: 'Campo 2',
                    value: 'Este es el valor del campo 2',
                    inline: true,
                },
            ],
            timestamp: new Date(),
            footer: {
                text: 'Texto del pie de página',
            },
        };

        await interaction.reply({ embeds: [embed] });
    },
};
