const superagent = require('superagent');
const Discord = require("discord.js");

module.exports = {
    name: "cat",
    description: "Koirakuvia",
    run: async (client, message, args) => {
      
    const { body } = await superagent.get('https://aws.random.cat/meow');
    const dogembed = new Discord.RichEmbed()
    .setFooter(`Can't see image? `+ body.url)
    .setTitle("Meoow")
    .setColor("#0099ff")
    .setImage(body.file)
    .setTimestamp()
    .setFooter('Made by Invet Development');
  
    message.channel.send(dogembed)
    }
}
