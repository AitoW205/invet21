const superagent = require('superagent');
const Discord = require("discord.js");

module.exports = {
    name: "dog",
    description: "Koirakuvia",
    run: async (client, message, args) => {
      
    const { body } = await superagent.get('https://random.dog/woof.json');
    const dogembed = new Discord.RichEmbed()
    .setFooter(`Can't see image? `+ body.url)
    .setTitle("Woof! Woof! 🐶")
    .setColor("#0099ff")
    .setImage(body.url)
    .setTimestamp()
    .setFooter('Drivet Development', 'https://cdn.drivet.tk/web-assets/images/drivetlogo.png');
  
    message.channel.send(dogembed)
    }
}