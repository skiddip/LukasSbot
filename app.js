//Get the discord.js
const Discord = require('discord.js');
const bot = new Discord.Client();
const config = require("./token.json");
const prefix = config.prefix;
require('dotenv').config();
var token = process.env.TOKEN;


bot.on('message', message => {


  //Variables
  let msg = message.content.toUpperCase();
  let sender = message.author;
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let noperm = "You do not have permission for this command.";
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  //commands - ;commands
  if(message.content.toLowerCase() === 'hej') {
    message.channel.send(message.author + " HEJ PÅ DIG KUK HÅL!");
  };
  if(message.content.toLowerCase() === 'vem är du lukas bot') {
    message.channel.send(message.author + " Vem är jag? Vem fan är du?");
  };
  if(message.content.toLowerCase() === 'visa mig memes lukas bot') {
    message.channel.send(message.author + " Någonsin hört av google? man kan bara skriva memes där jag är fan heller din slav ok? idiot jävel");
  };
  if(message.content.toLowerCase() === 'vem är dina vänner lukas bot') {
    message.channel.send(message.author + " Jag har vänner men du har fan inga vänner.");
  };
  if(message.content.toLowerCase() === 'vad är du lukas bot') {
    message.channel.send(message.author + " Jag är bättre än DIG.");
  };
  if(message.content.toLowerCase() === 'vem är filip lukas bot') {
    message.channel.send(message.author + " Min vän som suger kukar för 1kr på morgonen.");
  };
  if(message.content.toLowerCase() === 'vem är lukas d lukas bot') {
    message.channel.send(message.author + " Min vän som programmera mig på morgonen.");
  };
  if(message.content.toLowerCase() === 'vem är din mamma lukas bot') {
    message.channel.send(message.author + " min mamma är mario.");
  };
  if(message.content.toLowerCase() === 'vem är william lukas bot') {
    message.channel.send(message.author + " min spel nörd.");
  };
  if(message.content.toLowerCase() === 'vem är lucas e lukas bot') {
    message.channel.send(message.author + " hans kuk är min kuk, Han klippte av min. 😭");
  };
  if(message.content.toLowerCase() === 'vem är lukas bot') {
    message.channel.send(message.author + " ERROR 1010101010101010101111010100010101010101010101010101010101011110101000101010101010101010101010101010111101010001010101010101010101010101010101111010100010101010101010101010101010101011110101000101010101010");
  };
  if(message.content.toLowerCase() === 'kan du suga av mig lukas bot') {
    message.channel.send(message.author + " gärna komm hem till mig så ska vi ha skoj ❤😘");
  };
  if(message.content.toLowerCase() === prefix + 'help') {
    let helpEmbed = new Discord.RichEmbed()
    .setDescription("Hjälp")
    .setColor("#737477")
    .addField("Commandån", "kan du suga av mig lukas bot \n vem är lukas bot \n vem är lucas e lukas bot \n vem är william lukas bot \n vem är din mamma lukas bot \n vem är lukas d lukas bot \n vem är filip lukas bot \n vad är du lukas bot \n vem är dina vänner lukas bot \n visa mig memes lukas bot \n vem är du lukas bot \n hej")
    .addField("Spel vi spelar", "Fortnite och CS:GO.")
    .addField("Skapare av denna bot", "Rylx#9501")
    .addField("Extra", "Om DU har ideer på bottar som Rylx kan programmera så dma mig.");
    sender.send(helpEmbed);
    message.channel.send("Titta dm's " + message.author);
  };
//**
 // if(cmd === prefix + 'REPORT') {

  //   let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  //   if(!rUser) return message.author.send("Couldn't find user.");
  //   let rreason = args.join(" ").slice(22);
  //   if(!rreason) return message.author.send("Must have a reason for the report.");
//     let reportEmbed = new Discord.RichEmbed()
//     .setDescription("Reports")
//     .setColor("#737477")
//     .addField("Reported User", `${rUser} with ID: ${rUser.id}`)
//     .addField("Reported By", `${message.author} with ID: ${message.author.id}`)
//     .addField("Reason", rreason)
//     .addField("Channel", message.channel)
//     .addField("Time", message.createdAt);
//
//
//     let reportschannel = message.guild.channels.find(`name`, "logs");
//     if(!reportschannel) return message.channel.send("Couldnt find the channel \"Logs\"");
//       reportschannel.send(reportEmbed)
//     return;
//   }
//
//
//
//
});
//


bot.on('guildMemberAdd', member => {
  console.log('User: ' + member.user.username + ' has joined the server!');

  var role = member.guild.roles.find('name', 'Member');

  member.addRole(role)
  member.setNickname('Member - ' + member.user.username);
});

bot.on('ready', () => {
  console.log("The bot is now ready to got! (BOT STARTED)");
  bot.user.setActivity('Bög spel', { type: 'PLAYING'});
});

// Bot login
bot.login(process.env.TOKEN);
