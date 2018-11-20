const Discord = reqiure('discord.js');
const client = Discord.Client();


client.on('guildMemberAdd', member=> {
    member.addRole(member.guild.roles.find("name","Member"));
    });



client.login(process.env.BOT_TOKEN2)
