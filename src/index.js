const { Client, GatewayIntentBits, Collection } = require('discord.js');
const fs = require('fs');
const path = require('path');
require('dotenv').config();

// EnumResolvers para constantes
const EnumResolvers = {
    CWD: path.resolve(__dirname),
};

// Inicialización del cliente Discord con intenciones
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
    ],
});

client.commands = new Collection();

const handlers = ['builder', 'eventos'];
handlers.forEach(handler => {
    require(`./handlers/all/${handler}`)(client);
});

client.once('ready', () => {
    console.log(`¡Listo! Conectado como ${client.user.tag}`);
    // Inicializar intención en la nube aquí
    initializeCloudIntent();
});

client.on('messageCreate', message => {
    if (message.content === '!ping') {
        message.channel.send('Pong!');
    }
});

function initializeCloudIntent() {
    // Lógica para inicializar la intención en la nube
    console.log('Intención en la nube inicializada');
}

client.login(process.env.TOKEN);
