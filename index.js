const Discord = require('discord.js');
const client = new Discord.Client()
const footer = 'Welcome Bot | By vedu1012.';

const prefix = '!';

client.on("ready", () => {
    console.log('I am back from the dead!');
    client.user.setActivity('Welcoming people.')
})

client.on("guildMemberAdd", function(message) {

    let guild = message.guild;
    let message = message;
    let membercount = client.users.size;

    const embed = new Discord.RichEmbed()
    .setColor(0xffffff)
    .setTitle('Air Europa - Welcome')
    .setDescription(`Hello ${member}, welcome to AirEuropa! Have a great time here.`)
    .setThumbnail(member.user.avatarURL)
    .setFooter(footer)

    member.guild.channels.find('name', 'welcome').send({ embed: embed });
});

client.login('NjAyOTA1Nzc1NDQ2MTYzNDY2.XTXtFw.hBO37naJVPEEPNiy8Q08SDgenB0');