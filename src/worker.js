/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run "npm run dev" in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run "npm run deploy" to publish your worker
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

require('dotenv').config(); //initializes dotenv
const Discord = require('discord.js'); //imports discord.js

const client = new Discord.Client({ intents: 8}); //creates new client

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

//this line must be at the very end
client.login(process.env.DISCORD_TOKEN); //signs the bot in with token