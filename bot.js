const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("527031704209063936")
setInterval(function() {
channel.send(`فلوووس الامير مهمل اويليء يه يه يه يه يه`);
}, 30)
})

client.login(process.env.BOT_TOKEN);
