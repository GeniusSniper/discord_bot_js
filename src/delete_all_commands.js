require('dotenv').config(); //initializes dotenv
const { REST, Routes } = require('discord.js');

const rest = new REST().setToken(process.env.DISCORD_TOKEN);
const clientId = process.env.DISCROD_CLIENT_ID;
const guildId = process.env.DISCORD_TEST_GUILD_ID;
// ...

// // for guild-based commands
// rest.delete(Routes.applicationGuildCommand(clientId, guildId, 'commandId'))
//     .then(() => console.log('Successfully deleted guild command'))
//     .catch(console.error);

// // for global commands
// rest.delete(Routes.applicationCommand(clientId, 'commandId'))
//     .then(() => console.log('Successfully deleted application command'))
//     .catch(console.error);

// for guild-based commands
rest.put(Routes.applicationGuildCommands(clientId, guildId), { body: [] })
    .then(() => console.log('Successfully deleted all guild commands.'))
    .catch(console.error);

// for global commands
rest.put(Routes.applicationCommands(clientId), { body: [] })
    .then(() => console.log('Successfully deleted all application commands.'))
    .catch(console.error);