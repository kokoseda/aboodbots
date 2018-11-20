const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', async() => {
var server = "486308710428311583"; // ايدي السررفر
var channel = "486335542925983744";//ايدي الروم
    setInterval(()=>{
    client.guilds.get(server).channels.get(channel).send('#daily')
    },8.64e+7);
})

client.on('message', message => {
if(message.content.startsWith('c1')) {
if(message.author.id !== "314135031029170197") return;
var args = message.content.split(' ').slice(1).join(' ');
message.channel.send(args);
}
});

client.login(process.env.BOT_TOKEN)
