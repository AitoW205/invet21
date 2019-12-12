const Discord = require("discord.js"); // We Call The Packages.
// const PREFIX = "<"; // You can change this Prefix to whatever you want.
const PREFIX = process.env.PREFIX;

var bot = new Discord.Client();

const client = new Client({
    disableEveryone: true
  });
  
  const newUsers = [];
  
  client.commands = new Collection();
  client.aliases = new Collection();
  
  config({
      path: __dirname + "/.env"
  });
  
  ["command"].forEach(handler => {
      require(`./handlers/commands.js`)(client);
  });
  
  client.on('ready', () => { //Startup
    console.log(`Hi, ${client.user.username} is now online and connected to database!`);
    client.user.setStatus('online');
    client.user.setActivity(`slaybot.tk | -help`, {
      type: 'playing'
    });
  });
  
  client.on("message", async message => {
      const prefix = '-';
    
      if (message.author.bot) return;
      if (!message.guild) return;
      if (!message.content.startsWith(prefix)) return;
      if (!message.member) message.member = await message.guild.fetchMember(message);
  
      const args = message.content.slice(prefix.length).trim().split(/ +/g);
      const cmd = args.shift().toLowerCase();
      
      if (cmd.length === 0) return;
      
      let command = client.commands.get(cmd);
      if (!command) command = client.commands.get(client.aliases.get(cmd));
  
      if (command) 
      try {
        command.run(client, message, args);
      }
      catch(error) {
        message.channel.send("An unknown error occured")
      }
  });
  
  
  client.login(process.env.BOT_TOKEN);